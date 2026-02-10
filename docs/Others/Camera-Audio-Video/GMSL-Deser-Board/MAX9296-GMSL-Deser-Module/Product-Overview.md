---
sidebar_position: 1
title: MAX9296-GMSL-Deser-Module Product Description
slug: /MAX9296-GMSL-Deser-Module
id: MAX9296-GMSL-Deser-Module-Overview
product_family:
 - GMSL
product_series:
 - GMSL-Deser-Board
product_model:
 - MAX9296-GMSL-Deser-Module
---

# MAX9296-GMSL-Deser-Module

<div style={{maxWidth:500}}>
[![MAX9296-GMSL-Deser-Module 产品图](https://www.waveshare.com/img/devkit/accBoard/MAX9296-GMSL-DESER-MODULE/MAX9296-GMSL-DESER-MODULE-details-1.jpg)](https://www.waveshare.com/max9296-gmsl-deser-module.htm)
</div>

This is a GMSL camera expansion board featuring the MAX9296A deserializer. It supports connecting two GMSL camera inputs simultaneously to Raspberry Pi 5 or Jetson Orin Nano/NX mainboards. Software configuration allows compatibility with both GMSL1 and GMSL2 protocol interfaces. Utilizing the MAX9296A chip, it is designed for applications requiring high-bandwidth, low-latency video transmission. This expansion board is suitable for fields such as autonomous driving, machine vision, and intelligent security.

| SKU | Product | 
| --- | --- | 
| 33623 | MAX9296-GMSL-Deser-Module |

## Specifications

| Type | Parameter |
| :-----| :-----|
| **Deserializer** | MAXIM (ADI) MAX9296A |
| **Supported Mainboards** | Raspberry Pi 5 / Jetson Orin NX/Nano Developer Kits |
| **Supported Serializer Models** | MAX9295, MAX96717, MAX96705, etc. |
| **GMSL Input**| 2-Channel GMSL2 (GMSL1-Compatible) Camera |
| **Input Interface** | 2 × MATE_AX FAKRA Z Connectors |
| **Output Interface** | 22Pin CSI Interface |
| **Supported GMSL Camera Models** | ISX031, etc. |
| **Power Supply** | 5V |

## Hardware Specifications
### Interfaces
![Hardware Interfaces](./images/MAX9296-GMSL-DESER-MODULE-details-3.webp)

- **CSI Interface x2:** 2 x MIPI-4lanes 22Pin FFC/FPC connectors for connecting to Jetson Orin or Pi 5 mainboards
- **CFG Switch:** The CFG switch is used to configure default initial settings upon power-up, such as the serializer's I2C address and link rate. This configuration can be overwritten via software after power-up
- **FAKRA Z Connectors x2:** Used to connect GMSL cameras, providing POC 12V power
- **5V Power Interface:** Input 5V power supply, providing power to the driver board and cameras

### Dimensions
![Hardware Dimensions](./images/MAX9296-GMSL-DESER-MODULE-details-size.webp)

## Supported Camera Models

| Camera Model | Serializer | Manufacturer | Corresponding Driver |
| :-----: | :-----: | :-----: | :-----: |
| ISX031C-GMSL-Camera-H100 | Max96717F | Waveshare  | ISX031-GMSL-Camera-A |
| SG3S-ISX031C-GMSL2F-Hxx | Max96717F | Sensing | ISX031-GMSL-Camera-A |
|  | | | |