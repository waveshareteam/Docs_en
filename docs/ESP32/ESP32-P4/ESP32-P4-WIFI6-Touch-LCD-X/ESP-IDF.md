---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-P4-WIFI6-Touch-LCD-X/Development-Environment-Setup-IDF
toc_max_heading_level: 4
product_family:
  - ESP32
product_model:
  - ESP32-P4-WIFI6-Touch-LCD-X
  - ESP32-P4-WIFI6-Touch-LCD-7
  - ESP32-P4-WIFI6-Touch-LCD-8
  - ESP32-P4-WIFI6-Touch-LCD-10.1
---

# Working with ESP-IDF

This chapter includes the following sections, please read as needed:

- [Setting Up Development Environment](#setting-up-development-environment)

## Setting Up Development Environment

:::note
The following environment settings are applicable to Windows 10/11 systems. For Mac/Linux users, please refer to the **[official instructions](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)**
:::

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).

2. In VS Code, open the **Extensions** view by clicking the ![Extensions icon](../../../../static/img/VSCode-Extension-Icon.webp) in the VS Code sidebar or using the shortcut (<kbd>Ctrl+Shift+X</kbd>). Then, search for the [ESP-IDF](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension) extension and install it.

   ![Search and install ESP-IDF extension in VS Code](../../../../static/img/VSCode-Install-ESP-IDF-Extension.webp)

3. After the extension is installed, the ![Espressif icon](../../../../static/img/VSCode-ESP-IDF-Extension-Icon.webp) will appear in the activity bar on the left side of VS Code. Clicking this icon will view the basic command list for the ESP-IDF extension. Select **Configure ESP-IDF extension** under **Advanced**.

   <!-- Alternatively, press <kbd>F1</kbd>, type `Configure ESP-IDF Extension`, and select the **ESP-IDF: Configure ESP-IDF Extension** option. -->

   ![Select "Configure ESP-IDF Expansion"](../../../../static/img/VSCode-ESP-IDF-Configuration-1.webp)

4. Choose **Express** to enter quick configuration mode:

   ![Select Quick Configuration Mode](../../../../static/img/VSCode-ESP-IDF-Configuration-2.webp)

5. Modify the following options as needed:

   - **Select download server**:
     - Espressif: Use a suitable Espressif server for faster download speeds.
     - Github: Use the official GitHub release link.
   - **ESP-IDF Version**: Typically, select the version required by the development board. If no specific requirement, it's recommended to use the latest stable version. For **ESP32-P4**, it is recommended to use the Espressif IDF version ≥ v5.5.
   - **ESP-IDF Container Installation Path**: It is recommended to use the default path, or use a path that contains only English characters and no spaces.
   - **ESP-IDF Required Tools Installation Path**: It is recommended to use the default path, or use a path that contains only English characters and no spaces.

   ![ESP-IDF Expansion Quick Configuration Mode Options](../../../../static/img/VSCode-ESP-IDF-Configuration-3.webp)

6. Click **Install** to start the installation. You will see a page displaying the installation progress, including the progress status of ESP-IDF download, ESP-IDF tool download and installation, as well as the creation of the Python virtual environment.

   ![Installation Progress](../../../../static/img/VSCode-ESP-IDF-Configuration-4.webp)

7. If installed correctly, you will see a prompt indicating that all settings have been configured successfully, and you can start using the extension.

   ![Installation Successful](../../../../static/img/VSCode-ESP-IDF-Configuration-5.webp)

:::warning
Note: If ESP-IDF installation fails or needs to be reinstalled, you can try deleting the `C:\Users\%Username%\esp` and `C:\Users\%Username%\.espressif` folders and then retry.
:::

## Demo

:::note
This Wiki keeps updating the ESP32-P4 demos, some demos require ESP-IDF version dependencies, it will take a period of time to test the update, please be patient.
:::

The best way to learn a language or development environment is to start from the basics. This section will provide a detailed guide on how to create projects, develop from existing projects, and include embedded classic tutorials such as HelloWorld and the usage of common port I2C.

### 1. Introduction to Basic Structure of ESP-IDF Project

- **Project Structure:**

  - Open the ESP-IDF plugin, click New project, select the ESP-IDF demo -- > sample_project  -- > click Create

  - Create a new project and open it in the window, you can see the structure of VSCode as follows:

    ```
    ├── CMakeLists.txt
    ├── main
    │   ├── CMakeLists.txt
    │   └── main.c
    └── README.md
    ```

- **ESP-IDF Project Details:**

  - Component: The components in ESP-IDF are the basic modules for building applications, each component is usually a relatively independent code base or library, which can implement specific functions or services, and can be reused by applications or other components, similar to the definition of libraries in Python development.

    - Component reference: The import of libraries in the Python development environment only requires to "import library name or path", while ESP-IDF is based on the C language, and the importing of libraries is configured and defined through CMakeLists.txt.
    - When we use online components, we usually use `idf.py add-dependency <componetsName>` to add online components to the project, which generates an `idf_component.yml` file for managing components.
    - The purpose of CmakeLists.txt: When compiling ESP-IDF, the build tool CMake first reads the content of the top-level CMakeLists.txt in the project directory to read the build rules and identify the content to be compiled. When the required components and demos are imported into the CMakeLists.txt, the compilation tool CMake will import everything that needs to be compiled according to the index. The compilation process is as follows:

      ![ESP-IDF Compilation Process](https://www.waveshare.net/w/upload/f/f7/ESP32-P4_VSCode_ESP-IDF_GettingStart_240906_02.png)

- **Description of Bottom Toolbar of VS Code User Interface:**

  When opening an ESP-IDF project, the environment will be loaded automatically at the bottom. For the development of ESP32-P4, the bottom toolbar is very important, as shown in the figure:

  ![Description of Bottom Toolbar of VS Code User Interface](https://www.waveshare.net/w/upload/b/b6/ESP32-P4_VSCode_ESP-IDF_GettingStart_240905_03.png)

  - **①. ESP-IDF Development Environment Version Manager**: When our project requires differentiation of development environment versions, it can be managed by installing different versions of ESP-IDF. When the project uses a specific version, it can be switched to by utilizing it
  - **②. Device flashing COM port**: Select to flash the compiled program into the chip
  - **③. Select set-target chip model**: Select the corresponding chip model, for example, ESP32-P4 needs to choose esp32p4 as the target chip
  - **④. menuconfig**: Click it to modify sdkconfig configuration file
  - **⑤. fullclean button**: When the project compilation error or other operations pollute the compiled content, you can clean up all the compiled content by clicking it
  - **⑥. Build project**: When a project satisfies the build, click this button to compile
  - **⑦. flash button**: When a project build is completed, select the COM port of the corresponding development board, and click this button to flash the compiled firmware to the chip
  - **⑧. monitor enable flashing port monitoring**: When a project passes through Build --> Flash, click this button to view the log of output from flashing port and debugging port, so as to observe whether the application works normally
  - **⑨.Build Flash Monitor one-click button**: Which is used to continuously execute Build->Flash->Monitor, often referred to as "little flame”

### 2. Hello World Example

After understanding the description of bottom toolbar of VS Code user interface, the Hello World project allows you to quickly get started and understand the basic projects of the ESP32 development environment. It demonstrates how to use ESP-IDF to create a basic application, and covers the ESP32 development process, including compilation, flashing, and monitor debugging steps.

1. After opening the sample project `HelloWorld`, set the target port and chip type (Note: There is a loading action in the lower right corner when the chip type is selected, indicating that ESP-IDF is executing the command `idf.py set-target esp32p4`. It needs to pull the architecture package environment corresponding to the chip from the package manager, which may take some time. Please wait patiently. If you perform build or other operations at this time, there will be errors!!!)

2. By using the bottom tool <kbd>🔥</kbd> to build, burn, and monitor with just one click, you can view the terminal output Hello World!

3. Code content analysis

   1. There is only one `app_main` main function in the code, which determines the print content output through conditional judgment, and adds a loop at the end to achieve 10s restart of the chip.
   2. `app_main` function is the entry point for user applications in the ESP-IDF (Espressif IoT Development Framework) development framework. It is the core function of the ESP-IDF project and is equivalent to the main function in the standard program of the C language. In ESP32 development, `app_main` function is the first task scheduled by the real-time operating system (FreeRTOS), which is the starting point for the execution of the user's code.

### 3. I2C Example

I2C is a commonly used serial communication bus, which can communicate through two lines, one data cable (SDA, Serial Data) and one clock cable (SCL, Serial Clock), and supports multi-master and multi-slave mode. The ESP32-P4 chip features two I2C bus interfaces. Internally, the GPIO switch matrix allows these interfaces to be configured to use any GPIO pin. This flexibility enables users to freely assign any GPIO as I2C pins. Additionally, the ESP32-P4 I2C supports both slave and master modes. The following section focuses on the I2C master mode, which is used by the ESP32-P4 to initiate communication, control, and send data requests to or receive data from slave devices (such as any I2C‑compatible sensor). On the ESP32-P4, the I2C pins are configured by default as `SCL(GPIO8)` and `SDA(GPIO7)`

![I2C Wiring Diagram](https://www.waveshare.net/w/upload/0/0e/ESP32-P4-Nano-I2C_240906_01.png)

In ESP-IDF, the I2C bus must be configured using the `i2c_master_bus_config_t`:

- `i2c_master_bus_config_t::clk_source` selects the source clock for the I2C bus. To use the default I2C clock source (which is typically recommended), set it to I2C_CLK_SRC_DEFAULT.
- `i2c_master_bus_config_t::i2c_port` specifies the I2C port to be used by the controller. As mentioned earlier, the ESP32-P4 has two I2C interfaces. When two separate I2C buses need to operate simultaneously, this setting is used to distinguish between them.
- `i2c_master_bus_config_t::scl_io_num` sets the GPIO number for the Serial Clock (SCL) line. On the ESP32-P4‑NANO, this is 8.
- `i2c_master_bus_config_t::sda_io_num` sets the GPIO number for the Serial Data (SDA) line. On the ESP32-P4‑NANO, this is 7.
- `i2c_master_bus_config_t::glitch_ignore_cnt` defines the glitch period threshold for the Master Bus. Glitches on the line shorter than this value will be filtered out. A typical setting is 7.
- `i2c_master_bus_config_t::enable_internal_pullup` enables internal pull-up resistors. On the ESP32-P4‑NANO, external I2C pull-ups are already provided, so internal pull-ups should not be enabled.

Based on the above, the I2C configuration is defined as follows:

```C
   i2c_master_bus_config_t i2c_bus_config = {
       .clk_source = I2C_CLK_SRC_DEFAULT,
       .i2c_port = I2C_NUM_0,
       .scl_io_num = 8,
       .sda_io_num = 7,
       .glitch_ignore_cnt = 7,
       .flags.enable_internal_pullup = false,
   };
```

1. Open the `i2c_tools` project, select the correct COM port and chip model, then click the <kbd>⚙️</kbd> button to enter the settings. This will open a new tab: **SDK Configuration editor**, also known as menuconfig. Directly search for I2C in the search bar. You will see the relevant configuration options, and the SCL GPIO Num and SDA GPIO Num in the example code should already correspond to `SCL(GPIO8)` and `SDA(GPIO7)`.
2. Next, you can directly compile, flash, and monitor by clicking <kbd>🔥</kbd>. After completion, a command menu will appear in the terminal. When you execute the i2cdetect command, it will print all I2C addresses. If a device is present, its address will be displayed as a number (the device at I2C address 0x18 is the onboard ES8311 Codec audio chip, which will be explained in detail in the I2S section), as shown in the figure:

   ![i2cdetect](https://www.waveshare.net/w/upload/thumb/a/ab/ESP32-P4-Nano_I2C_demo_240906_01.png/900px-ESP32-P4-Nano_I2C_demo_240906_01.png)

3. The above steps have established the foundation for I2C device communication. In I2C protocol devices, it is often necessary to write register configurations to the corresponding device address via the I2C bus to enable its functions. This requires writing the I2C device initialization code in the program to drive the device. Different I2C devices have different I2C addresses. During development, we can use the i2ctools utility to scan for connected I2C addresses. Then, by consulting the device's datasheet for register maps and configuration details, we can implement communication over the I2C bus.

---


### 4. WIFI Networking Example

The ESP32-P4 itself does not have built-in WIFI/BT functionality. However, the ESP32-P4 expands WIFI capability by connecting to an ESP32-C6 module via SDIO. The ESP32-C6 acts as a Slave and, through a set of command sets, enables the ESP32-P4 as the Host to utilize WIFI 6/BT 5 features over SDIO. After adding the following two components, seamless integration with `esp_wifi` can be achieved.

```C
// In a WIFI project, add the following two components using the ESP-IDF component management tool
// Depending on the component version, different versions may be required; actual results may vary
idf.py add-dependency espressif/esp_wifi_remote==0.14.*
idf.py add-dependency espressif/esp_hosted==1.4.*
```

1. Open the `wifistation` project and proceed to add the required components.

   ![Add espressif/esp_wifi_remote and espressif/esp_hosted Conponent](https://www.waveshare.net/w/upload/1/10/ESP32-P4-Nano-WiFistation_240907_01.png)

2. The image above illustrates the specific steps for adding components:

    1. Open the ESP-IDF Terminal.
    2. Add the required components in the Terminal.
    3. After successful addition, an `idf_component.yml` file will appear in the main folder of the project. As explained in the ESP‑IDF project directory section, this file is used to manage project components.
    4. Opening this file, it can be seen that two components have been added: `espressif/esp_hosted: "1.4.*"` and `espressif/esp_wifi_remote: "0.14.*"`. These components will be included in the project during the build process.

3. Next, click the <kbd>⚙️</kbd> button to open the settings. Search for Example and configure the **ssid** and **password** of the target Wi‑Fi network. **Note: The ESP32‑C6 supports 2.4 GHz Wi‑Fi 6. Make sure to select a Wi‑Fi network operating in the 2.4 GHz band. **After modifying the settings, remember to save them; otherwise, errors may occur.

   ![Configure Wi-Fi Information](https://www.waveshare.net/w/upload/c/c7/ESP32-P4-Nano-WiFistation_240907_02.png)

4. Next, you can directly compile, flash, and monitor by clicking <kbd>🔥</kbd>. After completion, the terminal will display the following result, indicating that the ESP32‑P4‑NANO has successfully connected to the Wi‑Fi network and is online:

   ![Wi-Fi Networking Example Output](https://www.waveshare.net/w/upload/d/db/ESP32-P4-Nano-WiFistation_240907_03.png)


### 5. SDMMC Example

The ESP32-P4 features an onboard 4-Wire SDIO 3.0 card slot for expanding off-chip storage.

- **Supported Rate Modes**

  - Default rate (20 MHz)
  - High-speed mode (40 MHz)

- **Configuring Bus Width and Frequency**

  In ESP-IDF, configuration is set using `sdmmc_host_t` and `sdmmc_slot_config_t `. For example, to set the default 20 MHz communication frequency with a 4‑line bus width, it would be:

  ```C
  sdmmc_host_t host = SDMMC_HOST_DEFAULT();
  sdmmc_slot_config_t slot_config = SDMMC_SLOT_CONFIG_DEFAULT();
  ```

  In the design that supports 40 MHz communication, you can adjust the max_freq_khz field in the sdmmc_host_t structure to increase the bus frequency:

  ```C
  sdmmc_host_t host = SDMMC_HOST_DEFAULT();
  host.max_freq_khz = SDMMC_FREQ_HIGHSPEED;
  ```

  The SDMMC 4-wire connection on the ESP32-P4 should be defined as:

  ```C
  sdmmc_slot_config_t slot_config = SDMMC_SLOT_CONFIG_DEFAULT();
  slot_config.width = 4;
  slot_config.clk = 43;
  slot_config.cmd = 44;
  slot_config.d0 = 39;
  slot_config.d1 = 40;
  slot_config.d2 = 41;
  slot_config.d3 = 42;
  slot_config.flags |= SDMMC_SLOT_FLAG_INTERNAL_PULLUP;
  ```

  1. Open the SDMMC project, select the appropriate COM port and chip model. Since the demo project defines the pins as macros, they need to be configured here; alternatively, you can directly enter the pin numbers. Click <code>⚙️</code> button to enter the settings. This will open a new tab: SDK Configuration editor, also known as menuconfig. In the search bar, type sd to find the relevant configuration. The example settings are already prepared. Enable the option for default initialization and ensure the example file is created by default.

     ![ESP-IDF Configuration SDMMC](https://www.waveshare.net/w/upload/thumb/c/c3/ESP32-P4-Nano-SDMMC_240906_02.png/1200px-ESP32-P4-Nano-SDMMC_240906_02.png)

  2. Next, insert the prepared TF card. Click <kbd>🔥</kbd> to compile, flash and monitor. After completion, the terminal will display a command menu and list the contents of the directory on the TF card.

     ![SDMMC Example Output](https://www.waveshare.net/w/upload/e/e1/ESP32-P4-Nano-SDMMC_240906_03.png)

### 6. I2S Audio Example

**I2S (Inter-IC Sound)** is a digital communication protocol designed for transmitting audio data. I2S is a serial bus interface that is primarily used for digital audio data transmission between audio devices, such as digital audio processors (DSPs), digital-to-analog converters (DACs), analog-to-digital converters (ADCs), and audio codecs.
The ESP32-P4 includes one I2S peripheral. By configuring this peripheral with the I2S driver, sampled audio data can be input and output.

The ESP32-P4 board integrates an ES8311 Codec chip and an NS4150B power amplifier. The I2S bus and pin assignments are as follows:

- **MCLK (Master Clock)**: The master clock signal. The clock is typically provided to the ES8311 by an external device (such as an MCU or DSP), which serves as the clock source for its internal digital audio processing module.
- **SCLK (Serial Clock)**: The serial clock signal. This signal is typically used for clock synchronization for I2S data transmission and is generated by the master device to indicate the rate at which the data is transferred. The transmission of each bit of each audio sample requires a clock cycle.
- **ASDOUT (Audio Serial Data Output)** or **DOUT**: The audio data output pin. The ES8311 outputs decoded digital audio data to this pin, which is then transmitted to an amplifier chip or other audio device.
- **LRCK (Left/Right Clock)** or **WS (Word Select)**: The left/right channel selection signal, indicating whether the current data sample belongs to the left or right channel. Typically in the I2S protocol, one clock cycle represents the left channel data and the other clock cycle represents the right channel data.
- **DSDIN (Digital Serial Data Input)** or **DIN**: The digital audio data input pin. This pin receives audio data from an external audio device or a master. The ES8311 decodes this data and processes the audio signals through an internal digital signal processing module.

![Audio Signal Processing Block Diagram of ESP32-P4 with ES8311 Codec and NS4150B Power Amplifier](https://www.waveshare.net/w/upload/0/06/ESP32-P4-Nano-i2scodec_240909_05.png)

|               Functional Pin               | ESP32-P4 Pin |
| :-----------------------------------: | :--------------------------: |
|                 MCLK                  |            GPIO13            |
|                 SCLK                  |            GPIO12            |
|                ASDOUT                 |            GPIO11            |
|                 LRCK                  |            GPIO10            |
|                 DSDIN                 |            GPIO9             |
| PA_Ctrl (Power amplifier chip enable pin, active high) |            GPIO53            |

The ES8311 driver for ESP32-P4 utilizes the [ES8311](https://components.espressif.com/component/espressif/es8311) component, which can be added via the IDF Component Manager:

```powershell
idf.py add-dependency "espressif/es8311"
```

1. Open the `i2scodec` project and proceed to add the required components.

   ![Add espressif/es8311 Component](https://www.waveshare.net/w/upload/0/04/ESP32-P4-Nano-i2scodec_240909_01.png)

   1. Open the ESP-IDF Terminal.
   2. Add the required components in the Terminal.
   3. After successful addition, an `idf_component.yml` file will appear in the main folder of the project. As explained in the ESP‑IDF project directory section, this file is used to manage project components.
   4. Once opened, you can see that `espressif/es8311` component has been added, and will be included in the project during the build process.

2. Next, click the <kbd>⚙️</kbd> button to open the settings, search for Example, and adjust the volume to a suitable level.

   ![Configure Volume](https://www.waveshare.net/w/upload/a/a8/ESP32-P4-Nano-i2scodec_240909_02.png)

3. Connect a speaker, you can directly compile, flash, and monitor by clicking <kbd>🔥</kbd>. After completion, the terminal will display the following result, indicating that the ESP32‑P4‑NANO is now playing audio.

   ![I2S Audio Sample Output](https://www.waveshare.net/w/upload/c/c6/ESP32-P4-Nano-i2scodec_240909_03.png)

4. When the `echo` mode is set in the settings, the audio will be recorded by the microphone and output through the speaker.

   ![Set echo Mode](https://www.waveshare.net/w/upload/1/16/ESP32-P4-Nano-i2scodec_240909_04.png)

### 7. MIPI-DSI Display Example

The ESP32-P4 utilizes the ESP32-P4NRW32 chip, which features the following new capabilities:

- Compliant with the MIPI-DSI protocol, using D-PHY v1.1, supporting up to 2-lane x 1.5Gbps (3Gbps total)
- Supports RGB888, RGB565, and YUV422 input formats
- Supports RGB888, RGB666, and RGB565 output formats
- Uses video mode to output video streams and supports outputting fixed image patterns

For MIPI-DSI image processing, it can also utilize the 2D-DMA controller, supporting the PPA and JPEG codec peripherals.

**MIPI-DSI LCD Driving Principle**

![MIPI-DSI LCD Driving Principle](https://www.waveshare.net/w/upload/0/0d/ESP32-P4-Nano-ETH_to_WiFi_240925_02.png)

**Hardware Required**

ESP32-P4-WIFI6-Touch-LCD-X Any Kit

**Display Initialization Steps**

1. The compatible screen driver has been packaged as a component, available in the [ESP Component Registry](https://components.espressif.com/components?q=namespace:waveshare)
2. Open the corresponding project, select the esp32p4 target, then proceed by clicking <kbd>🔥</kbd> to compile, flash, and monitor. Upon completion, you can observe that the screen has lit up and is displaying color bars.
<img src="https://www.waveshare.net/w/upload/f/fa/ESP32-P4-WIFI6-Touch-LCD-7-260109-01.jpg" width="400"/>
---

### 8. LVGL HMI Human-Machine Interface

This example shows that the ESP32-P4 displays LVGL images through the MIPI DSI interface, which fully demonstrates the powerful image processing capabilities of the ESP32-P4

**Hardware Required**

ESP32-P4-WIFI6-Touch-LCD-X Any Kit

**Display Initialization Steps**

1. The compatible screen driver is packaged as a component and invoked via the BSP (Board Support Package).
2. After opening the project, configure the relevant parameters in menuconfig under the Display settings. Select the esp32p4 target, then proceed by clicking <kbd>🔥</kbd> to compile, flash, and monitor. Upon completion, the display will show the rendered images.


|<img src="https://www.waveshare.net/w/upload/d/d8/ESP32-P4-WIFI6-Touch-LCD-7-260109-02.jpg" width="400"/>   | <img src="https://www.waveshare.net/w/upload/5/55/ESP32-P4-WIFI6-Touch-LCD-7-260109-03.jpg" width="400"/>  |  <img src="https://www.waveshare.net/w/upload/9/94/ESP32-P4-WIFI6-Touch-LCD-7-260109-04.jpg" width="400"/> |
|---|---|---|

### 9. Camera LCD Display
This example showcases ESP32-P4's robust image processing power by capturing video from a camera via the MIPI CSI interface and displaying it in real-time on a screen via the MIPI DSI interface.

**Hardware Required**

ESP32-P4-WIFI6-Touch-LCD-X Any Kit

**Display Initialization Steps**

1. The compatible screen driver is packaged as a component and invoked via the BSP (Board Support Package).
2. After opening the project, configure the relevant parameters in menuconfig under the Display settings. Select the esp32p4 target, then proceed by clicking <kbd>🔥</kbd> to compile, flash, and monitor. Upon completion, the display will show the rendered images.

### 10. MP4 Player
This example showcases ESP32-P4's robust image processing power by capturing video from a camera via the MIPI CSI interface and displaying it in real-time on a screen via the MIPI DSI interface.

**Hardware Required**

- ESP32-P4-WIFI6-Touch-LCD-X Any Kit
- A TF card (with storage capacity ≥ 16GB, Class 10, formatted in FAT32)
- **File Format**: `.mp4`
- **Download Link**: [test_video.mp4](https://dl.espressif.com/AE/esp-dev-kits/test_video.mp4)

**Recommended Settings**

**High Quality (720x1280/800x1280, RGB888 displays):**
```bash
# scale=800:1280
ffmpeg -i input.mp4 -c:v mjpeg -q:v 3 -vf scale=720:1280 -r 20 -c:a aac output.mp4
```
**Display Initialization Steps**

1. Place the provided video file onto the TF card, and then insert the card into the main board's card slot.
2. After opening the project, configure the relevant parameters in menuconfig under the Display settings. Select the esp32p4 target, then proceed by clicking <kbd>🔥</kbd> to compile, flash, and monitor. Upon completion, the display will show the rendered images.

### 11. ESP-Phone

This example is based on [ESP_Brookesia](https://github.com/espressif/esp-brookesia) and demonstrates an Android-like interface containing various applications. This example uses the board's MIPI-DSI port, MIPI-CSI port, ESP32-C6, TF card slot, and audio jack. Based on this example, you can create a use case based on ESP_Brookesia to efficiently develop multimedia applications.

**Hardware Required**

- ESP32-P4-WIFI6-Touch-LCD-X Any Kit

**Display Initialization Steps**

1. After opening the project, select esp32p4 core, and you can directly click <kbd>🔥</kbd> to compile, flash, and monitor. Upon completion, the display will show the rendered images.

|<img src="https://www.waveshare.net/w/upload/8/82/ESP32-P4-WIFI6-Touch-LCD-7-260109-07.jpg" width="400"/>   | <img src="https://www.waveshare.net/w/upload/b/b0/ESP32-P4-WIFI6-Touch-LCD-7-260109-06.jpg" width="400"/>  |  <img src="https://www.waveshare.net/w/upload/d/dc/ESP32-P4-WIFI6-Touch-LCD-7-260109-05.jpg" width="400"/> |
|---|---|---|
