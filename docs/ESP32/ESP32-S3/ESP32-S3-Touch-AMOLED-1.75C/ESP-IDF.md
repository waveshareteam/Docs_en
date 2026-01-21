---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-S3-Touch-AMOLCD-1.75C/Development-Environment-Setup-ESPIDF
product_family:
  - ESP32
product_model:
  - ESP32-S3-Touch-AMOLCD-1.75C
---

# Working with ESP-IDF

This chapter includes the following sections, please read as needed:

- [Setting Up Development Environment](#setting-up-development-environment)
- [Demo](#demo)

## Setting Up Development Environment

:::note
The following environment settings are applicable to Windows 10/11 systems. For Mac/Linux users, please refer to the **[official instructions](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)**
:::

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).

2. In VS Code, open the **Extensions** view by clicking the ![Extensions icon](/img/VSCode-Extension-Icon.webp) in the VS Code sidebar or using the shortcut (<kbd>Ctrl+Shift+X</kbd>). Then, search for the [ESP-IDF](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension) extension and install it.

   ![Search and install ESP-IDF extension in VS Code](/img/VSCode-Install-ESP-IDF-Extension.webp)

3. After the extension is installed, the ![Espressif icon](/img/VSCode-ESP-IDF-Extension-Icon.webp) will appear in the activity bar on the left side of VS Code. Clicking this icon will view the basic command list for the ESP-IDF extension. Select **Configure ESP-IDF extension** under **Advanced**.

   <!-- Alternatively, press <kbd>F1</kbd>, type `Configure ESP-IDF Extension`, and select the **ESP-IDF: Configure ESP-IDF Extension** option. -->

   ![Select "Configure ESP-IDF Expansion"](/img/VSCode-ESP-IDF-Configuration-1.webp)

4. Choose **Express** to enter quick configuration mode:

   ![Select Quick Configuration Mode](/img/VSCode-ESP-IDF-Configuration-2.webp)

5. Modify the following options as needed:

   - **Select download server**:
     - Espressif: Use a suitable Espressif server for faster download speeds.
     - Github: Use the official GitHub release link.
   - **ESP-IDF Version**: Typically, select the version required by the development board. If no specific requirement, it's recommended to use the latest stable version. For [ESP32-S3-Touch-AMOLED-1.75C](https://www.waveshare.com/esp32-s3-touch-amolcd-1.75.htm), it is recommended to use the Espressif IDF version ≥ v5.5.0.
   - **ESP-IDF Container Installation Path**: It is recommended to use the default path, or use a path that contains only English characters and no spaces.
   - **ESP-IDF Required Tools Installation Path**: It is recommended to use the default path, or use a path that contains only English characters and no spaces.

   ![ESP-IDF Extension Quick Configuration Mode Options](/img/VSCode-ESP-IDF-Configuration-3.webp)

6. Click **Install** to start the installation. You will see a page displaying the installation progress, including the progress status of ESP-IDF download, ESP-IDF tool download and installation, as well as the creation of the Python virtual environment.

   ![Installation Progress](/img/VSCode-ESP-IDF-Configuration-4.webp)

7. If installed correctly, you will see a prompt indicating that all settings have been configured successfully, and you can start using the extension.

   ![Installation Successful](/img/VSCode-ESP-IDF-Configuration-5.webp)

:::warning
Note: If ESP-IDF installation fails or needs to be reinstalled, you can try deleting the `C:\Users\%Username%\esp` and `C:\Users\%Username%\.espressif` folders and then retry.
:::

## Demo

The ESP-IDF demos are located in the `ESP-IDF` directory of the [demo package](https://github.com/waveshareteam/ESP32-S3-Touch-AMOLED-1.75C/tree/main/examples).

|                            Demo                             |                               Basic Description                               |
| :-------------------------------------------------: | :----------------------------------------------------------------------: | 
|            [01_AXP2101](#Demo-1-AXP2101)            |                  Gets power-related data by driving the AXP2101 via the ported XPowersLib                    |
|        [02_lvgl_demo_v9](#Demo-2-lvgl_demo_v9)      |                                       LVGL Demonstration                                       |
|      [03_esp-brookesia](#Demo-3-esp-brookesia)      |             Demonstrates a complete phone-style UI system, including status bar, navigation bar, app launcher, and gesture interaction components         |
|    [04_Immersive_block](#Demo-4-Immersive_block)    | Uses the QMI8658 six-axis sensor to collect acceleration data, driving randomly generated geometric shapes rendered by the LVGL graphics library to move in sync with device tilt |
|      [05_Spec_Analyzer](#Demo-5-Spec_Analyzer)      |  Showcases a real-time audio spectrum visualization analyzer, presenting audio frequency distribution intuitively via 64 colored symmetrical spectrum bars with peak tracking  |

### 01_AXP2101 {#Demo-1-AXP2101}

#### Demo Description

- This demo demonstrates porting XPowersLib in ESP-IDF, and driving AXP2101 to obtain power-related data through the ported XPowersLib

#### Hardware Connection

- Connect the development board to the computer

#### Code Analysis

- `i2c_init`: Initializes the I2C master device, preparing it for communication with other devices (e.g., the PMU)
  - Configures I2C parameters, including setting the master device mode, specifying the SDA and SCL pins, enabling the pull-up resistor, and determining the clock frequency
  - Installs the I2C driver to apply the configuration to the actual hardware
- `pmu_register_read`: Reads a series of byte data from a specific register of the PMU
  - Performs parameter checks to ensure the incoming parameters are valid and avoid invalid read operations
  - Performs I2C operations in two steps, first sends the register address to read, then reads the data During the reading process, different processing is carried out according to the length of bytes to be read to ensure accurate reading of the data. At the same time, handles error cases in the I2C communication process and returns the corresponding status code so that the upper-layer code can determine if the read operation is successful

#### Operation Result

- This demo will not light up the screen
- The serial port monitor displays the parameters: chip temperature, charging state, discharging state, standby state, Vbus connection, Vbus condition, charger status, battery voltage, Vbus voltage, system voltage, battery percentage

<div style={{maxWidth:800}}>
![idf_demo_AXP2101](./images/idf_demo_AXP2101.webp)
</div>

### 02_lvgl_demo_v9 {#Demo-2-lvgl_demo_v9}

#### Demo Description

- This demo runs the LVGL V9 demo program

#### Hardware Connection

- Connect the development board to the computer

#### Operation Result

import idf_demo_lvgl_demo_v9_1 from './images/idf_demo_lvgl_demo_v9_1.webp';
import idf_demo_lvgl_demo_v9_2 from './images/idf_demo_lvgl_demo_v9_2.webp';
import idf_demo_lvgl_demo_v9_3 from './images/idf_demo_lvgl_demo_v9_3.webp';

| <div style={{maxWidth:800}}> <img src={idf_demo_lvgl_demo_v9_1}/></div> | <div style={{maxWidth:800}}> <img src={idf_demo_lvgl_demo_v9_2}/></div> | <div style={{maxWidth:800}}> <img src={idf_demo_lvgl_demo_v9_3}/></div> |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |

### 03_esp-brookesia {#Demo-3-esp-brookesia}

#### Demo Description

- This example demonstrates a complete phone-style UI system, including components such as a status bar, navigation bar, app launcher, and gesture interaction

#### Hardware Connection

- Connect the development board to the computer

#### Operation Result

import idf_demo_esp_brookesia_1 from './images/idf_demo_esp-brookesia_1.webp';
import idf_demo_esp_brookesia_2 from './images/idf_demo_esp-brookesia_2.webp';
import idf_demo_esp_brookesia_3 from './images/idf_demo_esp-brookesia_3.webp';

| <div style={{maxWidth:800}}> <img src={idf_demo_esp_brookesia_1}/></div> | <div style={{maxWidth:800}}> <img src={idf_demo_esp_brookesia_2}/></div> | <div style={{maxWidth:800}}> <img src={idf_demo_esp_brookesia_3}/></div> |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |

### 04_Immersive_block {#Demo-4-Immersive_block}

#### Demo Description

- This example uses the QMI8658 six-axis sensor to collect acceleration data, driving randomly generated geometric shapes rendered by the LVGL graphics library to move in sync with device tilt

#### Hardware Connection

- Connect the development board to the computer

#### Code Analysis

- `generate_random_shapes()`: Generates graphics randomly
    - Initializes the random seed (based on system time) and resets the shape count
    - Loops to attempt generating shapes, up to 100 attempts to find a valid position (not overlapping with existing shapes)
    - Valid position criteria: The shape's center is within the screen boundaries and does not overlap with any previously generated shape
    - For a valid position: Updates the LVGL object position (`lv_obj_set_pos`) and stores it in the shapes array
    - For an invalid position: Deletes the LVGL shape object to avoid memory leaks
- `perform_level_calibration()`: Core function for horizontal calibration
    - Collects 200 acceleration samples, calculates the average value for X/Y axes as the bias values (`accel_bias_x/y`)
    - Detects sample fluctuation range (if the range for X/Y axes is greater than 0.1, calibration is considered unstable and a retry is triggered)
    - After calibration is complete, sets the `calibration_done` flag and prints the bias information

#### Operation Result

<div style={{maxWidth:350}}> 
![idf_demo_Immersive_block](./images/idf_demo_Immersive_block.webp)
</div>

### 05_Spec_Analyzer {#Demo-5-Spec_Analyzer}

#### Demo Description

- This example showcases a real-time audio spectrum visualization analyzer. It intuitively presents audio frequency distribution via 64 colored symmetrical spectrum bars with peak tracking

#### Hardware Connection

- Connect the development board to the computer

#### Code Analysis

- `timer_cb`: LVGL timer callback function, responsible for spectrum visualization rendering
    - Canvas and Layer Initialization: Gets the canvas object, initializes an LVGL layer (layer rendering improves refresh efficiency and prevents flickering), and clears the screen (black background)
    - Basic Parameter Calculation: Calculates spectrum bar width (canvas width / 64), canvas center Y coordinate (for symmetrical drawing), and spectrum bar gap
    - Iterates to render 64 spectrum bars
    - Layer Rendering Completion: Calls `lv_canvas_finish_layer` to commit the layer rendering and updates the canvas display
- `lv_example_canvas_10`: Canvas initialization
    - Static Draw Buffer Definition: Uses `LV_DRAW_BUF_DEFINE_STATIC` to define a 300×150 pixel RGB565 format draw buffer
    - Canvas Creation: Creates an LVGL canvas object, sets its size and centers it, and binds the static draw buffer
    - Timer Creation: Creates a 33ms timer, binds the `timer_cb` callback function, and passes the canvas object as user data to enable timed rendering

#### Expected Result

<div style={{maxWidth:800}}> 
![idf_demo_Spec_Analyzer](./images/idf_demo_Spec_Analyzer.webp)
</div>