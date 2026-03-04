---
sidebar_position: 0
title: LCD Displays
slug: /LCD
id: LCD-Overview
---

# LCD Displays
LCD (Liquid Crystal Display) is a core category within Waveshare Electronics' display product line, widely used in embedded development, industrial control, human-machine interfaces (HMI), consumer electronics, and educational maker fields.

This page serves as an entry point for the LCD category, introducing the LCD product architecture, technical features, and selection guidance. For specific models and usage instructions, please refer to the corresponding sub-pages.

## Display Interface Comparison Table

| Interface Type | Applicable Screens | Features | Typical Applications | Supported Platforms |
|----------|----------|------|----------|----------|
| SPI            | LCD / OLED / e-Paper | Serial communication, low IO pin count, low cost, simple wiring | Small-sized embedded modules, instruments, status display, low-power display | MCU, Arduino, ESP32, Raspberry Pi |
| I²C      | LCD / OLED / e-Paper | Low communication speed, low IO pin count, simple wiring | Small character displays, status display, teaching experiments | MCU, Arduino, low-speed embedded systems |
| DPI | LCD / OLED | Parallel data interface, high refresh rate, smooth display | High frame rate graphical interfaces, industrial HMI | Embedded Linux systems, industrial equipment |
| DSI | LCD | High-speed serial interface, compact | High-resolution small screens, all-in-one devices | Single-board computers, embedded terminals |
| HDMI     | LCD / OLED | Standard HDMI video input, plug-and-play, optional USB touch | PC / Raspberry Pi / Jetson platforms, desktop secondary displays | Windows, Linux, Raspberry Pi, embedded systems |

## Size Range

Waveshare LCD products cover a range from small to large sizes:

| Size Range | Typical Applications |
|----------|----------|
| 1"～4.3"   | Embedded control, instruments |
| 5"～7"   | HMI control panels |
| 8"～10.1"| Industrial equipment interfaces |
| 13.3"+   | Desktop displays, portable monitors |


## Selection Guide

When selecting an LCD product, key considerations should include:

1. The interface type of the main controller platform  
2. Required resolution and screen size  
3. Whether touch functionality is needed  
4. Usage environment (indoor/outdoor/industrial)  
5. Mounting structure requirements  
6. Power supply method  


This page is a general overview of the LCD category. For specific model parameters, wiring methods, driver instructions, and configuration tutorials, please refer to the corresponding sub-category pages or product pages. For bulk customization needs, please contact the technical support team.