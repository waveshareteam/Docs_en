---
title: Example - Digital Output Control via GPIO
slug: /ESP32-ESP-IDF-Tutorials/GPIO-Digital-Output
id: 7-1
product_family:
  - ESP32
---

<!-- Image Reference -->
import ImgBlinkDiagram from './images/03-LED-Blink_bb.webp';

:::tip[Important Note: Development Board Compatibility]
The core logic of this tutorial applies to all ESP32 boards, but all the operation steps are explained using the example of the [**Waveshare ESP32-S3-Zero mini development board**](https://www.waveshare.com/esp32-s3-zero.htm). If you are using a development board of another model, please modify the corresponding settings according to the actual situation.
:::

> This tutorial will introduce how to use the Espressif ESP-IDF framework to control digital output via GPIO, enabling you to turn an LED on and off.

## 1. GPIO

The general steps for controlling digital output using GPIO in ESP-IDF are as follows:

1. **Include Header File**  

   First, include the GPIO driver header file:

   ```c
   #include "driver/gpio.h"
   ```

   And add the dependency (e.g., `REQUIRES esp_driver_gpio`) in `CMakeLists.txt`.

2. **Configure GPIO**

   Configure the GPIO for output mode. This can be done by initializing a `gpio_config_t` structure, for example:

   ```c
   gpio_config_t io_conf = {
       .pin_bit_mask = (1ULL << GPIO_NUM_7),  // Select the GPIO to configure
       .mode = GPIO_MODE_OUTPUT,              // Set as output mode
       .pull_up_en = GPIO_PULLUP_DISABLE,     // Disable pull-up
       .pull_down_en = GPIO_PULLDOWN_DISABLE, // Disable pull-down
       .intr_type = GPIO_INTR_DISABLE         // Disable interrupt
   };
   gpio_config(&io_conf);
   ```

3. **Set Output Level**

   Use `gpio_set_level` to control the GPIO output level (high or low):

   ```c
   gpio_set_level(GPIO_NUM_7, 1); // Output high level
   gpio_set_level(GPIO_NUM_7, 0); // Output low level
   ```

4. **(Optional) Reset Pin**

   You can use `gpio_reset_pin(GPIO_NUM_7);` to reset the pin to its default state (e.g., high impedance). This is useful before dynamically changing pin functions or entering low-power modes.

## 2. Example Project

This example demonstrates how to configure a GPIO pin for digital output mode and control it to cycle between high and low levels, achieving periodic blinking of an LED.

### 2.1 Circuit Assembly

Components required:

- LED \* 1
- 330Ω resistor \* 1
- Breadboard \* 1
- Wires
- ESP32 development board ([Waveshare ESP32-S3-Zero Mini Development Board](https://www.waveshare.com/esp32-s3-zero.htm))

Connect the circuit according to the wiring diagram below:

<Details>
  <summary>ESP32-S3-Zero Pinout Diagram</summary>

![ESP32-S3-Zero-Pinout](./images/ESP32-S3-Zero-Pinout.webp)

</Details>

<div style={{maxWidth:500}}> <img src={ImgBlinkDiagram} alt="Wiring diagram"/></div>

### 2.2 Create Project

1. Create a Project. If you are unsure how to do this, please refer to [Create a Project from a Template](./03-Create-Project.md#2-create-a-project-from-a-template).

2.  Check the [GPIO API Reference](https://docs.espressif.com/projects/esp-idf/en/v5.5.1/esp32s3/api-reference/peripherals/gpio.html#api-reference-normal-gpio). Follow the instructions in the documentation to complete the following steps.

   First, include the header file in **main.c**:

   ```c
   #include "driver/gpio.h"
   ```

   Then, declare the `esp_driver_gpio` component in **main/CMakeLists.txt**:
   ```
   idf_component_register(SRCS "main.c"
                         INCLUDE_DIRS "."
                         REQUIRES esp_driver_gpio)
   ```

### 2.3 Example Code

```c
#include "driver/gpio.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"

static const char *TAG = "example";

static const gpio_num_t GPIO_OUTPUT_LED = GPIO_NUM_7;

void app_main(void)
{
    gpio_config_t io_conf = {
        .pin_bit_mask = (1ULL << GPIO_OUTPUT_LED),  // Select the GPIO to configure
        .mode = GPIO_MODE_OUTPUT,              // Set as output mode
        .pull_up_en = GPIO_PULLUP_DISABLE,     // Disable pull-up
        .pull_down_en = GPIO_PULLDOWN_DISABLE, // Disable pull-down
        .intr_type = GPIO_INTR_DISABLE         // Disable interrupt
    };
    gpio_config(&io_conf);

    while (1) {
        // Set GPIO to high level
        ESP_LOGI(TAG, "Turn the LED on");
        gpio_set_level(GPIO_OUTPUT_LED, 1);
        vTaskDelay(pdMS_TO_TICKS(1000)); // Delay 1 second

        // Set GPIO to low level
        ESP_LOGI(TAG, "Turn the LED off");
        gpio_set_level(GPIO_OUTPUT_LED, 0);
        vTaskDelay(pdMS_TO_TICKS(1000)); // Delay 1 second
    }
}
```

### 2.4 Build and Flash

1. Configure Flash Options

   Firstly, before building and flashing, please make sure to check and set the correct target device, serial port, and flashing method. Refer to [Section 2  Run Demo - 1.3 Configure the Project](./02-Example.md#Flash-Option).

   ![VS Code Toolbar](./images/02-Configure.webp)

2. Click ![VS Code One-Click Build Flash Monitor Icon](./images/02-VSCode-BuildFlashMonitor-Icon.webp) to automatically perform the build, flash, and monitor steps in sequence with one click.

3. After flashing is complete, you will see the LED on the development board start blinking. At the same time, the serial monitor will start and output the following log information:

   ```text
   I (256) main_task: Started on CPU0
   I (266) main_task: Calling app_main()
   I (266) example: Turn the LED on
   I (1266) example: Turn the LED off
   I (2266) example: Turn the LED on
   I (3266) example: Turn the LED off
   I (4266) example: Turn the LED on
   I (5266) example: Turn the LED off
   ...
   ```

### 2.5 Code Analysis

The core of this example code is configuring a GPIO pin for output mode and alternately setting its level to high and low within an infinite loop, thereby achieving the blinking effect of an LED.

- **Include Header Files**

  ```c
  #include "driver/gpio.h"
  #include "freertos/FreeRTOS.h"
  #include "freertos/task.h"
  #include "esp_log.h"
  ```

  - `driver/gpio.h`: The ESP-IDF GPIO driver header file, providing all necessary function and type definitions for configuring and operating GPIO, such as `gpio_config()` and `gpio_set_level()`.
  - `freertos/FreeRTOS.h` and `freertos/task.h`: Core FreeRTOS header files. Here, they are mainly used to call the `vTaskDelay()` function for precise and efficient delays, a standard practice in real-time operating systems.
  - `esp_log.h`: ESP-IDF's logging library for printing information to the serial monitor, facilitating debugging and observation of the program's status.

- **Define GPIO Pin**

  ```c
  static const gpio_num_t GPIO_OUTPUT_LED = GPIO_NUM_7;
  ```

  - This line of code defines a constant `GPIO_OUTPUT_LED` to represent the GPIO pin number to which the LED is connected.
  - `gpio_num_t` is an enumeration type used in ESP-IDF to represent GPIO numbers.
  - `GPIO_NUM_7` is one of the values in this enumeration, representing the general-purpose I/O pin numbered 7 (GPIO7). For readability, it is recommended to use `GPIO_NUM_7` instead of directly writing the literal value `7`.

  :::note
  The availability and limitations of GPIO7 vary across different chips. Please check the pin definitions of the development board you are using.
  :::

- **Configure GPIO**

  ```c
  gpio_config_t io_conf = {
      .pin_bit_mask = (1ULL << GPIO_OUTPUT_LED),  // Select the GPIO to configure
      .mode = GPIO_MODE_OUTPUT,              // Set as output mode
      .pull_up_en = GPIO_PULLUP_DISABLE,     // Disable pull-up
      .pull_down_en = GPIO_PULLDOWN_DISABLE, // Disable pull-down
      .intr_type = GPIO_INTR_DISABLE         // Disable interrupt
  };
  gpio_config(&io_conf);
  ```

  - We first create and initialize a `gpio_config_t` structure named `io_conf`, which acts like a "configuration package" containing all the necessary settings.
  - `.pin_bit_mask`: This is a bit mask used to specify which GPIO pin(s) to configure. Each bit corresponds to a GPIO number.
    - `1ULL`: Represents the number 1 as a 64-bit unsigned long long integer. In binary, it is `0x00...0001`.
    - `<<`: The left-shift operator in C. `1ULL << N` means shifting the binary representation of this number 1 to the left by N positions.
    - In this example, `GPIO_OUTPUT_LED` has the value `7`, so `1ULL << 7` shifts `0x00...0001` left by 7 bits, resulting in `0x00...10000000` (i.e., bit 7 is set to 1, all others are 0).
    This result is the "mask". The `gpio_config()` function checks each bit of this mask; if a bit is 1, it applies the configuration to the corresponding GPIO pin.
  - `.mode = GPIO_MODE_OUTPUT`: Sets the pin mode to digital output.
  - `.pull_up_en` and `.pull_down_en`: Disable internal pull-up and pull-down resistors. For simple push-pull output scenarios like driving an LED, they are usually not needed.
  - `.intr_type = GPIO_INTR_DISABLE`: Disables the interrupt function because we are only performing output operations and do not need to respond to external signals.
  - Finally, the `gpio_config(&io_conf)` function is called to apply this configuration to the specified GPIO pin.

  <br />

  :::tip
  There are two main ways to configure GPIO:
  
  1.  **Using the `gpio_config_t` Structure (Recommended)**:
      This is the most common and efficient method. You can pack parameters like the pin bit mask, I/O mode, and pull-up/pull-down settings into a single `gpio_config_t` structure. Then, just one call to `gpio_config()` configures one or multiple GPIO pins simultaneously.
  
  2.  **Using Independent Functions**:
      ESP-IDF also provides a series of independent API functions, such as `gpio_set_direction()` and `gpio_set_pull_mode()`, for individually setting specific properties of a pin. This approach is more flexible, suitable for dynamic modifications at runtime or simple single-property settings.
  
      For the examples in this tutorial, if you configure using a standalone function, the code is as follows:
      
      ```c
      gpio_reset_pin(GPIO_OUTPUT_LED);                       // Reset the pin
      gpio_set_direction(GPIO_OUTPUT_LED, GPIO_MODE_OUTPUT); // Set the pin as output mode
      ```
  :::

- **Main Loop: Controlling LED Blink**

  ```c
  while (1) {
      // Set GPIO to high level
      ESP_LOGI(TAG, "Turn the LED on");
      gpio_set_level(GPIO_OUTPUT_LED, 1);
      vTaskDelay(pdMS_TO_TICKS(1000)); // Delay 1 second

      // Set GPIO to low level
      ESP_LOGI(TAG, "Turn the LED off");
      gpio_set_level(GPIO_OUTPUT_LED, 0);
      vTaskDelay(pdMS_TO_TICKS(1000)); // Delay 1 second
  }
  ```

  - `while (1)` creates an infinite loop, ensuring the `app_main` function does not exit and the code inside runs continuously.
  - `gpio_set_level(GPIO_OUTPUT_LED, 1)`: Calls this function to set the level of GPIO 7 to high (typically 3.3V). According to the circuit connection, this turns the LED on.
  - `gpio_set_level(GPIO_OUTPUT_LED, 0)`: Sets the level of GPIO 7 to low (0V), thereby turning the LED off.
  - `vTaskDelay(pdMS_TO_TICKS(1000))`: This is a delay function provided by FreeRTOS. It suspends the current task (the main task) for the specified duration. Unlike a simple busy wait (like a `for` loop), `vTaskDelay` yields CPU usage, allowing other tasks to run, making it a very efficient way to delay. `pdMS_TO_TICKS(1000)` is a macro that converts 1000 milliseconds (1 second) into the number of "system ticks" used by the FreeRTOS scheduler.

## 3. Reference Links

[ESP-IDF Programming Guide - ESP32-S3 GPIO API Reference](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/api-reference/peripherals/gpio.html)