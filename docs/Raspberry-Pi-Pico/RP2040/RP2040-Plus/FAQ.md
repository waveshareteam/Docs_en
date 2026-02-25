---
toc_max_heading_level: 4
sidebar_position: 5
title: FAQ
slug: /RP2040-Plus/FAQ
product_family:
  - Raspberry-Pi-Pico
product_model:
  - RP2040-Plus
---

import Details from '@theme/Details';

# FAQ

<Details summary="Q: I purchased a 4M/16M version, but after flashing the MicroPython firmware, why is only 1.4M of memory available?" className="faq-details" open>
  A: The official firmware has not been updated; it is still the firmware compiled for 2M of memory. Please use the corresponding firmware provided below:
    1. 4M: [RP2040-Plus 4M MicroPython Firmware](https://files.waveshare.com/wiki/common/Waveshare-RP2040-PLUS-4MB.zip)
    2. 16M: [RP2040-Plus 16M MicroPython Firmware](https://files.waveshare.com/wiki/common/Waveshare-RP2040-PLUS-16MB.zip)
</Details>

<Details summary="Q: What common issues and precautions might be encountered during use?" className="faq-details" open>
  A: Please refer to the official manual: [Pico FAQ](https://files.waveshare.com/wiki/common/Raspberry-pi-pico-faq.pdf)
</Details>

<Details summary="Q: Abnormal readings when an IO pin is set as input?" className="faq-details" open>
  A: The pins configured as inputs must be initialized to either a high or low state.
</Details>

<Details summary="Q: Device not recognized?" className="faq-details" open>
  A: Try using a different USB cable or USB port and reconnect.
</Details>