---
sidebar_position: 5
title: FAQ
slug: /ESP32-S3-Zero/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-S3-Zero
  - ESP32-S3-Zero-M
  - ESP32-S3-Zero-Basic-Kit
---

import Details from '@theme/Details';

# Product FAQ

<Details summary="Q: Can the ESP32-S3-Zero be powered via pins?" className="faq-details" open>
  A: Yes, you can use the 5V pin for power supply.
</Details>

<Details summary="Q: Flashing the ESP32-S3-Zero failed?" className="faq-details" open>
  A: If flashing fails, hold down the BOOT button while connecting to the computer, then release it, and proceed with flashing again.
</Details>

<Details summary="Q: Is there a version of the ESP32-S3-Zero that supports CAN?" className="faq-details" open>
  A: The ESP32-S3 has a CAN controller but requires an external transceiver to implement CAN communication. This needs to be developed by the user.
</Details>

<Details summary="Q: There are two rows of female headers reserved on the PCB. What is the exact spacing between these two rows in mm?" className="faq-details" open>
  A: The exact spacing between the two rows of female headers is 15.24 mm.
</Details>

<Details summary="Q: If powered by 5V, how much current (mA) is required?" className="faq-details" open>
  A: A minimum of 500 mA.
</Details>

<Details summary="Q: Can the ESP32-S3-Zero connect to an external microphone and speaker?" className="faq-details" open>
  A: A speaker requires an amplifier and cannot be connected directly to a GPIO pin, so direct speaker connection is not supported. The microphone is I2S-driven and can be connected directly.
</Details>

<Details summary="Q: Does the ESP32-S3-Zero have touch pins?" className="faq-details" open>
  A: Yes. Please refer to [the manual](https://documentation.espressif.com/esp32-s3_technical_reference_manual_en.pdf#sensor) for details.

  ![ESP32 S3 Touch Pin](./images/ESP32-S3-Touch-Pin.webp)
</Details>

<Details summary="Q: How many PWM channels does the ESP32-S3-Zero have?" className="faq-details" open>
  A: It includes two MCPWM units, which can be used to drive digital motors and smart lights. For details, please refer to [this link](https://www.espressif.com.cn/sites/default/files/documentation/esp32-s3_datasheet_en.pdf).
</Details>

<Details summary="Q: Can the 1.47-inch LCD Module and 1.69-inch LCD Module be used with this board?" className="faq-details" open>
  A: Yes.
</Details>

<Details summary="Q: Does the ESP32-S3-Zero have a built-in download circuit?" className="faq-details" open>
  A: No.
</Details>

<Details summary="Q: What is the maximum operating temperature for the ESP32-S3-Zero?" className="faq-details" open>
  A: The recommended ambient temperature for the chip is –40 to 85 degrees Celsius.
</Details>

<Details summary="Q: What is the data bandwidth for communication on the ESP32-S3-Zero?" className="faq-details" open>
  A: 40 MHz.
</Details>

<Details summary="Q: When controlling the onboard RGB LED (WS2812) on the ESP32-S3-Zero, why are the colors displayed incorrectly (e.g., setting red shows green)?" className="faq-details" open>
  A: This is due to a mismatch in the color data order. The color data format for the onboard LED on the ESP32-S3-Zero is RGB (Red-Green-Blue). Please specify the color order parameter as RGB in the initialization settings of the driver library to resolve this.
</Details>