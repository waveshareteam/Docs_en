---
sidebar_position: 5
title: FAQ
slug: /ESP32-S3-Touch-LCD-1.28/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-S3-Touch-LCD-1.28
---

import Details from '@theme/Details';

# FAQ

<Details 
  summary=" Q: After downloading a program to the module, when trying to download again, sometimes it fails to connect to the serial port or the flashing fails?" 
  className="faq-details" open>
  - Press and hold the Reset button for more than 1 second, wait for the PC to re-recognize the device, then download again
  - You can press and hold the `BOOT` button, simultaneously press `RESET`, then release `RESET`, and finally release the `BOOT` button. At this point, the module will enter download mode, which can resolve most download issues.
</Details>

<Details 
  summary=" Q: The module keeps resetting continuously, and when checking in Device Manager, the recognition status flashes?" 
  className="faq-details" open>
  - This situation may be caused by an unstable USB port due to a blank Flash. You can press and hold the `BOOT` button, simultaneously press `RESET`, then release `RESET`, and finally release the `BOOT` button. At this point, the module will enter download mode to flash the firmware (program), which should resolve the issue.
</Details>

<Details 
  summary=" Q: The first program compilation is extremely slow. How to handle it?" 
  className="faq-details" open>
  - The first compilation being slow is normal; just wait patiently
</Details>

<Details 
  summary=" Q: Can't find the AppData folder. How to handle this?"  
  className="faq-details" open>
  - Some AppData folders are hidden by default. You can set your system to show them.
  - English System: File Explorer -> View -> Check "Hidden items"
  - Chinese System: File Explorer -> View -> Show -> Check "Hidden items"
</Details>

<Details 
  summary=" Q:  How to check which COM port I am using?" 
  className="faq-details" open>
  - Windows System:
    - ①Check via Device Manager: Press <kbd>Windows</kbd> + <kbd>R</kbd> to open the "Run" dialog box. Type `devmgmt.msc` and press Enter to open Device Manager. Expand the "Ports (COM & LPT)" section. All COM ports and their current status will be listed here.
    - ②Check using Command Prompt: Open the Command Prompt (CMD), type the `mode` command, which will display status information for all COM ports.
    - ③Check Hardware Connection: If an external device is already connected to a COM port, the device typically occupies a port number. You can determine which port is being used by checking the connected hardware.

  - Linux System:
    - ①Check using the `dmesg` command: Open the terminal.
    - ②Check using the `ls` command: Type `ls /dev/ttyS*` or `ls /dev/ttyUSB*` to list all serial devices.
    - ③Check using the `setserial` command: Type `setserial -g /dev/ttyS*` to view configuration information for all serial devices.
</Details>

<Details 
  summary=" Q: Program flashing fails when using a Mac device?"  
  className="faq-details" open>
  - Install the [MAC driver](https://files.waveshare.com/wiki/common/CH34XSER_MAC.7z) and then flash again.
</Details>

<Details 
  summary=" Q: What is the screen driver?" 
  className="faq-details" open>
  - GC9A01A
</Details>

<Details 
  summary=" Q: Can the other six pins be used as RXTX?" 
  className="faq-details" open>
  - Yes, just specify the pins directly when initializing UART:
    <div style={{maxWidth:1000}}> 
    ![ESP32-S3-Touch-LCD-1.28_FAQ_1](./images/ESP32-S3-1.28-UART.webp)
    </div>
</Details>

<Details 
  summary=" Q: What battery does the ESP32-S3-Touch-LCD-1.28 use for power?" 
  className="faq-details" open>
  - MX1.25 2P connector, which can be used to connect a 3.7V battery, supports charging and discharging, as shown in the figure:
    <div style={{maxWidth:500}}> 
    ![ESP32-S3-Touch-LCD-1.28_FAQ_2](./images/Esp-1.28-battery-600mah.webp)
    </div>
</Details>