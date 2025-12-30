---
sidebar_position: 5
title: Product FAQ
slug: /ESP32-C6-Touch-AMOLCD-1.8/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-C6-Touch-AMOLCD-1.8
---

import Details from '@theme/Details';

# FAQ

<Details summary=" Q: How to get more library support for the demo?" className="faq-details" open>
A: You can subscribe to this repository and raise an issue to describe your requirements. The engineers will assess your request as soon as possible: [ESP32-display-support](https://github.com/waveshareteam/ESP32-display-support/tree/master)
</Details>

<Details summary=" Q: The board is getting too hot. What is the reason and how do I fix it? " className="faq-details" open>
1. If you find the board getting hot, first ensure the buzzer enable pin is pulled low. Otherwise, the passive buzzer will continuously consume power, putting a high current load on the LDO and causing it to overheat
2. If you are also using WiFi/Bluetooth features, overheating cannot be avoided. Enabling the wireless function on the ESP32-S3 will increase the power consumption, leading to overheating
3. In the Arduino IDE environment, enabling PSRAM, using external Flash, and pulling the buzzer enable pin low can still generate significant heat. It is recommended to use low-power solutions
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

<Details summary=" Q: How to port the provided lib libraries? Or how to develop my own LCD screen? How to drive?" className="faq-details" open>
  The LCD screen display chip used in this product is ST7789V2, and the touch chip is CST816T (for touch version only). There are two chip drivers in the lib we provide. For display drivers, please refer to GFX enable. For touch drivers, please refer to Arduino_LVGL demo
</Details>

<Details summary=" Q: Why is there no output even though the code is correct and flashed successfully?" className="faq-details" open>
- Check the schematic diagram: Depending on the Type-C interface of your specific development board, the code handling the output differs:
  - For boards with a direct USB connection, they support output via the printf function. To support output via the Serial function, you need to enable the USB CDC On Boot feature or declare HWCDC
  - For boards with a UART-to-USB connection, they support output via both printf and Serial functions, and there is no need to enable USB CDC On Boot
</Details>

<Details summary=" Q: How to use SquareLine Studio to design interfaces?" className="faq-details" open>
Please refer to **[SquareLine Studio Tutorial](https://www.waveshare.com/wiki/Waveshare_SquareLine_Studio)**.
</Details>