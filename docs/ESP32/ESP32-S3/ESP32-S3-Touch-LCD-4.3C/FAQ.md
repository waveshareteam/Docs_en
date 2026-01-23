---
sidebar_position: 4
title: FAQ
slug: /ESP32-S3-Touch-LCD-4.3C/FAQ
product_family:
  - ESP32
product_model:
  - ESP32-S3-Touch-LCD-4.3C
---

import Details from '@theme/Details';

# FAQ

<Details summary="Q: After flashing an Arduino program for RGB screen display on ESP32-S3-Touch-LCD-4.3C, there is no response?" className="faq-details" open>
A: If the screen shows no response after flashing the code, check if the Arduino IDE -> Tools settings are correctly configured: Select the corresponding Flash (16MB) and enable PSRAM (8MB OPI).
</Details>

<Details summary="Q: Compilation fails/errors when flashing the Arduino RGB screen program for ESP32-S3-Touch-LCD-4.3C?" className="faq-details" open>
A: Check if the required libraries are installed. Please refer to the [Library Installation Steps](https://www.waveshare.com/wiki/Arduino_Library_Manager_Tutorial).
</Details>

<Details summary="Q: Why do I get an error about missing lv_conf.h when flashing an LVGL program, even though all libraries are installed?" className="faq-details" open>
A: This can be caused by Chinese characters in the library installation path, which prevents the library files from being found. Also, check if the lv_conf.h file is placed in the libraries folder of your Arduino directory.
</Details>

<Details summary="Q: Why is there no display on the screen after successful Arduino flashing?" className="faq-details" open>
A: You can refer to the following steps to run the example for comparison:
1. Before running the program, install the [required libraries](https://www.waveshare.com/wiki/Arduino_Library_Manager_Tutorial).
2. Install libraries [video reference](https://files.waveshare.com/wiki/common/ESP32-S3-7-lib.zip).
3. Run and flash the [example programs](./Arduino.md#Demo).
</Details>

<Details summary="Q: When compiling an example in Arduino IDE, I get a fatal error: esp_memory_utils.h: No such file or directory" className="faq-details" open>
A: Please install Arduino esp32 version ≥ v3.0.2 to resolve this issue.
</Details>

<Details summary="Q: What to do if ESP-IDF flashing fails?" className="faq-details" open>
A: 1. You can set the development board to download mode. Power off completely, press and hold the Boot button and power it on again, then release it, enter the download mode, re-flash the program, reset and run.
2. Try clicking the fullclean button in the status bar and recompile/flash. This function cleans all compiled content, useful when the project compilation reports errors or other operations have polluted the build content.
</Details>

<Details summary="Q: How to handle not finding the AppData folder?" className="faq-details" open>
A: Some AppData folders are hidden by default. You can set them to be visible:
- **English System**: Explorer -> View -> Check "Hidden items"
- **Chinese System**: File Explorer -> View -> Show -> Check "Hidden items"
</Details>

<Details summary="Q: How to check the COM port?" className="faq-details" open>
A: 1. Press <kbd>Windows</kbd> + <kbd>R</kbd> to open the Run dialog, type `devmgmt.msc` and press Enter to open Device Manager.
2. Expand the "Ports (COM & LPT)" section. All COM ports and their current status will be listed here.
</Details>

<Details summary="Q: What to do if the first program compilation is extremely slow?" className="faq-details" open>
A: The first compilation being very slow is normal. Please wait patiently.
</Details>

<Details summary="Q: The program flashes successfully, but nothing is shown on the screen. How to solve this?" className="faq-details" open>
A: If the development board has a reset button, press it. If there is no reset button, power it on again.
</Details>

<Details summary="Q: How to use SquareLine Studio to design interfaces?" className="faq-details" open>
A: Refer to the [SquareLine Studio Tutorial](https://www.waveshare.com/wiki/Waveshare_SquareLine_Studio).
</Details>

<Details summary="Q: The compiler cannot find the common folder during compilation?" className="faq-details" open>
A: This is caused by inconsistencies between old and new IDF versions. Synchronize to the latest IDF version.
</Details>
