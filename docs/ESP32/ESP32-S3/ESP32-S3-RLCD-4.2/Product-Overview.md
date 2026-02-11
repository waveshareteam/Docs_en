---
sidebar_position: 1
title: ESP32-S3-RLCD-4.2
slug: /ESP32-S3-RLCD-4.2
id: ESP32-S3-RLCD-4.2-Overview
product_family:
  - ESP32
product_model:
  - ESP32-S3-RLCD-4.2
  - ESP32-S3-RLCD-4.2-EN
---


# ESP32-S3-RLCD-4.2

[![ESP32-S3-RLCD-4.2](./images/ESP32-S3-RLCD-4.2-DocHeader.webp)](https://www.waveshare.com/esp32-s3-rlcd-4.2.htm)

This product is a fully reflective screen AIoT development board based on the ESP32-S3, supporting dual-mode communication with Wi-Fi and BLE. It features a 4.2inch fully reflective display (RLCD), low power consumption, display performance close to that of an e-Paper screen, and faster refresh response. It includes onboard audio codec circuitr, dual microphones, speaker, SHTC3 high-precision temperature and humidity sensor, TF card slot, RTC interface, and battery charge and discharge management circuit, etc. It also reserves USB, UART, I2C, and multiple GPIO interfaces for convenient expansion. It supports AI voice, temperature and humidity monitoring, and IoT control, and is suitable for DIY desktop smart ornaments, electronic calendars, AI agents, etc., and can also be used for product prototype development.

| SKU | Product | 
| --- | --- | 
| 33298 | ESP32-S3-RLCD-4.2 (18650 Lithium Battery Included) |
| 33507 | ESP32-S3-RLCD-4.2 (18650 Lithium Battery **NOT** Included) |

:::danger Caution
1. The screen is a precision fragile component. Please handle with care during assembly and transportation; dropping or collision is strictly prohibited.
2. Do not tap, squeeze, bend, or apply any external force to the screen display area (especially when installing or removing the lithium battery, be sure to avoid pressing the screen hard).
3. Failures such as screen cracking or abnormal display caused by the aforementioned improper operations are not covered by the product warranty.
:::
## Features

- Equipped with a high-performance Xtensa® 32-bit LX7 dual-core processor clocked at up to 240MHz
- Supports 2.4GHz Wi-Fi and Bluetooth 5 (LE), with built-in antenna
- Built-in 512KB SRAM, 384KB ROM, stacked with 16MB Flash and 8MB PSRAM integrated
- Equipped with a 4.2inch fully reflective screen with a resolution of 300 × 400, featuring characteristics of reflection imaging and no backlight required
- Equipped with a dual-microphone array for audio algorithms such as noise reduction and echo cancellation, suitable for accurate speech recognition and near-field/far-field wake-up applications
- Onboard PCF85063 RTC real-time clock and SHTC3 temperature and humidity sensor for precise RTC time management and temperature and humidity monitoring
- Onboard 18650 lithium battery holder and RTC backup battery holder (requires a rechargeable RTC battery), supporting dual modes of main power supply and independent RTC power backup
- Built-in TF card slot, supports external storage of images or files
- Onboard KEY and BOOT two side buttons with customizable functions, allowing for custom function development
- Reserved 2 × 8 female header interface (2.54mm pitch) for convenient external expansion

## Onboard Resources


<div 
    style={{maxWidth:600}}> 
    ![](./images/ESP32-S3-RLCD-4.2-HW.webp)
</div>

1. **ESP32-S3-WROOM-1-N16R8** Wi-Fi and Bluetooth SoC, up to 240MHz operating frequency, stacked with 16MB Flash and 8MB PSRAM
2. **ES7210** ADC chip implements echo cancellation circuit
3. **ES8311** Low power audio codec IC
4. **BOOT Button** Press and hold the BOOT button to power on again to enter download mode
5. **PWR Button** Long press to power off, single click to power on
6. **KEY Button** Customizable function button
7. **SHTC3 Temperature and Humidity Sensor** Provides ambient temperature and humidity measurement, enabling environmental monitoring function
8. **PCF85063** RTC clock chip, supporting time-keeping functionality
9. **MX1.25 2PIN Speaker Interface** Audio signal output, for connecting external speaker
10. **RTC Independent Power Interface** Supports only PH1.0 rechargeable RTC battery
11. **2 × 8PIN 2.54mm Pitch Female Header**
12. **18650 Battery Holder**
13. **Dual Microphone Array Design** Dual microphone array with ES7210 for echo cancellation
14. **CHG Charging Indicator Light** The light turns off when the battery is fully charged
15. **WRN Warning Indicator Light** The light stays on if the battery is reverse-connected
16. **Type-C Interface** Used for program flashing and log printing
17. **TF Card Slot** Supports FAT32-formatted TF card for data expansion

## Interfaces


<div 
    style={{maxWidth:600}}> 
    ![](./images/ESP32-S3-RLCD-4.2-IntfIntro.webp)
</div>

## Dimensions


<div 
    style={{maxWidth:600}}> 
    ![](./images/ESP32-S3-RLCD-4.2-ProductSize.webp)
</div>

## Development Methods

The ESP32-S3-RLCD-4.2 supports two development frameworks: Arduino IDE and ESP-IDF, providing flexibility for developers to choose the tool that best fits their project requirements and personal preference.

Each method has its advantages, and developers can select based on their needs and skill level. Arduino is simple to learn and easy to get started with, suitable for beginners and non-professionals; ESP-IDF provides more advanced development tools and stronger control capabilities, suitable for developers with professional backgrounds or those with higher performance requirements, and is more suitable for complex project development.

- **Arduino IDE** is a convenient, flexible, and easy-to-use open-source electronics prototyping platform. It requires minimal foundational knowledge, allowing for rapid development after a short learning period. Arduino has a vast global community that provides a wealth of open-source code, project examples, tutorials, and rich libraries that encapsulate complex functionalities, enabling developers to implement various features quickly. You can refer to the **[Working with Arduino](./Arduino.md)** to complete the initial setup, and the tutorial also provides related demos for reference.

- **ESP-IDF** (Espressif IoT Development Framework) is a professional development framework released by Espressif for its ESP series chips. It is developed based on the C language, including a compiler, debugger, and flashing tool, etc. It supports development via command line or an Integrated Development Environment (such as Visual Studio Code with the Espressif IDF plugin), which provides features like code navigation, project management, and debugging, etc. We recommend using VS Code for development. For the specific configuration process, please refer to the **[Working with ESP-IDF](./ESP-IDF.md)**. The tutorial also provides relevant demos for reference.