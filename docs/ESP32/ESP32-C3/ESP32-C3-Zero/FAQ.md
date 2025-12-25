---
sidebar_position: 5
title: FAQ
slug: /ESP32-C3-Zero/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-C3-Zero
  - ESP32-C3-Zero-M
  - ESP32-C3-Zero-Basic-Kit
---

import Details from '@theme/Details';

# Product FAQ

<Details summary="Q: Can the ESP32-C3-Zero be powered via pins?" className="faq-details" open>

A: Yes. When using an external power supply, you can input 3.7V~6V at the castellated hole marked with "5V".

</Details>


<Details summary="Q: Why is there no response after uploading a program to the ESP32-C3-Zero?" className="faq-details" open>

A: Press the Reset button to restart the device and check if there is any output.

</Details>


<Details summary="Q: How do I perform hardware debugging and flashing on the ESP32-C3-Zero? Do I just connect it to the computer via the Type-C port?" className="faq-details" open>

A: Yes. If flashing fails, hold down the BOOT button while connecting the device to the computer, and then release it.

</Details>


<Details summary="Q: Does the ESP32-C3-Zero support IPv6?" className="faq-details" open>

A: Yes, the ESP32-C3 supports IPv6 and provides IPv6 example programs.

</Details>

<Details summary="Q: Why are the colors displayed incorrectly when controlling the onboard RGB LED (WS2812) of the ESP32-C3-Zero (e.g., setting it to red results in green)?" className="faq-details" open>
  A: This is caused by a mismatch in the color data order. The color data format for the onboard LED of the ESP32-C3-Zero is RGB (Red-Green-Blue). To resolve this, please specify the color order parameter as RGB in the initialization settings of the driver library.
</Details>