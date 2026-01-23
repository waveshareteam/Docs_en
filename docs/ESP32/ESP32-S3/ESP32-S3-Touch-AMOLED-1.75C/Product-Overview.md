---
sidebar_position: 1
title: ESP32-S3-Touch-AMOLED-1.75C
slug: /ESP32-S3-Touch-AMOLED-1.75C
id: ESP32-S3-Touch-AMOLED-1.75C-Overview
product_family:
  - ESP32
product_model:
  - ESP32-S3-Touch-AMOLED-1.75C
---

# ESP32-S3-Touch-AMOLED-1.75C

<div style={{maxWidth:400}}>
[![ESP32-S3-Touch-AMOLED-1.75C](https://www.waveshare.net/photo/development-board/ESP32-S3-Touch-AMOLED-1.75C/ESP32-S3-Touch-AMOLED-1.75C-details-1.jpg)](https://www.waveshare.com/esp32-s3-touch-amoled-1.75.htm)
</div>

The ESP32-S3-Touch-AMOLED-1.75C is a high-performance, highly integrated microcontroller development board designed by Waveshare. It features a compact and aesthetically pleasing CNC-machined aluminum alloy case in an electronic "badge" style, offering excellent build quality. The board integrates a 1.75inch high-definition capacitive AMOLED touchscreen, a highly integrated power management chip, a six-axis sensor (accelerometer + gyroscope), RTC, a low-power audio codec chip with echo cancellation circuitry, a built-in speaker, and space for a battery, providing robust support for rapid development and product prototyping.

| SKU | Product | 
| --- | --- | 
| 31261 | ESP32-S3-Touch-AMOLED-1.75C (Standard version) |
| 31264 | ESP32-S3-Touch-AMOLED-1.75C (GPS version) |
| 31262 | ESP32-S3-Touch-AMOLED-1.75C (Standard version with protective case) |

## Features

- Equipped with ESP32-S3R8 high-performance Xtensa 32-bit LX7 dual-core processor, with a clock frequency up to 240MHz
- Supports 2.4GHz Wi-Fi (802.11 b/g/n) and Bluetooth 5 (LE), with onboard antenna
- Built-in 512KB SRAM and 384KB ROM, with stacked 8MB PSRAM and external 16MB Flash
- Utilizes a Type-C interface, improving user convenience and device compatibility
- Onboard 1.75inch capacitive touch HD AMOLED screen, 466 × 466 resolution, 16.7 million colors, capable of clearly displaying color images
- Uses an AMOLED screen, offering higher contrast, wider viewing angles, richer colors, and faster response times for superior visual effects, along with advantages like thin design, low power consumption, and flexibility
- Built-in CO5300 driver chip and CST9217 capacitive touch controller chip, communicating via QSPI and I2C interfaces respectively, minimizing the use of I/O pin resources
- Equipped with a dual-microphone array for audio algorithms such as noise reduction and echo cancellation, suitable for accurate speech recognition and near-field/far-field wake-up applications
- Onboard QMI8658 6-axis IMU (3-axis accelerometer and 3-axis gyroscope) for detecting motion posture, step counting, and other functions
- Onboard two side buttons, PWR and BOOT, with customizable functions for convenient custom button operation development
- Onboard 3.7V MX1.25 lithium battery recharge/discharge header
- Adopts AXP2101 IC for efficient power management, supporting multiple voltage outputs, integrating charging and battery management functions, while optimizing battery lifespan

## Onboard Resources

![ESP32-S3-Touch-AMOLED-1.75C Onboard Resources](https://www.waveshare.net/photo/development-board/ESP32-S3-Touch-AMOLED-1.75C/ESP32-S3-Touch-AMOLED-1.75C-details-intro.jpg)

1. **ESP32-S3R8** Wi-Fi and Bluetooth SoC, 240MHz operating frequency, with stacked 8MB PSRAM

2. **32MB NOR Flash**

3. **QMI8658** Six-axis Inertial Measurement Unit (IMU), containing a 3-axis gyroscope and a 3-axis accelerometer

4. **Dual-microphone Design** Combined with echo cancellation circuitry for higher quality audio capture

5. **Onboard Antenna** Supporting 2.4GHz Wi-Fi (802.11 b/g/n) and Bluetooth 5 (LE)

6. **Screen Interface**

7. **ES7210 Echo Cancellation Algorithm Chip** Used to eliminate echoes and improve audio capture accuracy

8. **ES8311 Audio Codec Chip** 

9. **PWR Power Button** Controls power on/off and supports custom functions

10. **BOOT Button** Used for device startup and functional debugging

11. **AXP2101** Highly integrated power management IC

12. **Type-C Interface** ESP32-S3 USB interface for program flashing and log printing

13. **MX1.25 Lithium Battery Interface** MX1.25 2PIN connector for connecting a 3.7V lithium battery, supports charging and discharging

14. **Onboard Speaker Pads**

## Dimensions

![ESP32-S3-Touch-AMOLED-1.75C Product Dimensions](https://www.waveshare.net/photo/development-board/ESP32-S3-Touch-AMOLED-1.75C/ESP32-S3-Touch-AMOLED-1.75C-details-size.jpg)

## Development Methods

The ESP32-S3-Touch-AMOLED-1.75C supports two development frameworks: Arduino IDE and ESP-IDF, providing developers with flexible choices. You can select the appropriate development tool based on project requirements and personal preference.

Each method has its advantages, and developers can select based on their needs and skill level. Arduino is simple to learn and easy to get started with, suitable for beginners and non-professionals; ESP-IDF provides more advanced development tools and stronger control capabilities, suitable for developers with professional backgrounds or those with higher performance requirements, and is more suitable for complex project development.

- **Arduino IDE** is a convenient, flexible, and easy-to-use open-source electronics prototyping platform. It requires minimal foundational knowledge, allowing for rapid development after a short learning period. Arduino has a vast global community that provides a wealth of open-source code, project examples, tutorials, and rich libraries that encapsulate complex functionalities, enabling developers to implement various features quickly. You can refer to the **[Working with Arduino](./Arduino.md)** to complete the initial setup, and the tutorial also provides related demos for reference.

- **ESP-IDF** (Espressif IoT Development Framework) is a professional development framework released by Espressif for its ESP series chips. It is developed based on the C language, including a compiler, debugger, and flashing tool, etc. It supports development via command line or an Integrated Development Environment (such as Visual Studio Code with the Espressif IDF plugin), which provides features like code navigation, project management, and debugging, etc. We recommend using VS Code for development. For the specific configuration process, please refer to the **[Working with ESP-IDF](./ESP-IDF.md)**. The tutorial also provides relevant demos for reference.