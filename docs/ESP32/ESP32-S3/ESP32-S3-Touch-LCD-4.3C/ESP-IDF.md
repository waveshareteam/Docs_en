---
sidebar_position: 3
title: Working with ESP-IDF
slug: /ESP32-S3-Touch-LCD-4.3C/Development-Environment-Setup-ESPIDF
product_family:
  - ESP32
product_model:
  - ESP32-S3-Touch-LCD-4.3C
---

<!-- Image Reference -->

import arduinoExample1 from './images/Arduino-Example-1.webp';
import arduinoExample2 from './images/Arduino-Example-2.webp';
import arduinoExample3 from './images/Arduino-Example-3.webp';
import arduinoExample4 from './images/Arduino-Example-4.webp';
import arduinoExample5 from './images/Arduino-Example-5.webp';
import arduinoExample6 from './images/Arduino-Example-6.webp';
import arduinoExample7 from './images/Arduino-Example-7.webp';
import arduinoExample8 from './images/Arduino-Example-8.webp';
import arduinoExample9 from './images/Arduino-Example-9.webp';
import arduinoExample10 from './images/Arduino-Example-10.webp';
import arduinoExample11 from './images/Arduino-Example-11.webp';
import esp32S3Touchlcd4_3CIsolationIO_Img from './images/ESP32-Arduino-33.webp';
import VideoPlayer from '@site/src/components/VideoPlayer';
import esp32S3Touchlcd4_3CArduinoExample9 from './videos/Arduino-Example-9.mp4';
import esp32S3Touchlcd4_3CArduinoExample10 from './videos/Arduino-Example-10.mp4';
import EspidfTutorialIntro from '@site/docs/ESP32/snippets/EspidfTutorialIntro.mdx';

# Working with ESP-IDF

This chapter includes the following sections:

- [ESP-IDF Getting Started and Quick Configuration](#espidf-getting-started)
- [Setting Up Development Environment (Windows)](#environment-setup)
- [Common Example Descriptions (Brief Overview and Code Explanation)](#Demo-program)

<EspidfTutorialIntro />

## Setting Up Development Environment{#environment-setup}

:::note
The following instructions focus on Windows 10/11. For macOS / Linux, please refer to the official Espressif guide: https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html
:::

1. Install Visual Studio Code: https://code.visualstudio.com/

2. Install the `ESP-IDF` extension in VS Code (open Extensions view with Ctrl+Shift+X, search for ESP-IDF and install).

   After installation, an Espressif icon will appear in the sidebar. Open it and select `Configure ESP-IDF Extension` to enter the configuration wizard.

3. The Express configuration is recommended. Choose as needed:

   - Download server: Espressif (domestic mirror) or GitHub
   - ESP-IDF version: Select based on project requirements; if no specific requirement, choose the latest stable version. Note: Some examples have been tested on older/specific IDF versions.
   - Install path: Use a path without spaces and containing only ASCII characters (e.g., C:\Users\<Username>\esp) to avoid path-related issues.

4. Click `Install` to begin the automatic download and installation of ESP-IDF, the toolchain, and the creation of a Python virtual environment. Wait for the installation completion prompt.

:::warning
If installation fails or a reinstall is needed, you can try deleting the `C:\Users\%Username%\esp` and `C:\Users\%Username%\.espressif` folders and then retry.
:::

## Demo{#Demo-program}

The ESP-IDF [demo package](https://gitee.com/waveshare/esp32-s3-touch-lcd-4.3-c/tree/main/examples/esp-idf) is located in examples/esp-idf.

Below is the purpose, key points, and operation effect for each example (for quick start).

| Demo | Basic Program Description | Dependency Library|
| :------------------------------------------------------ | :----------------------------------------------------------------------- | :----- |
| [01_i2c](#Demo-01_i2c)                               | Uses I2C to control an I/O expansion chip, periodically switching the LCD backlight on and off to create a flashing effect | -      |
| [02_rtc](#Demo-02_rtc)                               | Uses the onboard RTC chip to implement real-time clock display and alarm reminder functionality                      | -      |
| [03_lcd](#Demo-03_lcd)                               | Initializes the LCD and displays various graphics, text, and images                                  | -      |
| [04_isolation_io](#Demo-04_isolation_io)             | Verifies the isolation I/O functionality via the display                                     | -      |
| [05_sd](#Demo-05_sd)                                 | Displays the TF card mounting status on the screen                                         | -      |
| [06_touch](#Demo-06_touch)                           | Demonstrates how to use 5-point touch                                                | -      |
| [07_display_bmp](#Demo-07_display_bmp)               | Shows how to read and display BMP images from a TF card.                                  | -      |
| [08_wifi_scan](#Demo-08_wifi_scan)                   | Scans nearby Wi-Fi networks and displays the SSID list on the screen                                  | -      |
| [09_wifi_sta](#Demo-09_wifi_sta)                     | Connects to an AP in STA mode and displays IP information                                      | -      |
| [10_wifi_ap](#Demo-10_wifi_ap)                       | Uses the screen to display hotspot status, showing the MAC addresses of connected devices                    | -      |
| [11_speaker_microphone](#Demo-11_speaker_microphone) | Recording and playback example (codec, I2S)                                           | -      |
| [12_lvgl_transplant](#Demo-12_lvgl_transplant)       | Ports LVGL and runs the official demo                                               | LVGL   |
| [13_lvgl_codec](#Demo-13_lvgl_codec)                 | Example combining LVGL and audio                                                    | LVGL   |
| [14_tcp_udp_ntp](#Demo-14_tcp_udp_ntp)               | Demonstrates TCP/UDP communication and NTP time synchronization                                   | LVGL   |

---

### 01_i2c {#Demo-01_i2c}

This example demonstrates how to periodically control the LCD backlight's on/off state via I2C, creating a flashing effect, using an I/O expansion chip.

#### Hardware Connection

- Connect the board to the computer using a USB cable

#### Code

<Details summary="01_i2c.c" className="code-details" >

```c
/*
 * Please refer to the source code in the example package for the complete code
 * The full code can be found in the example package
 */

#include "driver/i2c.h"
// ... other includes

void app_main()
{
    // Initialize the I2C interface and configure it for IO EXTENSION communication
    DEV_I2C_Init();

    /*
     * After initializing I2C, a device name and slave address need to be created.
     * This step corresponds to the specific slave device you want to communicate with.
     * Note: The function `DEV_I2C_Set_Slave_Addr` is not explicitly called here,
     * because `IO_EXTENSION_Init` already sets the slave address internally.
     * Example:
     * DEV_I2C_Set_Slave_Addr(i2c_master_dev_handle_t *dev_handle, uint8_t Addr)
     */
    IO_EXTENSION_Init();
    vTaskDelay(10 / portTICK_PERIOD_MS);
    // Enter an infinite loop to control the backlight
    while (1)
    {
        // Set the IO_EXTENSION_IO_2 pin to high (turn on the backlight)
        IO_EXTENSION_Output(IO_EXTENSION_IO_2, 1);  // Turn on backlight
        vTaskDelay(500 / portTICK_PERIOD_MS);  // Wait for 500 milliseconds

        // Set the IO_EXTENSION_IO_2 pin to low (turn off the backlight)
        IO_EXTENSION_Output(IO_EXTENSION_IO_2, 0);  // Turn off backlight
        vTaskDelay(500 / portTICK_PERIOD_MS);  // Wait for 500 milliseconds
    }
}

```

</Details>

#### Code Analysis

- **DEV_I2C_Init()**: Initializes the I2C driver. Defines the SDA/SCL pins and frequency via the `i2c_config_t` structure, and calls `i2c_driver_install` to register the driver.
- **IO_EXTENSION_Init()**: Initializes the I/O expansion chip, internally configuring the chip's default register states and pin modes via the I2C interface.
- **IO_EXTENSION_Output()**: Sends control commands to the expansion chip using `i2c_master_write_to_device`, modifying the level state of specific pins using bitwise operations.

#### Operation Result

- The backlight toggles on and off at a fixed interval; the serial port can output the current backlight state or I2C read/write results.

### 02_rtc {#Demo-02_rtc}

This example demonstrates time reading/writing and alarm functionality of the onboard `PCF85063`.

#### Hardware Connection

- Connect the board to the computer using a USB cable

#### Code

<Details summary="02_rtc.c" className="code-details" >

```c
void app_main()
{
    datetime_t Now_time;

    // Initialize the I2C interface
    DEV_I2C_Init();

    // Initialize external IO extension chip
    IO_EXTENSION_Init();

    // Initialize PCF85063A RTC
    PCF85063A_Init();

    // Set current time
    PCF85063A_Set_All(Set_Time);

    // Set alarm time
    PCF85063A_Set_Alarm(Set_Alarm_Time);

    // Enable alarm interrupt
    PCF85063A_Enable_Alarm();

    while (1)
    {
        // Read current time from RTC
        PCF85063A_Read_now(&Now_time);

        // Format current time as a string
        datetime_to_str(datetime_str, Now_time);
        ESP_LOGI(TAG, "Now_time is %s", datetime_str);

        // Poll external IO pin for alarm (low level = alarm triggered)
        if (IO_EXTENSION_RTC_INT_READ() == 0)
        {
            // Re-enable alarm if repeated alarms are required
            PCF85063A_Enable_Alarm();
            ESP_LOGI(TAG, "The alarm clock goes off.");
        }

        // Wait for 1 second
        vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
}

```

</Details>

#### Code Analysis

- **PCF85063A_Init()**: Initializes the PCF85063A real-time clock, configures the I2C address, enables the oscillator, and sets it to 24-hour mode.
- **PCF85063A_Set_All()**: Sets all PCF85063A register values, including time, alarm time, control registers, etc.
- **PCF85063A_Read_now()**: Reads the current time from the PCF85063A, converting BCD-encoded values to decimal format.

#### Operation Result

- The serial port or screen displays the current time; outputs a prompt message when the alarm triggers.

  <div style={{maxWidth:650}}> 
    <img src={arduinoExample1} />
  </div>

### 03_lcd {#Demo-03_lcd}

This example demonstrates LCD initialization and basic drawing processes, verifying the `RGB LCD` display link and frame buffer refresh.

#### Hardware Connection

- Connect the board to the computer using a USB cable

#### Code

<Details summary="03_lcd.c" className="code-details" >

```c
void app_main()
{
    // Initialize I2C communication and CH422G hardware interface
    DEV_I2C_Init();
    IO_EXTENSION_Init();

    // Initialize the Waveshare ESP32-S3 RGB LCD
    waveshare_esp32_s3_rgb_lcd_init();

    // Turn on the LCD backlight
    wavesahre_rgb_lcd_bl_on();
    // Uncomment the following line to turn off the backlight if needed
    // wavesahre_rgb_lcd_bl_off();

    // Allocate memory for the screen's frame buffer
    UDOUBLE Imagesize = EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2; // Each pixel takes 2 bytes in RGB565
    UBYTE *BlackImage;
    if ((BlackImage = (UBYTE *)malloc(Imagesize)) == NULL) // Allocate memory
    {
        printf("Failed to apply for black memory...\r\n");
        exit(0); // Exit the program if memory allocation fails
    }

    // Create a new image canvas and set its background color to white
    Paint_NewImage(BlackImage, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);

    // Set the canvas scale
    Paint_SetScale(65);
    Paint_SetRotate(ROTATE);
    // Clear the canvas and fill it with a white background
    Paint_Clear(WHITE);
}
```

</Details>

#### Code Analysis

- **waveshare_esp32_s3_rgb_lcd_init()**: Calls `esp_lcd_new_rgb_panel` to create a panel handle, configuring RGB interface timing parameters to match the 4.3inch screen's resolution.
- **malloc()**: Allocates the Framebuffer in external PSRAM using the `MALLOC_CAP_SPIRAM` flag, addressing the high memory footprint issue for high-resolution displays on SRAM.
- **Paint_NewImage()**: Binds the allocated display coordinates with the drawing context.

#### Operation Result

- The screen sequentially displays a color gradient, basic shapes, and text content.

### 04_isolation_io {#Demo-04_isolation_io}

This example verifies the isolation I/O functionality.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Connect the DO/DI pins as described in the example to test the isolation function.
  <div style={{maxWidth:650}}> 
    <img src={esp32S3Touchlcd4_3CIsolationIO_Img} />
  </div>

#### Code

<Details summary="04_isolation_io.c" className="code-details" >

```c
void app_main()
{
    // Initialize I2C communication and CH422G hardware interface
    DEV_I2C_Init();
    IO_EXTENSION_Init();

    IO_EXTENSION_IO_Mode(DI0 | DI5); // Set EXIO0 and EXIO5 to input mode

    // Initialize the Waveshare ESP32-S3 RGB LCD
    waveshare_esp32_s3_rgb_lcd_init();

    // Turn on the LCD backlight
    wavesahre_rgb_lcd_bl_on();
    // Uncomment the following line to turn off the backlight if needed
    // wavesahre_rgb_lcd_bl_off();

    // Allocate memory for the screen's frame buffer
    UDOUBLE Imagesize = EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2; // Each pixel takes 2 bytes in RGB565
    UBYTE *BlackImage;
    if ((BlackImage = (UBYTE *)malloc(Imagesize)) == NULL) // Allocate memory
    {
        printf("Failed to apply for black memory...\r\n");
        exit(0); // Exit the program if memory allocation fails
    }

    // Create a new image canvas and set its background color to white
    Paint_NewImage(BlackImage, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);

    // Set the canvas scale
    Paint_SetScale(65);
    Paint_SetRotate(ROTATE);
    // Clear the canvas and fill it with a white background
    Paint_Clear(WHITE);
}
```

</Details>

#### Code Analysis

- **IO_EXTENSION_IO_Mode()**: Configures the working mode of the expansion chip's pins, e.g., setting specific pins to input mode to read isolated DI signals.
- **IO_EXTENSION_Output()**: Controls the output pin levels of the expansion chip, e.g., driving the isolated DO port to output high/low levels to control an external relay or load.
- **IO_EXTENSION_Read()**: Reads the state of the expansion chip's input pins in real-time, used to obtain feedback from external sensors or digital input connected to the isolated DI port.

#### Operation Result

- After successful flashing, the screen will display red or green depending on the wiring on the back.
- When wired correctly, the screen displays green.
- When wired incorrectly, the screen displays red.

### 05_sd {#Demo-05_sd}

This example demonstrates `TF card` mounting, filesystem access, and displays the mounting status and basic information on the screen.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Insert a TF/SD card.

#### Code

<Details summary="05_sd.c" className="code-details" >

```c
void app_main()
{
    // Initialize I2C communication and configure the IO EXTENSION GPIO expander
    DEV_I2C_Init();                // Initialize the I2C bus
    IO_EXTENSION_Init();                     // Initialize IO EXTENSION chip

    IO_EXTENSION_Output(IO_EXTENSION_IO_4, 1);  // Set CS (chip select) pin high

    // Initialize the Waveshare ESP32-S3 RGB LCD
    waveshare_esp32_s3_rgb_lcd_init();
    wavesahre_rgb_lcd_bl_on();         // Turn on the LCD backlight
    // wavesahre_rgb_lcd_bl_off();     // Uncomment to turn off the backlight if needed

    // Allocate memory for the LCD's frame buffer
    UDOUBLE Imagesize = EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2; // Each pixel uses 2 bytes in RGB565 format
    UBYTE *BlackImage;
    if ((BlackImage = (UBYTE *)malloc(Imagesize)) == NULL) // Allocate memory for the image
    {
        printf("Failed to allocate memory for frame buffer...\r\n");
        exit(0); // Exit if memory allocation fails
    }

    // Create a new image canvas and set its background color to white
    Paint_NewImage(BlackImage, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);
    Paint_SetScale(65);                // Set the canvas scale
    Paint_Clear(WHITE);                // Clear the canvas with a black background

    // Draw static text on the canvas
    Paint_DrawString_EN(150, 130, "TF TEST", &Font48, BLACK, WHITE);
    Paint_DrawString_EN(150, 180, "Waveshare ESP32 S3", &Font24, BLACK, WHITE);
    Paint_DrawString_EN(150, 210, "https://www.waveshare.com", &Font24, BLACK, WHITE);

    char Total[100], Available[100]; // Buffers for formatted text
}
```

</Details>

#### Code Analysis

- **esp_vfs_fat_sdmmc_mount()**: Mounts the TF card to the virtual file system (VFS), allowing access to the FATFS partition using standard POSIX interfaces (e.g., `fopen`).
- **sd_mmc_init()**: Initializes the SDMMC host controller, configures 1-bit or 4-bit bus mode, and sets the operating frequency according to the hardware design.
- **esp_vfs_fat_sdcard_unmount()**: Unmounts the TF card from the virtual file system, freeing resources and allowing remounting.

#### Operation Result

- The screen indicates successful/failed mounting and displays card capacity, file list, or test file read/write results.

  <div style={{maxWidth:650}}> 
    <img src={arduinoExample3} />
  </div>

### 06_touch {#Demo-06_touch}

This example demonstrates the touch controller driver and `5 5-point touch` reading, verifying the mapping between touch coordinates and screen coordinates.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Touch the screen with your finger.

#### Code

<Details summary="06_touch.c" className="code-details" >

```c
int app_main()
{
    touch_gt911_point_t point_data;  // Structure to store touch point data

    // Initialize the GT911 touch screen controller
    touch_gt911_init();

    // Initialize the Waveshare ESP32-S3 RGB LCD hardware
    waveshare_esp32_s3_rgb_lcd_init();

    // Turn on the LCD backlight
    wavesahre_rgb_lcd_bl_on();

    // Frame buffer pointers for double buffering
    void *buf1 = NULL;
    void *buf2 = NULL;

    // Retrieve pointers to the frame buffers
    waveshare_get_frame_buffer(&buf1, &buf2);
    if (buf1 == NULL || buf2 == NULL) {
        printf("Error: buf1 and buf2 are NULL!\n");
        return;
    }

    // Initialize the graphics canvas with buf2
    Paint_NewImage(buf2, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);

    // Set the scale for the graphical canvas
    Paint_SetScale(65);

    // Clear the canvas and fill it with a white background
    Paint_Clear(WHITE);

    // Copy buf2 content to buf1 to sync buffers
    memcpy(buf1, buf2, EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2);

    // Display the initial blank screen on the LCD
    wavesahre_rgb_lcd_display(buf1);

    // Arrays to store previous touch point positions and their active states
    static uint16_t prev_x[ESP_LCD_TOUCH_MAX_POINTS];
    static uint16_t prev_y[ESP_LCD_TOUCH_MAX_POINTS];
    static bool active[ESP_LCD_TOUCH_MAX_POINTS];  // Track if a touch point is active
    static uint16_t color[ESP_LCD_TOUCH_MAX_POINTS] = {
        0x7DDF, 0xFBE4, 0x7FE0, 0xEC1D, 0xFEE0
    }; // Predefined colors for touch points
}
```

</Details>

#### Code Analysis

- **touch_gt911_init()**: Initializes the touch controller, configures the I2C slave address, and triggers a chip self-test via the reset pin.
- **touch_gt911_read_point()**: Reads the status register to obtain the current number of touch points and sequentially extracts the X/Y coordinate data for up to 5 touch points.
- **Paint_DrawCircle()**: Draws a circle with a specified radius and color at the given coordinates.

#### Operation Result

After successful flashing, 5-point touch reading is demonstrated, and circles are drawn in real-time based on the touch point coordinates.

  <VideoPlayer src={esp32S3Touchlcd4_3CArduinoExample9} asGif />

### 07_display_bmp {#Demo-07_display_bmp}

his example reads `BMP` files from a TF card and displays them on the screen, verifying the file reading, decoding, and display refresh pipeline.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Insert a TF/SD card containing BMP files.

#### Code

<Details summary="07_display_bmp.c" className="code-details" >

```c
void app_main()
{
    touch_gt911_point_t point_data;  // Structure to store touch point data

    // Initialize the GT911 touch screen controller
    touch_gt911_init();

    // Initialize the Waveshare ESP32-S3 RGB LCD hardware
    waveshare_esp32_s3_rgb_lcd_init();

    // Turn on the LCD backlight
    wavesahre_rgb_lcd_bl_on();

    // EXAMPLE_PIN_NUM_TOUCH_INT
    // Allocate memory for the LCD's frame buffer
    UDOUBLE Imagesize = EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2; // Each pixel uses 2 bytes in RGB565 format
    UBYTE *BlackImage;
    if ((BlackImage = (UBYTE *)malloc(Imagesize)) == NULL) // Check if memory allocation is successful
    {
        printf("Failed to allocate memory for frame buffer...\r\n");
        exit(0); // Exit if memory allocation fails
    }

    // Initialize the graphics canvas with the allocated buffer
    Paint_NewImage(BlackImage, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);

    // Set the scale for the graphical canvas
    Paint_SetScale(65);

    // Clear the canvas and fill it with a white background
    Paint_Clear(WHITE);
}
```

</Details>

#### Code Analysis

- **GUI_ReadBmp()**: Reads a BMP file from the TF card, parsing the file header to obtain image dimensions and pixel data offset.
- **Paint_Clear()**: Clears the canvas, filling it with a specified color.
- **Paint_DrawLine()**: Draws a line between specified coordinates, allowing configuration of color, line width, and style.

#### Operation Result

- BMP images from the TF card are displayed on the screen; the serial port outputs image information and loading time.

  <div style={{maxWidth:650}}> 
    <img src={arduinoExample2} />
  </div>

### 08_wifi_scan {#Demo-08_wifi_scan}

This example scans for nearby Wi‑Fi hotspots and displays information such as `SSID`, `RSSI`, and `encryption type` on the screen.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Ensure there are Wi‑Fi networks nearby that can be scanned.

#### Code

<Details summary="08_wifi_scan.c" className="code-details" >

```c
int app_main()
{
    // Initialize Wi-Fi settings
    wifi_init();
    uint8_t chinese_num = 0; // Counter for Wi-Fi networks with Chinese SSIDs

    // Display static information on the LCD screen
    Paint_DrawString_EN(10, 160, "ESP32-S3-Touch-LCD-4.3C", &Font24, RED, WHITE);  // Display title
    Paint_DrawString_EN(10, 200, "WiFi SCAN Test", &Font24, RED, WHITE);          // Display Wi-Fi scan message
    Paint_DrawString_EN(10, 240, "800x480", &Font24, RED, WHITE);                // Display screen resolution
    Paint_DrawLine(400, 0, 400, 480, BLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);  // Draw a vertical line to separate sections
    Paint_DrawString_EN(440, 0, "Scanning now...", &Font24, BLACK, WHITE); // Show scanning status message
    wavesahre_rgb_lcd_display(BlackImage);  // Refresh the display with the updated image

    // Clear the top section of the screen to display scanning results
    Paint_ClearWindows(440, 0, 800, 25, WHITE);

    // Start Wi-Fi scanning to find available networks
    wifi_scan();

    // Loop through the Wi-Fi APs found and display them on the screen
    for (int i = 0; i < DEFAULT_SCAN_LIST_SIZE; i++) {
        // Skip SSID with Chinese characters
        if (contains_chinese((const char *)ap_info[i].ssid)){
            chinese_num++;  // Increment the count for networks with Chinese SSIDs
            printf("Skipping SSID with Chinese characters: %s \r\n", ap_info[i].ssid);
        }
        else{
            // Display the SSID (Wi-Fi network name) on the screen
            Paint_DrawString_EN(440, (i - chinese_num) * 24, (const char *)ap_info[i].ssid, &Font24, BLACK, WHITE);
        }
    }

    // Update the screen with the new image (BlackImage is the framebuffer being drawn to)
    wavesahre_rgb_lcd_display(BlackImage);  // Refresh the display to show the updated list of networks
}
```

</Details>

#### Code Analysis

- **wifi_init()**: Initializes the Wi-Fi driver, allocates resources, and starts the low-power radio management task.
- **wifi_scan()**: Initiates the scan process for surrounding access points, supporting full-channel polling or specific channel scanning, and configures the maximum number of results to return.
- **contains_chinese()**: Checks if a string contains Chinese characters, returning `true` or `false`.

#### Operation Result

- The screen lists information about nearby hotspots; the serial port outputs the scan count and brief data for each AP.

### 09_wifi_sta {#Demo-09_wifi_sta}

This example connects to a specified AP in `STA` mode and displays the connection status and `IP` information on the screen.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Have a connectable Wi‑Fi network ready (SSID/password).

#### Code

<Details summary="09_wifi_sta.c" className="code-details" >

```c
#define USER_SSID "SSID"  // Wi-Fi SSID (network name)
#define USER_PASS "PASSWORD"  // Wi-Fi password

void app_main()
{
    // Initialize the Non-Volatile Storage (NVS) for Wi-Fi settings
    esp_err_t err = nvs_flash_init();
    if (err == ESP_ERR_NVS_NO_FREE_PAGES || err == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        // If NVS has no free pages or a new version is found, erase and reinitialize NVS
        ESP_ERROR_CHECK(nvs_flash_erase());
        err = nvs_flash_init();
    }

    // Initialize I2C communication and IO EXTENSION hardware interface for GPIO control
    DEV_I2C_Init();  // Initialize I2C
    IO_EXTENSION_Init();   // Initialize GPIO control using the IO EXTENSION chip

    // Initialize the Waveshare ESP32-S3 RGB LCD display
    waveshare_esp32_s3_rgb_lcd_init();

    // Turn on the LCD backlight
    wavesahre_rgb_lcd_bl_on();
    // Uncomment the next line to turn off the backlight if needed
    // wavesahre_rgb_lcd_bl_off();

    // Allocate memory for the screen's framebuffer (image buffer)
    UDOUBLE Imagesize = EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2;  // Each pixel takes 2 bytes in RGB565 format
    UBYTE *BlackImage;
    if ((BlackImage = (UBYTE *)malloc(Imagesize)) == NULL) {  // Allocate memory for the framebuffer
        printf("Failed to apply for black memory...\r\n");
        exit(0); // Exit the program if memory allocation fails
    }

    // Create a new image canvas and set its background color to white
    Paint_NewImage(BlackImage, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);

    // Set the canvas scale and rotation for the display
    Paint_SetScale(65);  // Set the scale for the image
    Paint_SetRotate(ROTATE);  // Set the rotation (0 degrees)

    // Clear the canvas and fill it with a white background
    Paint_Clear(WHITE);

    // Initialize Wi-Fi settings (connect to the specified Wi-Fi network)
    wifi_init();

    // Display some information on the LCD screen
    Paint_DrawString_EN(10, 160, "ESP32-S3-Touch-LCD-4.3C", &Font24, RED, WHITE);  // Display title
    Paint_DrawString_EN(10, 200, "WiFi STA Test", &Font24, RED, WHITE);          // Display Wi-Fi test message
    Paint_DrawString_EN(10, 240, "800x480", &Font24, RED, WHITE);                // Display screen resolution
    Paint_DrawString_EN(440, 160, "wifi connecting......", &Font24, BLACK, WHITE); // Display Wi-Fi connection status
    Paint_DrawLine(400, 0, 400, 480, BLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);  // Draw a vertical line on the display

    wavesahre_rgb_lcd_display(BlackImage);  // Refresh the display with the updated image (BlackImage is the framebuffer)

    // Initialize Wi-Fi in STA mode and attempt to connect to the specified SSID and password
    wifi_sta_init((uint8_t *)USER_SSID, (uint8_t *)USER_PASS, WIFI_AUTH_WPA2_PSK);

    // Update the screen with the new image (BlackImage is the framebuffer being drawn to)
    wavesahre_rgb_lcd_display(BlackImage);  // Refresh the display again to show the updated image
}

```

</Details>

#### Code Analysis

- **nvs_flash_init()**: Initializes Non-Volatile Storage (NVS), used for persistently saving Wi-Fi connection configurations (such as SSID and password).
- **wifi_sta_init()**: Configures Wi-Fi to Station (STA) mode, sets authentication/encryption methods (e.g., WPA2_PSK), and initiates a connection request.
- **wifi_init()**: Initializes the Wi-Fi driver, allocates resources, and starts the low-power radio management task.

#### Operation Result

- The screen displays a successful connection and the assigned IP address; prompts reconnection status upon disconnection.

  <div style={{maxWidth:650}}> 
    <img src={arduinoExample5} />
  </div>

### 10_wifi_ap {#Demo_wifi_ap}

This example enables a `SoftAP` hotspot and displays information about connected devices (e.g., `MAC` address, connection count) on the screen.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Connect a phone/computer to the development board's hotspot.

#### Code

<Details summary="10_wifi_ap.c" className="code-details" >

```c
// Initialize SoftAP (Wi-Fi Access Point) with SSID, password, and channel
int app_main(void)
{
    wifi_ap_init((uint8_t *)USER_SSID, (uint8_t *)USER_PASS, 1);

    static uint8_t connection_num = 0;  // Variable to track the number of connected stations
    while (1)
    {
        esp_err_t ret = esp_wifi_ap_get_sta_list(&sta_list);  // Get the list of connected stations (devices)
        if (ret == ESP_OK)
        {
            // If the number of connected stations has changed, update the UI
            if (connection_num != sta_list.num)
            {
                char station_num[32];
                char station_mac[32];  // Buffer to hold formatted MAC address string


                Paint_ClearWindows(430, 160, 800, 480, WHITE);  // Clear the section of the screen displaying the connection info

                snprintf(station_num, sizeof(station_num), "Connected: %d", sta_list.num); // Format the number of connected stations
                Paint_DrawString_EN(430, 160, station_num, &Font24, BLACK, WHITE);  // Display the number of connected devices
                if (sta_list.num == 0)
                {
                    ESP_LOGE(TAG_AP, "No device connected.");  // Log error if no devices are connected
                }
                else
                {
                    for (int i = 0; i < sta_list.num; i++)
                    {
                        wifi_sta_info_t sta_info = sta_list.sta[i];  // Get station info (MAC address, RSSI, etc.)

                        // Format the MAC address and display it in the list
                        snprintf(station_mac, sizeof(station_mac), MACSTR, MAC2STR(sta_info.mac));
                        Paint_DrawString_EN(430, 200 , "MAC:", &Font24, BLACK, WHITE);  // Label for MAC address
                        Paint_DrawString_EN(430, 240 + (i * 40), station_mac, &Font24, BLACK, WHITE);  // Display MAC address

                        // Log information about the connected stations
                        ESP_LOGI(TAG_AP, "STA %d: MAC Address: " MACSTR, i, MAC2STR(sta_info.mac));  // Log MAC address
                        ESP_LOGI(TAG_AP, "STA %d: RSSI: %d", i, sta_info.rssi);  // Log signal strength (RSSI)
                    }
                }
                // Update the screen with the new image (BlackImage is the framebuffer being drawn to)
                wavesahre_rgb_lcd_display(BlackImage);  // Refresh the display again to show the updated image
                connection_num = sta_list.num;  // Update the connection number variable
            }
        }
        else
        {
            ESP_LOGE(TAG_AP, "Failed to get STA list");  // Log error if failed to get list of connected stations
        }
        // Delay for 10ms before the next loop iteration
        vTaskDelay(100);  // Short delay to avoid overloading the CPU
    }
}
```

</Details>

#### Code Analysis

- **wifi_ap_init()**: Initializes the Soft Access Point (SoftAP) mode, sets the SSID, password, and operating channel, and configures the maximum number of connected clients.
- **esp_wifi_ap_get_sta_list()**: Periodically queries the list of connected stations to obtain the current number of connected devices and their hardware MAC addresses.
- **MACSTR/MAC2STR()**: Uses formatting macros to convert a 6-byte raw MAC address into a human-readable string format for display on the UI.

#### Operation Result

- The screen displays hotspot status and information of connected devices; the serial port simultaneously outputs connection/disconnection logs..
  <div style={{maxWidth:650}}> 
    <img src={arduinoExample6} />
  </div>

### 11_speaker_microphone {#Demo_speaker_microphone}

This example demonstrates the audio capture and playback pipeline, including `microphone recording` and `speaker playback` (`Codec + I2S`).

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Record audio via the onboard microphone and play it back through the speaker.

#### Code

<Details summary="11_speaker_microphone.c" className="code-details" >

```c
void app_main()
{
    touch_gt911_point_t point_data;
    DEV_I2C_Init();
    IO_EXTENSION_Init();
    touch_gt911_init(DEV_I2C_Get_Bus_Device());
    waveshare_esp32_s3_rgb_lcd_init();
    wavesahre_rgb_lcd_bl_on();

    // Allocate LCD frame buffer
    UDOUBLE Imagesize = EXAMPLE_LCD_H_RES * EXAMPLE_LCD_V_RES * 2;
    BlackImage = (UBYTE *)malloc(Imagesize);
    if (!BlackImage)
    {
        printf("Failed to allocate memory for frame buffer...\r\n");
        exit(0);
    }

    Paint_NewImage(BlackImage, EXAMPLE_LCD_H_RES, EXAMPLE_LCD_V_RES, 0, WHITE);
    Paint_SetScale(65);
    Paint_Clear(WHITE);

    // Draw initial red record button
    Paint_DrawCircle(405, 450, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_FULL);
    Paint_DrawString_EN(100, 150, "Click to start recording", &Font48, BLACK, WHITE);
    wavesahre_rgb_lcd_display(BlackImage);

    // Initialize speaker codec
    codec_init();
    speaker_codec_volume_set(100, NULL);
    microphone_codec_gain_set(30, NULL);

    // Allocate memory for recording buffer
    record_buffer = heap_caps_malloc(BUFFER_SIZE * sizeof(int16_t), MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT);
    if (!record_buffer)
    {
        ESP_LOGE(TAG, "Failed to allocate buffer");
        vTaskDelete(NULL);
        return;
    }

    // Touch handling loop
    static uint16_t prev_x;
    static uint16_t prev_y;
    bool is_playing = false;

    while (1)
    {
        point_data = touch_gt911_read_point(1);
        if (point_data.cnt == 1)
        {
            if (prev_x == point_data.x[0] && prev_y == point_data.y[0])
            {
                continue;
            }
            else if (point_data.x[0] > 390 && point_data.x[0] < 420 &&
                     point_data.y[0] > 420 && point_data.y[0] < 480)
            {
                Paint_Clear(WHITE);
                is_playing = !is_playing;
                play_or_pause(is_playing);

                prev_x = point_data.x[0];
                prev_y = point_data.y[0];
            }
        }
        vTaskDelay(30 / portTICK_PERIOD_MS);
    }
}
```

</Details>

#### Code Analysis

- **codec_init()**: Initializes the audio codec chip, configuring the sampling frequency, bit width, and input/output routing (e.g., enabling microphone gain and speaker amplifier).
- **heap_caps_malloc()**: Allocates a large-capacity recording buffer in PSRAM, supporting long-duration audio capture without exhausting internal SRAM.

#### Operation Result

- Playback audio can be heard; the serial port outputs recording/playback status and audio parameters.

  <VideoPlayer src={esp32S3Touchlcd4_3CArduinoExample10} asGif />

### 12_lvgl_transplant {#Demo_lvgl_transplant}

This example completes the basic `LVGL` port, verifies the display driver, touch input, and LVGL refresh pipeline, and runs the official demo.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Touchscreen interaction is possible.

#### Code

<Details summary="12_lvgl_transplant.c" className="code-details" >

```c
void app_main()
{
    static esp_lcd_panel_handle_t panel_handle = NULL; // Declare a handle for the LCD panel
    static esp_lcd_touch_handle_t tp_handle = NULL;

    DEV_I2C_Init(); // Initialize I2C port
    IO_EXTENSION_Init(); // Initialize the IO EXTENSION GPIO chip

    wavesahre_rgb_lcd_bl_off(); // Turn off the LCD backlight

    tp_handle = touch_gt911_init(DEV_I2C_Get_Bus_Device()); // Initialize the GT911 touch screen controller
    panel_handle = waveshare_esp32_s3_rgb_lcd_init(); // Initialize the Waveshare ESP32-S3 RGB LCD hardware
    ESP_ERROR_CHECK(lvgl_port_init(panel_handle, tp_handle)); // Initialize LVGL with the panel and touch handles

    ESP_LOGI(TAG, "Display LVGL demos");

    // Lock the mutex due to the LVGL APIs are not thread-safe
    if (lvgl_port_lock(-1)) {
        // lv_demo_stress();
        // lv_demo_benchmark();
        // lv_demo_music();
        lv_demo_widgets();
        // Release the mutex
        lvgl_port_unlock();
    }
    wavesahre_rgb_lcd_bl_on();         // Turn on the LCD backlight
}
```

</Details>

#### Code Analysis

- **lvgl_port_init()**: Encapsulates the initialization of LVGL core components, including memory pool allocation, timer registration, and abstract binding of display/input devices.
- **lvgl_port_lock()**: Since core LVGL APIs are not thread-safe, this mutex lock ensures atomic operations when updating the UI across tasks.
- **lv_timer_handler()**: The main UI loop handler function, responsible for calculating animations, refreshing dirty pixel regions, and processing user input events.

#### Operation Result

- The screen displays the LVGL demo interface with touch interaction; the serial port outputs LVGL initialization and refresh information.
  <div style={{maxWidth:650}}> 
    <img src={arduinoExample10} />
  </div>

### 13_lvgl_codec {#Demo_lvgl_codec}

This example combines the `LVGL UI` with audio functionality, demonstrating interactions such as UI control of volume/playback status.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- The speaker and microphone should be functional.

#### Code

<Details summary="13_lvgl_codec.c" className="code-details" >

```c
void app_main()
{
    static esp_lcd_panel_handle_t panel_handle = NULL; // Declare a handle for the LCD panel
    static esp_lcd_touch_handle_t tp_handle = NULL;

    DEV_I2C_Init(); // Initialize I2C port
    IO_EXTENSION_Init(); // Initialize the IO EXTENSION GPIO chip

    wavesahre_rgb_lcd_bl_off(); // Turn off the LCD backlight

    tp_handle = touch_gt911_init(DEV_I2C_Get_Bus_Device()); // Initialize the GT911 touch screen controller
    panel_handle = waveshare_esp32_s3_rgb_lcd_init(); // Initialize the Waveshare ESP32-S3 RGB LCD hardware
    ESP_ERROR_CHECK(lvgl_port_init(panel_handle, tp_handle)); // Initialize LVGL with the panel and touch handles

    ESP_LOGI(TAG, "Display LVGL demos");

    // Initialize TF card
    if (sd_mmc_init() == ESP_OK)
    {
        ESP_LOGI(TAG, "TFCard OK!");
        ESP_LOGI(TAG, "Click the arrow to start.");

        list_files(MOUNT_POINT"/music");
        if( mp3_num == 0 )
        {
            ESP_LOGI(TAG, "No MP3 file found in TF card.");
            return;
        }
        else
        {
            ESP_LOGI(TAG, "music start");
        }
    }
    else
    {
        ESP_LOGI(TAG, "TF Card Fail!");
        return;
    }

    // Initialize speaker and audio player
    speaker_codec_init();
    speaker_codec_volume_set(50, NULL);
    speaker_player_register_callback(speaker_callback, NULL);
    speaker_player_init();

    // Lock the mutex due to the LVGL APIs are not thread-safe
    if (lvgl_port_lock(-1)) {
        user_lv_demo_music();
        // Release the mutex
        lvgl_port_unlock();
    }
    wavesahre_rgb_lcd_bl_on();         // Turn on the LCD backlight
}
```

</Details>

#### Code Analysis

- **sd_mmc_init()**: Initializes the SDMMC controller and mounts the FATFS partition for retrieving and loading MP3 music files from the TF card.
- **speaker_player_init()**: Creates a background audio playback task, implementing streaming decoding and playback of audio files via a producer-consumer model.
- **lv_obj_add_event_cb()**: Binds interaction callbacks to UI controls; when the user operates sliders or buttons, the player state is dynamically adjusted through a messaging mechanism.

#### Operation Result

- The screen displays an audio control interface that can be operated; playback status and volume changes take effect in real-time.

  <div style={{maxWidth:650}}> 
    <img src={arduinoExample11} />
  </div>

### 14_tcp_udp_ntp {#Demo-14_tcp_udp_ntp}

This example demonstrates basic network communication (`TCP/UDP`) and the `NTP` time synchronization process, verifying the network stack and time sync functionality.

#### Hardware Connection

- Connect the board to the computer using a USB cable;
- Ensure Wi‑Fi is connected first.

#### Code

<Details summary="14_tcp_udp_ntp.c" className="code-details" >

```c
/*
 * Refer to the example package for the complete code structure
 * Structure reference for TCP/UDP/NTP
 */

void peripheral_init(void)
{
    // Initialize NVS
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
      ESP_ERROR_CHECK(nvs_flash_erase());
      ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    // Initialize Hardware
    DEV_I2C_Init();
    IO_EXTENSION_Init();
    // Initialize LCD and Touch
    esp_lcd_panel_handle_t panel_handle = waveshare_esp32_s3_rgb_lcd_init();
    wavesahre_rgb_lcd_bl_on();
    esp_lcd_touch_handle_t tp_handle = touch_gt911_init(DEV_I2C_Get_Bus_Device());
    // Initialize LVGL
    ESP_ERROR_CHECK(lvgl_port_init(panel_handle, tp_handle));
    // Initialize UI
    ui_init();
    ui_log("System Initialized. Waiting for WiFi...");
    // Initialize WiFi
    wifi_init_sta();
    // Wait for WiFi connection
    xEventGroupWaitBits(get_wifi_event_group(), WIFI_CONNECTED_BIT, pdFALSE, pdFALSE, portMAX_DELAY);
    // Initialize NTP
    initialize_sntp();
}

```

</Details>

#### Code Analysis

- **peripheral_init()**: Serves as the main entry point for initializing system peripherals. It sequentially completes the initialization of NVS, the event loop, I2C expansion, LCD/touch, LVGL UI, Wi‑Fi, and NTP, laying the groundwork for subsequent network communication and time synchronization.
- **wifi_init_sta()**: Configures Wi‑Fi in STA mode and initiates a connection, providing a stable network channel for TCP/UDP communication and NTP time synchronization.
- **initialize_sntp()**: Starts the SNTP client after confirming Wi‑Fi is connected, synchronizing the system time from an upstream NTP server to provide a correct base time for time-related interfaces like `localtime`.

#### Operation Result

- The serial port outputs connection information; basic data interaction is possible using a network debug assistant set to the corresponding IP address and port number; the screen displays network status and the current time.

  <div style={{maxWidth:650}}> 
    <img src={arduinoExample9} />
  </div>
