---
sidebar_position: 2
title: Working with Jetson Orin
slug: /MAX9296-GMSL-Deser-Module/Jetson-Orin
id: MAX9296-GMSL-Deser-Module-Jetson-Guide
product_family:
  - GMSL
product_series:
  - GMSL-Deser-Board
product_model:
  - MAX9296-GMSL-Deser-Module
---

import connectorin from './images/MAX9296-GMSL-DESER-MODULE-details-7.webp';
import connectpower from './images/MAX9296-GMSL-DESER-MODULE-5.webp';
import cfgsetting from './images/MAX9296-GMSL-DESER-MODULE-6.webp';

# Working with Jetson Orin

This module is designed based on the Jetson Orin form factor, allowing users to directly assemble it onto the Jetson Orin Nano/NX Developer Kits.

## Hardware Connection

<div style={{maxWidth: '800px', margin: '0 auto' }}>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tr>
      <td rowSpan="2" style={{ width: '65%', padding: '8px' }}>
        <img src={connectorin} alt="Connect to Jetson Orin Developer Kit" />
      </td>
      <td style={{ padding: '8px' }}>
        <img src={connectpower} alt="Power Wiring" />
      </td>
    </tr>
    <tr>
      <td style={{ padding: '8px' }}>
        <img src={cfgsetting} alt="CFG Configuration" />
      </td>
    </tr>
  </table>
</div>

- As shown, connect the deserializer board's CSI0 interface to the Jetson Orin mainboard's Cam0 interface using the provided cable
  :::caution[CSI Interface Compatibility]
  The CSI pin definitions for the CAM0 and CAM1 interfaces on the NVIDIA Jetson® Orin™ Nano Developer Kit differ in sequence. **Currently, the deserializer board can only be connected to the CAM0 interface.** For details, please refer to the relevant pin definitions and the CAM0/1 interface pinout sequence in the Jetson® Orin™ Developer Kit schematics.
  :::

  :::warning[FPC Cable Length Limitations]
  The 22-Pin FPC ribbon cable lacks precise impedance control. Since high-resolution cameras require high CSI data rates, using shorter FPC cables is recommended:
  - **Dual 8M cameras connected**: Testing confirms support for 5cm cables only.
  - **Single camera connected**: 10cm or 15cm cables can be used.
  :::
- Connect the power cables to the deserializer board's power interface and the 5V & GND pins on the Jetson Orin mainboard's 40PIN header, respectively To ensure the deserializer board receives sufficient power, please connect both 5V pins. External power supply can also be connected
- Connect the GMSL camera(s) to the camera interface(s) on the deserializer board using coaxial cable(s)
- Set the CFG switch to the '0100' position as shown in the diagram (default configuration for ISX031 camera)

## Software Configuration

- The Jetson Orin mainboard needs to be flashed with a corresponding supported Jetson system. Currently, the driver only supports version R35.4.1
  - You can check the current system version using the command: 
    
    ```bash
    cat /etc/nv_tegra_release
    ```

    ![Check System Version](./images/Jetson_Check_Version.webp)

- After powering on the mainboard, open a Terminal, download the driver package, and extract it

  ```bash
  wget https://files.waveshare.com/wiki/MAX9296-GMSL-Camera-Board/MAX9296-GMSL-Camera-Board-Driver.zip
  unzip MAX9296-GMSL-Camera-Board-Driver.zip
  ```

- Use the `cd` command to enter the driver package directory and list the files
  - Enter the corresponding directory based on the camera model used. Here we use ISX031 as an example

    ```bash
    cd MAX9296-GMSL-Camera-Board-Driver
    ls
    cd ONXA_SY.ISX031Fx2_L4TR35.4.1
    cd kernel
    ```

- In the kernel files, the dtb folder contains device tree files supporting multiple mainboard models. We need to use the device tree file that matches the current mainboard model
  - First, you can use the command `sudo dmesg | grep kernel` to check the device tree currently used by the mainboard
  - For example, if the queried device tree file is `tegra234-p3767-0004-p3768-0000-a0`

    ![View Device Tree File](./images/Jetson_Check_dtb.webp)

- Copy the dtb file and Image file of the same model from the driver to the mainboard's `/boot` directory

  ```bash
  sudo cp dtb/tegra234-p3767-0004-p3768-0000-a0.dtb /boot
  sudo cp Image /boot
  ```

- After copying the files, modify the device tree file specified for boot in `extlinux.conf`
  - Duplicate and add another boot label, change the FDT file path within it to the directory of the copied file, and set the new added label as the default boot option
    :::danger[Important Warning]
    Double-check carefully when modifying the boot configuration file. Ensure everything is correct before saving and rebooting. Incorrect configuration may cause the system to fail to boot!
    :::

    ```bash
    sudo vi /boot/extlinux/extlinux.conf
    ```

  - In the vi editor, press <kbd>i</kbd> to enter edit mode, and press <kbd>esc</kbd> to exit edit mode. After exiting edit mode, you can type `:wq!` to save the file and quit.
    ![Modify extilinux File](./images/Jetson_Modifiy_Bootorder.webp)

- After saving the file, reboot the system

## Quick Test

- Check if the camera is properly detected

  ```bash
  sudo dmesg | grep connected
  ```

  If it returns a message like `/dev/video2 is connected`, it indicates the camera has been properly detected.

- You can use the following command to perform a preview test of the camera.
  - The preview test requires an HDMI or DP display to be connected. Please ensure the screen is properly connected and displaying.
  - Note: Change the video device number to the one indicated in the previous detection step.
  - Note: Modify the command parameters according to the resolution supported by the camera.

  ```bash
  gst-launch-1.0 v4l2src device=/dev/video2 ! "video/x-raw, format=(string)UYVY, width=(int)1920, height=(int)1536" ! fpsdisplaysink video-sink=xvimagesink sync=false
  ```