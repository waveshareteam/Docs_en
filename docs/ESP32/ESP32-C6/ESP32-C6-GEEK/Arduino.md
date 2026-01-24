---
sidebar_position: 2
title: Working with Arduino
slug: /ESP32-C6-GEEK/Development-Environment-Setup-Arduino
product_family:
  - ESP32
product_model:
  - ESP32-C6-GEEK
  - ESP32-C6-GEEK-M
  - ESP32-C6-GEEK-Basic-Kit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Details from '@theme/Details';
import ArduinoTutorialIntro from '@site/docs/ESP32/snippets/ArduinoTutorialIntro.mdx';

<!-- Image Reference -->
import arduino_config       from './images/ESP32-C6-Touch-LCD-1.83-arduino_config.webp';
import arduino_demo_Button_test from './images/300px-ESP32-S3-GEEK-ArDemo-Button-01.webp';
import arduino_demo_adc_test from './images/ESP32-C6-GEEK-demo-02.webp';
import arduino_demo_IIC from './images/450px-ESP32-C6-GEEK-ArDemo-IIC-01.webp';
import arduino_demo_03 from './images/ESP32-C6-GEEK-demo-01.webp';
import arduino_demo_04 from './images/ESP32-C6-GEEK-demo-04.webp';
import arduino_demo_UART from './images/450px-ESP32-C6-GEEK-ArDemo-UART-01.webp';
import arduino_demo_LCD_Button from './images/300px-ESP32-C6-GEEK-ArDemo-LCD_Button-02.webp';
import arduino_demo_time from './images/ESP32-S3-GEEK-demo-03.webp';
import arduino_demo_time_1 from './images/ESP32-S3-GEEK-ArDemo-LCD_Time-01.webp';
import arduino_demo_sd from './images/ESP32-S3-GEEK-demo-sd.webp';
import arduino_demo_09 from './images/Arduino_09_1.webp';
import arduino_demo_0902 from './images/Arduino_0902.webp';
import arduino_demo_0903 from './images/Arduino_0903.webp';
import arduino_demo_0904 from './images/Arduino_0904.webp';
import arduino_demo_0905 from './images/Arduino_0905.webp';
import arduino_demo_0906 from './images/Arduino_0906.webp';
import arduino_demo_0907 from './images/Arduino_0907.webp';
import arduino_demo_0908 from './images/Arduino_0908.webp';
import arduino_demo_0909 from './images/Arduino_0909.webp';
import arduino_demo_1201 from './images/Arduino_1201.webp';
import arduino_demo_1202 from './images/Arduino_1202.webp';
import arduino_demo_1203 from './images/Arduino_1203.webp';
import arduino_demo_1301 from './images/Arduino_1301.webp';
import arduino_demo_1302 from './images/Arduino_1302.webp';
import arduino_demo_1303 from './images/Arduino_1303.webp';
import arduino_demo_1304 from './images/Arduino_1304.webp';
import arduino_demo_1305_1 from './images/Arduino_1305_1.webp';
import arduino_demo_1305_2 from './images/Arduino_1305_2.webp';
import arduino_demo_1306 from './images/Arduino_1306.webp';
import arduino_demo_1401 from './images/Arduino_1401.webp';
import arduino_demo_1402 from './images/Arduino_1402.webp';
import arduino_demo_1403 from './images/Arduino_1403.webp';
import arduino_demo_1501 from './images/Arduino_1501.webp';
import arduino_demo_1502 from './images/Arduino_1502.webp';
import arduino_demo_1503 from './images/Arduino_1503.webp';
import arduino_demo_1601 from './images/Arduino_1601.webp';
import arduino_demo_1602 from './images/Arduino_1602.webp';
import arduino_demo_1603 from './images/Arduino_1603.webp';
import arduino_demo_1604 from './images/Arduino_1604.webp';
import arduino_demo_1605 from './images/Arduino_1605.webp';
import arduino_demo_1606 from './images/Arduino_1606.webp';
import arduino_demo_1607 from './images/Arduino_1607.webp';
import arduino_demo_1608 from './images/Arduino_1608.webp';
import arduino_demo_1609 from './images/Arduino_1609.webp';
import arduino_demo_1610 from './images/Arduino_1610.webp';
import arduino_demo_1701 from './images/Arduino_1701.webp';
import arduino_demo_1702 from './images/Arduino_1702.webp';
import arduino_demo_1703 from './images/Arduino_1703.webp';
import arduino_demo_1704 from './images/Arduino_1704.webp';
import arduino_demo_1705 from './images/Arduino_1705.webp';
import arduino_demo_1706 from './images/Arduino_1706.webp';
import arduino_demo_1707 from './images/Arduino_1707.webp';
import arduino_demo_1708 from './images/Arduino_1708.webp';
import arduino_demo_1709 from './images/Arduino_1709.webp';
import arduino_demo_1710 from './images/Arduino_1710.webp';

# Working with Arduino

This chapter includes the following sections, please read as needed:

- [Arduino Getting Started Tutorial](#arduino-tutorial-for-beginners)
- [Setting Up Development Environment](#setting-up-development-environment)
- [Demo](#demo)

<ArduinoTutorialIntro />
  
## Setting Up Development Environment

### 1. Installing and Configuring Arduino IDE

Please refer to the tutorial **[Installing and Configuring Arduino IDE Tutorial](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md)** to download and install the Arduino IDE and add ESP32 support.

### 2. Installing Libraries

To run the demo, you need to install the corresponding library.

You can click [this link](https://files.waveshare.com/wiki/ESP32-C6-GEEK/ESP32-C6-GEEK-Demo.zip) to download the demo package for the ESP32-C6-GEEK development board. The `Arduino\libraries` directory within the package already includes all the library files required for this tutorial.

|     Library/File Name     |                   Description                      |    Version    |           Installation Method         |
|  :---------------------:  |         :----------------------------:             |    :----:     |          :--------------------:       |
| ESP32-BLE-Keyboard-master |    ESP32 Bluetooth Keyboard Library                |    v0.3.2     |            Manual Install             |
| PubSubClient              | MQTT message subscription and publishing library   |    v2.8.0     | Via Library Manager or Manual Install |
| JPEGDecoder               |            JPEG Image Decoder library              |    v2.0.0     | Via Library Manager or Manual Install |
| OneButton                 |       Single Button events handling library        |    v2.5.0     | Via Library Manager or Manual Install |
| BME68x Sensor library     |           BME68x Sensor driver library             |    v1.1.40406 | Via Library Manager or Manual Install |
| ArduinoJson               |             Lightweight JSON library               |    v7.2.1     | Via Library Manager or Manual Install |

:::Warning Version Compatibility Description

There are strong dependencies between versions of LVGL and its driver libraries. For example, a driver written for LVGL v8 may not be compatible with LVGL v9. To ensure stable reproduction of the examples, it is recommended to use the specific versions listed in the table above. Mixing different library versions may cause compilation failures or runtime exceptions.
:::

**Installation Steps**:

1. Unzip the downloaded [demo package](https://files.waveshare.com/wiki/ESP32-C6-GEEK/ESP32-C6-GEEK-Demo.zip).
2. Copy all folders (Arduino_DriveBus, GFX_Library_for_Arduino, etc.) in the `Arduino\libraries` directory to the Arduino library folder.

   :::info
   The path to the Arduino libraries folder is typically: `c:\Users\<Username>\Documents\Arduino\libraries`.

   You can also locate it within the Arduino IDE via **File > Preferences**, by checking the "**Sketchbook location**". **The library folder is the `libraries` folder under this path.**
   :::

3. For other installation methods, please refer to: [Arduino Library Management Tutorial](/docs/ESP32/Tutorials/Arduino-Tutorials/01-Arduino-IDE-Setup.md#ArduinoIDE-Install-Libraries).

### 3. Other Tips
You need to select and configure the development board for ESP32-C6-GEEK.
   <div style={{maxWidth:650}}> <img src={arduino_config}/></div>

1. Select the ESP32C6 Dev Module for ESP32-C6-GEEK.
2. Select the USB port.
3. The ESP32-C6-GEEK uses the ESP32-C6 native USB interface, not a UART-to-USB bridge. For serial communication:
   - The `printf()` function can be used directly;

   - To use the `Serial.println()` function, additional configuration is required: enable the "**USB CDC On Boot**" option in the IDE's Tools menu, or declare an `HWCDC` object in your code to handle USB serial communication.
4. Select 16MB Flash
5. Select a Partition Table of the appropriate size

## Demo

The Arduino demos are located in the `Arduino/examples` directory of the [demo package](https://files.waveshare.com/wiki/ESP32-C6-GEEK/ESP32-C6-GEEK-Demo.zip).

|                         Demo                         |   Basic Program Description | Dependency Library|
| :-------------------------------------------------------------: | :----------------------------------------------------------------------: | :---------------------------------------: |
|               [01_OneButton](#Demo-01_OneButtont)               |                   Button interaction and LCD display                                      |     OneButton                       |    |
|            [02_ADC_Read](#Demo-02-ADC_Read)                     |                               	ADC sampling                                    |                                          |
|           [03_IIC_BME68X_Sensor](#Demo-03_IIC_BME68X_Sensor)    |  Driving I2C module                                            |          BME68x Sensor libraryXPowersLib  |
|           [04_UART0](#Demo-04_UART0)                            |                   	Serial communication                                              |                                            |
|       [05_LCD_Button](#Demo-05_LCD_Button)                          |                 	Button operation to switch images, control backlight                            |             	OneButton                    |
|       [06_LCD_Time](#Demo-06_LCD_Time)                          |                  Display date and time on LCD                                      |             	                              |
|   [07_SD_Test](#Demo-07_SD_Test)                                |                 Perform file operations (create, read, update, delete) on TF card                                    |                                           |
|  [08_SD_LCD](#Demo-08_SD_LCD)                                   |                  Read JPEG images from TF card and display them on screen                       |            JPEGDecoder                   |
|  [09_BLE_LCD](#Demo-09_BLE_LCD)                                  |ESP32-C6 interacts with BLE and LCD, acts as a BLE server to send/receive data and display it on LCD          |            ESP32-BLE-Keyboard-master     |
|  [10_BLE_UART](#Demo-10_BLE_UART)                               | ESP32-C6 interacts with BLE, acts as a BLE server to send/receive data and uses UART to display message content          |            ESP32-BLE-Keyboard-master      |
|  [11_BLE_Keyboard](#Demo-11_BLE_Keyboard)                       | Simulate a BLE Keyboard                                                               |            ESP32-BLE-Keyboard-master      |
|  [12_WIFI_AP_LCD](#Demo-12_WIFI_AP_LCD)                          | Interacts with Wi-Fi and LCD, acts as a Wi-Fi Access Point to communicate with clients and display on LCD          |                                              |
|  [13_WIFI_TCP_Client](#Demo-13_WIFI_TCP_Client)                  | Interacts with Wi-Fi and LCD, connects to Wi-Fi, then attempts to connect to a server, sends/receives data and displays on LCD      |                                              |
|  [14_WIFI_TCP_Server](#Demo-14_WIFI_TCP_Server)                  | 	Interacts with Wi-Fi and LCD, acts as a Wi-Fi Server, receives client data and displays on LCD          |                                              |
|  [15_WIFI_Web_Server](#Demo-15_WIFI_Web_Server)                  | 	Interacts with Wi-Fi and LCD, acts as a Wi-Fi Access Point Server, handles client requests       |                                              |
|  [16_MQTT_sub_pub](#Demo-16_MQTT_sub_pub)                        | 	Interacts with Wi-Fi and LCD, acts as a Wi-Fi Access Point Server, handles client requests         |                ArduinoJson, PubSubClient             |
|  [17_MQTT_BLE_Keyboard](#Demo-17_MQTT_BLE_Keyboard)               | 			Integrates BLE Keyboard, Wi-Fi, and MQTT, controls LCD display        |              ArduinoJson, PubSubClient, ESP32-BLE-Keyboard-master      |

### 01_OneButton {#Demo-01_OneButtont}

This example demonstrates how to use the ESP32-C6-GEEK's Boot button as a multi-function button, capable of performing different actions such as single-click, double-click, or long-press. It is suitable for learning ESP32-C6 button interaction and LCD display. You can observe LCD changes through button operations to test its reliability.

<div style={{maxWidth:800}}> <img src={arduino_demo_Button_test}/></div>

#### Code

<Details summary="01_OneButton.ino" className="code-details" >

```cpp

  #include <SPI.h>
  #include "LCD_Driver.h"
  #include "GUI_Paint.h"
  #include "image.h"
  #include "OneButton.h"

  #define PIN_INPUT 9
  OneButton button(PIN_INPUT, true);

  void setup() {
    Serial.begin(115200);
    Config_Init();
    LCD_Init();
    LCD_SetBacklight(100);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
    Paint_SetRotate(90);
    LCD_Clear(BLACK);
    Paint_DrawString_EN(28, 50, "Button Start", &Font24, BLACK, GREEN);

    button.attachLongPressStart(LongPressStart, &button);
    button.attachClick(Click, &button);
    button.attachDoubleClick(DoubleClick, &button);
    button.setLongPressIntervalMs(1000);
  }

  void loop() {
    // keep watching the push button:
    button.tick();
    delay(10);
  }

  // this function will be called when the button started long pressed.
  void LongPressStart(void *oneButton)
  {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(50, 50, "LongPress", &Font24, BLACK, RED);
  }

  void Click(void *oneButton)
  {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(75, 50, "Click", &Font24, BLACK, YELLOW);
  }

  void DoubleClick(void *oneButton)
  {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(35, 50, "DoubleClick", &Font24, BLACK, BLUE);
  }

```

</Details>

#### Code Analysis

- Button event binding:

  ```cpp
  button.attachLongPressStart(LongPressStart, &button);
  button.attachClick(Click, &button);
  button.attachDoubleClick(DoubleClick, &button);
  button.setLongPressIntervalMs(1000);
  ```

- Continuous monitoring:

  ```cpp
  void loop() {
  // keep watching the push button:
  button.tick();
  delay(10);
  }
  ```

- Button event callback:

  ```cpp
  void LongPressStart(void *oneButton)
  {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(50, 50, "LongPress", &Font24, BLACK, RED);
  }

  void Click(void *oneButton)
  {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(75, 50, "Click", &Font24, BLACK, YELLOW);
  }

  void DoubleClick(void *oneButton)
  {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(35, 50, "DoubleClick", &Font24, BLACK, BLUE);
  }
  ```

### 02_ADC_Read {#Demo-02-ADC_Read}

This example uses the GPIO interface of the ESP32-C6-GEEK to perform ADC sampling, reading voltages within the 3.3V range. Pay attention to common grounding and do not exceed the measurement range during use. It is suitable for learning analog input on the ESP32-C6. You can read analog values from specific pins, observe changes, and test stability.
<div style={{maxWidth:800}}> <img src={arduino_demo_adc_test}/></div>

#### Hardware Connection

Connect both ends of an SH1.0 3PIN cable to the development board and the voltage source under test.
  - The pin connected to GPIO6 on the development board is used to read the measured voltage.
  - The GND pin on the development board (the GND of the I2C or UART interface can be used) is connected to the GND pin of the voltage source under test, ensuring a common ground connection.

#### Code

<Details summary="02_ADC_Read.ino" className="code-details" >

```cpp
#include <Arduino.h>

#define ADC1_CHANNEL_0 0  //Define the pin macro 
#define DEV_BL_PIN  6

void setup() {
  analogWrite(DEV_BL_PIN,0);
  Serial.begin(115200);      //The serial port is initially configured
  analogReadResolution(12);  //Set ADC resolution to 12 bits (0-4096)
}

void loop() {
  // Define two variables to hold the original value and the voltage value (millivolts) collected by the ADC
  int analogOriginalValue = 0;
  int analogVoltsValue = 0;

  analogOriginalValue = analogRead(ADC1_CHANNEL_0);         // Read the ADC raw value
  analogVoltsValue = analogReadMilliVolts(ADC1_CHANNEL_0);  // Read ADC voltage values (millivolt range)
  
  // Upload read ADC values:
  Serial.printf("ADC analog value = %d\n",analogOriginalValue);
  Serial.printf("ADC millivolts value = %d mV\n",analogVoltsValue);
  
  delay(3000);
}

```

</Details>

#### Code Analysis

- Initialize the backlight control pin to a low level.
- Enable serial communication, set the baud rate to 115200.
- Set the ADC resolution to 12-bit.

  ```cpp
    void setup() {
    analogWrite(DEV_BL_PIN,0);
    Serial.begin(115200);      //The serial port is initially configured
    analogReadResolution(12);  //Set ADC resolution to 12 bits (0-4096)
    }
  ```

- Define variables to store the raw ADC value and the voltage value.
- Read the raw ADC value and the voltage value from the specified pin.
- Output the ADC value via the serial port.

  ```cpp
    void loop() {
    // Define two variables to hold the original value and the voltage value (millivolts) collected by the ADC
    int analogOriginalValue = 0;
    int analogVoltsValue = 0;

    analogOriginalValue = analogRead(ADC1_CHANNEL_0);         // Read the ADC raw value
    analogVoltsValue = analogReadMilliVolts(ADC1_CHANNEL_0);  // Read ADC voltage values (millivolt range)
    
    // Upload read ADC values:
    Serial.printf("ADC analog value = %d\n",analogOriginalValue);
    Serial.printf("ADC millivolts value = %d mV\n",analogVoltsValue);
    
    delay(3000);
    }
  ```

### 03_IIC_BME68X_Sensor {#Demo-03_IIC_BME68X_Sensor}

This example uses the I2C hardware interface of the ESP32-C6-GEEK to drive an I2C module. The example demonstrates using a BME680 sensor, printing data output via the serial port. It is suitable for learning how the ESP32-C6 interacts with BME68X sensors. You can set pins and communication modes, read various data, and test compatibility and stability.

<div style={{maxWidth:800}}> <img src={arduino_demo_03}/></div>

#### Hardware Connection

<div style={{maxWidth:600}}> <img src={arduino_demo_IIC}/></div>

#### Code

<Details summary="03_IIC_BME68X_Sensor.ino" className="code-details" >

```cpp

#include "Arduino.h"
#include "bme68xLibrary.h"

#ifndef PIN_CS
#define PIN_CS 15
#endif

#ifndef ADD_I2C
#define ADD_I2C 0x77
#endif

#ifndef PIN_SDA
#define PIN_SDA 7
#endif

#ifndef PIN_SCL
#define PIN_SCL 8
#endif

#ifndef PIN_BL
#define PIN_BL 6
#endif

Bme68x bme;

/**
 * @brief Initializes the sensor and hardware settings
 */
setup() {
{
  analogWrite(PIN_BL,0);
  Wire.begin(PIN_SDA, PIN_SCL);     //I2C mode
	//SPI.begin();    //SPI mode
	Serial.begin(115200);
  delay(100);
	Serial.println(PIN_SDA);
  Serial.println(PIN_SCL);

	while (!Serial)
		delay(10);
		
	/* initializes the sensor based on SPI library */
	//bme.begin(PIN_CS, SPI);     //SPI mode
  bme.begin(ADD_I2C, Wire);     //I2C mode

	if(bme.checkStatus())
	{
		if (bme.checkStatus() == BME68X_ERROR)
		{
			Serial.println("Sensor error:" + bme.statusString());
			return;
		}
		else if (bme.checkStatus() == BME68X_WARNING)
		{
			Serial.println("Sensor Warning:" + bme.statusString());
		}
	}
	
	/* Set the default configuration for temperature, pressure and humidity */
	bme.setTPH();

	/* Set the heater configuration to 300 deg C for 100ms for Forced mode */
	bme.setHeaterProf(300, 100);

	Serial.println("TimeStamp(ms), Temperature(deg C), Pressure(Pa), Humidity(%), Gas resistance(ohm), Status");
}

void loop(void)
{
	bme68xData data;

	bme.setOpMode(BME68X_FORCED_MODE);
	delay(500+bme.getMeasDur()/200);

	if (bme.fetchData())
	{
		bme.getData(data);
		Serial.print(String(millis()) + ", ");
		Serial.print(String(data.temperature) + ", ");
		Serial.print(String(data.pressure) + ", ");
		Serial.print(String(data.humidity) + ", ");
		Serial.print(String(data.gas_resistance) + ", ");
		Serial.println(data.status, HEX);
	}
}

```
 
</Details>

#### Code Analysis

- Use `analogWrite` to set the backlight control pin PIN_BL to 0, turning off the backlight.
- Use `Wire.begin(PIN_SDA, PIN_SCL)` to initialize I2C communication (the commented `SPI.begin()` indicates SPI mode is also possible but is not enabled here).
- Initialize serial communication, set the baud rate to 115200.
- Wait for the serial port connection to be ready.
- Initialize the BME68X sensor according to the configured communication method (I2C here). If an error or warning occurs during initialization, corresponding information will be output via serial.
- Set the sensor's temperature, pressure, and humidity measurement configurations, and configure the heater.
- Output a header row for the data via serial, including timestamp, temperature, pressure, humidity, gas resistance, and status.

  ```cpp
  setup() {
  {
    analogWrite(PIN_BL,0);
    Wire.begin(PIN_SDA, PIN_SCL);     //I2C mode
    //SPI.begin();    //SPI mode
    Serial.begin(115200);
    delay(100);
    Serial.println(PIN_SDA);
    Serial.println(PIN_SCL);

    while (!Serial)
      delay(10);
      
    /* initializes the sensor based on SPI library */
    //bme.begin(PIN_CS, SPI);     //SPI mode
    bme.begin(ADD_I2C, Wire);     //I2C mode

    if(bme.checkStatus())
    {
      if (bme.checkStatus() == BME68X_ERROR)
      {
        Serial.println("Sensor error:" + bme.statusString());
        return;
      }
      else if (bme.checkStatus() == BME68X_WARNING)
      {
        Serial.println("Sensor Warning:" + bme.statusString());
      }
    }
    
    /* Set the default configuration for temperature, pressure and humidity */
    bme.setTPH();

    /* Set the heater configuration to 300 deg C for 100ms for Forced mode */
    bme.setHeaterProf(300, 100);

    Serial.println("TimeStamp(ms), Temperature(deg C), Pressure(Pa), Humidity(%), Gas resistance(ohm), Status");
  }
  ```

### 04_UART0 {#Demo-04_UART0}

This example opens the **UART0** serial port on the ESP32-C6-GEEK. By opening a serial debug assistant, serial communication can be performed. It is suitable for learning serial communication on the ESP32-C6, receiving data and outputting it.

<div style={{maxWidth:800}}> <img src={arduino_demo_04}/></div>

#### Hardware Connection

<div style={{maxWidth:400}}> <img src={arduino_demo_UART}/></div>

#### Code

<Details summary="04_UART0.ino" className="code-details" >

```cpp
#include <HardwareSerial.h>

#define DEV_BL_PIN  6

void setup() {
  analogWrite(DEV_BL_PIN,0);
  Serial.begin(115200);
}

void loop() {
  if (Serial.available()) {
    char buffer[256];                 // Buffer to store input data
    size_t bufferSize = 0;  // Current size of data in buffer

    while (Serial.available() > 0) {
      char input = Serial.read();
      buffer[bufferSize++] = input;   // Store input in buffer
      // Check if the buffer is full, or a newline character is received
      if (bufferSize >= sizeof(buffer) || input == '\n') {
      // Send the entire buffer via Serial2
        Serial.println(buffer);
        delay(10);
      // Reset buffer and size for the next input
        bufferSize = 0;
        memset(buffer, 0, sizeof(buffer));
      }
    }
  }
}

```

</Details>

#### Code Analysis

- Check if there is data available to read from the serial port. If data is available, enter a loop to process the input data.
- Create a character array `buffer` to store input data and a variable `bufferSize` to record the amount of data in the buffer.
- In the loop, read one character at a time and store it in the buffer, while incrementing the buffer size.
- When the buffer is full (reaches the array size) or a newline character is read, output the data in the buffer via serial, then delay for 10 milliseconds.
- Finally, reset the buffer size to 0 and use the `memset` function to clear the buffer, preparing for the next input.

  ```cpp
  void loop() {
    if (Serial.available()) {
      char buffer[256];                 // Buffer to store input data
      size_t bufferSize = 0;  // Current size of data in buffer

      while (Serial.available() > 0) {
        char input = Serial.read();
        buffer[bufferSize++] = input;   // Store input in buffer
        // Check if the buffer is full, or a newline character is received
        if (bufferSize >= sizeof(buffer) || input == '\n') {
        // Send the entire buffer via Serial2
          Serial.println(buffer);
          delay(10);
        // Reset buffer and size for the next input
          bufferSize = 0;
          memset(buffer, 0, sizeof(buffer));
        }
      }
    }
  }
  ```

### 05_LCD_Button {#Demo-05_LCD_Button}

This example uses the Boot button of the ESP32-C6-GEEK to achieve a short press to turn on the LCD and switch to the next image, and a long press to turn off the LCD. It is suitable for learning button interaction and LCD image display on the ESP32-C6. You can switch images and control the backlight through button operations to test stability.

<div style={{maxWidth:800}}> <img src={arduino_demo_LCD_Button}/></div>

#### Code

<Details summary="05_LCD_Button.ino" className="code-details" >

```cpp
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include "OneButton.h"

#define PIN_INPUT 9
OneButton button(PIN_INPUT, true);

char click = 1;

void setup() {
  Serial.begin(115200);
  Config_Init();
  LCD_Init();
  LCD_Clear(BLACK);
  LCD_SetBacklight(1000);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 0, BLACK);
  Paint_DrawImage(gImage_pic1, 0, 0, 135, 240);

  button.attachLongPressStart(LongPressStart, &button);
  button.attachClick(Click, &button);
  button.setLongPressIntervalMs(1000);
}

void loop() {
  // keep watching the push button:
  button.tick();

  delay(10);
}

// this function will be called when the button started long pressed.
void LongPressStart(void *oneButton)
{
  analogWrite(DEV_BL_PIN, 0);
}

void Click(void *oneButton)
{
  LCD_SetBacklight(1000);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 0, BLACK);
  click++;
  if(click >= 4)click = 1;
  switch(click)
  {
    case 1:  
    Paint_DrawImage(gImage_pic1, 0, 0, 135, 240);
    break;
    case 2:  
    Paint_DrawImage(gImage_pic2, 0, 0, 135, 240);
    break;
    case 3: 
    Paint_DrawImage(gImage_pic3, 0, 0, 135, 240);
    break;
  }
}

```

</Details>

#### Code Analysis

- When the button is clicked, this function is called. It switches the display to different images (`gImage_pic1`, `gImage_pic2`, `gImage_pic3`) based on different `click` values:

  ```cpp
    void Click(void *oneButton)
  {
    LCD_SetBacklight(1000);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 0, BLACK);
    click++;
    if(click >= 4)click = 1;
    switch(click)
    {
      case 1:  
      Paint_DrawImage(gImage_pic1, 0, 0, 135, 240);
      break;
      case 2:  
      Paint_DrawImage(gImage_pic2, 0, 0, 135, 240);
      break;
      case 3: 
      Paint_DrawImage(gImage_pic3, 0, 0, 135, 240);
      break;
    }
  }
  ```

### 06_LCD_Time {#Demo-06_LCD_Time}

This example uses the ESP32-C6-GEEK to connect to Wi-Fi, obtain the current time, and display the time and date on both the LCD and a serial debug assistant. It is suitable for learning Wi-Fi connection and time synchronization on the ESP32-C6. You can connect to a specific network, synchronize time, display the date and time on the LCD, and test stability and accuracy.

<div style={{maxWidth:800}}> <img src={arduino_demo_time}/></div>

#### Additional Preparation

Use a PC to open a hotspot. Set the network band to "Any available frequency". Modify `ssid` and `password` to the Wi-Fi name and password you want to connect to. `utcOffsetInSeconds` is the time zone for which we need to obtain the time. For example, Beijing, UTC+8 (East 8th zone), is 8 * 60 *60=28800.
<div style={{maxWidth:800}}> <img src={arduino_demo_time_1}/></div>
**Note:** When the ESP32-C6-GEEK operates in STA mode and connects to the same Wi-Fi network as the PC, the Wi-Fi network the ESP32-C6-GEEK connects to must have a 2.4GHz band. If there is no 2.4GHz band, set the network band to "Any available frequency". Here, we directly choose "Any available frequency".

#### Code

<Details summary="06_LCD_Time.ino" className="code-details" >

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <time.h>
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"

const char* ssid  = "OnePlus 12";
const char *password = "linshuchao020405";
const char* ntpServer = "pool.ntp.org";
const long  utcOffsetInSeconds = 28800; // Beijing: UTC +8 - Get the Eastern 8 Zone time (by default, the prime meridian of the Greenwich Observatory is the base line)
                                        // 28800 = 8 * 60 * 60

void setup() {
  Serial.begin(115200);

  Config_Init();
  LCD_Init();
  LCD_SetBacklight(100);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
  Paint_SetRotate(90);
  LCD_Clear(BLACK);
  delay(1000);

  while (!Serial);
  Paint_DrawString_EN(20, 50, "Wifi Connecting...", &Font20, BLACK, GREEN);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "Wifi Connected", &Font20, BLACK, GREEN);
  Serial.println("Connected to WiFi");
  //Acquisition time
  configTime(utcOffsetInSeconds, 0, ntpServer);
  while (!time(nullptr)) {
    delay(1000);
    Serial.println("Waiting for time sync...");
  }
  LCD_Clear(BLACK);
  Serial.println("Time synced successfully");
}

void loop() {
  time_t now = time(nullptr);
  char* timeString = ctime(&now);
  removeNewlineCharacters(timeString);

  char date[20];  // Save a buffer for the date, such as "2023 Jan 01 Tue"
  char time[9];   // Save time buffer, such as "12:34:56"

  // Extract date and time
  extractDateAndTime(timeString, date, time);

  Serial.print("Date: ");
  Serial.print(date);
  Serial.print(" ");
  Serial.print((date + 6));
  Serial.print(" ");
  Serial.print((date + 10));
  Serial.print(" ");
  Serial.println((date + 14));
  Serial.print("Time: ");
  Serial.println(time);

  Serial.print("Current time is: ");
  Serial.println(timeString);  /// Print time
  Paint_DrawString_EN(55, 32, time, &Font24, BLACK, GREEN);
  Paint_DrawString_EN(15, 82, date, &Font20, BLACK, GREEN);
  Paint_DrawString_EN(80, 82, (date + 6), &Font20, BLACK, GREEN);
  Paint_DrawString_EN(135, 82, (date + 10), &Font20, BLACK, GREEN);
  Paint_DrawString_EN(175, 82, (date + 14), &Font20, BLACK, GREEN);
  // Convert current time to Unix timestamp
  long unixTimestamp = static_cast<long>(now);  //Gets a unix timestamp
  Serial.print("Unix timestamp is: ");
  Serial.println(unixTimestamp);
  delay(100);
}

void removeNewlineCharacters(char* str) {
  size_t len = strlen(str);

  // Search forward from the end of the string, dropping the ending '\r' and '\n'
  for (int i = len - 1; i >= 0; --i) {
    if (str[i] == '\r' || str[i] == '\n') {
      str[i] = '\0';  // Replace '\r' or '\n' with '\o'
    }else{
      break;          // Stop after finding the first character that is not '\r' and '\n'
    }
  }
}

void extractDateAndTime(const char* timeString, char* dateTimeStr, char* timeStr) {
  // Use the sscanf function to extract the week, month, date, and year from the string
  sscanf(timeString, "%s %s %s %s %s", dateTimeStr + 14, dateTimeStr + 6, dateTimeStr + 10, timeStr, dateTimeStr);
}

```

</Details>

#### Code Analysis

- Display "Wifi Connecting..." on the LCD to indicate that the device is attempting to connect to Wi-Fi. Initiate the connection process using `WiFi.begin(ssid, password)` with the specified network name and password, and enter a loop to wait for a successful connection. During this process, print "Connecting to WiFi..." to the serial monitor every 1000 milliseconds to inform the user of the connection progress. Once the connection is successful, clear the LCD screen and display "Wifi Connected", preparing for subsequent network‑dependent operations.

  ```cpp
    void setup() {
    Serial.begin(115200);

    Config_Init();
    LCD_Init();
    LCD_SetBacklight(100);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
    Paint_SetRotate(90);
    LCD_Clear(BLACK);
    delay(1000);

    while (!Serial);
    Paint_DrawString_EN(20, 50, "Wifi Connecting...", &Font20, BLACK, GREEN);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi...");
    }
    LCD_Clear(BLACK);
    Paint_DrawString_EN(20, 50, "Wifi Connected", &Font20, BLACK, GREEN);
    Serial.println("Connected to WiFi");
    //Acquisition time
    configTime(utcOffsetInSeconds, 0, ntpServer);
    while (!time(nullptr)) {
      delay(1000);
      Serial.println("Waiting for time sync...");
    }
    LCD_Clear(BLACK);
    Serial.println("Time synced successfully");
  }
  ```

### 07_SD_Test {#Demo-07_SD_Test}

This example uses the TF card slot of the ESP32-C6-GEEK. Insert a TF card into the slot and open a serial debug assistant. You will see the ESP32-C6-GEEK performing file operations (create, read, update, delete) on the TF card. It is suitable for learning TF card interaction on the ESP32-C6, performing various file operations, and testing stability and reliability.

<div style={{maxWidth:800}}> <img src={arduino_demo_sd}/></div>

#### Code

<Details summary="07_SD_Test.ino" className="code-details" >

```cpp
#include "FS.h"
#include "SD.h"
#include "SPI.h"

//Uncomment and set up if you want to use custom pins for the SPI communication
#define REASSIGN_PINS
int sck = 19;
int miso = 20;
int mosi = 18;
int cs = 23;

void listDir(fs::FS &fs, const char *dirname, uint8_t levels) {
  Serial.printf("Listing directory: %s\n", dirname);

  File root = fs.open(dirname);
  if (!root) {
    Serial.println("Failed to open directory");
    return;
  }
  if (!root.isDirectory()) {
    Serial.println("Not a directory");
    return;
  }

  File file = root.openNextFile();
  while (file) {
    if (file.isDirectory()) {
      Serial.print("  DIR : ");
      Serial.println(file.name());
      if (levels) {
        listDir(fs, file.path(), levels - 1);
      }
    }else{
      Serial.print("  FILE: ");
      Serial.print(file.name());
      Serial.print("  SIZE: ");
      Serial.println(file.size());
    }
    file = root.openNextFile();
  }
}

void createDir(fs::FS &fs, const char *path) {
  Serial.printf("Creating Dir: %s\n", path);
  if (fs.mkdir(path)) {
    Serial.println("Dir created");
  }else{
    Serial.println("mkdir failed");
  }
}

void removeDir(fs::FS &fs, const char *path) {
  Serial.printf("Removing Dir: %s\n", path);
  if (fs.rmdir(path)) {
    Serial.println("Dir removed");
  }else{
    Serial.println("rmdir failed");
  }
}

void readFile(fs::FS &fs, const char *path) {
  Serial.printf("Reading file: %s\n", path);

  File file = fs.open(path);
  if (!file) {
    Serial.println("Failed to open file for reading");
    return;
  }

  Serial.print("Read from file: ");
  while (file.available()) {
    Serial.write(file.read());
  }
  file.close();
}

void writeFile(fs::FS &fs, const char *path, const char *message) {
  Serial.printf("Writing file: %s\n", path);

  File file = fs.open(path, FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open file for writing");
    return;
  }
  if (file.print(message)) {
    Serial.println("File written");
  }else{
    Serial.println("Write failed");
  }
  file.close();
}

void appendFile(fs::FS &fs, const char *path, const char *message) {
  Serial.printf("Appending to file: %s\n", path);

  File file = fs.open(path, FILE_APPEND);
  if (!file) {
    Serial.println("Failed to open file for appending");
    return;
  }
  if (file.print(message)) {
    Serial.println("Message appended");
  }else{
    Serial.println("Append failed");
  }
  file.close();
}

void renameFile(fs::FS &fs, const char *path1, const char *path2) {
  Serial.printf("Renaming file %s to %s\n", path1, path2);
  if (fs.rename(path1, path2)) {
    Serial.println("File renamed");
  }else{
    Serial.println("Rename failed");
  }
}

deleteFile(fs::FS &fs, const char *path) {
  Serial.printf("Deleting file: %s\n", path);
  if (fs.remove(path)) {
    Serial.println("File deleted");
  }else{
    Serial.println("Delete failed");
  }
}

void testFileIO(fs::FS &fs, const char *path) {
  File file = fs.open(path);
  static uint8_t buf[512];
  size_t len = 0;
  uint32_t start = millis();
  uint32_t end = start;
  if (file) {
    len = file.size();
    size_t flen = len;
    start = millis();
    while (len) {
      size_t toRead = len;
      if (toRead > 512) {
        toRead = 512;
      }
      file.read(buf, toRead);
      len -= toRead;
    }
    end = millis() - start;
    Serial.printf("%u bytes read for %lu ms\n", flen, end);
    file.close();
  }else{
    Serial.println("Failed to open file for reading");
  }

  file = fs.open(path, FILE_WRITE);
  if (!file) {
    Serial.println("Failed to open file for writing");
    return;
  }

  size_t i;
  start = millis();
  for (i = 0; i < 2048; i++) {
    file.write(buf, 512);
  }
  end = millis() - start;
  Serial.printf("%u bytes written for %lu ms\n", 2048 * 512, end);
  file.close();
}

void setup() {
  Serial.begin(115200);
  while (!Serial){
    delay(10);
  }

#ifdef REASSIGN_PINS
  SPI.begin(sck, miso, mosi, cs);
  if (!SD.begin(cs)) {
#else
  if (!SD.begin()) {
#endif
    Serial.println("Card Mount Failed");
    return;
  }
  uint8_t cardType = SD.cardType();

  if (cardType == CARD_NONE) {
    Serial.println("No TF card attached");
    return;
  }

  Serial.print("TF Card Type: ");
  if (cardType == CARD_MMC) {
    Serial.println("MMC");
  } else if (cardType == CARD_SD) {
    Serial.println("SDSC");
  } else if (cardType == CARD_SDHC) {
    Serial.println("SDHC");
  }else{
    Serial.println("UNKNOWN");
  }

  uint64_t cardSize = SD.cardSize() / (1024 * 1024);
  Serial.printf("TF Card Size: %lluMB\n", cardSize);

  listDir(SD, "/", 0);
  createDir(SD, "/mydir");
  listDir(SD, "/", 0);
  removeDir(SD, "/mydir");
  listDir(SD, "/", 2);
  writeFile(SD, "/hello.txt", "Hello ");
  appendFile(SD, "/hello.txt", "World!\n");
  readFile(SD, "/hello.txt");
  deleteFile(SD, "/foo.txt");
  renameFile(SD, "/hello.txt", "/foo.txt");
  readFile(SD, "/foo.txt");
  testFileIO(SD, "/test.txt");
  Serial.printf("Total space: %lluMB\n", SD.totalBytes() / (1024 * 1024));
  Serial.printf("Used space: %lluMB\n", SD.usedBytes() / (1024 * 1024));
}

void loop() {}

```

</Details>

#### Code Analysis

- Initialize serial communication, start the HSPI bus and set the clock divider, then attempt to initialize the TF card connected to specific pins. If successful, determine the TF card type and display its capacity. After that, perform a series of tests on file system operations on the TF card, such as listing directories, creating and deleting directories, reading and writing files, renaming files, and testing read/write performance, while outputting the total space and used space of the TF card.

  ```cpp
    void setup() {
    Serial.begin(115200);
    while (!Serial){
      delay(10);
    }

  #ifdef REASSIGN_PINS
    SPI.begin(sck, miso, mosi, cs);
    if (!SD.begin(cs)) {
  #else
    if (!SD.begin()) {
  #endif
      Serial.println("Card Mount Failed");
      return;
    }
    uint8_t cardType = SD.cardType();

    if (cardType == CARD_NONE) {
      Serial.println("No TF card attached");
      return;
    }

    Serial.print("TF Card Type: ");
    if (cardType == CARD_MMC) {
      Serial.println("MMC");
    } else if (cardType == CARD_SD) {
      Serial.println("SDSC");
    } else if (cardType == CARD_SDHC) {
      Serial.println("SDHC");
    }else{
      Serial.println("UNKNOWN");
    }

    uint64_t cardSize = SD.cardSize() / (1024 * 1024);
    Serial.printf("TF Card Size: %lluMB\n", cardSize);

    listDir(SD, "/", 0);
    createDir(SD, "/mydir");
    listDir(SD, "/", 0);
    removeDir(SD, "/mydir");
    listDir(SD, "/", 2);
    writeFile(SD, "/hello.txt", "Hello ");
    appendFile(SD, "/hello.txt", "World!\n");
    readFile(SD, "/hello.txt");
    deleteFile(SD, "/foo.txt");
    renameFile(SD, "/hello.txt", "/foo.txt");
    readFile(SD, "/foo.txt");
    testFileIO(SD, "/test.txt");
    Serial.printf("Total space: %lluMB\n", SD.totalBytes() / (1024 * 1024));
    Serial.printf("Used space: %lluMB\n", SD.usedBytes() / (1024 * 1024));
    }
  ```

### 08_SD_LCD {#Demo-08_SD_LCD}

This example uses the TF card slot of the ESP32-C6-GEEK to read images from the TF card. After saving photo images to the TF card, insert the TF card into the slot. The ESP32-C6-GEEK can read the photos from the TF card and display them on the LCD. It is suitable for learning the interaction between the ESP32-C6, TF card, and TFT screen. You can read JPEG images from the TF card and display them on the screen, testing stability and reliability.

#### TF Card Preparation

Use a card reader to save the photos from the path `.\ESP32-C6-GEEK-Demo\Arduino\pic` onto the TF card, or save your own photos. For optimal display, modify the image size to 240×135.

#### Hardware Connection

Connect both ends of an SH1.0 3PIN cable to the development board and the voltage source under test.
  - The pin connected to GPIO6 on the development board is used to read the measured voltage.
  - The GND pin on the development board (the GND of the I2C or UART interface can be used) is connected to the GND pin of the voltage source under test, ensuring a common ground connection.

#### Code

<Details summary="08_SD_LCD.ino" className="code-details" >

```cpp
#include <SPI.h>
#include <SD.h>
#include <JPEGDecoder.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include "OneButton.h"

#define PIN_INPUT 9
#define SD_CS   23   // Chip select pin
#define SD_MOSI 18  // MOSI pin
#define SD_MISO 20  // MISO pin  
#define SD_SCK  19  // SCK pin

OneButton button(PIN_INPUT, true);

char click = 0;
int totalImages = 0;
String imageFiles[50]; // Store image filenames

SPIClass sdSPI(FSPI);

void setup() {
  Serial.begin(115200);

  sdSPI.begin(SD_SCK, SD_MISO, SD_MOSI, SD_CS);
  
  // Initialize the TF card
  if (!SD.begin(SD_CS,sdSPI)) {
    Serial.println("TF card initialization failed!") ;
    //return;
  }
  else{
      Serial.println("TF card initialized successfully.");
  }

  // Scan for image files on the TF card
  scanImageFiles();
  
  Config_Init();
  LCD_Init();
  LCD_Clear(BLACK);
  LCD_SetBacklight(1000);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 0, BLACK);
  
  // Display the first image (can be built-in or from the TF card)
  if (totalImages > 0) {
    showSDImage(0); // Display the first image from the TF card
  }else{
    Paint_DrawImage(gImage_pic1, 0, 0, 135, 240); // Display the built-in image
  }

  button.attachLongPressStart(LongPressStart, &button);
  button.attachClick(Click, &button);
  button.setLongPressIntervalMs(1000);
}

void loop() {
  button.tick();
  delay(10);
}

void LongPressStart(void *oneButton) {
  analogWrite(DEV_BL_PIN, 0);
}

void Click(void *oneButton) {
  LCD_SetBacklight(1000);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 0, BLACK);
  click++;
  
  if (totalImages > 0) {
    // Use TF card images
    if (click >= totalImages) click = 0;
    showSDImage(click);
  }else{
    // Use built-in images
    if(click >= 4)click = 1;
    switch(click) {
      case 1:  
        Paint_DrawImage(gImage_pic1, 0, 0, 135, 240);
        break;
      case 2:  
        Paint_DrawImage(gImage_pic2, 0, 0, 135, 240);
        break;
      case 3: 
        Paint_DrawImage(gImage_pic3, 0, 0, 135, 240);
        break;
    }
  }
}

// Scan for image files on the TF card
void scanImageFiles() {
  File root = SD.open("/");
  totalImages = 0;
  
  while (File file = root.openNextFile()) {
    String fileName = file.name();
    if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg") || fileName.endsWith(".JPG")) {
      imageFiles[totalImages] = fileName;
      totalImages++;
      Serial.println("Found image: " + fileName);
      if (totalImages >= 50) break; // Store up to 50 filenames
    }
    file.close();
  }
  root.close();
  Serial.println("Found a total of " + String(totalImages) + " images.");
}

// Display JPEG image from TF card
void showSDImage(int index) {
  if (index < 0 || index >= totalImages) return;
  
  String filePath = "/" + imageFiles[index];
  Serial.println("Displaying image: " + filePath);
  
  File jpegFile = SD.open(filePath, FILE_READ);
  if (!jpegFile) {
    Serial.println("Cannot open file: " + filePath);
    return;
  }
  
  // Decode and display JPEG
  boolean decoded = JpegDec.decodeSdFile(filePath.c_str());
  
  if (decoded) {
    // Image information
    Serial.print("Image size: ");
    Serial.print(JpegDec.width);
    Serial.print(" x ");
    Serial.print(JpegDec.height);
    Serial.print(", MCU size: ");
    Serial.print(JpegDec.MCUWidth);
    Serial.print(" x ");
    Serial.println(JpegDec.MCUHeight);
    
    // Adjust image size to fit the screen
    renderJPEG();
  }else{
    Serial.println("JPEG decoding failed.");
  }
  
  jpegFile.close();
}

void renderJPEG() {
  uint16_t *pImg;
  uint16_t mcu_w = JpegDec.MCUWidth;
  uint16_t mcu_h = JpegDec.MCUHeight;
  uint32_t jpeg_width = JpegDec.width;
  uint32_t jpeg_height = JpegDec.height;
  
  Serial.print("270-degree rotation: ");
  Serial.print(jpeg_width);
  Serial.print(" x ");
  Serial.println(jpeg_height);
  
  uint16_t rotated_width = jpeg_height;   // 135
  uint16_t rotated_height = jpeg_width;   // 240
  
  uint16_t x_pos = (LCD_WIDTH - rotated_width) / 2;
  uint16_t y_pos = (LCD_HEIGHT - rotated_height) / 2;
  
  Paint_Clear(WHITE);
  
  while (JpegDec.read()) {
    pImg = JpegDec.pImage;
    
    uint16_t mcu_x = JpegDec.MCUx * mcu_w;
    uint16_t mcu_y = JpegDec.MCUy * mcu_h;
    
    for (int y = 0; y < mcu_h; y++) {
      for (int x = 0; x < mcu_w; x++) {
        uint16_t orig_x = mcu_x + x;
        uint16_t orig_y = mcu_y + y;
        
        if (orig_x >= jpeg_width || orig_y >= jpeg_height) continue;
        
        // Rotation formula:
        uint16_t screen_x = x_pos + (jpeg_height - orig_y - 1);
        uint16_t screen_y = y_pos + orig_x;
        
        if (screen_x < LCD_WIDTH && screen_y < LCD_HEIGHT) {
          uint16_t color = pImg[x + y * mcu_w];
          Paint_SetPixel(screen_x, screen_y, color);
        }
      }
    }
  }
  
  JpegDec.abort();
}
```

</Details>

#### Code Analysis

- Decode the JPEG image and draw it centered on the TFT display.

  ```cpp
    void renderJPEG() {
    uint16_t *pImg;
    uint16_t mcu_w = JpegDec.MCUWidth;
    uint16_t mcu_h = JpegDec.MCUHeight;
    uint32_t jpeg_width = JpegDec.width;
    uint32_t jpeg_height = JpegDec.height;
    
    Serial.print("270-degree rotation: ");
    Serial.print(jpeg_width);
    Serial.print(" x ");
    Serial.println(jpeg_height);
    
    uint16_t rotated_width = jpeg_height;   // 135
    uint16_t rotated_height = jpeg_width;   // 240
    
    uint16_t x_pos = (LCD_WIDTH - rotated_width) / 2;
    uint16_t y_pos = (LCD_HEIGHT - rotated_height) / 2;
    
    Paint_Clear(WHITE);
    
    while (JpegDec.read()) {
      pImg = JpegDec.pImage;
      
      uint16_t mcu_x = JpegDec.MCUx * mcu_w;
      uint16_t mcu_y = JpegDec.MCUy * mcu_h;
      
      for (int y = 0; y < mcu_h; y++) {
        for (int x = 0; x < mcu_w; x++) {
          uint16_t orig_x = mcu_x + x;
          uint16_t orig_y = mcu_y + y;
          
          if (orig_x >= jpeg_width || orig_y >= jpeg_height) continue;
          
          // Rotation formula:
          uint16_t screen_x = x_pos + (jpeg_height - orig_y - 1);
          uint16_t screen_y = y_pos + orig_x;
          
          if (screen_x < LCD_WIDTH && screen_y < LCD_HEIGHT) {
            uint16_t color = pImg[x + y * mcu_w];
            Paint_SetPixel(screen_x, screen_y, color);
          }
        }
      }
    }
    
    JpegDec.abort();
  }
  ```

### 09_BLE_LCD {#Demo-09_BLE_LCD}

This example enables Bluetooth BLE on the ESP32-C6-GEEK. Use a mobile phone to open a Bluetooth debug assistant, connect to the ESP32-C6-GEEK, and perform BLE communication with the phone. Messages sent and received are displayed on the LCD. It is suitable for learning how the ESP32-C6 interacts with BLE and LCD, acting as a BLE server to send/receive data and display it on the LCD, testing stability and reliability.

#### Code

<Details summary="09_BLE_LCD.ino" className="code-details" >

```cpp
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
uint8_t txValue = 0;

#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer *pServer) {
      deviceConnected = true;
    };

    void onDisconnect(BLEServer *pServer) {
      deviceConnected = false;
    }
};

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      String rxValue = pCharacteristic->getValue();
      if (rxValue.length() > 0) {
        Serial.println("***************");
        Serial.print("Received Value: ");
        for (int i = 0; i < rxValue.length(); i++)
          Serial.print(rxValue[i]);
        Serial.println();
        Serial.println("***************");
        const char *rxValue1 = rxValue.c_str();
        Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
        Paint_SetRotate(90);
        LCD_Clear(BLACK);
        Paint_DrawString_EN(0, 10, "***************", &Font24, BLACK, WHITE);
        Paint_DrawString_EN(0, 35, "Receive Value:", &Font24, BLACK, WHITE);
        Paint_DrawString_EN(0, 58, rxValue1, &Font20, BLACK, 0xfff0); 
        Paint_DrawString_EN(0, 100, "***************", &Font24, BLACK, WHITE); 
      }
    }
};

void sendBluetoothData(uint8_t *data, size_t length) {
  if (deviceConnected) {
    pTxCharacteristic->setValue(data, length);
    pTxCharacteristic->notify();
  }
}

void setup()
{
  Config_Init();
  LCD_Init();
  Serial.begin(115200);
  LCD_Clear(BLACK);
  LCD_SetBacklight(1000);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 0, BLACK);
  Paint_DrawImage(gImage_pic1, 0, 0, 135, 240);
  // Create the BLE Device
  BLEDevice::init("Waveshare_ESP32C6_GEEK");
  // Create the BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  // Create the BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);  
  // Create a BLE Characteristic
  pTxCharacteristic = pService->createCharacteristic(
										CHARACTERISTIC_UUID_TX,
										BLECharacteristic::PROPERTY_NOTIFY
									);
                      
  pTxCharacteristic->addDescriptor(new BLE2902());

  BLECharacteristic * pRxCharacteristic = pService->createCharacteristic(
											 CHARACTERISTIC_UUID_RX,
											BLECharacteristic::PROPERTY_WRITE
										);

  pRxCharacteristic->setCallbacks(new MyCallbacks());  
  // Start the service
  pService->start();
  // Start advertising
  pServer->getAdvertising()->start();
  Serial.println("Waiting a client connection to notify...");  
}

void loop()
{
  // Read all available data from Serial and send it via BLE
  if (Serial.available() > 0) {
    String readBuff;
    char readBuff1[100];
    size_t bufferSize = 0;  // Current size of data in buffer

    while (Serial.available() > 0) {
      char input = Serial.read();
      readBuff += input;  // Store input in buffer
      bufferSize ++;
      // Check if the buffer is full, or a newline character is received
      if (input == '\n') {
        // Send the entire buffer via BLE
        int idx = readBuff.lastIndexOf("\r");
        readBuff = readBuff.substring(0,idx);
        sprintf(readBuff1,"%s",readBuff);
        sendBluetoothData((uint8_t*)readBuff1, (bufferSize - 2));
        Serial.println("***************");
        Serial.print("Send Value: ");
        Serial.print(readBuff1);
        Serial.println();
        Serial.println("***************");
        Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
        Paint_SetRotate(90);
        LCD_Clear(BLACK);
        Paint_DrawString_EN(0, 10, "***************", &Font24, BLACK, WHITE);
        Paint_DrawString_EN(0, 35, "Send Value:", &Font24, BLACK, WHITE);
        Paint_DrawString_EN(0, 58, readBuff1, &Font20, BLACK, 0xfff0); 
        Paint_DrawString_EN(0, 100, "***************", &Font24, BLACK, WHITE);     
        // Reset buffer and size for the next input
        bufferSize = 0;
        readBuff = "";
        memset(readBuff1, 0, sizeof(readBuff1));
      }
    }
  }

  // Your other low-power operations can be added here

  delay(10);  // Introduce a short delay for power efficiency

    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
		// do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }  
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/

```

</Details>

#### Operation Result
`Waveshare_ESP32C6_GEEK` in `BLEDevice::init("Waveshare_ESP32C6_GEEK")` is the Bluetooth name.
<div style={{maxWidth:800}}> <img src={arduino_demo_09}/></div>

- Use the mobile phone's Bluetooth debug assistant to scan and connect to the device.
  <div style={{maxWidth:800}}> <img src={arduino_demo_0902}/></div>
- Use the mobile Bluetooth debug assistant to send a Bluetooth message to the ESP32-C6-GEEK. Upon receiving the message, the ESP32-C6-GEEK will display it on the LCD, and the serial debug assistant will print the message content.
  <div style={{maxWidth:800}}> <img src={arduino_demo_0903}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_0904}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_0905}/></div>

- In the mobile Bluetooth debug assistant, open the receive settings. Connect the ESP32-C6-GEEK to a PC using a [USB to UART adapter](https://www.waveshare.com/ch343-usb-uart-board.htm?sku=21440). Open a serial debug assistant on the PC. Send a serial message converted to a Bluetooth message to the phone. Note: When sending, check "AddCrLf". The sent message content will be displayed on the LCD. Observe on the mobile phone whether the Bluetooth message is received.

  <div style={{maxWidth:800}}> <img src={arduino_demo_0906}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_0907}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_0908}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_0909}/></div>

### 10_BLE_UART {#Demo-10_BLE_UART}

This example enables Bluetooth BLE on the ESP32-C6-GEEK. Use a mobile phone to open a Bluetooth debug assistant, connect to the ESP32-C6-GEEK, and perform BLE communication with the phone. Messages sent and received are displayed via the serial port. The operation is the same as 09_BLE_LCD, but the LCD is not enabled. It uses UART to display message content, significantly reducing power consumption. For the operation procedure, please see 09_BLE_LCD.

### 11_BLE_Keyboard {#Demo-11_BLE_Keyboard}

- This example allows the ESP32-C6-GEEK to be used as a Bluetooth keyboard. Connect the ESP32-C6-GEEK to a PC via Bluetooth to perform a series of single-key or key combination operations. It is suitable for simulating a BLE keyboard with the ESP32-C6-GEEK, sending text and key commands, and testing stability and reliability.
- Press the Boot button to reboot and exit the program.

#### Code

<Details summary="11_BLE_Keyboard.ino" className="code-details" >

```cpp
/**
 * This example turns the ESP32 into a Bluetooth LE keyboard that writes the words, presses Enter, presses a media key and then Ctrl+Alt+Delete
 */
#include <BleKeyboard.h>

BleKeyboard bleKeyboard("ESP32-C6-GEEK", "Waveshare", 100);

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");
  bleKeyboard.begin();
}

void loop() {
  if(bleKeyboard.isConnected()) {
    Serial.println("Sending 'Waveshare'...");
    bleKeyboard.print("waveshare");

    delay(500);

    Serial.println("Sending Enter key...");
    bleKeyboard.write(KEY_RETURN);

    delay(500);

    Serial.println("Sending Ctrl+Alt+Delete...");
    bleKeyboard.press(KEY_LEFT_CTRL);
    bleKeyboard.press(KEY_LEFT_ALT);
    bleKeyboard.press(KEY_DELETE);
    delay(100);
    bleKeyboard.releaseAll();
  }

  Serial.println("Waiting 5 seconds...");
  delay(5000);
}

```

</Details>

#### Code Analysis

- Bluetooth name

  ```cpp
    BleKeyboard bleKeyboard("ESP32-C6-GEEK", "Waveshare", 100);
  ```
Check if the Bluetooth keyboard is connected. If connected:
  - Output the prompt "Sending 'Waveshare'..." to the serial port, then use the `print` method to send the string "Waveshare".
  - Output the prompt "Sending Enter key..." to the serial port, then use the `write` method to send the Enter key (KEY_RETURN).
  - Output the prompt "Sending Ctrl+Alt+Delete..." to the serial port. Press the left Ctrl, left Alt, and Delete keys in sequence, delay for 100 milliseconds, then release all keys.
  - Output the prompt "Waiting 5 seconds..." to the serial port, then delay for 5000 milliseconds, waiting for the next loop.

  ```cpp
    void loop() {
    if(bleKeyboard.isConnected()) {
      Serial.println("Sending 'Waveshare'...");
      bleKeyboard.print("waveshare");

      delay(500);

      Serial.println("Sending Enter key...");
      bleKeyboard.write(KEY_RETURN);

      delay(500);

      Serial.println("Sending Ctrl+Alt+Delete...");
      bleKeyboard.press(KEY_LEFT_CTRL);
      bleKeyboard.press(KEY_LEFT_ALT);
      bleKeyboard.press(KEY_DELETE);
      delay(100);
      bleKeyboard.releaseAll();
    }

    Serial.println("Waiting 5 seconds...");
    delay(5000);
  }
  ```
#### Operation Result
- Use the PC to turn on Bluetooth, scan and connect to the device.
- Once successfully connected, a series of keyboard operations (output "Waveshare", Ctrl+Alt+Delete) will be performed every 5 seconds.
- Press the Boot button to reboot and exit the program.
- You can view the values of individual keys in the `BleKeyboard.h` file located in the `libraries` folder.

### 12_WIFI_AP_LCD {#Demo-12_WIFI_AP_LCD}

This example enables the Wi-Fi AP mode on the ESP32-C6-GEEK. After a PC connects to its Wi-Fi, you can log in to the IP address and control the LCD display of the ESP32-C6-GEEK via a web interface to show images. It is suitable for learning how the ESP32-C6-GEEK interacts with Wi-Fi and LCD, acting as a Wi-Fi Access Point to communicate with clients and display content on the LCD, testing stability and reliability.
<div style={{maxWidth:800}}> <img src={arduino_demo_adc_test}/></div>

#### Code

<Details summary="12_WIFI_AP_LCD.ino" className="code-details" >

```cpp
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include "WIFI_Driver.h"

// Set these to your desired credentials.
const char *ssid = "ESP32-C6-GEEK";
const char *password = "Waveshare";

WiFiServer server(80);
WiFiClient client;

void setup()
{
  Config_Init();
  LCD_Init();
  Serial.begin(115200);
  LCD_SetBacklight(100);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
  Paint_SetRotate(90);
  LCD_Clear(0x000f);

  WIFI_AP_Init();
}

void loop()
{
  WiFiClient client = server.available();   // listen for incoming clients
  WIFI_LCD_Control(client);
}
```

</Details>

#### Code Analysis

- Initialize related configurations and the LCD display.
- Call `WIFI_AP_Init()` to initialize the Wi-Fi Access Point.

  ```cpp
    void setup()
  {
    Config_Init();
    LCD_Init();
    Serial.begin(115200);
    LCD_SetBacklight(100);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
    Paint_SetRotate(90);
    LCD_Clear(0x000f);

    WIFI_AP_Init();
  }
  ```
- Monitor if any client connects to the server via `WiFiClient client = server.available();`.
- Call the `WIFI_LCD_Control(client)` function to handle the connected client. This may perform operations related to LCD display, with specific functionality depending on the implementation of that function.

  ```cpp
  void loop()
  {
    WiFiClient client = server.available();   // listen for incoming clients
    WIFI_LCD_Control(client);
  }
  ```

#### Operation Result
The `ssid` is the AP name (ESP32-C6-GEEK) created by the ESP32-C6-GEEK, and the `password` is the password (Waveshare) to connect to the AP.
<div style={{maxWidth:800}}> <img src={arduino_demo_1201}/></div>

- Use a PC to connect to the AP of the ESP32-C6-GEEK, and enter the password **Waveshare**.
- If the program is successfully flashed but the PC cannot detect the Wi-Fi, power cycle the development board and try again.
- The LCD will display the IP address of the HTTP server.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1202}/></div>

Use a browser to log in to the IP: 192.168.4.1. Control the LCD of the ESP32-C6-GEEK via buttons on the server. Press different buttons and observe the changes on the LCD. For more LCD display functions, refer to the [LCD Program Description](https://www.waveshare.com/wiki/1.5inch_LCD_Module#ESP_Software_Description).
<div style={{maxWidth:800}}> <img src={arduino_demo_1203}/></div>

### 13_WIFI_TCP_Client {#Demo-13_WIFI_TCP_Client}

This example enables the STA mode of Wi-Fi on the ESP32-C6-GEEK. After connecting to the same Wi-Fi network as a PC or mobile phone, it acts as a TCP Client to access a TCP Server created by the PC or phone, establishes TCP communication with them, and displays the received content on the LCD. It is suitable for learning the interaction between the ESP32-C6-GEEK, Wi-Fi, and LCD. After connecting to Wi-Fi, it attempts to connect to a server, sends/receives data, and displays it on the LCD, testing stability and reliability.

#### Code Modification

1. Use a PC to open a hotspot, set the network band to "Any available frequency". Ensure the `ssid` and `password` in the program match the Wi-Fi name and password you want to connect to.
2. Download the [Network Debug Assistant](https://files.waveshare.com/wiki/common/NetAssist.zip), and modify it to your local IP address (the following 192.168.137.1 is an example IP address).
    <div style={{maxWidth:800}}> <img src={arduino_demo_1301}/></div>

#### Code

<Details summary="13_WIFI_TCP_Client.ino" className="code-details" >

```cpp
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include <WiFi.h>

const char *ssid = "WSTEST";
const char *password = "waveshare0755";

const IPAddress serverIP(192,168,137,7); //Address to be accessed
uint16_t serverPort = 8080;              //Server port number
WiFiClient client;                       // Declares a client object that is used to connect to the server

void intToIpAddress(uint32_t ip, char *result) {
    sprintf(result, "%d.%d.%d.%d", ip & 255,(ip >> 8) & 255,(ip >> 16) & 255,(ip >> 24) & 255);
}

void setup()
{
/************Each module is initialized***************/  
    Config_Init();
    LCD_Init();
    Serial.begin(115200);
    LCD_SetBacklight(100);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
    Paint_SetRotate(90);
    LCD_Clear(0x000f);

    WiFi.mode(WIFI_STA);
    WiFi.setSleep(false); //Turn off wifi hibernation in STA mode to improve response speed
    WiFi.begin(ssid, password);
/**************Wait for WIFI connection***************/  
    char point;
    char line = 60;
    while (WiFi.status() != WL_CONNECTED)
    {
        Paint_DrawString_EN(0, 5, "ESP32-C6-GEEK", &Font24, 0x000f, 0xfff0);
        Paint_DrawString_EN(0, 40, "Trying to connect", &Font20, 0x000f, 0xfff0);
        Paint_DrawString_EN(point, line, ".", &Font20, 0x000f, 0xfff0);
        point += 8;
        if(point >= 230)
        {
          line += 15;
          point = 0; 
        }
        printf(".\r\n");
        delay(500);
    }
/******************WIFI is connected******************/  
    LCD_Clear(0x000f);
    IPAddress myIP = WiFi.localIP();
    uint32_t ipAddress = WiFi.localIP();
    char ipAddressStr[16]; 
    intToIpAddress(ipAddress, ipAddressStr);
    Paint_DrawString_EN(0, 20, "Connected", &Font24, 0x000f, 0xfff0);
    Paint_DrawString_EN(0, 50, "MyIP:", &Font24, 0x000f, 0xfff0);
    Paint_DrawString_EN(80, 54, ipAddressStr, &Font16, 0x000f, 0xfff0);
    printf("Connected\r\n");
    printf("IP Address:");
    printf("%s\r\n", ipAddressStr);
}

void loop()
{
/***************Wait to connect server***************/  
    Paint_DrawString_EN(0, 83, "Trying to access", &Font20, 0x000f, 0xfff0);
    printf("Trying to access the server\r\n");
/************Server connection successful************/      
    if (client.connect(serverIP, serverPort)) //Attempting to access the target address
    {
        LCD_Clear(0x000f);
        Paint_DrawString_EN(0, 25, "ESP32-C6-GEEK", &Font24, 0x000f, 0xfff0);
        Paint_DrawString_EN(0, 65, "Access successful", &Font20, 0x000f, 0xfff0);
        printf("Access successful\r\n");
        client.print("Hello world!");                    //Send data to the server
/**************Receiving server message**************/  
        while (client.connected() || client.available()) //If it is connected or has received unread data
        {
            if (client.available()) //If there is data to read
            {
                String line = client.readStringUntil('\r'); /// Reads data to a newline
                printf("Read the data:\r\n");
                printf("%s\r\n",line);
                client.write(line.c_str()); //Send back the received data
                LCD_Clear(0x000f);
                Paint_DrawString_EN(0, 10, "Received:", &Font24, 0x000f, 0xfff0);
                Paint_DrawString_EN(0, 33, line.c_str(), &Font20, 0x000f, 0xff00);
            }
        }

        printf("Close current connection\r\n");
        client.stop(); //Close the client
    }
    else
    {
        printf("Access failure\r\n");
        client.stop(); //Close the client
    }
    delay(5000);
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/

```

</Details>

#### Code Analysis

- Use the `sprintf` function to convert the passed IP address integer into a string in dotted-decimal format and store it in the character array pointed to by the `result` pointer.

  ```cpp
    void intToIpAddress(uint32_t ip, char *result) {
    sprintf(result, "%d.%d.%d.%d", ip & 255,(ip >> 8) & 255,(ip >> 16) & 255,(ip >> 24) & 255);
  }
  ```
#### Operation Result
- The LCD screen shows an attempt to connect, and after a few moments it shows that it is connected
- Modify the `NetAssist` parameters: set the protocol type to TCP Server, the local IP address to match the one in the program, and the local port to 8080. Click "Open" to establish a connection and TCP communication with the ESP32-C6-GEEK (TCP Client).
  <div style={{maxWidth:800}}> <img src={arduino_demo_1302}/></div>
- After a successful connection, the TCP Server will receive the TCP message "Hello world" sent by the ESP32-C6-GEEK, and the LCD will display "Access successful".
  <div style={{maxWidth:800}}> <img src={arduino_demo_1303}/></div>
- Send a TCP message from the PC-side TCP Server to the ESP32-C6-GEEK. If sent successfully, the ESP32-C6-GEEK, acting as a TCP Client, will receive the message and display its content on the LCD.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1304}/></div>
- You can also use a mobile phone to open a hotspot. The hotspot name and password should be the same as above, and select the 2.4GHz band.
- After opening the hotspot, use a TCP debug assistant on the phone to perform TCP communication with the ESP32-C6-GEEK.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1305_1}/></div>
- Modify the serverIP in the code to the IP address (192.168.6.123) of the TCP server created by the mobile phone at last.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1305_2}/></div>
- After flashing the code and a successful connection, the TCP Server will receive the TCP message "Hello world" sent by the ESP32-C6-GEEK, and the LCD will display "Access successful". You can send TCP messages from the mobile TCP Server to the ESP32-C6-GEEK. If sent successfully, the ESP32-C6-GEEK, acting as a TCP Client, will receive the message and display its content on the LCD.
  <div style={{maxWidth:1000}}> <img src={arduino_demo_1306}/></div>

### 14_WIFI_TCP_Server {#Demo-14_WIFI_TCP_Server}

This example enables the STA mode of Wi-Fi on the ESP32-C6-GEEK. After connecting to a hotspot opened by a PC, it creates a TCP Server. The PC creates a TCP Client to access the ESP32-C6-GEEK, establishing TCP communication between them. The GEEK displays the received content on the LCD. It is suitable for learning the interaction between the ESP32-C6-GEEK, Wi-Fi, and LCD. It acts as a Wi-Fi server, receives client data and displays it on the LCD, testing stability and reliability.

#### Code Modification
- Use a PC to open a hotspot, set the network band to "Any available frequency". Ensure the `ssid` and `password` in the program match the Wi-Fi name and password you want to connect to.

#### Code

<Details summary="14_WIFI_TCP_Server.ino" className="code-details" >

```cpp
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include <WiFi.h>

const char *ssid = "WSTEST";
const char *password = "waveshare0755";
WiFiServer server; /// Declares the server object

void intToIpAddress(uint32_t ip, char *result) {
    sprintf(result, "%d.%d.%d.%d", ip & 255,(ip >> 8) & 255,(ip >> 16) & 255,(ip >> 24) & 255);
}

void setup()
{
/************Each module is initialized***************/  
    Config_Init();
    LCD_Init();
    Serial.begin(115200);
    LCD_SetBacklight(100);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, 0x000f);
    Paint_SetRotate(90);
    LCD_Clear(0x000f);

    WiFi.mode(WIFI_STA);
    WiFi.setSleep(false); //Turn off wifi hibernation in STA mode to improve response speed
    WiFi.begin(ssid, password);
/**************Wait for WIFI connection***************/  
    char point;
    char line = 60;
    while (WiFi.status() != WL_CONNECTED)
    {
        Paint_DrawString_EN(0, 5, "ESP32-C6-GEEK", &Font24, 0x000f, 0xfff0);
        Paint_DrawString_EN(0, 40, "Trying to connect", &Font20, 0x000f, 0xfff0);
        Paint_DrawString_EN(point, line, ".", &Font20, 0x000f, 0xfff0);
        point += 12;
        if(point >= 228)
        {
          line += 15;
          point = 0; 
        }
        printf(".\r\n");
        delay(1000);
    }
    LCD_Clear(0x000f);    
}

void loop()
{
/******************WIFI is connected******************/  
    IPAddress myIP = WiFi.localIP();
    uint32_t ipAddress = WiFi.localIP();
    char ipAddressStr[16]; 
    intToIpAddress(ipAddress, ipAddressStr);
    printf("Connected\r\n");
    printf("IP Address:");
    printf("%s\r\n", ipAddressStr);
    server.begin(8080); 
/***********Wait for the client to connect***********/  
    WiFiClient client = server.available(); //Try to create a customer object
    Paint_DrawString_EN(0, 7, "Connected WIFI", &Font24, 0x000f, 0xfff0);
    Paint_DrawString_EN(0, 50, "IP:", &Font24, 0x000f, 0xfff0);
    Paint_DrawString_EN(55, 54, ipAddressStr, &Font16, 0x000f, 0xfff0);
    Paint_DrawString_EN(0, 90, "Trying to access", &Font20, 0x000f, 0xfff0);
    printf("Trying to access the server\r\n");
/************client connection successful************/       
     if (client) //If current customer available
    {
      printf("[Client connected]\r\n");
      while (client.connected() || client.available()) //If it is connected or has received unread data
      {
        if (client.available()) //If there is data to read
        {
            String line = client.readStringUntil('\n'); // Read data from the client up to the newline character
            const char* charArray = line.c_str();       // Gets a string ending in '\n'
            // Removes the trailing return newline character
            int length = line.length();
            while (length > 0 && (line[length - 1] == '\r' || line[length - 1] == '\n')) {
                length--;
            }
            // Creates a new array of characters, excluding the return newline character
            char* modifiedCharArray = new char[length + 1];
            memcpy(modifiedCharArray, charArray, length);
            modifiedCharArray[length] = '\0'; // Add a null character to ensure that the character array ends in null

            LCD_Clear(0x000f);
            Paint_DrawString_EN(0, 10, "Received:", &Font24, 0x000f, 0xfff0);
            Paint_DrawString_EN(0, 33, modifiedCharArray, &Font20, 0x000f, 0xff00);
        }
      }
      client.stop();                                //End the current connection
      printf("[Client disconnected]\r\n");
    }
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/

```

</Details>

#### Code Analysis

- Use the `sprintf` function to convert the passed IP address integer into a string in dotted-decimal format and store it in the character array pointed to by the `result` pointer.

  ```cpp
    void intToIpAddress(uint32_t ip, char *result) {
    sprintf(result, "%d.%d.%d.%d", ip & 255,(ip >> 8) & 255,(ip >> 16) & 255,(ip >> 24) & 255);
  }
  ```
#### Operation Result
- After successful flashing, the LCD displays:
  <div style={{maxWidth:800}}> <img src={arduino_demo_1401}/></div>
- After Wi-Fi connection, the LCD will display the TCP Server IP. Open a TCP Client in a serial debug assistant to connect and communicate with the ESP32-C6-GEEK (TCP Server).
  - ①. Modify the port name to "TCPClient", set the remote address to the IP displayed on the LCD screen, port **8080**, and click **Connect**.
  - ②. Check **AddCrLf**.
  - ③. Enter the message.
  - ①. Click **Send**.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1402}/></div>
- After the message is sent successfully, the LCD screen displays:
  <div style={{maxWidth:800}}> <img src={arduino_demo_1403}/></div>

### 15_WIFI_Web_Server {#Demo-15_WIFI_Web_Server}

This example enables the AP mode of Wi-Fi on the ESP32-C6-GEEK. After a PC connects to its Wi-Fi, open a serial debug assistant. Send messages to the GEEK via the HTTP webpage created by the ESP32-C6-GEEK, and observe the received content on the serial debug assistant and LCD. It is suitable for learning the interaction between the ESP32-C6-GEEK, Wi-Fi, and LCD. It acts as a Wi-Fi Access Point server, handles client requests, and tests stability and reliability.

#### Hardware Connection

- Connect the UART interface of the ESP32-C6-GEEK to a PC using a USB to UART tool, and open a serial debug assistant.
  <div style={{maxWidth:400}}> <img src={arduino_demo_UART}/></div>

#### Code

<Details summary="15_WIFI_Web_Server.ino" className="code-details" >

```cpp
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"
#include "WIFI_Driver.h"

// Set these to your desired credentials.
const char *ssid = "ESP32-C6-GEEK";
const char *password = "Waveshare";

WiFiServer server(80);
WiFiClient client;

void setup()
{
  Config_Init();
  LCD_Init();
  Serial.begin(115200);
  LCD_SetBacklight(100);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
  Paint_SetRotate(90);
  LCD_Clear(0x000f);

  WIFI_AP_Init();
}

void loop()
{
  WiFiClient client = server.available();   // listen for incoming clients
  WIFI_Web_Server(client);
}
```

</Details>

#### Code Analysis

- Initialize related configurations and the LCD display.
- Call `WIFI_AP_Init()` to initialize the Wi-Fi Access Point.

  ```cpp
    void setup()
  {
    Config_Init();
    LCD_Init();
    Serial.begin(115200);
    LCD_SetBacklight(100);
    Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
    Paint_SetRotate(90);
    LCD_Clear(0x000f);

    WIFI_AP_Init();
  }
  ```

#### Operation Result
- After successful flashing, use a PC to connect to the AP of the ESP32-C6-GEEK.
- The LCD will display the IP address of the HTTP server. Use a browser to log in to the IP: 192.168.4.1.
- Connect the UART interface of the ESP32-C6-GEEK to a PC using a USB to UART tool, and open a serial debug assistant.
- You can enter text content on the HTTP Web page and send an HTTP request to the ESP32-C6-GEEK. The received content will be displayed on both the serial debug assistant and the LCD.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1501}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1502}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1503}/></div>

### 16_MQTT_sub_pub {#Demo-16_MQTT_sub_pub}

This example enables the STA mode of Wi-Fi on the ESP32-C6-GEEK. After connecting to Wi-Fi, it uses the Waveshare Cloud Platform for MQTT communication, subscribing to and publishing topics to achieve long-distance information transmission. It is suitable for learning the interaction between the ESP32-C6-GEEK, Wi-Fi, MQTT, and LCD. It connects to Wi-Fi and an MQTT server, sends/receives JSON data and displays it on the LCD, testing stability and reliability.

#### Code

<Details summary="16_MQTT_sub_pub.ino" className="code-details" >

```cpp
#include <ArduinoJson.h>
#include <Arduino.h>
#include <PubSubClient.h>
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"

#define MSG_BUFFER_SIZE (50)

// The name and password of the WiFi access point
#define STASSID "WSTEST" // Fill in your WIFI name
#define STAPSK  "waveshare0755" // Fill in your WIFI password

const char* mqtt_server = "mqtt.waveshare.cloud";
int PORT = 1883;

const char* ID = "9c1b5749";  // Defining device ID
char  pub[] = "Pub/1254/54/9c1b5749";      // MQTT release topic
char  sub[] = "Sub/1254/54/9c1b5749";      // MQTT subscribe to topics

StaticJsonDocument<400> sendJson;
StaticJsonDocument<400> readJson;

unsigned long lastUpdateTime = 0;
const char* ssid = STASSID;
const char* password = STAPSK;
char msg[MSG_BUFFER_SIZE];

WiFiClient espClient;
PubSubClient client(espClient);

const unsigned long updateInterval = 5000;

void setup() {
  Serial.begin(115200);

  Config_Init();
  LCD_Init();
  LCD_SetBacklight(100);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
  Paint_SetRotate(90);
  LCD_Clear(BLACK);

  setup_wifi();
  client.setServer(mqtt_server, PORT);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  if (millis() - lastUpdateTime > updateInterval) {  // Periodic data reporting
    sendJsonData();
    lastUpdateTime = millis();
  }
}

// MQTT subscribes to callback functions for processing received messages
void callback(char* topic, byte* payload, unsigned int length) {
  String inputString;
  for (int i = 0; i < length; i++) {
    inputString += (char)payload[i];
  }
  Serial.println(inputString);
  int dataBegin = inputString.indexOf("\"data\"");
  if (dataBegin == -1) {
    Serial.println(F("Missing 'data' field in JSON."));
    return;
  }
  int builtInBegin = inputString.indexOf("\"key\"", dataBegin); // Please change to your data identifier
  if (builtInBegin == -1) {
    Serial.println(F("Missing 'builtIn' field in 'data' object."));
    return;
  }
  int valueBegin = inputString.indexOf(':', builtInBegin);
  int valueEnd = inputString.indexOf('}', valueBegin);
  if (valueBegin == -1 || valueEnd == -1) {
    Serial.println(F("Invalid 'builtIn' value."));
    return;
  }
  String builtInValueStr = inputString.substring(valueBegin + 1, valueEnd);
  int builtInValue = builtInValueStr.toInt();
  if (builtInValue == 0) {
    LCD_Clear(BLACK);
    Paint_DrawString_EN(75, 55, "close!", &Font24, BLACK, GREEN);
    Serial.println("close!");
  }else{
    LCD_Clear(BLACK);
    Paint_DrawString_EN(75, 55, "open!", &Font24, BLACK, GREEN);
    Serial.println("open!");
  }
}

void setup_wifi() {
  Paint_DrawString_EN(20, 50, "Wifi Connecting...", &Font20, BLACK, GREEN);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "Wifi Connected", &Font20, BLACK, GREEN);
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

// Reconnect to the MQTT server
void reconnect() {
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "MQTT Connecting...", &Font20, BLACK, GREEN);
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect(ID)) {
      Serial.println("connected");
      // Subscribe to the topic when the connection is successful
      client.subscribe(sub);
    }else{
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "MQTT Connected", &Font20, BLACK, GREEN);
}

// Send data in JSON format to MQTT server
void sendJsonData() {
  sendJson["ID"] = ID;
  String pubres;
  serializeJson(sendJson, pubres);
  int str_len = pubres.length() + 1;
  char char_array[str_len];
  pubres.toCharArray(char_array, str_len);
  client.publish(pub, char_array);
}
```

</Details>

#### Code Analysis

- Convert the received byte array into a string `inputString`.
- Find specific JSON fields within the string, such as `"data"` and `"key"` (these can be modified to specific data identifiers according to actual needs).
- Extract the value of the `"builtIn"` field and perform different operations based on that value. If the value is 0, display "close!" on the LCD; otherwise, display "open!". Also output the corresponding information via the serial port.

  ```cpp
  void callback(char* topic, byte* payload, unsigned int length) {
    String inputString;
    for (int i = 0; i < length; i++) {
      inputString += (char)payload[i];
    }
    Serial.println(inputString);
    int dataBegin = inputString.indexOf("\"data\"");
    if (dataBegin == -1) {
      Serial.println(F("Missing 'data' field in JSON."));
      return;
    }
    int builtInBegin = inputString.indexOf("\"key\"", dataBegin); // Please change to your data identifier
    if (builtInBegin == -1) {
      Serial.println(F("Missing 'builtIn' field in 'data' object."));
      return;
    }
    int valueBegin = inputString.indexOf(':', builtInBegin);
    int valueEnd = inputString.indexOf('}', valueBegin);
    if (valueBegin == -1 || valueEnd == -1) {
      Serial.println(F("Invalid 'builtIn' value."));
      return;
    }
    String builtInValueStr = inputString.substring(valueBegin + 1, valueEnd);
    int builtInValue = builtInValueStr.toInt();
    if (builtInValue == 0) {
      LCD_Clear(BLACK);
      Paint_DrawString_EN(75, 55, "close!", &Font24, BLACK, GREEN);
      Serial.println("close!");
    }else{
      LCD_Clear(BLACK);
      Paint_DrawString_EN(75, 55, "open!", &Font24, BLACK, GREEN);
      Serial.println("open!");
    }
  }
  ```
- Display "Wifi Connecting..." on the LCD.
- Output the name of the Wi-Fi network being connected to via the serial port.
- After a successful connection, clear the LCD screen and display "Wifi Connected", while also outputting the local IP address via the serial port.

  ```cpp
  void setup_wifi() {
    Paint_DrawString_EN(20, 50, "Wifi Connecting...", &Font20, BLACK, GREEN);
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }
    LCD_Clear(BLACK);
    Paint_DrawString_EN(20, 50, "Wifi Connected", &Font20, BLACK, GREEN);
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
  }
  ```

#### Code Modification

The hotspot name and password you open must match those in the code.
After registering an account and creating a device on the [Waveshare Cloud Platform](https://www.waveshare.com/wiki/ESP32-S3-Relay-1CH-Waveshare_Cloud), you can view the device's `Client ID, Pub Topic, Sub Topic` from the "View Address" of the newly created device on the platform. Write these into the example program for assignment, so the ESP32-C6-GEEK can connect to your own cloud platform device.

<div style={{maxWidth:800}}> <img src={arduino_demo_1601}/></div>
<div style={{maxWidth:800}}> <img src={arduino_demo_1602}/></div>
In the callback function, you can modify the recognized identifier to the device property identifier you created on the cloud platform.
<div style={{maxWidth:800}}> <img src={arduino_demo_1603}/></div>
<div style={{maxWidth:800}}> <img src={arduino_demo_1604}/></div>

#### Operation Result
- Flash the code. After connecting to Wi-Fi, check if the device enters the online state on the Waveshare Cloud Platform. If not, try refreshing the webpage or using a [USB to UART adapter](https://www.waveshare.com/ch343-usb-uart-board.htm?sku=21440) to connect to a PC and view the Wi-Fi and MQTT connection status via a serial debug assistant. The connection status of Wi-Fi and MQTT will also be displayed on the LCD screen.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1605}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1606}/></div>
- After the ESP32-C6-GEEK successfully connects to the Waveshare Cloud, you can send MQTT messages via the Dashboard.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1607}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1608}/></div>
- We can see different feedback on the LCD and serial debug assistant for changes in the device property value (e.g., "key"). Also, in the device's received values on the Waveshare Cloud, we can see the data sent by the ESP32-C6-GEEK to the cloud device (the received value is your own Client ID; you can later send back the return value of "key" or status to the Waveshare Cloud). This achieves MQTT data uplink and downlink, topic subscription and publication.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1609}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1610}/></div>

### 17_MQTT_BLE_Keyboard {#Demo-17_MQTT_BLE_Keyboard}

This example enables the STA mode of Wi-Fi and Bluetooth on the ESP32-C6-GEEK. After connecting to Wi-Fi and Bluetooth, it uses the Waveshare Cloud Platform to achieve remote Bluetooth screen locking and password input for unlocking, with more key combinations awaiting your development. It is suitable for integrating BLE keyboard, Wi-Fi, and MQTT on the ESP32-C6-GEEK, controlling LCD display, and testing stability and reliability.

#### Code

<Details summary="17_MQTT_BLE_Keyboard.ino" className="code-details" >

```cpp
#include <BleKeyboard.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <SPI.h>
#include "LCD_Driver.h"
#include "GUI_Paint.h"
#include "image.h"

// WiFi credentials
#define  SSID      "ESP32-C6-GEEK"     // Fill in your WIFI name
#define  PASSWORD  "Waveshare0755"         // Fill in your WIFI password

// MQTT configuration
const char*  MQTT_SERVER = "mqtt.waveshare.cloud";  
const int    MQTT_PORT   = 1883;

const char*  Client_ID   = "a88e9fae";    // Defining device ID
const char*  Sub_Topic   = "Sub/459/54/a88e9fae";    // MQTT subscribe to topics

// BLE keyboard configuration
BleKeyboard bleKeyboard("ESP32-C6-GEEK", "Waveshare", 100);

// WiFi and MQTT clients
WiFiClient espClient;
PubSubClient client(espClient);

// Function prototypes
void setupWiFi();
void setupMQTT();
void setupBLE();
void reconnect();
void Screen_ON();
void Screen_OFF();
void callback(char* topic, byte* payload, unsigned int length);

void setup() {
  // Initialize Serial communication
  Serial.begin(115200);

  //Initialize the LCD screen
  Config_Init();
  LCD_Init();
  LCD_SetBacklight(100);
  Paint_NewImage(LCD_WIDTH, LCD_HEIGHT, 90, WHITE);
  Paint_SetRotate(90);
  LCD_Clear(BLACK);
  
  // Setup components
  setupWiFi();
  setupMQTT();
  setupBLE();
}

void loop() {
  // Wait for BLE keyboard connection
  while (!bleKeyboard.isConnected()) {
    delay(500);
    Serial.print(".");
  }

  // Reconnect to MQTT if necessary
  if (!client.connected()) {
    reconnect();
  }
  
  // Handle MQTT messages
  client.loop();
}

// Function to initialize WiFi connection
void setupWiFi() {
  Paint_DrawString_EN(20, 50, "Wifi Connecting...", &Font20, BLACK, GREEN);
  Serial.print("Connecting to WiFi: ");
  WiFi.setSleep(true);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "Wifi Connected", &Font20, BLACK, GREEN);
  Serial.println("\nWiFi connected");
  Serial.println("IP address: " + WiFi.localIP().toString());
}

// Function to initialize MQTT connection
void setupMQTT() {
  client.setServer(MQTT_SERVER, MQTT_PORT);
  client.setCallback(callback);
}

// Function to initialize BLE keyboard
void setupBLE() {
  bleKeyboard.begin();
  Serial.println("BLE keyboard initialized");
}

// Message callback function
void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.println("] ");
  String payloadString = "";
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
    payloadString += (char)payload[i];
  }

  int keyPosition = payloadString.indexOf("\"key\"");                           // Locate to "key", If your identifier is not "key", change it to your own!
  char keyChar1 = payloadString.charAt(keyPosition + (strlen("\"key\"")+1));    // extract the first digit of the "key" value
  // char keyChar2 = payloadString.charAt(keyPosition + (strlen("\"key\"")+2)); // If the extracted value is greater than one digit, add another digit

  if (keyChar1 == '1') Screen_ON();
  else Screen_OFF();
}

void reconnect() {
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "MQTT Connecting...", &Font20, BLACK, GREEN);
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect(Client_ID)) {
      Serial.println("Connected to MQTT");
      client.subscribe(Sub_Topic);
    }else{
      Serial.println("Failed, rc=" + String(client.state()) + " trying again in 5 seconds");
      delay(5000);
    }
  }
  LCD_Clear(BLACK);
  Paint_DrawString_EN(20, 50, "MQTT Connected", &Font20, BLACK, GREEN);
}

void Screen_ON(){
  LCD_Clear(BLACK);
  Paint_DrawString_EN(15, 20, "open screen:", &Font24, BLACK, GREEN);
  Paint_DrawString_EN(15, 65, "Enter          ", &Font20, BLACK, GREEN);
  Serial.println("Screen ON");
  delay(100);
  Serial.println("Enter");
  bleKeyboard.write(KEY_RETURN);    // Enter
  delay(1000);
  Paint_DrawString_EN(15, 65, "Waveshare          ", &Font20, BLACK, GREEN);
  bleKeyboard.print("waveshare");   // Keyboard output "Waveshare", please change it to your open screen password!
  delay(500);
  bleKeyboard.write(KEY_RETURN);    // Enter
}

void Screen_OFF(){
  LCD_Clear(BLACK);
  Paint_DrawString_EN(15, 20, "close screen:", &Font24, BLACK, GREEN);
  Paint_DrawString_EN(15, 65, "Ctrl+Alt+Delete", &Font20, BLACK, GREEN);
  Serial.println("Screen OFF");
  bleKeyboard.press(KEY_LEFT_CTRL); // Ctrl
  bleKeyboard.press(KEY_LEFT_ALT);  // Alt
  bleKeyboard.press(KEY_DELETE);    // Delete
  delay(100);
  bleKeyboard.releaseAll();         // Press together
  delay(500);
  Paint_DrawString_EN(15, 65, "Enter          ", &Font20, BLACK, GREEN);
  Serial.println("Enter");
  bleKeyboard.write(KEY_RETURN);    // Enter
}
```

</Details>

#### Code Analysis

- Acts as the callback function for MQTT subscription, used to process received messages.
- Prints the topic of the received message, then converts the received byte array into a string.
- Finds the specific JSON field `"key"` within the string. If your identifier is not `"key"`, you need to modify the code.
- Extracts the value of the `"key"` field, and calls the `Screen_ON` or `Screen_OFF` function depending on whether the value is `"1"` or something else.

  ```cpp
    void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.println("] ");
    String payloadString = "";
    for (int i = 0; i < length; i++) {
      Serial.print((char)payload[i]);
      payloadString += (char)payload[i];
    }

    int keyPosition = payloadString.indexOf("\"key\"");                           // Locate to "key", If your identifier is not "key", change it to your own!
    char keyChar1 = payloadString.charAt(keyPosition + (strlen("\"key\"")+1));    // extract the first digit of the "key" value
    // char keyChar2 = payloadString.charAt(keyPosition + (strlen("\"key\"")+2)); // If the extracted value is greater than one digit, add another digit

    if (keyChar1 == '1') Screen_ON();
    else Screen_OFF();
  }
  ```
- Outputs the name of the Wi-Fi network being connected to via the serial port.
- Sets the Wi-Fi mode to STA (client mode) and attempts to connect using the specified SSID and password.
- During the connection process, continuously outputs connection status information via the serial port in a loop until the connection is successful.
- After a successful connection, clear the LCD screen and display "Wifi Connected", while also outputting the local IP address via the serial port.

  ```cpp
    void setupWiFi() {
    Paint_DrawString_EN(20, 50, "Wifi Connecting...", &Font20, BLACK, GREEN);
    Serial.print("Connecting to WiFi: ");
    WiFi.setSleep(true);
    WiFi.begin(SSID, PASSWORD);
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }
    LCD_Clear(BLACK);docs
    Paint_DrawString_EN(20, 50, "Wifi Connected", &Font20, BLACK, GREEN);
    Serial.println("\nWiFi connected");
    Serial.println("IP address: " + WiFi.localIP().toString());
  }

#### Code Modification
- The hotspot name and password you open must match those in the code (2.4GHz or Any available frequency).
After registering an account and creating a device on the [Waveshare Cloud Platform](https://www.waveshare.com/wiki/ESP32-S3-Relay-1CH-Waveshare_Cloud), you can view the device's `Client ID, Sub Topic` from the "View Address" of the newly created device on the platform. Write these into the example program for assignment, so the ESP32-C6-GEEK can connect to your own cloud platform device.
- The Bluetooth name and password you connect to must match those in the code.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1701}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1702}/></div>
- In the callback function, you can modify the recognized identifier to the [device property identifier](https://mqtt.waveshare.cloud/en/wavesharecloud-wiki.html) you created on the cloud platform.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1703}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1704}/></div>
- Modify to the text or password you want to input.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1705}/></div>

#### Operation Result
- Flash the code. After connecting to Wi-Fi, turn on the PC's Bluetooth function to pair and connect the device. Check if the device enters the online state on the Waveshare Cloud Platform. If not, try refreshing the webpage or using a USB to UART adapter to connect to a PC and view the Wi-Fi and MQTT connection status via a serial debug assistant. The connection status of Wi-Fi and MQTT will also be displayed on the LCD screen.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1706}/></div>
  <div style={{maxWidth:800}}> <img src={arduino_demo_1707}/></div>
- After the ESP32-C6-GEEK successfully connects to the Waveshare Cloud, you can log in to the Waveshare Cloud Dashboard via a mobile phone for remote control.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1708}/></div>
- We can see different feedback on the LCD and serial debug assistant for changes in the device property value (e.g., "key"). Later, you can also modify the keys in the callback function to combinations like **Ctrl+C, Ctrl+V**, etc., to DIY your own remote-control Bluetooth keyboard.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1709}/></div>
- You can also test which keys are pressed by the Bluetooth control of the ESP32-C6-GEEK using the [Keyboard Tester](https://www.zfrontier.com/lab/keyboardTester) website.
- Open the keyboard tester interface on your PC, control it via your mobile phone, and the keyboard tester interface will display which keys are being pressed.
  <div style={{maxWidth:800}}> <img src={arduino_demo_1710}/></div>