---
sidebar_position: 1
title: RP2350-Touch-AMOLED-1.75 Product Description
slug: /RP2350-Touch-AMOLED-1.75
id: RP2350-Touch-AMOLED-1.75-Overview
product_family:
  - Raspberry-Pi-Pico
product_model:
  - RP2350-Touch-AMOLED-1.75
---

<!-- Image Reference -->
import rp2350TouchAmoled1_75Product from './images/RP2350-Touch-AMOLED-1.75-1.webp';
import rp2350TouchAmoled1_75Intro2 from './images/RP2350-Touch-AMOLED-1.75-details-intro-2.webp';
import rp2350TouchAmoled1_75Intro1 from './images/RP2350-Touch-AMOLED-1.75-details-intro.webp';
import rp2350TouchAmoled1_75Size1 from './images/RP2350-Touch-AMOLED-1.75-details-size-1.webp';
import rp2350TouchAmoled1_75Size2 from './images/RP2350-Touch-AMOLED-1.75-details-size-2.webp';

# RP2350-Touch-AMOLED-1.75

<div style={{maxWidth:600}}>
[![RP2350-Touch-AMOLED-1.75 Product Image](./images/RP2350-Touch-AMOLED-1.75-1.webp)](https://www.waveshare.com/rp2350-touch-amoled-1.75.htm?sku=33733)
</div>

This product is a high-performance, highly integrated microcontroller development board designed by Waveshare. In a compact board size, it incorporates a 1.75inch capacitive high-definition AMOLED screen, a highly integrated power management chip, a 6-axis sensor (3-axis accelerometer and 3-axis gyroscope), RTC, low-power audio codec chip, and other peripherals, making it convenient for development and integration into products.

| SKU | Product | 
| --- | --- | 
| 33759 | RP2350-Touch-AMOLED-1.75-G |
| 33733 | RP2350-Touch-AMOLED-1.75 |
| 33734 | RP2350-Touch-AMOLED-1.75-B |

## Features

- Utilizes the RP2350A microcontroller chip designed by Raspberry Pi
- Unique dual-core, dual-architecture, featuring dual-core ARM Cortex-M33 processors and dual-core Hazard3 RISC-V processors, both operating at up to 150MHz, allowing flexible switching between the two architectures for users
- Built-in 520KB of SRAM and 16MB of on-chip Flash, with a reserved PSRAM pad
- Utilizes a Type-C port, eliminating concerns about plug orientation.
- Onboard 1.75inch capacitive touch high-definition AMOLED screen, 466 × 466 resolution, 65K colors, capable of clearly displaying color images
- Built-in CO5300 driver chip and CST9217 capacitive touch controller chip, communicating via QSPI and I2C interfaces respectively, minimizing the use of I/O pin resources
- Onboard 3.7V MX1.25 lithium battery charge/discharge interface, beneficial for mobile scenarios
- USB1.1 host and slave device support
- Supports low-power sleep and hibernation modes
- Drag-and-drop programming using mass storage over USB
- 5 × multi-functional GPIO pins
- 1 × SPI, 2 × I2C, 2 × UART, 4 × 12-bit ADCs and 5 × controllable PWM channels
- Accurate on-chip clock and timer
- Built-in temperature sensor for real-time chip temperature monitoring
- 12 × programmable I/O (PIO) state machines for custom peripheral support


## Onboard Resources

<div style={{maxWidth:600}}> <img src={rp2350TouchAmoled1_75Intro2} alt="RP2350-Touch-AMOLED-1.75 Hardware Resources 1"/></div>

1. **RP2350A** Dual-core, dual-architecture processor, up to 150MHz operating frequency  
2. **Debug Interface** Convenient for program downloading and online debugging  
3. **PCF85063** RTC clock chip  
4. **PWR Power Button** Controls power on/off and supports custom functions  
5. **MX1.25 2P Speaker Interface** MX1.25 2P connector, can be used to connect a speaker  
6. **MX1.25 Lithium Battery Interface** Can be used to connect a 3.7V lithium battery, supports charging/discharging and adjustable charging current  
7. **Microphone** For audio capture  
8. **ES8311** Low-power audio codec IC  
9. **Type-C Interface** For program downloading, supports USB 1.1 host and slave device modes  
10. **IPEX Gen 1 GPS antenna holder** GPS version includes built-in LC76G module, external GNSS ceramic antenna
11. **AXP2101** Highly integrated power management chip  
12. **2.54mm Pitch 8PIN Header** Convenient for external debugging or connecting sensors  
13. **QMI8658** 6-axis IMU includes a 3-axis gyroscope and a 3-axis accelerometer  
14. **PSRAM Interface** Compatible with mainstream PSRAM chips, for user expansion/upgrade  
15. **BOOT Button** Press during reset to enter download mode  
16. **TF Card Slot** Supports TF card for expanded storage  


## Interfaces

<div style={{maxWidth:600}}> <img src={rp2350TouchAmoled1_75Intro1} alt="RP2350-Touch-AMOLED-1.75 Pin Definitions"/></div>

## Dimensions

### Without Case

<div style={{maxWidth:600}}> <img src={rp2350TouchAmoled1_75Size1} alt="RP2350-Touch-AMOLED-1.75 Product Dimensions"/></div>

### With Case

<div style={{maxWidth:600}}> <img src={rp2350TouchAmoled1_75Size2} alt="RP2350-Touch-AMOLED-1.75 Product Dimensions"/></div>

## Development Methods

The RP2350-Touch-AMOLED-1.75 supports three programming languages: MicroPython, C/C++, and Arduino, offering developers flexible choices. You can select the appropriate development tools and programming methods based on your project requirements and personal preferences:

Each of the three development methods has its own advantages. Developers can choose based on their needs and skill level. MicroPython is simple to learn and quick to get started with, suitable for beginners and non-professionals. Arduino and VS Code provide more advanced development tools and stronger control capabilities, suitable for developers with a professional background or higher performance requirements, and are more suitable for complex project development.

- **Thonny IDE (MicroPython Development)**: Thonny is a lightweight Python integrated development environment (IDE) designed for beginners and educational purposes. It is now widely used for MicroPython/CircuitPython development. It features a simple and intuitive interface, a built-in Python interpreter, and supports serial port REPL, code flashing, and debugging. The configuration process is straightforward. MicroPython is easy to learn and runs without compilation, making it ideal for beginners to quickly get started with embedded development. You can refer to the **[Working with MicroPython](./MicroPython.md)** for initial setup instructions. The tutorial provides detailed environment configuration steps and example programs.

- **VS Code + Pico SDK (C/C++ Development)**: VS Code is a powerful cross-platform code editor. By installing the Pico VS Code extension, you can quickly build a complete C/C++ development environment. This extension integrates the Pico SDK toolchain, CMake build system, and flashing and debugging tools, supporting graphical operations for high development efficiency. C/C++ development allows you to fully utilize hardware performance, making it suitable for projects with high performance requirements and professional developers, and is especially suitable for complex embedded application development. You can refer to the **[Working with C/C++](./C.md)** for initial setup; the tutorial provides detailed environment configuration steps and example programs.

- **Arduino IDE (Arduino Development)**: Arduino IDE is a convenient, flexible, and easy-to-use open-source electronic prototyping platform. Arduino boasts a large global user community, providing a vast amount of open-source code, project examples, and tutorials, as well as a wealth of library resources. These libraries encapsulate complex functionalities, allowing developers to quickly implement various features without delving into low-level details. It's ideal for rapid development and prototyping, significantly shortening development cycles. You can refer to the **[Working with Arduino](./Arduino.md)** for initial setup; the tutorial provides detailed environment configuration steps and example programs.

