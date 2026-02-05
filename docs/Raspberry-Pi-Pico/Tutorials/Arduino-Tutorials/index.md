---
slug: /Raspberry-Pi-Pico-Arduino-Tutorial
id: Arduino-Tutorial-Introduction
product_family:
  - Raspberry-Pi-Pico
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Image Reference -->
import ImgDownloadArduinoIDE from './images/01-Download-Arduino-IDE.webp';
import ImgArduinoInit from './images/01-Arduino-Init.webp';
import ImgOpenArduinoPreference from './images/01-Open-Arduino-Preference.webp';
import ImgArduinoPreferenceLanguage from './images/01-Arduino-Preference-Language.webp';
import ImgArduinoAddPico from './images/01-Arduino-Configuration-1.webp';
import ImgArduinoInstallPico from './images/01-Arduino-Configuration-2.webp';
import ImgArduinoUpload1 from './images/01-Arduino-Upload-1.gif';
import ImgArduinoUpload2 from './images/01-Arduino-Upload-2.webp';
import ImgArduinoUpload3 from './images/01-Arduino-Upload-3.webp';
import ImgArduinoUpload4 from './images/01-Arduino-Upload-4.webp';
import ImgArduinoUpload5 from './images/01-Arduino-Upload-5.webp';

# Raspberry Pi Pico Arduino Getting Started

> This tutorial introduces Arduino and guides you through setting up the Arduino development environment for Pico.

:::tip[Important Note: Development Board Compatibility]
The core logic of this tutorial applies to all RP series development boards. However, all operational steps are explained using the [**Raspberry Pi Pico**](https://www.waveshare.com/raspberry-pi-pico.htm?sku=19310) as an example. If you are using a development board of another model, please modify the corresponding settings according to the actual situation.
:::

## 1. What is Arduino IDE 

The Arduino IDE is an open-source development environment. In addition to supporting Arduino microcontrollers, it is also compatible with various third-party development boards, including the Raspberry Pi Pico, enabling developers to conveniently write and upload code to these powerful chips for various projects. It boasts a rich collection of libraries and example code and is widely used in prototyping and education. The following sections will explain how to install and use the Arduino IDE for development.

## 2. Download and Install Arduino IDE 

1. Go to [Arduino official website](https://www.arduino.cc/en/software/) to download the Arduino IDE installer.

   [![DownloadArduinoIDE](./images/01-Download-Arduino-IDE.webp)](https://www.arduino.cc/en/software/)

2. Run the installer to install the Arduino IDE. It is recommended to use the default settings during installation and choose a path containing **only English characters**.

   :::warning
   An installation path containing special characters may cause exceptions.
   :::

## 3. Set up Arduino IDE

1. Start Arduino IDE after installation.

2. Upon the first launch, the IDE may automatically download and install core library files and drivers. If the operating system prompts for driver installation or network security permissions, it is recommended to allow them. The output window information shown in the figure below indicates the installation process and is normal; no action is required.

   <div style={{maxWidth:500}}> <img src={ImgArduinoInit}/></div>

3. The Arduino IDE displays the English interface by default, but supports switching to other languages. Click "File -> Preferences" to open the settings.

   <div style={{maxWidth:500}}> <img src={ImgOpenArduinoPreference}/></div>

   In the settings interface, find the "Language" option, select your preferred language, and then click "OK". The Arduino IDE will automatically restart and switch to the selected language interface.

   <div style={{maxWidth:500}}> <img src={ImgArduinoPreferenceLanguage}/></div>

4. In addition, you can also adjust the interface scale, font size, theme style, and default save location of sketches(program files) in "Preferences".

## 4. Install RP Series Development Board Libraries

To develop for RP series boards using the Arduino IDE, you need to add the relevant configuration for RP series boards and install the related libraries.

- Open "File" -> "Preferences", find "Additional Board Manager Address" in the "Settings" interface, paste the following link and click OK:

   :::tip
   This link includes configurations for RP2040, RP2350, and other board models. For the latest board files, please visit **[arduino-pico](https://github.com/earlephilhower/arduino-pico)**
   :::

   ```
   https://github.com/earlephilhower/arduino-pico/releases/download/4.5.2/package_rp2040_index.json
   ```
   <div style={{maxWidth:500}}> <img src={ImgArduinoAddPico}/></div>

   :::warning
   If you already have an ESP32 board URL, you can separate the URLs with a comma, as shown below:
   :::

   ```
   https://dl.espressif.com/dl/package_esp32_index.json,https://github.com/earlephilhower/arduino-pico/releases/download/4.5.2/package_rp2040_index.json
   ```

- Open the "Board Manager", search for "pico" and install it. After installation, restart the Arduino IDE to use it

   <div style={{maxWidth:500}}> <img src={ImgArduinoInstallPico}/></div>

## 5. First Program Upload

1. Hold down the **BOOTSET** button on the Pico board, connect the Pico to your computer via Micro USB, and release the button after a removable disk is recognized.

   :::tip
   Development boards with the RP2040 chip will be recognized as **RPI-RP2**, while those with the RP2350 chip will be recognized as **RP2350**.
   :::

   <div style={{maxWidth:800}}> <img src={ImgArduinoUpload1}/></div>

2. Download the example program and open the path:

   "File" -> "Examples" -> "01.Basics" -> "Blink"

3. Click "Tools" -> "Port", and note the existing COM ports (do not select one yet).

   <div style={{maxWidth:500}}> <img src={ImgArduinoUpload2}/></div>
   
4. Connect the development board with a USB cable. Go to "Tools" -> "Port" again. For the first connection, select the **UF2 Board**.

   <div style={{maxWidth:500}}> <img src={ImgArduinoUpload3}/></div>
   
5. Click "Tools" -> "Board" -> "Raspberry Pi Pico", and select the corresponding model based on your development board (e.g., Raspberry Pi Pico, Raspberry Pi Pico 2, etc.).

   <div style={{maxWidth:500}}> <img src={ImgArduinoUpload4}/></div>

6. After the settings are complete, click the **➡** button in the top-left corner to flash the program.

   <div style={{maxWidth:500}}> <img src={ImgArduinoUpload5}/></div>

7. After the flashing is complete, click "Tools" -> "Port" again and connect to the newly added COM port.
