---
sidebar_position: 5
title: FAQ
slug: /ESP32-P4-WIFI6-Touch-LCD-X/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-P4-WIFI6-Touch-LCD-X
---

import Details from '@theme/Details';

# FAQ
<Details summary=" Q: How to check the ESP32-P4 chip version?" className="faq-details" open>
A: You can refer to the example below to obtain the version information of the chip.![](https://www.waveshare.net/w/upload/6/6f/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_17621418557813.png)
</Details>

<Details summary=" Q: What is the maximum camera resolution supported by ESP32-P4?" className="faq-details" open>
A: 2MP. The ESP32-P4 integrates an ISP and an H.264 encoder, which means that the raw data captured by the camera can be processed directly by the ISP and then efficiently compressed into H.264 format by the hardware encoder. And the ESP32-P4 can only support cameras with a maximum of 2 million pixels due to the maximum encoding performance of the H.264 encoder of 1080p@30fps.
</Details>

<Details summary=" Q: How to flash firmware onto the ESP32-C6?" className="faq-details" open>
:::warning
The ESP32-C6 ships with firmware by default. Please ensure the firmware you intend to flash is compatible and functional.
:::
A: When powering on, pull C6_IO9 pin low (to put the C6 into download mode) , and also put the P4 into download mode. Then you can flash firmware to the C6 via the C6_U0RXD and C6_U0TXD pins.
</Details>

<Details summary=" Q: Why do I get compilation errors after adding the Wi-Fi components?" className="faq-details" open>
A: This issue typically occurs when using the VS Code plugin. In some cases, there are bugs in the ESP-IDF installed by the VS Code plugin. The current solution is to switch to using the IDF tools for compilation and flashing.
Additionally, please check the versions of the specific components you are using.
</Details>

<Details summary=" Q: Are there example codes for other application scenarios?" className="faq-details" open>
A:

- During functionality testing, we have validated several features. Currently, there are developments such as using a Cat-4 module to provide network connectivity for the P4, or using the P4's MIPI-DSI to extend a host screen. However, for stability reasons, related example programs are not yet provided. They will be added to the wiki once the features and solutions are more mature.<br/>
- If you have great ideas or partially validated application scenarios, feel free to share them with us for evaluating feasible solutions.
</Details>

<Details summary=" Q: Can I develop using PlatformIO or MicroPython?" className="faq-details" open>
A:

- For stability, support for ESP32-P4 in PlatformIO requires the PlatformIO community to support the Arduino-esp32 SDK version 3.1x.
- During development, we have experimented with using MPY firmware for the ESP32-P4, which can run simple commands. However, this is still in the validation phase. Actual interfaces and peripheral applications are not yet fully adapted. Once adaptation is complete and stable, usage examples for ESP32-P4 in MicroPython will be released.
</Details>
