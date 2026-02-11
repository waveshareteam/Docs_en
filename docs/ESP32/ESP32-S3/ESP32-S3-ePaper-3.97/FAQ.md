---
sidebar_position: 5
title: FAQ
slug: /ESP32-S3-ePaper-3.97/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-S3-ePaper-3.97
---

import Details from '@theme/Details';

# FAQ

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
</Details>

<Details 
  summary=" Q: The first program compilation is extremely slow. How to handle it?"  
  className="faq-details" open>
  - It's normal for the first compilation to be slow, just wait patiently.
</Details>

<Details 
  summary=" Q: What is the standby time under lithium battery power supply?" 
  className="faq-details" open>
  - In clock mode, a 1500mAh battery can operate for more than 15 days.
</Details>

<Details 
  summary=" Q: The example program is successfully flashed but won't run?" 
  className="faq-details" open>
  - First, check if the example version matches the product version.
</Details>

<Details 
  summary=" Q: How to handle not finding the AppData folder?"  
  className="faq-details" open>
  - Some AppData folders are hidden by default. You can set your system to show them.
  - English System: File Explorer -> View -> Check "Hidden items”
  - Chinese System: File Explorer -> View -> Show -> Check "Hidden items”
</Details>

<Details 
  summary=" Q:  How to check which COM port I am using?" 
  className="faq-details" open>
  - Windows System:
    - ①Check via Device Manager: Press the <kbd>Windows</kbd>+ <kbd>R</kbd> keys to open the "Run" dialog box; input ` devmgmt.msc ` and press Enter to open the Device Manager; expand the "Ports (COM and LPT)" section, where all COM ports and their current statuses will be listed.
    - ②Check using Command Prompt: Open the Command Prompt (CMD), enter the `mode` command, which will display status information for all COM ports.
    - ③Check Hardware Connection: If an external device is already connected to a COM port, the device typically occupies a port number. You can identify the port by checking the connected hardware.

  - Linux System:
    - ①Use the `dmesg` command: Open the terminal.
    - ②Use the `ls` command: Enter `ls /dev/ttyS*` or `ls /dev/ttyUSB*` to list all serial port devices.
    - ③Use the `setserial` command: Enter `setserial -g /dev/ttyS*` to view the configuration information for all serial port devices.
</Details>