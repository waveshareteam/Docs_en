---
title: Weather Display
slug: /ESP32-Arduino-Tutorials/13-6-Weather-Display
id: 13-6
product_family:
  - ESP32
---

<!-- Image Reference -->


:::tip[Important Note on Board Compatibility]
The core logic of this tutorial applies to all ESP32 development boards. However, all operational steps are explained using the [**Waveshare ESP32-S3-Zero Mini Development Board**](https://www.waveshare.com/esp32-s3-zero.htm) as an example. If you are using a different model of development board, please modify the relevant settings according to your actual situation.
:::

## Project Introduction

This project demonstrates how to create a Network Weather Display using an ESP32. By connecting to a Wi-Fi network, the ESP32 will periodically fetch real-time weather data (weather conditions, temperature, and humidity) for a specified city from the [OpenWeather API](https://openweathermap.org/current#builtin) and display this information on a Waveshare 1.5inch OLED screen.

## Hardware Connection

The components required are:
- [Waveshare 1.5inch OLED Module](https://www.waveshare.com/1.5inch-oled-module.htm) \* 1
- Breadboard \* 1
- Wire
- ESP32 development board

Connect the circuit according to the wiring diagram below:

<Details>
  <summary>ESP32-S3-Zero Pinout Diagram</summary>

![ESP32-S3-Zero-Pinout](./images/ESP32-S3-Zero-Pinout.webp)

</Details>

:::tip
This example uses the **SPI interface** to connect to the OLED display. This screen also supports **I2C**, controlled via the BS1 and BS2 jumpers. If you are using I2C mode, please refer to the wiring method described in [Section 7 I2C Communication](./07-I2C-Communication.md).
:::

| ESP32 Pin | OLED Module | Description |
| ---------- | --------- | ------------- |
| GPIO 13    | SCK       | SPI Clock Line |
| GPIO 11    | MOSI      | SPI Data Output |
| GPIO 10    | CS        | Chip Select Signal |
| GPIO 8     | DC        | Data/Command Select |
| 3.3V         | VCC       | Power Positive |
| GND        | GND       | Power Ground |

<div style={{maxWidth:500}}> ![Wiring Diagram](./images/08-SPI_bb.webp)</div>

## Getting an OpenWeather API Key

OpenWeather is an online service owned by OpenWeather Ltd that provides [developer-friendly free tier access](https://openweathermap.org/full-price#current). Through its API, it delivers global weather data for any geographic location, including current weather conditions, forecasts, nowcasts, and historical weather data.

1. Visit [OpenWeather](https://home.openweathermap.org/users/sign_in) to log in or create an account.

2. Copy the API Key from the [API keys page](https://home.openweathermap.org/api_keys). You can also find your key in the "OpenWeatherMap API Instruction" email sent to your inbox.

   :::info
   Newly generated keys typically **take 10-60 minutes to become active**. If you encounter a 401 error when running the code immediately, please wait a while before trying again.
   :::

## Code Implementation

:::info[Libraries]
This code example depends on the following libraries. Please install it via the Arduino IDE Library Manager:
- **Adafruit SSD1327** (for driving the OLED screen)
- **Adafruit GFX Library** (core graphics library)
- **ArduinoJson** (for parsing JSON data)
:::

:::tip[Switching to Fahrenheit]
By default, the API uses `units=metric` which returns temperature in Celsius. To get Fahrenheit instead, change the `apiUrlTemplate` parameter from `units=metric` to `units=imperial`.
:::

```cpp
/*
  WiFi Weather Display (OpenWeatherMap)
  
  This example demonstrates how to connect to Wi-Fi, fetch weather data in JSON format 
  via HTTP, and display it on an SSD1327 OLED screen.
  
  API Provider: OpenWeatherMap (https://openweathermap.org/)
  
  Circuit Connection:
  - OLED SCK  -> GPIO 13
  - OLED MOSI -> GPIO 11
  - OLED CS   -> GPIO 10
  - OLED DC   -> GPIO 8
  
  Wulu (Waveshare Team)
*/

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1327.h>

// Wi-Fi Configuration (Please replace with your Wi-Fi credentials)
const char* ssid = "Maker";
const char* password = "12345678";

// OpenWeatherMap API Configuration (Replace with your API Key)
String apiKey = "your_api_key";

// City to query (e.g., "Shenzhen", "New%20York,US", "London", "Stockholm")
String location = "Stockholm"; 

// API URL Template
// Get your key here: https://home.openweathermap.org/api_keys
// Parameters: appid (Key), q (City), units (metric = Celsius)
const String apiUrlTemplate = "http://api.openweathermap.org/data/2.5/weather?appid=%s&q=%s&units=metric";

// Update interval: 30 minutes (in milliseconds)
const unsigned long updateInterval = 1800000; 
unsigned long lastUpdateTime = 0;

// SPI Pin Configuration
const int SCK_PIN = 13;
const int MOSI_PIN = 11;
const int CS_PIN = 10;
const int DC_PIN = 8;

// Initialize OLED (SPI)
// 128x128 resolution
Adafruit_SSD1327 display(128, 128, &SPI, DC_PIN, -1, CS_PIN);

// If using I2C, please use the following constructor (I2C address needs to be confirmed, usually 0x3D)
// const int SDA_PIN = 2;
// const int SCL_PIN = 1;
// Adafruit_SSD1327 display(128, 128, &Wire, -1); // -1 indicates no reset pin

void setup() {
  Serial.begin(115200);

  // Wire.begin(SDA_PIN, SCL_PIN);

  // Initialize OLED (I2C)
  // if (!display.begin(0x3D)) {
  //   Serial.println("Unable to initialize OLED");
  //   while (true) yield();
  // }

  SPI.begin(SCK_PIN, -1, MOSI_PIN, CS_PIN);

  // Initialize OLED
  if (!display.begin()) {
    Serial.println("Unable to initialize OLED");
    while (true) yield();
  }
  
  // Set text size and color
  display.setTextSize(1);
  display.setTextColor(SSD1327_WHITE);
  display.clearDisplay();
  display.display();

  connectWiFi();
  
  // Initial weather fetch
  getWeather();
  lastUpdateTime = millis();
}

void loop() {
  // Timed updates
  if (millis() - lastUpdateTime >= updateInterval) {
    getWeather();
    lastUpdateTime = millis();
  }
}

void connectWiFi() {
  // Connect to Wi-Fi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  
  display.clearDisplay();
  display.setCursor(5, 20);
  display.print("Connecting to");
  display.setCursor(5, 40);
  display.print("WiFi...");
  display.display();

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  display.clearDisplay();
  display.setCursor(5, 20);
  display.print("WiFi Connected!");
  display.setCursor(5, 40);
  display.print("IP:");
  display.setCursor(5, 55);
  display.print(WiFi.localIP());
  display.display();
  delay(2000);
}

void displayError(String message, String detail) {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1327_WHITE);

  display.setCursor(5, 20);
  display.print("Error: ");
  display.println(message);

  display.setCursor(5, 50);
  display.print("Detail: ");
  display.println(detail);

  display.display();
  Serial.printf("Error displayed: %s, %s\n", message.c_str(), detail.c_str());
}

void displayWeather(String city, String weather, String temperature, String humidity) {
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1327_WHITE);

  // City name
  display.setCursor(5, 10);
  display.print("City: ");
  display.println(city);

  // Weather condition
  display.setCursor(5, 40);
  display.println("Weather:");
  display.setCursor(5, 55);
  display.println(weather);

  // Temperature
  display.setCursor(5, 80);
  display.print("Temp: ");
  display.print(temperature);
  display.println(" C");

  // Humidity
  display.setCursor(5, 100);
  display.print("Humidity: ");
  display.print(humidity);
  display.println(" %");

  display.display();
  Serial.printf("Display updated: %s, %s, %s C, %s%%\n", city.c_str(), weather.c_str(), temperature.c_str(), humidity.c_str());
}

void getWeather() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    // Build the complete request URL
    char url[200];
    sprintf(url, apiUrlTemplate.c_str(), apiKey.c_str(), location.c_str());
    
    Serial.print("Fetching weather from: ");
    Serial.println(url);

    display.clearDisplay();
    display.setCursor(5, 20);
    display.print("Fetching...");
    display.display();

    http.begin(url);
    int httpCode = http.GET();

    if (httpCode > 0) {
      if (httpCode == HTTP_CODE_OK) {
        String payload = http.getString();
        Serial.println("API Response:");
        Serial.println(payload);

        // Parse JSON
        JsonDocument doc;
        DeserializationError error = deserializeJson(doc, payload);

        if (!error) {
          // OpenWeatherMap JSON structure
          String locationName = doc["name"].as<String>();
          String weatherText = doc["weather"][0]["main"].as<String>();
          float tempVal = doc["main"]["temp"].as<float>();
          int humVal = doc["main"]["humidity"].as<int>();
          
          // Format temperature to 1 decimal place
          String temperature = String(tempVal, 1);
          String humidity = String(humVal);

          displayWeather(locationName, weatherText, temperature, humidity);
        } else {
          Serial.print("deserializeJson() failed: ");
          Serial.println(error.c_str());
          displayWeather("Error", "JSON Fail", "", "");
          displayError("JSON Fail", error.c_str());
        }
      } else {
        Serial.println("API Error: " + http.getString());
        displayError("API Error", String(httpCode));
      }
    } else {
      Serial.printf("HTTP GET failed, error: %s\n", http.errorToString(httpCode).c_str());
      displayError("HTTP Fail", http.errorToString(httpCode).c_str());
    }
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
    // Attempt to reconnect
    connectWiFi(); 
  }
}
```

## Code Analysis
- **Library Imports**:
  - `WiFi.h`: ESP32's Wi-Fi library for network connectivity.
  - `HTTPClient.h`: For sending HTTP requests.
  - `ArduinoJson.h`: A powerful JSON parsing library for processing API response data.
  - `Adafruit_GFX.h` and `Adafruit_SSD1327.h`: Graphics and SSD1327 driver libraries provided by Adafruit for controlling the OLED display.

- **Configuration Parameters**:
  - `ssid` and `password`: Wi-Fi network credentials.
  - `apiKey` and `location`: OpenWeather API key and city setting.
  - `SCK_PIN`, `MOSI_PIN`, etc.: Define the pin connections for the SPI interface.

- **Object Initialization**:
  - `Adafruit_SSD1327 display(...)`: Creates the display object. This example uses **hardware SPI** mode (passing `&SPI`). In the `setup()`  function, the SPI pin mapping is customized via `SPI.begin(SCK_PIN, -1, MOSI_PIN, CS_PIN)`. If you need to use I2C mode, please refer to the commented section in the code.

- **`connectWiFi()` Function**:
  - Initiates connection using `WiFi.begin()`.
  - Checks connection status with `WiFi.status()` until successful.
  - Displays connection progress and the obtained IP address on the screen in real-time.

- **`getWeather()` Function**:
  - Constructs the API request URL.
  - Sends the request using `http.GET()`.
  - Upon receiving the response, parses the JSON data using `deserializeJson()`.
  - Extracts fields like `name` (city name), `weather[0].main` (weather condition), `main.temp` (temperature), and `main.humidity` (humidity).
  - Calls `displayWeather()` to update the display.

- **`displayError()` Function**:
  - Handles error display on the OLED screen.
  - Takes two parameters: `message` (error type) and `detail` (specific error information).
  - Displays formatted error messages to help with debugging connection or API issues.

- **`displayWeather()` Function**:
  - Clears the screen using `display.clearDisplay()`.
  - Uses `display.setCursor()` and `display.print()` to display text information at specified positions.
  - `display.display()` sends the buffer contents to the screen for display.

- **`loop()` Function**:
  - Uses `millis()`  for non-blocking timing, calling `getWeather()` every 30 minutes (`updateInterval`) to update weather information.

## Reference Links

- [Section 8 SPI Communication](./08-SPI-Communication.md)
- [Section 9 Wi-Fi Networking Basics](./09-WiFi-Networking.md)
- [ArduinoJson Library Documentation](https://arduinojson.org/)
- [Adafruit SSD1327 Library Documentation](https://github.com/adafruit/Adafruit_SSD1327)
- [OpenWeather API Documentation](https://openweathermap.org/current#builtin)