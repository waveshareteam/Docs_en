---
sidebar_position: 3
title: ESP-IDF
slug: /ESP32-C6-Zero/Development-Environment-Setup-ESPIDF
toc_max_heading_level: 4
product_family:
  - ESP32
product_model:
  - ESP32-C6-Zero
  - ESP32-C6-Zero-M
  - ESP32-C6-Zero-Basic-Kit
---

import EspidfTutorialIntro from '@site/docs/ESP32/snippets/EspidfTutorialIntro.mdx';

# ESP-IDF Development

This chapter includes the following sections; please read as needed:

- [ESP-IDF Getting Started Tutorial](#espidf-getting-started-tutorial)
- [Setting up the Development Environment](#setting-up-the-development-environment)
- [Running Espressif Official Examples](#running-espressif-official-examples)
- [Erasing Device Flash](#erasing-device-flash)

<EspidfTutorialIntro />

## Setting up the Development Environment{#setting-up-the-development-environment}

:::note
The following tutorial is based on the Windows development environment and uses VSCode for development.
:::

:::warning
Note: ESP-IDF only supports ESP32-C6 starting from version V5.1. **Please select V5.1 or higher when installing ESP-IDF.**
:::

Please refer to **[Waveshare ESP-IDF Getting Started Tutorial - Section 1 Environment Setup](/docs/ESP32/Tutorials/ESP-IDF-Tutorials/01-Setup.md#setup-esp-idf)** to complete the ESP-IDF development environment configuration.

## Running Espressif Official Examples{#running-espressif-official-examples}

### Official Examples Tutorial

#### Creating an Example

- Use the shortcut key <kbd>F1</kbd>, and enter:

  ```
  esp-idf:show examples projects
  ```

  ![ESP32-C6 TO Program 1.webp](./images/ESP32-C6_TO_Program_1.webp)

- Select your current IDF version.

  ![ESP32-C6 TO Program 2.webp](./images/ESP32-C6_TO_Program_2.webp)

- Taking the Hello World example as an instance:

  - ① Select the corresponding example.
  - ② Its readme will explain which chips the example applies to (how to use the example and the file structure are introduced below, so omitted here).
  - ③ Click Create Example using project.

  ![ESP32-C6 TO Program 3.webp](./images/ESP32-C6_TO_Program_3.webp)  
  Select the path to place the example; ensure no folder with the same name exists.  
  ![ESP32-C6 TO Program 4.webp](./images/ESP32-C6_TO_Program_4.webp)

#### Modifying COM Port

- Here shows the corresponding COM port used; click to modify the corresponding COM port.

- Please select based on the device's corresponding COM port. **It is recommended to prioritize the COM port corresponding to the USB (check via Device Manager).**

- If the download fails, please press the reset button for more than 1 second, wait for the PC to re-recognize the device, and try downloading again.

  ![ESP32-C6 TO Program 5.webp](./images/ESP32-C6_TO_Program_5.webp)

- Select the project or example to use.

  ![ESP32-C6 TO Program 6.webp](./images/ESP32-C6_TO_Program_6.webp)

- Now the COM port is modified.

#### Modifying Target Device

- Here shows the target device (driver object) used; click to modify the corresponding target device.

- Select the project or example to use.

  ![ESP32-C6 TO Program 7.webp](./images/ESP32-C6_TO_Program_7.webp)

- Wait for a moment after clicking.

  ![ESP32-C6 TO Program 8.webp](./images/ESP32-C6_TO_Program_8.webp)

- Select the object we need to drive, which is our main chip ESP32C6.

  ![ESP32-C6 TO Program 9.webp](./images/ESP32-C6_TO_Program_9.webp)

- Select the OpenOCD path. This does not affect us here, so any selection will do.

  ![ESP32-C6 TO Program 10.webp](./images/ESP32-C6_TO_Program_10.webp)

#### Introduction to Other Status Bar Items

- ① SDK Configuration Editor: Many ESP-IDF functions and configurations can be modified here.
- ② Full Clean: Clears all compiled files.
- ③ Build.
- ④ Current Flash Method: Defaults to UART.
- ⑤ Flash: Burn the current firmware (please do this after building).
- ⑥ Monitor: Open the Serial Monitor to view serial information.
- ⑦ Build, Flash, and Monitor: All-in-one button (most commonly used during debugging).

![ESP32-C6 TO Program 11.webp](./images/ESP32-C6_TO_Program_11.webp)

#### Build, Flash, and Monitor

- Click the **Build, Flash, and Monitor** button introduced earlier.

  ![ESP32-C6 TO Program 12.webp](./images/ESP32-C6_TO_Program_12.webp)

- Compiling may take a long time to complete, especially the first time.

  ![ESP32-C6 TO Program 13.webp](./images/ESP32-C6_TO_Program_13.webp)

- **During this process, ESP-IDF may consume a large amount of CPU resources, which may cause system lag.**
- If flashing a new project for the first time, you will need to select the download method. Select **UART**.

  ![ESP32-C6 TO Program 14.webp](./images/ESP32-C6_TO_Program_14.webp)

- You can also modify it later in the **Flash Method** section (click to pop up options).

  ![ESP32-C6 TO Program 15.webp](./images/ESP32-C6_TO_Program_15.webp)

- Because of the onboard automatic download circuit, no manual operation is required for automatic downloading.

  ![ESP32-C6 TO Program 16.webp](./images/ESP32-C6_TO_Program_16.webp)

- After successful downloading, it automatically enters the Serial Monitor, where you can see the chip outputting corresponding information and prompting a restart after 10 seconds.

  ![ESP32-C6 TO Program 17.webp](./images/ESP32-C6_TO_Program_17.webp)

### Example Demonstration

#### Hello World

Official example path: get-started -> hello_world

Example effect: Output **Hello world!** in the **TERMINAL** window at 10-second intervals.

##### Software Operation

- Create the official example `hello_world` according to the tutorial above (Creating an Example).
- The program is compatible with ESP32-C6; no modification to the code is needed.
- Modify the COM port and target device **(It is recommended to prioritize the COM port corresponding to the USB, check via Device Manager)**, then click Build and Flash to run the program.

![ESP32-C6 TO Program 17.webp](./images/ESP32-C6_TO_Program_17.webp)

#### RGB

Official example path: get-started -> blink

Example effect: The onboard RGB LED blinks at 1-second intervals.

##### Software Operation

- Create the official example `blink` according to the tutorial above (Creating an Example).
- The program is compatible with ESP32-C6; no modification to the code is needed.
- Modify the COM port and target device **(It is recommended to prioritize the COM port corresponding to the USB, check via Device Manager)**, then click Build and Flash to run the program.

![ESP32-C6 TO Sample 5.webp](./images/ESP32-C6_TO_Sample_5.webp)

#### UART

Official example path: peripherals -> uart -> uart_async_rxtxtasks

Example effect: Self-sending and receiving UART data with GPIO4 and GPIO5 shorted.

##### Hardware Connection

ESP32-C6  | ESP32-C6 (Same Board)
---|---  
GPIO4 | GPIO5

##### Software Operation

- Create the official example `uart_async_rxtxtasks` according to the tutorial above (Creating an Example).
- The program is compatible with ESP32-C6; no modification to the code is needed.
- Modify the COM port and target device **(It is recommended to prioritize the COM port corresponding to the USB, check via Device Manager)**, then click Build and Flash to run the program.

![ESP32-C6 TO Sample 8.webp](./images/ESP32-C6_TO_Sample_8.webp)

- Make hardware connections according to the GPIOs used.

  ![ESP32-C6 TO Sample 6.webp](./images/ESP32-C6_TO_Sample_6.webp)

- You can go to the definition file to view the actual GPIOs used (Select **GPIO_NUM_4** -> Right-click -> **Go to Definition**).

  ![ESP32-C6 TO Sample 7.webp](./images/ESP32-C6_TO_Sample_7.webp)
  
#### Bluetooth

Official example path: bluetooth -> bluedroid -> ble -> gatt_server

Example effect: Data transmission between ESP32-C6 and a mobile Bluetooth debugging assistant.

##### Software Operation

- Install the [Bluetooth Debugging Assistant](https://www.waveshare.net/w/upload/c/c8/ESP32-C6_TO_BLEAssist.ZIP) on your mobile phone.
- Create the official example `gatt_server` according to the tutorial above (Creating an Example).
- The program is compatible with ESP32-C6; no modification to the code is needed.
- Bluetooth name and UUID: The Bluetooth name is **ESP_GATTS_DEMO**.

![ESP32-C6 TO Sample 25.webp](./images/ESP32-C6_TO_Sample_25.webp)

- Modify the COM port and target device **(It is recommended to prioritize the COM port corresponding to the USB, check via Device Manager)**, then click Build and Flash to run the program.

  ![ESP32-C6 TO Sample 26.webp](./images/ESP32-C6_TO_Sample_26.webp)

- Connect to the **ESP_GATTS_DEMO** Bluetooth device on your phone.

  ![ESP32-C6 TO Sample 27.webp](./images/ESP32-C6_TO_Sample_27.webp)

- The successful connection effect is as follows.

  ![ESP32-C6 TO Sample 28.webp](./images/ESP32-C6_TO_Sample_28.webp)

- Based on the UUID values in the program, identify the two servers below and select one for uplink transmission.

  ![ESP32-C6 TO Sample 29.webp](./images/ESP32-C6_TO_Sample_29.webp)

- ESP32-C6 receives the data.

  ![ESP32-C6 TO Sample 30.webp](./images/ESP32-C6_TO_Sample_30.webp)

#### WIFI

Official example path: wifi -> getting_started -> station
Example effect: ESP32-C6 connects to WiFi.

##### Software Operation

- Create the official example `station` according to the tutorial above (Creating an Example).
- Modify the program content to connect to the required WiFi.
- Enter the **Kconfig.projbuild** file.

![ESP32-C6 TO Sample 31.webp](./images/ESP32-C6_TO_Sample_31.webp)

- Change the original **WiFi SSID** and **WiFi Password** to the WiFi information you want to connect to.

  ![ESP32-C6 TO Sample 32.webp](./images/ESP32-C6_TO_Sample_32.webp)

- Modify the COM port and target device **(It is recommended to prioritize the COM port corresponding to the USB, check via Device Manager)**, then click Build and Flash to run the program.

  ![ESP32-C6 TO Sample 33.webp](./images/ESP32-C6_TO_Sample_33.webp)

- You can view the value of **CONFIG_ESP_WIFI_SSID**.
- Enter the **station example main.c** file.

  ![ESP32-C6 TO Sample 34.webp](./images/ESP32-C6_TO_Sample_34.webp)

- Right-click and Go to Definition.

  ![ESP32-C6 TO Sample 35.webp](./images/ESP32-C6_TO_Sample_35.webp)

- You can see it is the value set previously.

  ![ESP32-C6 TO Sample 36.webp](./images/ESP32-C6_TO_Sample_36.webp)

#### Zigbee

Official Example 1 Path: Zigbee -> light_sample -> HA_on_off_switch

Official Example 2 Path: Zigbee -> light_sample -> HA_on_off_light

Example effect: Two ESP32-C6 boards. Use the **BOOT** button on one (flashed with HA_on_off_switch) to control the RGB LED on the other to turn on/off.

**Note: Please flash the HA_on_off_switch program to one board first, then flash the HA_on_off_light program to the other.**

##### Software Operation 1

- Create the official example `HA_on_off_switch` according to the tutorial above (Creating an Example).
- The program is compatible with ESP32-C6; no modification to the code is needed.
- Modify the COM port and target device **(It is recommended to prioritize the COM port corresponding to the USB, check via Device Manager)**, then click Build and Flash to run the program.

![ESP32-C6 TO Sample 37.webp](./images/ESP32-C6_TO_Sample_37.webp)

##### Software Operation 2

- Create the official example `HA_on_off_light` according to the tutorial above (Creating an Example).
- The program is compatible with ESP32-C6; no modification to the code is needed.
- Modify the COM port and target device, then click Build and Flash to run the program (**Wait for a moment for the two chips to establish a connection**).

  ![ESP32-C6 TO Sample 38.webp](./images/ESP32-C6_TO_Sample_38.webp)

- **If it remains in the unconnected state shown below**, it may be due to residual network information on the device. You can erase the device information (Erase Tutorial) and form the network again.

  ![ESP32-C6 TO Sample 39.webp](./images/ESP32-C6_TO_Sample_39.webp)

#### JTAG Debugging

##### Software Operation

- Create the example to be debugged. This example uses the official `hello_world` (Creating an Example).
- Modify the **launch.json** file.

  ![ESP32-C6 TO JTAG 1.webp](./images/ESP32-C6_TO_JTAG_1.webp)

- Enter the following content:

  ```c
  {
   "version": "0.2.0",
   "configurations": [
     {
       "name": "GDB",
       "type": "cppdbg",
       "request": "launch",
       "MIMode": "gdb",
       "miDebuggerPath": "${command:espIdf.getXtensaGdb}",
       "program": "${workspaceFolder}/build/${command:espIdf.getProjectName}.elf",
       "windows": {
         "program": "${workspaceFolder}\\build\\${command:espIdf.getProjectName}.elf"
       },
       "cwd": "${workspaceFolder}",
       "environment": [{ "name": "PATH", "value": "${config:idf.customExtraPaths}" }],
       "setupCommands": [
         { "text": "target remote :3333" },
         { "text": "set remote hardware-watchpoint-limit 2"},
         { "text": "mon reset halt" },
         { "text": "thb app_main" },
         { "text": "flushregs" }
       ],
       "externalConsole": false,
       "logging": {
         "engineLogging": true
       }
     }
   ]
  }
  ```

![ESP32-C6 TO JTAG 2.webp](./images/ESP32-C6_TO_JTAG_2.webp)

- The program is compatible with ESP32-C6; no modification to the code is needed.
- Modify the COM port and target device **(Please use the USB interface; the UART interface does not support JTAG debugging. Check the corresponding COM port via Device Manager)**, then click Build and Flash to run the program.

![ESP32-C6 TO Program 17.webp](./images/ESP32-C6_TO_Program_17.webp)

- Press the shortcut key **F1**, and enter:

  ```
  ESP-IDF:Device configuration
  ```

  ![ESP32-C6 TO JTAG 3.webp](./images/ESP32-C6_TO_JTAG_3.webp)

- Select **OpenOcd Config Files**.

  ![ESP32-C6 TO JTAG 4.webp](./images/ESP32-C6_TO_JTAG_4.webp)

- Enter **board/esp32c6-builtin.cfg** (if this is the default, just press Enter).

  ```c
  board/esp32c6-builtin.cfg
  ```

  ![ESP32-C6 TO JTAG 5.webp](./images/ESP32-C6_TO_JTAG_5.webp)

- Stretch the window width until **[OpenOCD Server]** is displayed at the bottom.

  ![ESP32-C6 TO JTAG 6.webp](./images/ESP32-C6_TO_JTAG_6.webp)
  
- Click **[OpenOCD Server]**, and select **Start OpenOCD**.

  ![ESP32-C6 TO JTAG 7.webp](./images/ESP32-C6_TO_JTAG_7.webp)

- Successful startup is as follows.

  ![ESP32-C6 TO JTAG 8.webp](./images/ESP32-C6_TO_JTAG_8.webp)

- Enter the debugging function and click Debug.

  ![ESP32-C6 TO JTAG 9.webp](./images/ESP32-C6_TO_JTAG_9.webp)

- Successfully entered the debugging interface.

  ![ESP32-C6 TO JTAG 10.webp](./images/ESP32-C6_TO_JTAG_10.webp)

## Erasing Device Flash{#erasing-device-flash}

- Unzip the software resource package ([Flash Download Tool](https://dl.espressif.com/public/flash_download_tool.zip)).

- Open the **flash_download_tool_3.9.5.exe** software, select ESP32-C6 and UART.

  ![ESP32-C6 TO Erase Flash 0.webp](./images/ESP32-C6_TO_Erase_Flash_0.webp)

- Select the UART port number and click **START** (Select no bin files).

  ![ESP32-C6 TO Erase Flash 1.webp](./images/ESP32-C6_TO_Erase_Flash_1.webp)

- Wait for the flashing to complete (sync), then click ERASE.

  ![ESP32-C6 TO Erase Flash 2.webp](./images/ESP32-C6_TO_Erase_Flash_2.webp)

- Wait for the erasure to complete.

  ![ESP32-C6 TO Erase Flash 3.webp](./images/ESP32-C6_TO_Erase_Flash_3.webp)
