---
sidebar_position: 2
title: Working with Raspberry Pi
slug: /27inch_FHD_Monitor/User-Guide-Rpi
---
<!-- Image Reference -->
import Hardware_Connection_1 from './images/Hardware-Connection-1.webp';
import Hardware_Connection_2 from './images/Hardware-Connection-2.webp';
import Hardware_Connection_3 from './images/Hardware-Connection-3.webp';

# User Guide

## Software Settings

:::warning
Supports Raspberry Pi OS / Ubuntu / Kali and Retropie systems.                           
When using the LCD with these Raspberry Pi systems, the resolution must be set manually; otherwise, incorrect display resolution may occur, affecting the user experience.
:::

- 1. Download the latest image from the [Raspberry Pi official website](https://www.raspberrypi.com/software/operating-systems/)
![Flashing System Image](./images/Raspberry-Pi-Imager-Burning.gif)
- 2. Download the compressed file to your PC and extract it to get the .img file
- 3. Connect the TF card to your PC and format it using SDFormatter software
- 4. Open Win32DiskImager software, select the system image prepared in step 1, and click "Write" to flash the system image
- 5. After flashing, open the config.txt file in the root directory of the TF card, add the following code to the end of the config.txt file, save the file, and safely eject the TF card
  ```ini
  hdmi_group=2
  hdmi_mode=82
  hdmi_cvt 1920 1080 60 6 0 0 0
  ```
- 6. Insert the TF card into the Raspberry Pi

## Hardware Connection
> ⚠The screen has reserved mounting holes inside for Raspberry Pi 4 / 5 and comes with an HDMI adapter board and power adapter board, allowing for direct installation and use.
If using a CM5 / CM4 compute module, an additional compatible adapter base board is required:
> - [CM5-to-Pi5-Adapter](https://www.waveshare.com/cm5-to-pi5-adapter.htm)
> - [CM4-to-Pi4-Adapter](https://www.waveshare.com/cm4-to-pi4-adapter.htm)

1. Use pliers or similar tools to cut away the blanking plate covering the Raspberry Pi mounting holes  
   <div style={{maxWidth:600}}> <img src={Hardware_Connection_1} alt=" 27inch FHD Monitor Hardware Connection"/></div>
2. Install the Raspberry Pi, connect the adapter boards, and connect the touch USB cable
   <div style={{maxWidth:800}}> <img src={Hardware_Connection_2} alt=" 27inch FHD Monitor Hardware Connection"/></div>
3. Connect the screen to a 12V 5A power supply; the display should appear normally after a few seconds 
   <div style={{maxWidth:800}}> <img src={Hardware_Connection_3} alt=" 27inch FHD Monitor Hardware Connection"/></div>
