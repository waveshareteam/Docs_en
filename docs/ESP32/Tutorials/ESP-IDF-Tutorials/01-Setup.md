---
title: Section 1 Set Up Environment
slug: /ESP32-ESP-IDF-Tutorials/ESP-IDF-Installation
id: 1
product_family:
  - ESP32
---

> This section introduces the basic concepts of ESP-IDF and demonstrates how to set up the development environment for the official ESP32 development framework (ESP-IDF) in VS Code, laying the foundation for subsequent project development.

## 1. What is ESP-IDF?

ESP-IDF (Espressif IoT Development Framework) is the official IoT development framework released by Espressif. It is the official development framework for ESP32, ESP32-S, ESP32-C, ESP32-H, and ESP32-P series chips.

Based on the C/C++ language, it provides a complete software development toolchain, including compilers, debuggers, and flashing tools, enabling developers to fully leverage the powerful capabilities of the ESP32 series chips.

![ESP-IDF](./images/01-ESP-IDF.webp)

Official repository: https://github.com/espressif/esp-idf

## 2. Why Choose ESP-IDF?

Many developers start with ESP32 through platforms like Arduino or MicroPython, which are excellent for rapid prototyping and simple projects. However, when developing more complex, stable, and high-performance commercial-grade products, ESP-IDF is the professional developer's first choice. It provides deeper hardware control, superior performance, and production-ready features such as secure boot and OTA firmware updates.

**Core Advantages of ESP-IDF**:

- **Official Priority Support**: As Espressif's core official development framework, ESP-IDF has the highest priority for maintenance and adaptation. New chips, features, and standards (such as Matter) are typically implemented first in ESP-IDF, allowing developers to experience and apply the latest technologies as soon as possible.
- **Built-in FreeRTOS Real-Time Operating System**: ESP-IDF integrates the FreeRTOS kernel, supporting multi-tasking concurrency and real-time scheduling. Developers can easily create multiple independent tasks (e.g., Wi-Fi connection, sensor data collection, UI refresh) to implement complex IoT applications.
- **Strong Low-Level Control and Comprehensive Features**: ESP-IDF provides comprehensive access to hardware resources and low-level APIs, making it suitable for developers who need advanced features, low-level optimization, and complex projects. Compared to approaches like Arduino, developers can flexibly configure system parameters, optimize performance, and implement more sophisticated functionalities.
- **High Performance and Component-Based Architecture**: ESP-IDF supports organizing code in "components." Developers can use the ESP Registry component management platform to conveniently search for, integrate, and maintain third-party or official components, improving development efficiency and project maintainability.
- **Suitable for Mass Production and Commercial Product Development**: ESP-IDF supports OTA updates, secure boot, Flash encryption, partition management, and other features, facilitating mass production deployment and later maintenance of products, meeting the high requirements for security and maintainability in commercial products.

## 3. Setting Up the ESP-IDF Development Environment{#esp-idf-setup}

![Main ESP-IDF development approaches](./images/01-ESP-IDF-Development-Approach.webp)

There are several main approaches to developing for the ESP32 using ESP-IDF:

- **ESP-IDF Command Line Tools**: Set up the command-line environment via the official [installer](https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/get-started/windows-setup.html#esp-idf) or scripts. Use the `idf.py` tool to configure, build, flash, and monitor projects, while writing code in any **text editor**.
- **Eclipse Plugin (Espressif-IDE)**: An integrated development environment based on Eclipse CDT, featuring built-in ESP-IDF toolchains and plugins. It provides a one-stop experience for project creation, building, flashing, debugging, and monitoring. This is suitable for users with embedded development experience who prefer Eclipse.
- **VS Code Extension**: Install the official Espressif ESP-IDF extension in Visual Studio Code. It integrates full functionality for project management, building, flashing, monitoring, and debugging, with support for automatically detecting ESP-IDF and its toolchains.

:::info
We recommend developing with **VS Code + ESP-IDF Extension**. This is currently the most popular method and the most beginner-friendly.
:::

:::note
The following environment setup applies to Windows 10/11 systems. Mac/Linux users should refer to the **[official documentation](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/index.html)**.
:::

### 3.1 Installing the ESP-IDF Development Environment

1. Go to the [ESP-IDF Installation Manager](https://dl.espressif.com/dl/esp-idf/) page to download the tool. This is Espressif's latest cross-platform installer. The following steps demonstrate how to use its offline installation feature.

   Click the **Offline Installer** tab on the page, then select **Windows** as the operating system and the latest stable version **v5.5** in the filter bar.
   
   <div style={{maxWidth:600}}>![Downloading EIM and the integrated package](./images/01-EIM-Offline-Installation-1.webp)</div>
   
   Verify your selection and click the download button. The browser will automatically download two files simultaneously: the **ESP-IDF Offline Integrated Package (.zst)** and the **ESP-IDF Installer (.exe)**.

   <div style={{maxWidth:500}}>![Downloading EIM and the integrated package 2](./images/01-EIM-Offline-Installation-2.webp)</div>
   
   Please wait patiently for both files to finish downloading.

2. Once downloaded, double-click to run the **ESP-IDF Installer (eim-gui-windows-x64.exe)**.

   The installer will automatically detect if the offline integrated package exists in the same directory. Click **Install from Archive**.

   <div style={{maxWidth:800}}>![Automatically detecting the integrated package](./images/01-EIM-Offline-Installation-4.webp)</div>
   
   Next, select the installation path. We recommend using the default path; if you need to customize it, ensure the path does not contain non-ASCII characters (e.g., Chinese characters) or spaces. Once confirmed, click **Start Installation**.

   <div style={{maxWidth:800}}>![Selecting installation path](./images/01-EIM-Offline-Installation-5.webp)</div>
   
3. When you see the following screen, ESP-IDF has been successfully installed.

   <div style={{maxWidth:800}}>![Installation successful](./images/01-EIM-Offline-Installation-6.webp)</div>

4. It is recommended to install the drivers as well. Click **Complete Installation**, then click **Install Drivers**.

   <div style={{maxWidth:800}}>![Installing drivers with ESP-IDF Installation Manager](./images/01-EIM-Offline-Installation-7.webp)</div>
   

### 3.2 Installing Visual Studio Code and the ESP-IDF Extension

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).

2. During installation, it is recommended to check **Add "Open with Code" action to Windows Explorer file context menu** to quickly open project folders.

3. In VS Code, click the **Extensions** icon ![Extensions Icon](./images/01-VSCode-Extension-Icon.webp) in the Activity Bar on the side (or use the shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>) to open the **Extensions** view.

4. Type **ESP-IDF** in the search bar, locate the [ESP-IDF](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension) extension, and click Install.

   ![Searching for and installing the ESP-IDF extension in VS Code](./images/01-VSCode-Install-ESP-IDF-Extension.webp)

5. For **ESP-IDF extension versions ≥ 2.0**, the extension will automatically detect and recognize the ESP-IDF environment installed in the previous steps, requiring no manual configuration.

## 4. VS Code ESP-IDF Extension Interface Overview{#VsCode-ESP-IDF-ToolBar}

After opening an ESP-IDF project, when the ESP-IDF extension finishes loading, a toolbar will be displayed at the bottom, as shown in the figure:

![VS Code User Interface Bottom Toolbar Explanation](./images/01-ESP-IDF-VSCode-Toolbar.webp)

- **① ESP-IDF Version**: Displays and switches the ESP-IDF version used by the current project. When a project requires a specific version, it can be switched via this feature.
- **② Select Flash Method**: Selects the flashing method for the project flashing command, options include DFU, JTAG, or UART interfaces.
- **③ Select Port to Use**: Selects the serial port used for ESP-IDF tasks (e.g., flashing or monitoring the device).
- **④ Set Espressif Device Target**: This command sets the target (IDF_TARGET) for the current project, equivalent to `idf.py set-target`. Select the corresponding chip model here.
- **⑤ SDK Configuration Editor**: Launches a UI interface for ESP-IDF project settings. This command is equivalent to `idf.py menuconfig`.
- **⑥ Full Clean**: Deletes the build directory of the current ESP-IDF project.
- **⑦ Build Project**: Uses `CMake` and `Ninja-build` to build the project.
- **⑧ Flash Project**: Flashes the binary file generated by the current project to the target device.
- **⑨ Monitor Device**: Starts serial communication between the computer and the Espressif device. Equivalent to `idf.py monitor`.
- **⑩ Debug**: Starts the debugger.
- **⑪ Build, Flash, and Monitor**: Used to build the project, write the binary program to the device, and start the monitor terminal. Similar to `idf.py build flash monitor`.
- **⑫ Open ESP-IDF Terminal**: Opens a terminal and activates the IDF_PATH and Python virtual environment.

## 5. Install C/C++ Language Extension

For code navigation and C/C++ syntax highlighting, it is recommended to use the [Microsoft C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools).

1. In VS Code, open the **Extensions** view by clicking the ![Extensions Icon](./images/01-VSCode-Extension-Icon.webp) in the VS Code sidebar's activity bar (or use the shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>).

2. Then, search for the [C/C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack) extension and install it.

   ![Search and install C/C++ Extension in VS Code](./images/01-VSCode-Install-C-Extension.webp)

## 6. Appendix: Core Toolchain Overview

The ESP-IDF development process is supported by a series of tools. Here is a brief introduction to give you a preliminary impression:

- **`idf.py`**

  The top-level command-line tool for ESP-IDF. It provides developers with a unified and convenient interface, encapsulating the underlying build system (CMake), compilation tool (Ninja), flashing tool (esptool.py), and debugging tools.

  Preview of common commands:

  - Create a new project: `idf.py create-project <project name>`
  - Select target chip: `idf.py set-target <target>`
  - Start the graphical configuration tool: `idf.py menuconfig`
  - Build the project: `idf.py build`
  - Flash the project: `idf.py flash`

- **Kconfig / menuconfig**

  A component configuration system originating from the Linux kernel. ESP-IDF uses the Kconfig mechanism to manage the numerous configurable options in a project. By running the `idf.py menuconfig` command, developers can launch a text-based user interface (TUI) to enable or disable specific components, configure network parameters, adjust log levels, etc. All configuration items are ultimately saved in the `sdkconfig` file in the project root directory and provided to the source code in the form of macro definitions during compilation.

- **[CMake](https://cmake.org/)**

  An open-source, cross-platform automated build system. In ESP-IDF, it is responsible for parsing the `CMakeLists.txt` files in the project, managing source code, component dependencies, compiler options, and linker scripts, and finally generating the build instructions required by specific build tools (like Ninja).

- **[Ninja](https://ninja-build.org/)**

  A small build system focused on speed. In ESP-IDF, after CMake generates the build rules during the configuration phase, Ninja is used by default to execute these rules efficiently. Ninja's main advantage is its extremely fast incremental build speed. It can precisely determine which files have changed since the last compilation and only recompile those files, significantly reducing compilation time during the development cycle.

- **[esptool.py](https://github.com/espressif/esptool/#readme)**

  A Python tool for communicating with Espressif chip ROM Bootloaders. Its core functions include: flashing compiled firmware binary files (`.bin`) to the chip's Flash, reading chip information (such as MAC addresses), erasing Flash, and performing other low-level Flash read/write operations. The `idf.py flash` command internally calls `esptool.py` to accomplish the actual flashing task.

## 7. Reference Links

- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.5/esp32s3/get-started/index.html)
- [ESP-IDF VSCode Extension Documentation](https://docs.espressif.com/projects/vscode-esp-idf-extension/en/latest/index.html)
- [ESP Techpedia](https://docs.espressif.com/projects/esp-techpedia/en/latest/index.html)
- [ESP DevCon23 Beginner's Guide: Key Concepts and Resources](https://www.bilibili.com/video/BV1114y1r7du/)
