---
sidebar_position: 1
title: ESP32-C6-LCD-1.3
slug: /ESP32-C6-LCD-1.3
id: ESP32-C6-LCD-1.3-Overview
product_family:
  - ESP32
product_model:
  - ESP32-C6-LCD-1.3
---

<!-- Image Reference -->
import Interface_Definition from './images/Interface_Definition.webp';
import Product_Size from './images/Product_Size.webp';
import Resource_Overview from './images/Resource_Overview.webp';
import product_photo from './images/product_photo.webp.png';



# ESP32-C6-LCD-1.3


<div style={{maxWidth:500}}> <img src={product_photo}/></div>


[ESP32-C6-LCD-1.3 (Standard version)](https://www.waveshare.com/esp32-c6-lcd-1.3.htm?sku=33643) and [ESP32-C6-LCD-1.3 (With pre-soldered header)](https://www.waveshare.com/esp32-c6-lcd-1.3.htm?sku=33644) are microcontroller development boards based on the ESP32-C6FH4, supporting 2.4GHz Wi-Fi 6 and Bluetooth BLE 5. In a compact board size, they feature an onboard 1.3inch 262K color LCD screen, a lithium battery charging chip, a six-axis sensor (3-axis accelerometer and 3-axis gyroscope), an RGB LED, and a Wi-Fi/Bluetooth antenna, making them suitable for developing and embedding applications into products.


## Features

- Low-power SoC equipped with a RISC-V 32-bit single-core processor, operating at up to 160 MHz.
- Supports 2.4GHz Wi-Fi (802.11 b/g/n) and Bluetooth 5 (LE) with an onboard antenna.
 Built-in 320 KB SRAM and stacked with 4 MB Flash.
- Utilizes a Type-C port, eliminating concerns about plug orientation.
- Onboard 1.3inch LCD screen with 240 × 240 resolution and 262K colors for clear color pictures.
- Built-in ST7789V2 driver chip, using SPI communication to conserve interface pin resources.
- Onboard QMI8658 6-axis IMU (3-axis accelerometer and 3-axis gyroscope) for motion attitude detection and extended applications.
- Onboard 3.7V MX1.25 lithium battery recharge/discharge header.
- Exposes a 9PIN GPIO interface with 2.54mm pitch for connecting external devices and debugging, enabling flexible peripheral configuration.


## Specifications

|              MUC               |           ESP32-C6FH4           |           Display Size              |           1.3inch               |
| :----------------------------:| :-----------------------------:| :-----------------------------: | :-----------------------------: |
|              Operating Voltage           |              3.3V               |           Display Resolution            |           240*240 pixels         |
|              Backlight Current           |              10mA               |           Display Panel             |                IPS              |
|              Display Interface          |            4-wire SPI             |           Driver IC               |           ST7789V2              |

## Interface Definition

Supports expansion of various peripherals; more external devices can be connected via the GPIO pin headers.
<div style={{maxWidth:800}}> <img src={Interface_Definition}/></div>


## Onboard Resources

<div style={{maxWidth:800}}> <img src={Resource_Overview}/></div>

- ①  RESET Button  
- ②  Type-C Interface   Used for program flashing and log printing
- ③  BOOT Button        Hold the BOOT button while powering on to enter download mode
- ④  TF Card Slot
- ⑤  ESP32-C6 single-core low-power processor, operating at up to 160MHz
- ⑥  Onboard antenna

## Dimensions

<div style={{maxWidth:800}}> <img src={Product_Size}/></div>

## Development Methods

The ESP32-C6-LCD-1.3 supports two development frameworks: Arduino IDE and ESP-IDF, offering flexibility for developers. You can choose the appropriate development tool based on project requirements and personal preference.

Each method has its advantages, and developers can select based on their needs and skill level. Arduino is simple to learn and easy to get started with, suitable for beginners and non-professionals; ESP-IDF provides more advanced development tools and stronger control capabilities, suitable for developers with professional backgrounds or those with higher performance requirements, and is more suitable for complex project development.

- **Arduino IDE** is a convenient, flexible, and easy-to-use open-source electronics prototyping platform. It requires minimal foundational knowledge, allowing for rapid development after a short learning period. Arduino has a vast global community that provides a wealth of open-source code, project examples, tutorials, and rich libraries that encapsulate complex functionalities, enabling developers to implement various features quickly. You can refer to the **[Working with Arduino](./Arduino.md)** to complete the initial setup, and the tutorial also provides related demos for reference.

- **ESP-IDF** (Espressif IoT Development Framework) is a professional development framework released by Espressif for its ESP series chips. It is developed based on the C language, including a compiler, debugger, and flashing tool, etc. It supports development via command line or an Integrated Development Environment (such as Visual Studio Code with the Espressif IDF plugin), which provides features like code navigation, project management, and debugging, etc. We recommend using VS Code for development. For the specific configuration process, please refer to the **[Working with ESP-IDF](./ESP-IDF.md)**. The tutorial also provides relevant demos for reference.