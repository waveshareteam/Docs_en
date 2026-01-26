---
sidebar_position: 5
title: Product FAQ
slug: /ESP32-C6-LCD-1.3/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-C6-LCD-1.3
---

import Details from '@theme/Details';

# FAQ

<Details summary=" Q: How to get more library support for the demo?" className="faq-details" open>
A: You can subscribe to this repository and raise an issue to describe your requirements. The engineers will assess your request as soon as possible: [ESP32-display-support](https://github.com/waveshareteam/ESP32-display-support/tree/master)
</Details>

<Details summary=" Q: Why does the flashing fail?" className="faq-details" open>
1. When the serial port is occupied, the flashing will fail. Close the serial port monitor and try to flash again
2. When the ESP32 program crashes, the flashing will fail. In this case, you need to completely power off the development module, hold down BOOT button and power it on again to enter the forced download mode and then flash it. It will not automatically exit the download mode after flashing, so you need to power off and restart again
</Details>

<Details summary=" Q: How can I check which COM port I am using?" className="faq-details" open>
  **Windows System**:
  
  1. Through Device Manager: Press the Windows + R keys to open the "Run" dialog box; input devmgmt.msc and press Enter to open the Device Manager; expand the "Ports (COM and LPT)" section, where all COM ports and their current statuses will be listed.
  2. Using Command Prompt: Open the Command Prompt (CMD), enter the mode command, which will display status information for all COM ports.
  3. Check the hardware connection: If you have already connected an external device to the COM port, the device usually occupies a port number, which can be determined by checking the connected hardware.
  
  **Linux System**:
  
  1. Use the `dmesg` command: Open the terminal.
  2. Use the `ls` command: Enter `ls /dev/ttyS*` or `ls /dev/ttyUSB*` to list all serial port devices.
  3. Use the `setserial` command: Enter `setserial -g /dev/ttyS*` to view the configuration information of all serial port devices.
</Details>

