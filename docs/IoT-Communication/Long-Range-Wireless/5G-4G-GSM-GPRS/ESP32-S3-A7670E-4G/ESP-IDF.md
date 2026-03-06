---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-S3-A7670E-4G/ESP-IDF
---

import EspidfTutorialIntro from '@site/docs/ESP32/snippets/EspidfTutorialIntro.mdx';

# Working with ESP-IDF

This chapter contains the following sections. Please read as needed:

- [ESP-IDF Getting Started](#esp-idf-getting-started)
- [Setting Up Development Environment](#setting-up-development-environment)
- [Running Official Espressif Demos](#running-official-espressif-examples)
- [Location and Network Communication Demos](#location-and-network-communication-examples)

## ESP-IDF Getting Started {#esp-idf-getting-started}

<EspidfTutorialIntro />

## Setting Up Development Environment{#setting-up-development-environment}

:::note
The following tutorial is based on the Windows development environment using VS Code.
:::

:::info
ESP-IDF has supported **ESP32-S3** since version **v4.3**. For full functionality and development stability, it is recommended to use **v4.4 or later**, with **v5.1+** preferred for new projects.
:::

Please refer to the **[Waveshare ESP-IDF Getting Started - Section 1 Set Up Environment](/docs/ESP32/Tutorials/ESP-IDF-Tutorials/01-Setup.md)** to complete the ESP-IDF development environment configuration.

## Running Official Espressif Demos{#running-official-espressif-examples}

### Create Demo

- Use the **F1** shortcut key, then enter `ESP-IDF: Show Examples Projects` in the command palette ----------------
  
  <div style={{maxWidth:600}}>
    ![esp32-7670 TO Program 1.webp](./images/esp32-7670-to-program-1.webp)
  </div>

- Select the IDF version that matches your current ESP-IDF environment (it is recommended to choose the version shown in the status bar or the current terminal)
  
  <div style={{maxWidth:600}}>
    ![esp32-7670 TO Program 2.webp](./images/esp32-7670-to-program-2.webp)
  </div>

- Take the Hello world demo as an example
  - ① Select the corresponding demo
  - ② Its readme will state what chip the demo applies to (how to use the demo and the file structure are described below, omitted here)
  - ③Click to create the demo
    
    <div style={{maxWidth:600}}>
      ![esp32-7670 TO Program 3.webp](./images/esp32-7670-to-program-3.webp)
    </div>

- Choose a path to place the demo, ensuring there is no folder with the same name as the demo

  <div style={{maxWidth:600}}>
    ![esp32-7670 TO Program 4.webp](./images/esp32-7670-to-program-4.webp)
  </div>

### Modify COM Port

- This shows the currently used COM port. Click to modify the corresponding COM port.

  <div style={{maxWidth:600}}>
    ![esp32-vscod-18](./images/esp32-vscod-18.webp)
  </div>

- This development board features an onboard USB-to-serial chip, the **CH343**. It may be enumerated as different COM ports on different computers.  
  Please select the COM port based on what is actually shown in the "Device Manager"

  <div style={{maxWidth:600}}>
    ![esp32-vscod-19](./images/esp32-vscod-19.webp)
  </div>

- Select the project or demo to use

  <div style={{maxWidth:600}}>
    ![esp32-vscod-20](./images/esp32-vscod-20.webp)
  </div>

- After modification, the new COM port will be displayed in the status bar

### Select Target Chip

- This shows the currently used target chip. Click to modify

  <div style={{maxWidth:600}}>
    ![esp32-vscod-21](./images/esp32-vscod-21.webp)
  </div>

- Select the project or demo to use

  <div style={{maxWidth:600}}>
    ![esp32-vscod-20](./images/esp32-vscod-20.webp)
  </div>

- Wait a moment after clicking

  <div style={{maxWidth:600}}>
    ![esp32-vscod-22](./images/esp32-vscod-22.webp)
  </div>

- Select the object we need to drive, i.e., the main chip **ESP32-S3**

  <div style={{maxWidth:600}}>
    ![esp32-vscod-23](./images/esp32-vscod-23.webp)
  </div>

- Select the OpenOCD path

  :::tip Note
  This setting only affects the JTAG/OpenOCD debugging functionality. If you are not using debugging, you can simply choose the default path  
  :::

  <div style={{maxWidth:600}}>
    ![esp32-vscod-24](./images/esp32-vscod-24.webp)
  </div>

### Other Status Bars

- ① SDK Configuration Editor: Many ESP-IDF functions and configurations can be modified here
- ② Full Clean: Clears all compiled files
- ③ Compile
- ④ Current Download Method: Default is UART (onboard USB-to-serial download is the normal case)
- ⑤ Flash the Current Firmware: Please do this after a successful Compilation
- ⑥ Open Serial Monitor: Used to view serial output information. If a port occupancy error occurs, please close the software occupying the port or stop the monitor
- ⑦ One-click Button for Compile + Flash + Open Serial Monitor (most commonly used during debugging)

  <div style={{maxWidth:600}}>
    ![esp32-vscod-25](./images/esp32-vscod-25.webp)
  </div>

### Compile, Flash and Serial Port Monitoring

- Click the one-click button for Compile + Flash + Open Serial Monitor introduced above

  <div style={{maxWidth:600}}>
    ![esp32-vscod-29](./images/esp32-vscod-29.webp)
  </div>

- Compilation may take a while, especially the first time.

  <div style={{maxWidth:600}}>
    ![esp32-vscod-26](./images/esp32-vscod-26.webp)
  </div>
  - The first compilation downloads dependencies and generates cache files, which may result in high CPU usage; this is normal
  - Subsequent compilations will be significantly faster

- This development board uses the CH343 as the USB-to-serial chip and features an automatic download circuit. It can enter download mode automatically without pressing any buttons

  <div style={{maxWidth:600}}>
    ![esp32-vscod-27](./images/esp32-vscod-27.webp)
  </div>

- After a successful download, the serial monitor will automatically start. You can see the corresponding information output by the chip, and it will prompt a restart after 10 seconds

  <div style={{maxWidth:600}}>
    ![esp32-vscod-28](./images/esp32-vscod-28.webp)
  </div>

## Location and Network Communication Demos{#location-and-network-communication-examples}

Demo path: ESP32-S3-A-SIM7670X-4G-V2 → ESP-IDF

### GNSS

#### Hardware Connection

- Connect the GNSS ceramic antenna to the GNSS antenna interface and place it in an open outdoor environment for testing (rainy or cloudy weather may affect satellite acquisition). After powering on the module, it typically takes about 1 minute to receive a valid positioning signal.

:::note
Since GNSS satellite acquisition is unstable indoors, it is recommended to test the module or antenna on a balcony, near a window, or in an unobstructed outdoor environment for better positioning results.
:::

#### Software Operation

- After setting up the development environment according to the tutorial above, modify the corresponding COM port and driver configuration, then click to compile and flash the program. After running, you can receive NMEA sentences output by the GNSS via the serial port. Once positioning is successful, information such as latitude and longitude can be obtained, as shown in the figure below:

  <div style={{maxWidth:800}}>
    ![esp32-gnss](./images/esp32-s3-a-sim7670x-4g-gnss.webp)
  </div>

### TCP

#### Hardware Connection

- Connect the 4G antenna to the LTE antenna interface and insert a valid SIM card, ensuring good signal coverage. It is recommended to test in an environment with stable signal.

#### Software Operation

- After configuring the development environment, modify the server address, port number, and APN parameters in the example as needed. Confirm that the COM port is set correctly, then compile and flash the program. After running, you can view the data sent by the module on the TCP server side, as shown in the figure below:

  <div style={{maxWidth:600}}>
    ![esp32-s3-a-sim7670x-4g-tcp](./images/esp32-s3-a-sim7670x-4g-tcp.webp)
  </div>

:::tip Note
This example uses a publicly accessible [TCP test server](https://tcpbin.net/). 
This server is intended for functional verification only. For actual projects, it is recommended to set up your own dedicated server.
:::

### HTTP

#### Hardware Connection

- Connect the 4G antenna and insert a functional data SIM card. Ensure the module successfully registers with the network and obtains an IP address.

#### Software Operation

- After setting up the development environment, modify the URL address and related parameters in the HTTP example as needed. Confirm that the COM port is set correctly. Compile and flash the program, then open the serial monitor to view the HTTP request process and the response data returned by the server, as shown in the figure below:

  <div style={{maxWidth:800}}>
    ![esp32-s3-a-sim7670x-4g-http](./images/esp32-s3-a-sim7670x-4g-http.webp)
  </div>

:::tip Note
This example uses the [Waveshare Cloud Platform's HTTP server](https://www.waveshare.cloud/api/sample-test/). 
This interface is intended for testing and verification only. For actual projects, you can choose or set up your own server as needed.
:::
