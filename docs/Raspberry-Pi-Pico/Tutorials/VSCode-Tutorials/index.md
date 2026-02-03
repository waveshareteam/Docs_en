---
title: VSCode Getting Started
slug: /Raspberry-Pi-Pico-VSCode-Tutorials
id: Raspberry-Pi-Pico-VSCode-Tutorial-Introduction
product_family:
  - Raspberry-Pi-Pico
---

<!-- Image Reference -->
import ImgVscdeCompile1 from './images/01-VSCode-Compile-1.webp';
import ImgVscdeCompile2 from './images/01-VSCode-Compile-2.webp';
import ImgVscdeCompile3 from './images/01-VSCode-Compile-3.webp';
import ImgVscdeCompile4 from './images/01-VSCode-Compile-4.webp';
import ImgVscdeCompile5 from './images/01-VSCode-Compile-5.webp';
import ImgVscdeCompile6 from './images/01-VSCode-Compile-6.webp';
import ImgVscdeCompile7 from './images/01-VSCode-Compile-7.webp';
import ImgVscdeCompile8 from './images/01-VSCode-Compile-8.webp';
import ImgVscdeConfiguration1 from './images/01-VSCode-Configuration-1.webp';
import ImgVscdeConfiguration2 from './images/01-VSCode-Configuration-2.webp';
import ImgVscdeConfiguration3 from './images/01-VSCode-Configuration-3.webp';
import ImgVscdeImport1 from './images/01-VSCode-Import-1.webp';
import ImgVscdeImport2 from './images/01-VSCode-Import-2.webp';
import ImgVscdeUpdate from './images/01-VSCode-Import-Update.webp';
import ImgVscdeInstall1 from './images/01-VSCode-Install-1.webp';
import ImgVscdeInstall2 from './images/01-VSCode-Install-2.webp';
import ImgVscdeInstall3 from './images/01-VSCode-Install-3.webp';
import ImgVscdeInstall4 from './images/01-VSCode-Install-4.webp';
import ImgVscdeInstall5 from './images/01-VSCode-Install-5.webp';
import ImgVscdeInstall6 from './images/01-VSCode-Install-6.webp';
import ImgVscdeInstall7 from './images/01-VSCode-Install-7.webp';
import ImgVscdeNewProject1 from './images/01-VSCode-New-Project-1.webp';
import ImgVscdeNewProject2 from './images/01-VSCode-New-Project-2.webp';
import ImgVscdeRun from './images/01-VSCode-Run.webp';


# Raspberry Pi Pico VSCode Getting Started Tutorials

> This tutorial introduces Pico VSCode and guides you through setting up the VSCode development environment for Pico.

:::tip[Important Note: Development Board Compatibility]
The core logic of this tutorial applies to all RP series development boards. However, all operational steps are explained using the [**Raspberry Pi Pico 2**](https://www.waveshare.com/raspberry-pi-pico-2.htm?sku=28568) as an example. If you are using a development board of another model, please modify the corresponding settings according to the actual situation.
:::

## 1. What is Pico VSCode

Pico VSCode is an official Visual Studio Code extension released by Raspberry Pi, designed for developing with Pico series chips like RP2040 / RP2350, providing an integrated embedded development experience. This plugin integrates Pico SDK installation and management, project creation, compilation, flashing, and debugging functions. It enables rapid setup of a C/C++ development environment through a graphical wizard and seamlessly interfaces with OpenOCD and debuggers to achieve debugging capabilities such as breakpoints, single-stepping, and variable inspection. Leveraging VSCode's cross-platform nature, developers can use a unified toolchain on Windows, macOS, and Linux to efficiently complete application development for Pico series microcontrollers.

- This tutorial is applicable to Raspberry Pi Pico, Pico 2, and the RP series development boards developed by our company.
- The installation instructions default to using Windows 11 as an example. For other environments, please refer to the [official Raspberry Pi tutorial](https://www.raspberrypi.com/news/pico-vscode-extension/) for installation.

## 2. Installing VSCode

1. First, download the [pico-vscode](https://drive.google.com/file/d/18-KDNrQlI0KuTMdS6W5iblUGaGm3FbVJ/view?usp=sharing) program package, extract it, open the package, and install VSCode.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeInstall1} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>
    :::tip
    If VSCode is already installed, please check if the version is v1.87.0 or higher.
    :::
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeInstall2} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>
    <div style={{maxWidth: 400}}>
        <img 
            src={ImgVscdeInstall3} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>
  
## 3. Installing Extension

1. Click on Extensions and select "Install from VSIX".
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeInstall4} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

2. Select the software package with the .vsix extension and click Install.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeInstall5} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

3. VSCode will then automatically install the raspberry-pi-pico extension and its dependencies. You can click Refresh to view the installation progress.
    <div style={{maxWidth: 400}}>
        <img 
            src={ImgVscdeInstall6} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

4. When "Completed installing extension." is shown in the bottom right corner, close VSCode.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeInstall7} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

5. The extension version in the offline package is 0.15.2. After installation, update it to the latest version.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeUpdate} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

## 4. Configuring the Extension

1.  Open the directory `C:\Users\YourUsername`, and copy the entire `.pico-sdk` folder to this directory.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeConfiguration1} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

2. Copy completed.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeConfiguration2} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

3. Open VSCode and configure the various paths in the Raspberry Pi Pico extension settings.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeConfiguration3} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>
    The configuration is as follows:
    ```
    Cmake Path:
    ${HOME}/.pico-sdk/cmake/v3.28.6/bin/cmake.exe

    Git Path:
    ${HOME}/.pico-sdk/git/cmd/git.exe    

    Ninja Path:
    ${HOME}/.pico-sdk/ninja/v1.12.1/ninja.exe

    Python3 Path:
    ${HOME}/.pico-sdk/python/3.12.1/python.exe          
    ```

## 5. Creating a New Project
 
1. After configuration is complete, test creating a new project. Enter the project name, select the path, then click "Create" to create a project and test the official example. You can click "Example" next to the project name to select one.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeNewProject1} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

2. A project successfully created.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeNewProject2} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

## 6. Compiling the Project

1. Select the SDK version.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile1} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

2. Select "Yes" for advanced configuration.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile2} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

3. Select the cross-compilation toolchain. "13.2.Rel1" is suitable for the ARM core, "RISCV.13.3" is suitable for the RISCV core. You can choose either one based on your needs.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile3} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

4. For the CMake version, select "Default" (the path configured earlier).
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile4} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

5. For the Ninja version, select "Default".
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile5} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

6. Select the development board.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile6} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

7. Click "Compile" to start the compilation.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile7} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

8. Successfully compiled a .uf2 format file.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeCompile8} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

## 7. Flashing the Firmware

Two methods are provided for flashing the firmware.

1. Using the pico-vscode plugin to flash the firmware.
    Connect the development board to your computer and click "Run" to directly flash the firmware.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeRun} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

2. Manually flashing the firmware.
    ```
    1. Press and hold the Boot button.
    2. Connect the development board to the computer.     
    3. Then the computer will recognize the development board as a USB device.
    4. Copy the .uf2 format file to the USB drive. The device will then automatically reboot, completing the firmware flash.
    ```

## 8. Importing a Project

1. Select the project directory and import the project.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeImport1} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>

2. The CMake file of the imported project cannot contain Chinese characters (including comments), otherwise it may cause the import to fail.

3. After importing a project, pay attention to whether the CMake file contains code to set the development board. It must include this line to properly switch between pico and pico 2. Otherwise, even if pico 2 is selected, the compiled firmware will still be for pico.
    <div style={{maxWidth: 600}}>
        <img 
            src={ImgVscdeImport2} 
            style={{width: '100%', height: 'auto'}}
        />
    </div>
    ```
    set(PICO_BOARD pico2 CACHE STRING "Board type")
    ```

## 9. Reference Links
- [Raspberry Pi Pico VSCode Extension Notes](https://www.raspberrypi.com/news/pico-vscode-extension/)
- [Pico VSCode GitHub](https://github.com/raspberrypi/pico-vscode)
