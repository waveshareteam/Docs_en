---
sidebar_position: 5
title: FAQ
slug: /ESP32-S3-AMOLED-1.91/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-S3-AMOLED-1.91
  - ESP32-S3-AMOLED-1.91-M
  - ESP32-S3-Touch-AMOLED-1.91
  - ESP32-S3-Touch-AMOLED-1.91-M
---

import Details from '@theme/Details';

# FAQ

<Details 
  summary=" Q: After downloading the module program, if I try to download it again, sometimes I encounter issues such as inability to connect to the serial port or programming failure?" 
  className="faq-details" open>
  - You can hold down the BOOT button, press RESET, then release RESET, and finally release the BOOT button. This will put the module into download mode, which resolves most programming issues.
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

    ![Arduino Configuration](./images/ESP32-S3-AMOLED-1.91-ArduinoToolCfg.webp)
</Details>

<Details 
  summary=" Q: The first program compilation is extremely slow. How to handle it?"
  className="faq-details" open>
  - It's normal for the first compilation to be slow, just wait patiently.
</Details>

<Details 
  summary=" Q: What should I do if I can't find the AppData folder?" 
  className="faq-details" open>
  1. Some AppData folders are hidden by default and can be set to be displayed.
  2. English System: File Explorer -> View -> Check "Hidden items".
  3. Chinese System: File Explorer -> View -> Display -> Check "Hidden Items”.
</Details>

<Details summary=" Q: How can I check which COM port I am using?" className="faq-details" open>

**Windows System**:

1. Through Device Manager: Press <kbd>Windows</kbd> + <kbd>R</kbd> to open the "Run" dialog box. Type `devmgmt.msc` and press Enter to open Device Manager. Expand the "Ports (COM & LPT)" section. All COM ports and their current status will be listed here.
2. Using Command Prompt: Open the Command Prompt (CMD), enter the mode command, which will display status information for all COM ports.
3. Check the hardware connection: If an external device is already connected to a COM port, the device typically occupies a port number. You can identify the port by checking the connected hardware.

**Linux System**:

1. Check using the `dmesg` command: Open the terminal.
2. Check using the `ls` command: Enter `ls /dev/ttyS*` or `ls /dev/ttyUSB*` to list all serial port devices.
3. Use the `setserial` command: Enter `setserial -g /dev/ttyS*` to view the configuration information of all serial port devices.
</Details>

<Details 
  summary=" Q: How to use SquareLine Studio to design interfaces?" className="faq-details" open>
  - Please refer to **[SquareLine Studio Tutorial](https://www.waveshare.com/wiki/Waveshare_SquareLine_Studio)**.
</Details>
