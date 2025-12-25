---
sidebar_position: 5
title: Product FAQ
slug: /ESP32-C6-Zero/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-C6-Zero
  - ESP32-C6-Zero-M
  - ESP32-C6-Zero-Basic-Kit
---

import Details from '@theme/Details';

# Product FAQ

<Details summary="Q: The module keeps resetting, and the recognition status flashes in the Device Manager?" className="faq-details" open>

A: This situation may be caused by a blank Flash leading to USB port instability. You can long-press the **BOOT** button, simultaneously press the **RESET** button, then release **RESET**, and finally release the **BOOT** button. At this point, the module will enter download mode, and flashing the firmware (program) will resolve the issue.

</Details>

<Details summary="Q: After downloading a program to the module and trying to download again, sometimes the serial port cannot be connected, or the flashing fails?" className="faq-details" open>

Method 1: Press the reset button for more than 1 second, wait for the PC to re-recognize the device, and then download again.  
Method 2: Long-press the **BOOT** button, simultaneously press the **RESET** button, then release **RESET**, and finally release the **BOOT** button. At this point, the module will enter download mode, which can solve most download failure issues.

</Details>

<Details summary="Q: No ESP option appears at the bottom during environment setup or project creation?" className="faq-details" open>

A: Press **F1** in VSCode, search for **Espressif IDF**. If it shows as an untrusted extension, set it to trusted.

</Details>

<Details summary="Q: After switching to the same ESP model, flashing the program results in runtime faults?" className="faq-details" open>

A: Please re-select the COM port and target driver object after switching the ESP, then compile and flash again.

</Details>

<Details summary="Q: After the module is powered on, the recognized serial device and USB port keep resetting and restarting?" className="faq-details" open>

A: Check if the USB port supply voltage is lower than 5V. Generally, the USB port supply voltage should be above 4.9V. Both USB ports of the module can be used normally. If it is lower than 4.9V, insufficient power supply may occur, causing the USB port to disconnect. In this case, please use a USB port with sufficient voltage.

</Details>

<Details summary="Q: Why are the colors displayed incorrectly when controlling the ESP32-C6-Zero onboard color LED (WS2812) (e.g., setting red but displaying green)?" className="faq-details" open>
  A: This is due to a mismatch in the color data order. The color data format for the ESP32-C6-Zero onboard LED is RGB (Red-Green-Blue). Please specify the color order parameter as RGB in the initialization settings of the driver library to resolve this.
</Details>