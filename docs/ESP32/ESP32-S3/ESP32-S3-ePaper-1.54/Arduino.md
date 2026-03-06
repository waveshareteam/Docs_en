---
sidebar_position: 2
title: Working with Arduino
slug: /ESP32-S3-ePaper-1.54/Development-Environment-Setup-Arduino
product_family:
  - ESP32
product_model:
  - ESP32-S3-ePaper-1.54
  - ESP32-S3-ePaper-1.54-EN
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Details from '@theme/Details';
import ArduinoTutorialIntro from '@site/docs/ESP32/snippets/ArduinoTutorialIntro.mdx';

<!-- Example-related Image References -->
import esp32S3ePaper1_54ArduinoExample1 from './images/Arduino-Example-1.webp';
import esp32S3ePaper1_54ArduinoExample2 from './images/Arduino-Example-2.webp';
import esp32S3ePaper1_54ArduinoExample3 from './images/Arduino-Example-3.webp';
import esp32S3ePaper1_54ArduinoExample4 from './images/Arduino-Example-4.webp';
import esp32S3ePaper1_54ArduinoExample5 from './images/Arduino-Example-5.webp';
import esp32S3ePaper1_54ArduinoExample6 from './images/Arduino-Example-6.webp';
import esp32S3ePaper1_54ArduinoExample7 from './images/Arduino-Example-7.webp';
import esp32S3ePaper1_54ArduinoExample8 from './images/Arduino-Example-8.webp';
import esp32S3ePaper1_54ArduinoExample9 from './images/Arduino-Example-9.webp';
import esp32S3ePaper1_54ArduinoExample10 from './images/Arduino-Example-10.webp';
import esp32S3ePaper1_54ArduinoExample11 from './images/Arduino-Example-11.webp';

# Working with Arduino

This chapter contains the following sections. Please read as needed:

- [Setting Up Development Environment](#setting-up-development-environment)
- [Demo](#demo)

<ArduinoTutorialIntro />

## Setting Up Development Environment

### 1. Installing and Configuring Arduino IDE

Please refer to the tutorial **[Installing and Configuring Arduino IDE Tutorial](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md)** to download and install the Arduino IDE and add ESP32 support.

### 2. Installing Libraries

- When installing Arduino libraries, there are typically two methods: **Online Installation** and **Offline Installation**. If the library installation requires offline installation, you must use the provided library file.
- For most libraries, users can easily search and install them through the online Library Manager in the Arduino software. However, some open-source libraries or custom libraries are not synchronized to the Arduino Library Manager, so they cannot be acquired through online searches. In this case, users can only manually install these libraries offline.
- The sample program package for the ESP32-S3-ePaper-1.54 development board can be downloaded from [here](./Resources-And-Documents.md#Demo). The <code>Arduino\libraries</code> directory within the package already includes all the library files required for this tutorial.

| Library/File Name  | Description  | Version  | Installation Method |
| :----------: | :----: | :------------: | :--------: |
|LVGL | Graphical library | v8.3.11/v9.3.0 | "Install Offline"|
| SensorLib | Sensor control library | v0.3.1|  "Install Online" or "Install Offline"|

:::warning Version Compatibility Description

There are strong dependencies between versions of LVGL and its driver libraries. For example, a driver written for LVGL v8 may not be compatible with LVGL v9. To ensure stable reproduction of the examples, it is recommended to use the specific versions listed in the table above. Mixing different library versions may cause compilation failures or runtime exceptions.
:::

### 3. Arduino Project Parameter Settings

import esp32S3ePaper1_54ArduinoToolCfg from './images/ESP32-S3-ePaper-1.54-ArduinoToolCfg.webp';

<div 
    style={{maxWidth:600}}> 
    <img 
        src={esp32S3ePaper1_54ArduinoToolCfg} 
    />
</div>

## Demo

The Arduino demos are located in the `Arduino/examples` directory of the [demo package](./Resources-And-Documents.md#Demo).

|                         Demo                         |   Basic Program Description | Dependency Library|
| :--------------: | :-----------------------------------------: | :----------: |
| 01_ADC_Test | Get the voltage value of the lithium battery | - |
| 02_I2C_PCF85063 | Print real-time time of RTC chip | SensorLib |
| 03_I2C_STHC3 | Get data from SHTC3 temperature & humidity sensor | - |
| 04_SD_Card | Load and display the information of the TF card | - |
| 05_WIFI_AP | Set to AP mode to obtain the IP address of the access device | - |
| 06_WIFI_STA | Set to STA mode to connect to WiFi and obtain an IP address | - |
| 07_BATT_PWR_Test | Control power via the PWR button when powered solely by the lithium battery |      -       |
| 08_Audio_Test | Play the sound recorded by the microphone through the speaker | - |
| 09_LVGL_V8_Test | LVGLV8 demo | LVGL V8.3.11 |
| 10_LVGL_V9_Test | LVGLV9 demo | LVGL V9.3.0 |
|11_RTC_Sleep_Test| Implements RTC wake-up in low-power mode | LVGL V8.3.11
|

### 01_ADC_Test

**Demo Description**

- The analog voltage connected through the GPIO is converted to digital by the ADC, and then the actual lithium battery voltage is calculated and printed to the terminal.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `adc_bsp_init(void)`: Initializes ADC1, including creating an ADC one-shot trigger unit and configuring Channel 3 of ADC1.
- `adc_get_value(float *value,int *data)`: Reads the value from Channel 3 of ADC1, calculates the corresponding voltage based on the reference voltage and resolution, and stores it at the location pointed to by the passed pointer. Stores 0 if the read fails.
- `adc_example(void* parameter)`: After initializing ADC1, creates an ADC task. This task reads the ADC value every second and calculates the system voltage from the raw ADC reading.

**Operation Result**

- After the program is compiled and downloaded, you can view the printed ADC values and voltage output by opening the Serial Monitor, as shown in the following image:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ArduinoExample1} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 02_I2C_PCF85063

**Demo Description**

- Through the I2C protocol, initialize the PCF85063 chip, set the time, and then periodically read the time and print it to the terminal

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void i2c_rtc_loop_task(void *arg)`: Creates an RTC task to implement the RTC function, reading the clock of the RTC chip every second and outputting it to the terminal.

**Operation Result**

- After the program is compiled and downloaded, open the serial port monitoring to see the RTC time of the printout, as shown in the following figure:<br />

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ArduinoExample2} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 03_I2C_STHC3

**Demo Description**

- Initialize the SHTC3 chip through the I2C protocol, and then print the temperature and humidity information read every 1 second to the terminal

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void i2c_SHTC3_loop_task(void *arg)`: Creates a task for the SHTC3 sensor to periodically obtain temperature and humidity data.

**Operation Result**

- Open the serial port monitor, you can see the printed temperature and humidity data, as shown in the figure below:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ArduinoExample3} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 04_SD_Card

**Demo Description**

- Drive the TF card through SDMMC, and print the TF card information to the terminal after successfully mounting.

**Hardware Connection**

- Install a FatFs-formatted into the board before powering on

**Code Analysis**

- `sdcard_init(void)`: Initializes the TF card using 1-line SDMMC mode.
- `sdcard_loop_task(void *arg)`: A task to test TF card read/write functionality. You need to uncomment the `#define sdcard_write_Test` macro definition.
  ```cpp
  //#define sdcard_write_Test
  ```

**Operation Result**

- Click on the serial port monitoring device, you can see the output information of the TF card, as shown in the figure below:

  <div style={{maxWidth: 800}}>
  	<img 
    	src={esp32S3ePaper1_54ArduinoExample4} 
    	style={{width: '100%', height: 'auto'}}
  	/>
  </div>

### 05_WIFI_AP

**Demo Description**

- This demo can set the development board as a hotspot, allowing phones or other devices in STA mode to connect to the development board.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- In the `05_WIFI_AP.ino` file, locate `ssid` and `password`. Phones or other STA mode devices can then connect to the board using this SSID and password.

  ```cpp
  const char *ssid = "ESP32_AP";
  const char *password = "12345678";
  ```

**Operation Result**

- After flashing the program, open the Serial Terminal. If a device successfully connects to the hotspot, the MAC address of that device will be output, as shown:

  <div style={{maxWidth: 800}}>
  	<img 
    	src={esp32S3ePaper1_54ArduinoExample5} 
    	style={{width: '100%', height: 'auto'}}
  	/>
  </div>

### 06_WIFI_STA

**Demo Description**

- This example can configure the development board as a STA device to connect to a router, thereby enabling access to the system network.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- In the `06_WIFI_STA.ino` file, locate ` ssid` and ` password`, and modify them to match the SSID and Password of an available router in your current environment.

  ```cpp
  const char *ssid = "you_ssid";
  const char *password = "you_password";
  ```

**Operation Result**

- After flashing the program, open the serial terminal, if the device is successfully connected to the hotspot, the IP address obtained will be output, as shown in the figure:

  <div style={{maxWidth: 800}}>
		<img 
  		src={esp32S3ePaper1_54ArduinoExample6} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

### 07_BATT_PWR_Test

**Demo Description**

- Demonstrates how to control the system power via the PWR button when powered by the lithium battery.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `setup_ui(lv_ui *ui)`: Initializes the UI interface for visual control.
- `user_button_init()`: Initializes the buttons and their trigger events.
- `example_button_pwr_task(void* parmeter)`: Task that waits for button event triggers.

**Operation Result**

- After the program is flashed, disconnect the USB power supply and connect the lithium battery. Power on by pressing and holding the PWR button, as shown in the figure:

  <div style={{maxWidth: 800}}>
		<img 
  		src={esp32S3ePaper1_54ArduinoExample7} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

  :::tip
  1. Press and hold the PWR button, wait for the screen to display "On", which means that the startup is successful, and release the button
  2. Press and hold the PWR button again, wait for the screen to display "Off", which means that the power is turned off successfully, and release the button
  :::

### 08_Audio_Test

**Demo Description**

- Demonstrates how to get data from the microphone and then play it through the speaker

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `i2c_master_Init()`: Initializes the I2C bus.
- `user_ui_init()`: Initializes the global UI.
- `user_button_init()`: Initializes the audio interface.

**Operation Result**

- After the program is flashed, as shown in the figure:

  <div style={{maxWidth: 400}}>
		<img 
  		src={esp32S3ePaper1_54ArduinoExample8} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

  :::tip
  1. Double-click the BOOT button to enter recording mode, speak into the MIC, and it will automatically end after 3 seconds
  2. Click the BOOT button to play the sound you just recorded (there will be a harsh noise when playing without recording data)
  :::

### 09_LVGL_V8_Test

**Demo Description**

- Helps users quickly implement UI design by porting LVGL V8.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void loop_lvgl_img(void *arg)`: Creates an image component task that switches pictures every 5 seconds.
- `void led_test_task(void *arg)`: LED blinking task.

**Operation Result**

- After the program is flashed, the device operation result is as follows:

  <div style={{maxWidth: 800}}>
		<img 
  		src={esp32S3ePaper1_54ArduinoExample9} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

### 10_LVGL_V9_Test

**Demo Description**

- Helps users quickly implement UI design by porting LVGL V9.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void loop_lvgl_img(void *arg)`: Creates an image component task that switches pictures every 5 seconds.
- `void led_test_task(void *arg)`: LED blinking task.

**Operation Result**

- After the program is flashed, the device operation result is as follows:

  <div style={{maxWidth: 800}}>
		<img 
  		src={esp32S3ePaper1_54ArduinoExample10} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

### 11_RTC_Sleep_Test

**Demo Description**

- Implements RTC wake-up in low-power mode.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void set_rtcAlarmSec(int sec)`: Sets the RTC alarm for a specific second (absolute time).
- `void set_rtcAlarmMinute(int min)`: Sets the RTC alarm for a specific minute (absolute time).
- `void set_rtcAlarmHour(int hour)`: Sets the RTC alarm for a specific hour (absolute time).
- `void set_rtcAlarmDay(int day)`: Sets the RTC alarm for a specific day (absolute time).

**Operation Result**

- After the program is flashed, the device operation result is as follows:

  <div style={{maxWidth: 800}}>
		<img 
  		src={esp32S3ePaper1_54ArduinoExample11} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

  :::tip
  1. The initial RTC time is set to: 2025/08/08 08:00:00. The second alarm is set to 30 seconds (this is absolute time, e.g., 08:00:30, 08:01:30, 08:02:30).
  2. After waking up, it reads the RTC value, enters low-power mode, and waits for the RTC alarm to trigger the next wake-up.
  3. In low-power mode, a single click of the PWR button can power off the system. Pressing and holding the BOOT button can reset the RTC time to 2025/08/08 08:00:00.
  :::