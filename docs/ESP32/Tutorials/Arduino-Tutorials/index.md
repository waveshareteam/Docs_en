---
slug: /ESP32-Arduino-Tutorials
id: Arduino-Tutorial-Introduction
product_family:
  - ESP32
---

# ESP32 Arduino Getting Started

This tutorial series is based on the Waveshare [ESP32-S3-Zero Mini Development Board](https://www.waveshare.com/esp32-s3-zero.htm) and the Arduino IDE environment, aiming to help learners get started with ESP32 development. It is recommended to follow the chapters in order, but you can also choose specific chapters based on your interests.

:::tip[Important Note on Board Compatibility]
The core logic of this tutorial applies to all ESP32 development boards. However, all example code involving hardware operations is written for the [ESP32-S3-Zero Mini Development Board](https://www.waveshare.com/esp32-s3-zero.htm). To ensure a consistent learning experience, it is recommended to use a development board based on the **ESP32-S3** chip.

If you are using a different model of ESP32 development board, please note the following:

- **Different Pin Definitions**: Pin numbers and functional layouts will vary across boards.
- **Different Onboard Resources**: For example, your board may use LEDs with different pins or may not have onboard RGB LEDs.

**Before running any demo that interacts with hardware, be sure to check and modify the pin numbers in the code according to the pinout diagram of your specific development board to ensure the program runs correctly.**
:::

You can use any ESP32 development board you have on hand, paired with your own components, to follow along. If you wish to avoid the hassle of selecting accessories, we also provide the following learning kits, which include the core hardware required for this tutorial series:

- [**ESP32-XX-Basic-Kit-Acce**](https://www.waveshare.net/shop/ESP32-XX-Basic-Kit-Acce.htm): Prepare your own development board and use this kit for learning.
- [**ESP32-S3-Zero Basic Kit**](https://www.waveshare.com/esp32-xx-basic-kit.htm?sku=33356): Can be used to follow this tutorial directly. Example programs and wiring diagrams: [ESP32-S3-Zero-Basic-Kit-main.zip](https://files.waveshare.net/wiki/ESP32-S3-Zero-Basic-Kit/ESP32-S3-Zero-Basic-Kit-main.zip) ([GitHub](https://github.com/waveshareteam/ESP32-S3-Zero-Basic-Kit))
- [**ESP32-C3-Zero Basic Kit**](https://www.waveshare.com/esp32-xx-basic-kit.htm?sku=33358): Requires wiring adjustments. Example programs and wiring diagrams: [ESP32-C3-Zero-Basic-Kit-main.zip](https://files.waveshare.net/wiki/ESP32-C3-Zero-Basic-Kit/ESP32-C3-Zero-Basic-Kit-main.zip) ([GitHub](https://github.com/waveshareteam/ESP32-C3-Zero-Basic-Kit))
- [**ESP32-C6-Zero Basic Kit**](https://www.waveshare.com/esp32-xx-basic-kit.htm?sku=33357): Requires wiring adjustments. Example programs and wiring diagrams: [ESP32-C6-Zero-Basic-Kit-main.zip](https://files.waveshare.net/wiki/ESP32-C6-Zero-Basic-Kit/ESP32-C6-Zero-Basic-Kit-main.zip) ([GitHub](https://github.com/waveshareteam/ESP32-C6-Zero-Basic-Kit))

---

- [Section 0 Get to Know ESP32](/docs/ESP32/Tutorials/Getting-To-Know-Esp32.md)
- [Section 1 Install and Configure Arduino IDE](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md)
- [Section 2 Arduino Basics](/docs/ESP32/Tutorials/Arduino-Tutorials/02-Arduino-Basics.md)
- [Section 3 Digital Output/Input](/docs/ESP32/Tutorials/Arduino-Tutorials/03-Digital-IO.md)
- [Section 4 Analog Input](/docs/ESP32/Tutorials/Arduino-Tutorials/04-Analog-Input.md)
- [Section 5 Pulse Width Modulation (PWM)](/docs/ESP32/Tutorials/Arduino-Tutorials/05-PWM.md)
- [Section 6 Serial Communication (UART)](/docs/ESP32/Tutorials/Arduino-Tutorials/06-UART-Communication.md)
- [Section 7 I2C Communication](/docs/ESP32/Tutorials/Arduino-Tutorials/07-I2C-Communication.md)
- [Section 8 SPI Communication](/docs/ESP32/Tutorials/Arduino-Tutorials/08-SPI-Communication.md)
- [Section 9 Wi-Fi Networking Basics](/docs/ESP32/Tutorials/Arduino-Tutorials/09-WiFi-Networking.md)
- [Section 10 Web Server](/docs/ESP32/Tutorials/Arduino-Tutorials/10-Web-Server.md)
- [Section 11 Bluetooth Communication](/docs/ESP32/Tutorials/Arduino-Tutorials/11-Bluetooth-Communication.md)
- [Section 12 LVGL Graphic Interface Development](/docs/ESP32/Tutorials/Arduino-Tutorials/12-LVGL.md)
- [Section 13  Comprehensive Projects](/docs/ESP32/Tutorials/Arduino-Tutorials/13-Fun-Project.md)
  - [Traffic Light](/docs/ESP32/Tutorials/Arduino-Tutorials/13-1-Traffic-Light.md)
  - [SOS](/docs/ESP32/Tutorials/Arduino-Tutorials/13-2-SOS.md)
  - [Motion Sensor Light](/docs/ESP32/Tutorials/Arduino-Tutorials/13-3-Presence-Light.md)
  - [LED Strip](/docs/ESP32/Tutorials/Arduino-Tutorials/13-4-LED-Strip.md)
  - [Progress Bar](/docs/ESP32/Tutorials/Arduino-Tutorials/13-5-Progress-Bar.md)
  - [Weather Display](/docs/ESP32/Tutorials/Arduino-Tutorials/13-6-Weather-Display.md)

