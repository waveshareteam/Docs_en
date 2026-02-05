---
sidebar_position: 5
title: FAQ
slug: /ESP32-S3-RLCD-4.2/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-S3-RLCD-4.2
  - ESP32-S3-RLCD-4.2-EN
---

import Details from '@theme/Details';

# ESP32-S3-RLCD-4.2 FAQ

<Details 
  summary=" Q: What should I pay attention to when replacing the 18650 battery?" 
  className="faq-details" open>
  - A rechargeable 18650 battery is required. Do not apply force to the screen during installation, as it is very fragile.
</Details>

<Details 
  summary=" Q: How to turn the device on and off?" 
  className="faq-details" open>
  - Press and hold the PWR button to turn off, and click the PWR button to turn on.
</Details>

<Details 
  summary=" Q: After downloading the module program, if I try to download it again, sometimes I encounter issues such as inability to connect to the serial port or programming failure?" 
  className="faq-details" open>
  - You can press and hold the BOOT button to power on again, and the module can enter the download mode at this time, which can solve most of the problems that cannot be downloaded.
</Details>

<Details 
  summary=" Q: Failed to set up the VSCode environment?" 
  className="faq-details" open>
  - First consider the network issue, try switching to another network.
</Details>

<Details 
  summary=" Q: Error when compiling an Arduino program?" 
  className="faq-details" open>
  - Check if the Arduino IDE -> Tools is properly configured.

    <div style={{maxWidth: 450}}>
      ![ArduinoToolCfg](./images/ESP32-S3-RLCD-4.2-ArduinoToolCfg.webp)
    </div>
</Details>

<Details 
  summary=" Q: How to handle extremely slow first compilation of the program?" 
  className="faq-details" open>
  - It's normal for the first compilation to be slow, just wait patiently.
</Details>

<Details 
  summary=" Q: What should I do if I can't find the AppData folder?" 
  className="faq-details" open>
  1. Some AppData folders are hidden by default and can be set to be displayed.
  2. English system: Explorer->View->Check "Hidden items".
  3. Chinese system: File Explorer -> View -> Display -> Check "Hidden Items”.
</Details>

<Details summary=" Q: How can I check which COM port I am using?" className="faq-details" open>

  **Windows System**:
  
  1. Through Device Manager: Press the <kbd>Windows</kbd> + <kbd>R</kbd> keys to open the "Run" dialog box; input `devmgmt.msc` and press Enter to open the Device Manager; expand the "Ports (COM and LPT)" section, where all COM ports and their current statuses will be listed.
  2. Using Command Prompt: Open the Command Prompt (CMD), enter the `mode` command, which will display status information for all COM ports.
  3. Check the hardware connection: If you have already connected an external device to the COM port, the device usually occupies a port number, which can be determined by checking the connected hardware.
  
  **Linux System**:
  
  1. Use the `dmesg` command: Open the terminal.
  2. Use the `ls` command: Enter `ls /dev/ttyS*` or `ls /dev/ttyUSB*` to list all serial port devices.
  3. Use the `setserial` command: Enter `setserial -g /dev/ttyS*` to view the configuration information of all serial port devices.
</Details>

<Details 
  summary=" Q: How to use SquareLine Studio to design interfaces?" className="faq-details" open>
  - Please refer to **[SquareLine Studio Tutorial](https://www.waveshare.com/wiki/Waveshare_SquareLine_Studio)**.
</Details>
