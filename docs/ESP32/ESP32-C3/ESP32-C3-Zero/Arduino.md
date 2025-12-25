---
sidebar_position: 2
title: Arduino
slug: /ESP32-C3-Zero/Development-Environment-Setup-Arduino
product_family:
  - ESP32
product_model:
  - ESP32-C3-Zero
  - ESP32-C3-Zero-M
  - ESP32-C3-Zero-Basic-Kit
---

import ArduinoTutorialIntro from '@site/docs/ESP32/snippets/ArduinoTutorialIntro.mdx';

<!-- Image References -->
import enableUsbcdc from './images/Enable-USBCDC.webp';
import arduinoideEsp32c3zero from './images/ESP32-C3-Zero-Arduino.webp';

# Arduino Development

This chapter includes the following sections; please read according to your needs:

- [Arduino Tutorial for Beginners](#arduino-tutorial-for-beginners)
- [Environment Setup](#environment-setup)

<ArduinoTutorialIntro />

## Environment Setup

### 1. Installing and Configuring Arduino IDE

Please refer to the **[Arduino IDE Setup Tutorial](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md)** to download and install the Arduino IDE, and add ESP32 support.

### 2. Additional Tips

1. The ESP32-C3-Zero supports direct model selection in the Arduino IDE. Select "Waveshare ESP32-C3-Zero".
   
   <div style={{maxWidth:650}}> <img src={arduinoideEsp32c3zero} alt="Select ESP32-C3-Zero in Arduino IDE"/></div>

2. The ESP32-C3-Zero uses the ESP32-C3 native USB interface, not UART-to-USB. For serial communication:

   - The `printf()` function can be used directly;

   - To use the `Serial.println()` function, you need to enable the USB CDC feature. Please follow the steps below to check and confirm that your environment is configured correctly:

     1. Update ESP32 libraries: It is recommended to update the ESP32 board library in the Arduino IDE to **version 3.3.5 or higher**. Newer versions of the library have USB CDC enabled by default for this board.

     2. Check configuration options: In the Arduino IDE "Tools" menu, check and confirm that the "USB CDC On Boot" option is set to "Enabled".

        :::note
        As shown below, the "USB CDC On Boot" option should be `Enabled` when correctly configured.
   
        <div style={{maxWidth:600}}> <img src={enableUsbcdc} alt="Enable usbcdc"/></div>
   
        :::