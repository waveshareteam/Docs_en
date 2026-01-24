---
sidebar_position: 1
title: ESP32-C6-GEEK Overview
slug: /ESP32-C6-GEEK
id: ESP32-C6-GEEK-Overview
product_family:
  - ESP32
product_model:
  - ESP32-C6-GEEK
  - ESP32-C6-GEEK-M
  - ESP32-C6-GEEK-Basic-Kit
---

<!-- Image Reference -->
import esp32C6GEEK_MAIN from './images/ESP32-C6-GEEK-mian.webp';
import esp32C6GEEKSize from './images/ESP32-C6-GEEK-details-size.webp';
import esp32C6GEEKIntro1 from './images/ESP32-C6-GEEK-details-intro.webp';

# ESP32-C6-GEEK

<div style={{maxWidth:600}}>
[![esp32C6GEEK_MAIN](https://www.waveshare.net/photo/development-board/ESP32-C6-GEEK/ESP32-C6-GEEK-1.jpg)](https://www.waveshare.com/esp32-c6-geek.htm)
</div>

The ESP32-C6-GEEK is a development board designed by Waveshare for geeks. It features onboard peripherals such as a USB-A male port, a 1.14inch LCD screen, a TF card slot, etc. It supports 2.4GHz Wi-Fi 6 and BLE 5, integrates 16MB Flash, and provides I2C, UART, and GPIO interfaces, offering more possibilities for your projects.

| SKU | Product | 
| --- | --- | 
| 33675 | ESP32-C6-GEEK |

## Features

- Adopts Espressif ESP32-C6 as the main chip
- Equipped with a high-performance 32-bit RISC-V processor, clock frequency up to 160MHz
- Built-in 512 KB SRAM, 320 KB ROM, onboard 16MB Flash
- Onboard 1.14inch 240×135 pixels 65K color IPS LCD display
- Integrated 2.4 GHz Wi-Fi 6 and Bluetooth 5 (LE) dual-mode wireless communication
- Onboard TF card slot for external TF card storage of images or files
- Onboard 3PIN UART, 3PIN GPIO, and 4PIN I2C interfaces
- Includes a plastic case and relevant connecting cables
- Provides comprehensive open-source demo and resources, facilitating programming learning and project development

## Onboard Resources

<div style={{maxWidth:600}}> <img src={esp32C6GEEKIntro1} alt="ESP32-C6-GEEK Hardware Resources 1"/></div>

1. **ESP32-C6** supports Wi-Fi and Bluetooth SoC, operating at 160MHz
2. **16MB NOR-Flash** for data storage
3. **TF card slot**
4. **USB-A port** 
5. **UART header** can be used to implement a USB-to-serial adapter function
6. **GPIO header** brings out available IO functional pins for easy expansion
7. **I2C header** can be used to test target boards
8. **BOOT button** used for device startup and functional debugging
9. **Onboard antenna** supports 2.4GHz Wi-Fi 6 (802.11 b/g/n) and Bluetooth 5 (LE)

## LCD Screen Specifications 
| Operating Voltage | 3.3V / 5V | Resolution | 240 × 135 pixels |
| :---------------------: | :----------------------------: | :----:     | :--------------------: |
| Communication Interface | 4-wire SPI | Display Size | 24.91 × 14.86 (mm) |
| Display Panel | IPS | Pixel Size | 0.1101 × 0.1035 (mm) |
| Controller IC | ST7789 | Product Size | 61.00 × 24.50 (mm) |

**SPI Communication Protocol**:

![](https://www.waveshare.net/w/upload/1/10/0.96inch_lcd_module_spi.png)

Note: The SPI interface here is specifically designed for screen display, therefore the data line from slave to master (MISO) is omitted.

- RESX is the Reset pin; it is pulled low during module power-up and is normally set to 1.

- CSX is the slave chip select pin; the chip is enabled only when CS is low

- D/CX is the data/command control pin of the chip. When DC = 0, commands are written; when DC = 1, data is written.

- SDA is the data transmission pin, specifically for RGB data.

- SCL is the SPI communication clock pin.

For SPI communication, data transmission follows a specific timing sequence, which are determined by the combination of clock phase (CPHA) and clock polarity (CPOL):

- The level of CPHA determines whether data is captured on the first or second clock transition edge of the serial synchronous clock. When CPHA = 0, data is captured on the first transition edge;

- The level of CPOL determines the idle level of the serial synchronous clock. CPOL = 0 means the idle state is low level.

As can be seen from the diagram, data transmission begins at the first falling edge of SCL. One clock cycle transmits 1 bit of data, using SPI0 mode, transmitted bit by bit with the Most Significant Bit (MSB) first and the Least Significant Bit (LSB) last.

## Dimensions

<div style={{maxWidth:600}}> <img src={esp32C6GEEKSize} alt="ESP32-C6-GEEK Product Dimensions"/></div>

## Development Methods

The ESP32-C6-GEEK supports two development frameworks: Arduino IDE and ESP-IDF, providing flexibility for developers to choose the tool that best fits their project requirements and personal preference.

Each method has its advantages, and developers can select based on their needs and skill level. Arduino is simple to learn and easy to get started with, suitable for beginners and non-professionals; ESP-IDF provides more advanced development tools and stronger control capabilities, suitable for developers with professional backgrounds or those with higher performance requirements, and is more suitable for complex project development.

- **Arduino IDE** is a convenient, flexible, and easy-to-use open-source electronics prototyping platform. It requires minimal foundational knowledge, allowing for rapid development after a short learning period. Arduino has a vast global community that provides a wealth of open-source code, project examples, tutorials, and rich libraries that encapsulate complex functionalities, enabling developers to implement various features quickly. You can refer to the **[Working with Arduino](./Arduino.md)** to complete the initial setup, and the tutorial also provides related demos for reference.

- **ESP-IDF** (Espressif IoT Development Framework) is a professional development framework released by Espressif for its ESP series chips. It is developed based on the C language, including a compiler, debugger, and flashing tool, etc. It supports development via command line or an Integrated Development Environment (such as Visual Studio Code with the Espressif IDF plugin), which provides features like code navigation, project management, and debugging, etc. We recommend using VS Code for development. For the specific configuration process, please refer to the **[Working with ESP-IDF](./ESP-IDF.md)**. The tutorial also provides relevant demos for reference.