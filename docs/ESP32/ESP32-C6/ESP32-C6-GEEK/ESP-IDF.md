---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-C6-GEEK/Development-Environment-Setup-ESPIDF
toc_max_heading_level: 4
product_family:
  - ESP32
product_model:
  - ESP32-C6-GEEK
  - ESP32-C6-GEEK-M
  - ESP32-C6-GEEK-Basic-Kit
---

import espidfExample0101 from './images/Idf_0101.webp';
import espidfExample0201 from './images/Idf_0201.webp';
import espidfExample0301 from './images/Idf_0301.webp';
import arduino_demo_Button_test from './images/300px-ESP32-S3-GEEK-ArDemo-Button-01.webp';
import espidfExample0501 from './images/Idf_0501.webp';

# Working with ESP-IDF

This chapter includes the following two sections, please read as needed:

- [Setting Up Development Environment](#setting-up-development-environment)
- [Demo](#demo)

## Setting Up Development Environment

:::note
The following environment settings are applicable to Windows 10/11 systems. For Mac/Linux users, please refer to the **[official instructions](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)**
:::

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).

2. In VS Code, open the **Extensions** view by clicking the ![Extensions icon](./images/VSCode-Extension-Icon.webp) in the VS Code sidebar or using the shortcut (<kbd>Ctrl+Shift+X</kbd>). Then, search for the [ESP-IDF](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension) extension and install it.

   ![Search and install ESP-IDF extension in VS Code](./images/VSCode-Install-ESP-IDF-Extension.webp)

3. After the extension is installed, the ![Espressif icon](./images/VSCode-ESP-IDF-Extension-Icon.webp) will appear in the activity bar on the left side of VS Code. Clicking this icon will view the basic command list for the ESP-IDF extension. Select **Configure ESP-IDF extension** under **Advanced**.

   <!-- Alternatively, press <kbd>F1</kbd>, type `Configure ESP-IDF Extension`, and select the **ESP-IDF: Configure ESP-IDF Extension** option. -->

   ![Select "Configure ESP-IDF Expansion"](./images/VSCode-ESP-IDF-Configuration-1.webp)

4. Choose **Express** to enter quick configuration mode:

   ![Select Quick Configuration Mode](./images/VSCode-ESP-IDF-Configuration-2.webp)

5. Modify the following options as needed:

   - **Select download server**:
     - Espressif: For users in China, use Espressif's China server for faster downloads.
     - Github: Use the official GitHub release link.
   - **ESP-IDF Version**: Typically, select the version required by the development board. If no specific requirement, it's recommended to use the latest stable version. For [ESP32-C6-Touch-AMOLED-1.8](https://www.waveshare.com/esp32-c6-touch-amoled-1.8.htm), it is recommended to use the Espressif IDF version ≥ v5.5.0.
   - **ESP-IDF Container directory**: It is recommended to use the default path, or use a path that contains only English characters and no spaces.
   - **ESP-IDF Required Tools directory**: It is recommended to use the default path, or use a path that contains only English characters and no spaces.

   ![ESP-IDF Extended Quick Configuration Mode Options](./images/VSCode-ESP-IDF-Configuration-3.webp)

6. Click **Install** to start the installation. You will see a page displaying the installation progress, including the progress status of ESP-IDF download, ESP-IDF tool download and installation, as well as the creation of the Python virtual environment.

   ![Installation Progress](./images/VSCode-ESP-IDF-Configuration-4.webp)

7. If everything is installed correctly, you'll get a prompt confirming all the setup is done, and you're ready to start using the extension.

   ![Installation Successful](./images/VSCode-ESP-IDF-Configuration-5.webp)

:::warning
Note: If ESP-IDF installation fails or needs to be reinstalled, you can try deleting the `C:\Users\%Username%\esp` and `C:\Users\%Username%\.espressif` folders and then retry.
:::

## Demo

The ESP-IDF demos are located in the `ESP-IDF` directory of the [demo package](https://files.waveshare.com/wiki/ESP32-C6-GEEK/ESP32-C6-GEEK-Demo.zip).

### 01_SD_Card

This demo demonstrates how to use ESP32-C6-GEEK to test the read and write functions of the TF card

<div style={{maxWidth:800}}> <img src={espidfExample0101} alt="ESP32-C6-GEEK ESP-IDF Example 1 Figure 1"/></div>

**Additional Preparation**
- Insert the TF card into the card slot (TF card needs to be formatted as FAT32)

**Code Analysis**

- Initialize the TF card using SDSPI mode:

  ```cpp
    SD_card_Init();
  ```

- Test TF card read/write functionality:

  ```cpp
   example_sdcard_task();
  ```

### 02_WIFI_AP

This demo can set the development board as a hotspot, allowing phones or other devices in STA mode to connect to the development board.

<div style={{maxWidth:800}}> <img src={espidfExample0201} alt="ESP32-C6-GEEK ESP-IDF Example 2 Figure 1"/></div>

**Code Analysis**
- In the file `softap_example_main.c`, find `SSID` and `PASSWORD`, and then your phone or other device in STA mode can use the `SSID` and `PASSWORD` to connect to the development board.

  ```cpp
    #define EXAMPLE_ESP_WIFI_SSID      "waveshare_esp32"
    #define EXAMPLE_ESP_WIFI_PASSWORD      "wav123456"
  ```

### 03_WIFI_STA

This example can configure the development board as a STA device to connect to a router, thereby enabling access to the system network.

<div style={{maxWidth:800}}> <img src={espidfExample0301} alt="ESP32-C6-GEEK ESP-IDF Example 3 Figure 1"/></div>

**Code Analysis**
In the file `esp_wifi_bsp.c`, find `ssid` and `password`, then modify them to the `SSID` and `Password` of an available router in your current environment.

  ```cpp
    wifi_config_t wifi_config = {
        .sta = {
          .ssid = "PDCN",
          .password = "1234567890",
        },
    };
  ```

### 04_Button

This example demonstrates how to use the Boot button as a multi-functional button, capable of performing different actions such as single-click, double-click, or long-press.

<div style={{maxWidth:600}}> <img src={arduino_demo_Button_test} alt="ESP32-C6-GEEK ESP-IDF Example 4 Figure 1"/></div>

**Code Analysis**

- Initialize the Boot button and bind the button event function:

  ```cpp
    void button_init(void)
    {
        button_config_t btn_cfg = {0};
        button_gpio_config_t gpio_cfg = {
            .gpio_num = BOOT_BUTTON_NUM,
            .active_level = 0,
            .enable_power_save = true,
        };

        esp_err_t ret = iot_button_new_gpio_device(&btn_cfg, &gpio_cfg, &boot_btn);
        assert(ret == ESP_OK);
        ret |= iot_button_register_cb(boot_btn, BUTTON_SINGLE_CLICK, NULL, button_event_cb, NULL);
        ret |= iot_button_register_cb(boot_btn, BUTTON_DOUBLE_CLICK, NULL, button_event_cb, NULL);
        ret |= iot_button_register_cb(boot_btn, BUTTON_LONG_PRESS_START, NULL, button_event_cb, NULL);
    }
  ```

### 05_lvgl_example

Implement some multi-functional GUI interfaces on the screen by porting LVGL.

<div style={{maxWidth:800}}> <img src={espidfExample0501} alt="ESP32-C6-GEEK ESP-IDF Example 5 Figure 1"/></div>

**Code Analysis**

- Display text and LVGL version information:

  ```cpp
    /* Task lock */
    lvgl_port_lock(0);

    lv_obj_t *label = lv_label_create(lv_scr_act());
    lv_snprintf(str, sizeof(str), "Hello LVGL \nVersion: V %d.%d.%d ", LVGL_VERSION_MAJOR, LVGL_VERSION_MINOR, LVGL_VERSION_PATCH);
    lv_label_set_text(label, str);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);

    /* Task unlock */
    lvgl_port_unlock();
  ```