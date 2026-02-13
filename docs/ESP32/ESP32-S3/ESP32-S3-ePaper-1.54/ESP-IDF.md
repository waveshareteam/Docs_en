---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-S3-ePaper-1.54/Development-Environment-Setup-ESP-IDF
product_family:
  - ESP32
product_model:
  - ESP32-S3-ePaper-1.54
  - ESP32-S3-ePaper-1.54-EN
---

<!-- Example-related Image References -->
import esp32S3ePaper1_54ESPIDFExample1 from './images/ESP-IDF-Example-1.webp';
import esp32S3ePaper1_54ESPIDFExample2 from './images/ESP-IDF-Example-2.webp';
import esp32S3ePaper1_54ESPIDFExample3 from './images/ESP-IDF-Example-3.webp';
import esp32S3ePaper1_54ESPIDFExample4 from './images/ESP-IDF-Example-4.webp';
import esp32S3ePaper1_54ESPIDFExample5 from './images/ESP-IDF-Example-5.webp';
import esp32S3ePaper1_54ESPIDFExample6 from './images/ESP-IDF-Example-6.webp';
import esp32S3ePaper1_54ESPIDFExample7 from './images/ESP-IDF-Example-7.webp';
import esp32S3ePaper1_54ESPIDFExample8 from './images/ESP-IDF-Example-8.webp';
import esp32S3ePaper1_54ESPIDFExample9 from './images/ESP-IDF-Example-9.webp';
import esp32S3ePaper1_54ESPIDFExample10 from './images/ESP-IDF-Example-10.webp';
import esp32S3ePaper1_54ESPIDFExample11 from './images/ESP-IDF-Example-11.webp';
import esp32S3ePaper1_54ESPIDFExample12 from './images/ESP-IDF-Example-12.webp';

import EspidfTutorialIntro from '@site/docs/ESP32/snippets/EspidfTutorialIntro.mdx';
import EspidfSetup from '@site/docs/ESP32/snippets/EspidfSetup.mdx';

# ESP-IDF

This chapter contains the following sections. Please read as needed:

- [Setting Up Development Environment](#esp-idf-setup)
- [Demo](#demo)

<EspidfTutorialIntro />

## Setting Up Development Environment {#esp-idf-setup}

:::info
For the ESP32-S3-ePaper-1.54 development board, ESP-IDF version V5.5.0 or above is required.
:::

<EspidfSetup />

## Demo

The ESP-IDF demo is located in the <code>ESP-IDF</code> directory of the [https://github.com/waveshareteam/ESP32-C6-Touch-LCD-1.83/tree/main/examples demo] package.
| Demo | Basic Program Description | Dependency Library|
| :-: | :-: | :-: |
| 01_ADC_Test | Get the voltage value of the lithium battery | - |
| 02_I2C_PCF85063 | Print real-time time of RTC chip | SensorLib |
| 03_I2C_STHC3 | Get data from SHTC3 temperature & humidity sensor | - |
| 04_SD_Card | Load and display the information of the TF card | - |
| 05_WIFI_AP | Set to AP mode to obtain the IP address of the access device | - |
| 06_WIFI_STA | Set to STA mode to connect to WiFi and obtain an IP address | - |
| 07_BATT_PWR_Test | Control power via the PWR button when powered solely by the lithium battery |      -       |
| 08_Audio_Test | Play the sound recorded by the microphone through the speaker | LVGL V8.3.11 |
| 09_LVGL_V8_Test | LVGLV8 demo | LVGL V8.3.11 |
| 10_LVGL_V9_Test | LVGLV9 demo | LVGL V9.3.0 |
| 11_FactoryProgram | Comprehensive demo | LVGL V8.3.11|
|12_RTC_Sleep_Test| Implements RTC wake-up in low-power mode | LVGL V8.3.11|

### 01_ADC_Test

**Demo Description**

- The analog voltage connected through the GPIO is converted to digital by the ADC, and then the actual lithium battery voltage is calculated and printed to the terminal.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `Adc_PortInit(void)`: Initializes ADC1, including creating an ADC one-time trigger unit and configuring channel 3 for ADC1
- `float Adc_GetBatteryVoltage(int *data)`: Reads the value from ADC1 channel 3 and returns the actual voltage value.
- `uint8_t Adc_GetBatteryLevel(void)`: Returns the battery percentage.
- `void Adc_LoopTask(void *arg)`: Creates an ADC task that reads the ADC value and prints it to the serial port every second.

**Operation Result**

- After the program is compiled and downloaded, you can view the printed ADC values and voltage output by opening the Serial Monitor, as shown in the following image:

  <div style={{maxWidth: 800}}>
  	<img 
    	src={esp32S3ePaper1_54ESPIDFExample1} 
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
    		src={esp32S3ePaper1_54ESPIDFExample2} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 03_I2C_STHC3

**Demo Description**

- Uses the I2C protocol to initialize and configure the SHTC3 chip, then reads and prints temperature and humidity information to the terminal every second.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- `void i2c_SHTC3_loop_task(void *arg)`: Creates a task for the SHTC3 sensor to periodically obtain temperature and humidity data.

**Operation Result**

- Open the serial port monitor, you can see the printed temperature and humidity data, as shown in the figure below:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ESPIDFExample3} 
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

**Operation Result**

- Click to open the Serial Monitor device. You can see the output TF card information; practical_size indicates the actual capacity of the TF card, as shown below:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ESPIDFExample4} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 05_WIFI_AP

**Demo Description**

- This demo can set the development board as a hotspot, allowing phones or other devices in STA mode to connect to the development board.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

- In the `05_WIFI_AP.ino` file, locate the `ssid` and `password`. Phones or other STA mode devices can then connect to the development board using this SSID and password.
	```cpp
	#define EXAMPLE_ESP_WIFI_SSID      "waveshare_esp32"
	#define EXAMPLE_ESP_WIFI_PASSWORD      "wav123456"
	```

**Operation Result**

- After flashing the program, open the serial terminal, if the device is successfully connected to the hotspot, the MAC address and IP address of the device will be output, as shown in the figure:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ESPIDFExample5} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>

### 06_WIFI_STA

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

**Operation Result**

- After flashing the program, open the serial terminal, if the device is successfully connected to the hotspot, the IP address obtained will be output, as shown in the figure:

  <div style={{maxWidth: 800}}>
  		<img 
    		src={esp32S3ePaper1_54ESPIDFExample6} 
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
    		src={esp32S3ePaper1_54ESPIDFExample7} 
    		style={{width: '100%', height: 'auto'}}
  		/>
  </div>
  :::tip
  1. Press and hold the PWR button. Wait for the screen to display "ON", indicating successful startup, then release the button.
  2. Press and hold the PWR button again. Wait for the screen to display "OFF", indicating successful power shutdown, then release the button.
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
  		src={esp32S3ePaper1_54ESPIDFExample8} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

  :::tip
  1. Double-click the BOOT button to enter recording mode, speak into the MIC, and it will automatically end after 3 seconds
  2. Click the BOOT button to play the sound you just recorded
  3. Double-click the PWR button to play a piece of music
  4. Click the PWR button to interrupt music playback
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
  		src={esp32S3ePaper1_54ESPIDFExample9} 
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
  		src={esp32S3ePaper1_54ESPIDFExample10} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

### 11_FactoryProgram

**Demo Description**

- Comprehensive project, you can simply test the onboard hardware functions, or directly use the BIN firmware we provide for flashing.

**Hardware Connection**

- Connect the board to the computer using a USB cable

**Code Analysis**

  ```cpp
  board_div.VBAT_POWER_ON();     // Enable VBAT power supply
  board_div.POWEER_EPD_ON();     // Enable EPD power supply
  board_div.POWEER_Audio_ON();   // Enable Audio power supply
  i2c_master_Init();         // Initialize I2C bus
  /*epaper init*/
  custom_lcd_spi_t driver_config = {};
  driver_config.cs = EPD_CS_PIN;
  driver_config.dc = EPD_DC_PIN;
  driver_config.rst = EPD_RST_PIN;
  driver_config.busy = EPD_BUSY_PIN;
  driver_config.mosi = EPD_MOSI_PIN;
  driver_config.scl = EPD_SCK_PIN;
  driver_config.spi_host = EPD_SPI_NUM;
  driver_config.buffer_len  = 5000;
  driver = new epaper_driver_display(EPD_WIDTH,EPD_HEIGHT,driver_config); // Create ePaper driver object
  driver->EPD_Init(); // Initialize ePaper driver
  driver->EPD_Clear();// Clear display content
  driver->EPD_DisplayPartBaseImage();// Display base image
  driver->EPD_Init_Partial();        // Initialize ePaper driver (partial refresh mode)
  rtc_dev = new i2c_equipment();     // Create I2C device object (RTC)
  rtc_dev->set_rtcTime(2025,8,27,8,0,0); // Set RTC time to: 2025/08/27 08:00:00
  shtc3_dev = new i2c_equipment_shtc3(); // Create I2C device object (SHTC3)
  ```

**Operation Result**

- After the program is flashed, the device operation result is as follows:

  <div style={{maxWidth: 800}}>
		<img 
  		src={esp32S3ePaper1_54ESPIDFExample11} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

  :::tip
  1. Use the main interface to determine whether the onboard hardware is functioning properly.
  2. Click the PWR button to navigate to the music interface. Refer to the source code for related settings.
  :::

### 12_RTC_Sleep_Test

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
  		src={esp32S3ePaper1_54ESPIDFExample12} 
  		style={{width: '100%', height: 'auto'}}
		/>
  </div>

  :::tip
  1. The initial RTC time is set to: 2025/08/08 08:00:00. The second alarm is set to 30 seconds (this is absolute time, e.g., 08:00:30, 08:01:30, 08:02:30).
  2. After waking up, it reads the RTC value, enters low-power mode, and waits for the RTC alarm to trigger the next wake-up.
  3. In low-power mode, a single click of the PWR button can power off the system. Pressing and holding the BOOT button can reset the RTC time to 2025/08/08 08:00:00.
  :::