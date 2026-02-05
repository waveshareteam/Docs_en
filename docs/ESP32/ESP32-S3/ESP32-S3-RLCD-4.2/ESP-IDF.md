---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-S3-RLCD-4.2/Development-Environment-Setup-ESP-IDF
product_family:
  - ESP32
product_model:
  - ESP32-S3-RLCD-4.2
  - ESP32-S3-RLCD-4.2-EN
---

<!-- Example-related Image References -->

import esp32S3RLCD4_2ESPIDFExample1 from './images/ESP-IDF-Example-1.webp';
import esp32S3RLCD4_2ESPIDFExample2 from './images/ESP-IDF-Example-2.webp';
import esp32S3RLCD4_2ESPIDFExample3 from './images/ESP-IDF-Example-3.webp';
import esp32S3RLCD4_2ESPIDFExample4 from './images/ESP-IDF-Example-4.webp';
import esp32S3RLCD4_2ESPIDFExample5 from './images/ESP-IDF-Example-5.webp';
import esp32S3RLCD4_2ESPIDFExample6 from './images/ESP-IDF-Example-6.webp';
import esp32S3RLCD4_2ESPIDFExample7 from './images/ESP-IDF-Example-7.webp';
import esp32S3RLCD4_2ESPIDFExample8 from './images/ESP-IDF-Example-8.webp';
import esp32S3RLCD4_2ESPIDFExample9 from './images/ESP-IDF-Example-9.webp';
import esp32S3RLCD4_2ESPIDFExample10_1 from './images/ESP-IDF-Example-10-1.webp';
import esp32S3RLCD4_2ESPIDFExample10_2 from './images/ESP-IDF-Example-10-2.webp';
import esp32S3RLCD4_2ESPIDFExample10_3 from './images/ESP-IDF-Example-10-3.webp';

import EspidfTutorialIntro from '@site/docs/ESP32/snippets/EspidfTutorialIntro.mdx';
import EspidfSetup from '@site/docs/ESP32/snippets/EspidfSetup.mdx';

# ESP-IDF

This chapter includes the following sections; 

- [ESP-IDF Getting Started and Quick Configuration](#espidf-getting-started-tutorial)
- [Setting Up Development Environment](#esp-idf-setup)
- [Demo](#demo)

<EspidfTutorialIntro />

## Setting up the Development Environment{#esp-idf-setup}

:::info
For the ESP32-S3-RLCD-4.2 development board, you need to use ESP-IDF V5.5.0 or higher.
:::

<EspidfSetup />


## Demo

The ESP-IDF demo is located in the `ESP-IDF` directory of the [example](https://github.com/waveshareteam/ESP32-C6-Touch-LCD-1.83/tree/main/examples).
| Demo | Basic Program Description | Dependency Library|
| :-: | :-: | :-: |
| 01_WIFI_AP | Set to AP mode to obtain the IP address of the access device | - |
| 02_WIFI_STA | Set to STA mode to connect to WiFi and obtain an IP address | - |
| 03_ADC_Test | Get the voltage value of the lithium battery | - |
| 04_I2C_PCF85063 | Print real-time time of RTC chip | SensorLib |
| 05_I2C_SHTC3 | Print temperature and humidity sensor data | - |
| 06_SD_Card | Load and display the information of the TF card | - |
| 07_Audio_Test | Play the sound recorded by the microphone through the speaker | LVGL V8.3.11 |
| 08_LVGL_V8_Test | LVGLV8 demo | LVGL V8.3.11 |
| 09_LVGL_V9_Test | LVGLV9 demo | LVGL V9.3.0 |
| 10_FactoryProgram | Comprehensive demo | LVGL V8.3.11|

### 01_WIFI_AP

**Demo Description**

- This demo can set the development board as a hotspot, allowing phones or other devices in STA mode to connect to the development board.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- In the file `softap_example_main.c`, find `SSID` and `PASSWORD`, and then your phone or other device in STA mode can use the SSID and PASSWORD to connect to the development board.

  ```cpp
  #define EXAMPLE_ESP_WIFI_SSID      "waveshare_esp32"
  #define EXAMPLE_ESP_WIFI_PASSWORD      "wav123456"
  ```

**Expected Result**

- After flashing the program, open the serial terminal, if the device is successfully connected to the hotspot, the MAC address and IP address of the device will be output, as shown in the figure:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample1} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 02_WIFI_STA

**Demo Description**

- This example can configure the development board as a STA device to connect to a router, thereby enabling access to the system network.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- In the file `esp_wifi_bsp.c`, find `ssid` and `password`, then modify them to the SSID and Password of an available router in your current environment.

  ```cpp
  wifi_config_t wifi_config = {
    .sta = {
    	.ssid = "PDCN",
    	.password = "1234567890",
    },
  };
  ```

**Expected Result**

- After flashing the program, open the serial terminal, if the device is successfully connected to the hotspot, the IP address obtained will be output, as shown in the figure:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample2} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 03_ADC_Test

**Demo Description**

- The analog voltage connected through the GPIO is converted to digital by the ADC, and then the actual lithium battery voltage is calculated and printed to the terminal.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `Adc_PortInit(void)`: Initializes ADC1, including creating an ADC one-time trigger unit and configuring channel 3 for ADC1
- `float Adc_GetBatteryVoltage(int *data)`: Reads the value from ADC1 channel 3 and returns the actual voltage value.
- `uint8_t Adc_GetBatteryLevel(void)`: Returns the battery percentage.
- `void Adc_LoopTask(void *arg)`: Creates an ADC task that reads the ADC value and prints it to the serial port every second.

**Expected Result**

- After the program is compiled and downloaded, you can view the printed ADC values and voltage output by opening the Serial Monitor, as shown in the following image:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample3} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 04_I2C_PCF85063

**Demo Description**

- Through the I2C protocol, initialize the PCF85063 chip, set the time, and then periodically read the time and print it to the terminal

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void Rtc_LoopTask(void *arg)`: Create an RTC task to implement the RTC function, read the clock of the RTC chip every 1 second, and then output it to the terminal.

**Expected Result**

- After the program is compiled and downloaded, open the serial port monitoring to see the RTC time of the printout, as shown in the following figure:<br />

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample4} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 05_I2C_STHC3

**Demo Description**

- Initialize the SHTC3 chip through the I2C protocol, and then print the temperature and humidity information read every 1 second to the terminal

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void Shtc3_LoopTask(void *arg)`: Create a SHTC3 sensor task that obtains temperature and humidity at intervals of 1 second.

**Expected Result**

- Open the serial port monitor, you can see the printed temperature and humidity data, as shown in the figure below:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample5} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 06_SD_Card

**Demo Description**

- Drive the TF card through SDMMC, and print the TF card information to the terminal after successfully mounting.

**Hardware Connection**

- Install a FatFs-formatted into the board before powering on

**Code Analysis**

- `Fatfs_LoopTask(void *arg)`: A task to test TF card read and write functionality. You need to uncomment the `#define sdcard_write_Test` macro definition.

**Expected Result**

- Click on the serial port monitoring device, you can see the output information of the TF card, as shown in the figure below:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample6} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 07_Audio_Test

**Demo Description**

- Demonstrates how to get data from the microphone and then play it through the speaker

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `CodecPort_SetInfo("es8311 & es7210",1,16000,2,16)`: Sets the sampling rate, number of channels, and bit depth of the Codec chip.
- `CodecPort_SetSpeakerVol(100)`: Set the playback gain to 100.
- `CodecPort_SetMicGain(35)`: Set the microphone gain to 35.
- `Codec_LoopTask(void *arg)`: Codec task, which implements recording, playback, and other functions.

**Expected Result**

- After the program is flashed, as shown in the figure:

  <div style={{maxWidth: 500}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample7} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

  :::tip
  1. Double-click the BOOT button to enter recording mode, speak into the MIC, and it will automatically end after 3 seconds
  2. Click the BOOT button to play the sound you just recorded
  3. Double-click the KEY button to play a piece of music
  4. Click the KEY button to interrupt music playback
  :::

### 08_LVGL_V8_Test

**Demo Description**

- Demonstrates how to display images using LVGL V8, helping users get started quickly with LVGL V8.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

  ```cpp
  /*Create an IMG1 control*/
  ui->screen_img_1 = lv_img_create(ui->screen);
  lv_obj_add_flag(ui->screen_img_1, LV_OBJ_FLAG_CLICKABLE);
  lv_img_set_src(ui->screen_img_1, &_ein_alpha_400x300);
  lv_img_set_pivot(ui->screen_img_1, 50,50);
  lv_img_set_angle(ui->screen_img_1, 0);
  lv_obj_set_pos(ui->screen_img_1, 0, 0);
  lv_obj_set_size(ui->screen_img_1, 400, 300);
  /*Create an IMG1 control*/
  ui->screen_img_2 = lv_img_create(ui->screen);
  lv_obj_add_flag(ui->screen_img_2, LV_OBJ_FLAG_CLICKABLE);
  lv_img_set_src(ui->screen_img_2, &_2_alpha_400x300);
  lv_img_set_pivot(ui->screen_img_2, 50,50);
  lv_img_set_angle(ui->screen_img_2, 0);
  lv_obj_set_pos(ui->screen_img_2, 0, 0);
  lv_obj_set_size(ui->screen_img_2, 400, 300);
  lv_obj_add_flag(ui->screen_img_2, LV_OBJ_FLAG_HIDDEN);
  ```

**Expected Result**

- After the program is flashed, it is displayed alternately at intervals of 1.5 seconds, as shown in the figure:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample8} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 09_LVGL_V9_Test

**Demo Description**

- Demonstrates how to display images using LVGL V9, helping users get started quickly with LVGL V9.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

  ```cpp
  /*Create an IMG1 control*/
  ui->screen_img_1 = lv_image_create(ui->screen);
  lv_obj_set_pos(ui->screen_img_1, 0, 0);
  lv_obj_set_size(ui->screen_img_1, 400, 300);
  lv_obj_add_flag(ui->screen_img_1, LV_OBJ_FLAG_CLICKABLE);
  lv_image_set_src(ui->screen_img_1, &_ein_RGB565A8_400x300);
  lv_image_set_pivot(ui->screen_img_1, 50,50);
  lv_image_set_rotation(ui->screen_img_1, 0);
  /*Create an IMG1 control*/
  ui->screen_img_2 = lv_image_create(ui->screen);
  lv_obj_set_pos(ui->screen_img_2, 0, 0);
  lv_obj_set_size(ui->screen_img_2, 400, 300);
  lv_obj_add_flag(ui->screen_img_2, LV_OBJ_FLAG_HIDDEN);
  lv_obj_add_flag(ui->screen_img_2, LV_OBJ_FLAG_CLICKABLE);
  lv_image_set_src(ui->screen_img_2, &_2_RGB565A8_400x300);
  lv_image_set_pivot(ui->screen_img_2, 50,50);
  lv_image_set_rotation(ui->screen_img_2, 0);
  ```

**Expected Result**

- After the program is flashed, it is displayed alternately at intervals of 1.5 seconds, as shown in the figure:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample9} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 10_FactoryProgram

**Demo Description**

- The driver board integrates all hardware components and provides comprehensive examples, enabling users to quickly understand the product.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

  ```cpp
  sdcardPort = new CustomSDPort("/sdcard"); // Initialize sdcard
  Adc_PortInit();                           // Initialize Adc
  Custom_ButtonInit();                      // Initialize buttons
  Rtc_Setup(&I2cbus,0x51);                  // Initialize RTC
  Rtc_SetTime(2026,1,5,14,30,30);      // Set RTC time
  shtc3port = new Shtc3Port(I2cbus);         // Initialize SHTC3
  espwifi_init();                           // Initialize WiFi STA mode
  CodecGroups = xEventGroupCreate();
  codecport = new CodecPort(I2cbus,"S3_RLCD_4_2"); // Initialize Codec
  codecport->CodecPort_SetInfo("es8311 & es7210",1,16000,2,16);
  codecport->CodecPort_SetSpeakerVol(100);         // Set the speaker gain
  codecport->CodecPort_SetMicGain(35);             // Set the microphone gain
  ```

**Expected Result**

- After the program is flashed, the main interface is displayed, as shown in the figure:

  <div style={{maxWidth: 500}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample10_1} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>
  :::tip
  1. Long press the KEY button to enter the image display interface
  2. Long press the BOOT button to enter the music playback interface
  :::

- Image display interface, as shown in the figure:

  <div style={{maxWidth: 500}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample10_3} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>
  :::tip
  1. Long press the KEY button to return to the main interface
  :::

- Music playback interface, as shown in the figure:

  <div style={{maxWidth: 500}}>
  		<img 
    		src={esp32S3RLCD4_2ESPIDFExample10_2} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>
  :::tip
  1. Double-click the BOOT button to enter recording mode, speak into the MIC, and it will automatically end after 3 seconds
  2. Click the BOOT button to play the sound you just recorded
  3. Double-click the KEY button to play a piece of music
  4. Click the KEY button to interrupt music playback
  5. Long press the BOOT button to go back to the interface
  :::