---
sidebar_position: 2
title: Arduino
slug: /ESP32-S3-Zero/Development-Environment-Setup-Arduino
product_family:
  - ESP32
product_model:
  - ESP32-S3-Zero
  - ESP32-S3-Zero-M
  - ESP32-S3-Zero-Basic-Kit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Image References -->
import arduinoideEsp32s3zero from './images/ArduinoIDE-ESP32-S3-Zero.webp';
import enableUsbcdc from './images/Enable-USBCDC.webp';

# Arduino

This chapter contains the following sections; please read as needed:

- [Arduino Beginner Tutorial](#arduino-beginner-tutorial)
- [Development Environment Setup](#development-environment-setup)

## Arduino Beginner Tutorial

New to Arduino ESP32 development and want to get started quickly? We have prepared a comprehensive **[ESP32 Beginner Tutorial](/docs/ESP32/Tutorials/Arduino-Tutorials/index.md)** for you.

- [Section 0: Getting to Know ESP32](/docs/ESP32/Tutorials/Getting-To-Know-Esp32.md)
- [Section 1: Installing and Configuring Arduino IDE](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md)
- [Section 2: Arduino Basics](/docs/ESP32/Tutorials/Arduino-Tutorials/02-Arduino-Basics.md)
- [Section 3: Digital I/O](/docs/ESP32/Tutorials/Arduino-Tutorials/03-Digital-IO.md)
- [Section 4: Analog Input](/docs/ESP32/Tutorials/Arduino-Tutorials/04-Analog-Input.md)
- [Section 5: Pulse Width Modulation (PWM)](/docs/ESP32/Tutorials/Arduino-Tutorials/05-PWM.md)
- [Section 6: Serial Communication (UART)](/docs/ESP32/Tutorials/Arduino-Tutorials/06-UART-Communication.md)
- [Section 7: I2C Communication](/docs/ESP32/Tutorials/Arduino-Tutorials/07-I2C-Communication.md)
- [Section 8: SPI Communication](/docs/ESP32/Tutorials/Arduino-Tutorials/08-SPI-Communication.md)
- [Section 9: Wi-Fi Basics](/docs/ESP32/Tutorials/Arduino-Tutorials/09-WiFi-Networking.md)
- [Section 10: Web Server](/docs/ESP32/Tutorials/Arduino-Tutorials/10-Web-Server.md)
- [Section 11: Bluetooth](/docs/ESP32/Tutorials/Arduino-Tutorials/11-Bluetooth-Communication.md)
- [Section 12: LVGL GUI Development](/docs/ESP32/Tutorials/Arduino-Tutorials/12-LVGL.md)
- [Section 13: Comprehensive Project](/docs/ESP32/Tutorials/Arduino-Tutorials/13-Fun-Project.md)

## Development Environment Setup

### 1. Installing and Configuring Arduino IDE

Please refer to the **[Arduino IDE Setup Tutorial](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md)** to download and install the Arduino IDE and add ESP32 support.

### 2. Other Tips

1. The ESP32-S3-Zero is directly supported in the Arduino IDE. Select "Waveshare ESP32-S3-Zero".

   <div style={{maxWidth:650}}> <img src={arduinoideEsp32s3zero} alt="Select ESP32-S3-Zero in Arduino IDE"/></div>

2. The ESP32-S3-Zero uses the ESP32-S3 native USB interface, not a UART-to-USB bridge. For serial communication:

   - The `printf()` function can be used directly;

   - To use the `Serial.println()` function, you need to enable the USB CDC feature. Please follow the steps below to check and confirm your environment configuration is correct:

     1. Update ESP32 Library: It is recommended to update the ESP32 board library in the Arduino IDE to **version 3.3.5 or higher**. Newer versions of the library have enabled USB CDC by default for this board.

     2. Check Configuration Options: In the "Tools" menu of the Arduino IDE, check and confirm that the "USB CDC On Boot" option is set to "Enabled".

        :::note
        As shown below, the "USB CDC On Boot" option should be set to `Enabled` under correct configuration.
   
        <div style={{maxWidth:600}}> <img src={enableUsbcdc} alt="Enable USB CDC"/></div>
   
        :::