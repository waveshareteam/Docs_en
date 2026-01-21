---
title: 离线安装 ESP-IDF
slug: /ESP32-ESP-IDF-Tutorials/ESP-IDF-Offline-Installation
---

<!-- 图片引用 -->
import Img1 from './images/Offline-Installation-1.webp';
import Img2 from './images/Offline-Installation-2.webp';
import Img3 from './images/Offline-Installation-3.webp';
import Img4 from './images/Offline-Installation-4.webp';
import Img5 from './images/Offline-Installation-5.webp';
import Img6 from './images/Offline-Installation-6.webp';
import Img7 from './images/Offline-Installation-7.webp';
import Img8 from './images/Offline-Installation-8.webp';
import Img9 from './images/Offline-Installation-9.webp';
import Img10 from './images/Offline-Installation-10.webp';
import Img11 from './images/Offline-Installation-11.webp';
import Img12 from './images/Offline-Installation-12.webp';
import ImgESPIDFConfiguration from '../images/01-VSCode-ESP-IDF-Configuration-1.webp';

:::note
以下环境设置适用于 Windows 10/11 系统，Mac/Linux 用户请参考 **[官方说明](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/index.html)**。
:::

离线安装程序安装过程中不需要网络连接，安装程序中包含了所有需要的依赖文件。

## 1. 下载 ESP-IDF 工具安装器

前往 [ESP-IDF Windows Installer Download](https://dl.espressif.com/dl/esp-idf/) 下载离线安装工具。可以在页面顶部选择最新稳定版，也可以在页面底部选择所需版本。

<div style={{maxWidth:550}}> <img src={Img1} alt="下载最新稳定版"/></div>

如需下载其他版本，建议选择 Mirror 下载链接，该镜像针对国内用户的下载速度进行了优化。

<div style={{maxWidth:650}}> <img src={Img2} alt="下载指定版本"/></div>


## 2. 运行安装器

运行安装器，按步骤完成安装：

- 选择安装路径。推荐将 ESP-IDF 下载到 `%userprofile%\Desktop\esp-idf` 目录下，其中 `%userprofile%` 代表家目录。

  <div style={{maxWidth:550}}> <img src={Img3} alt="选择安装路径"/></div>

- 建议选择“完全安装”

  <div style={{maxWidth:550}}> <img src={Img4} alt="选择“完全安装”"/></div>

- 确认无误后点击“安装”，记住此处的各个路径。建议截图或拍照记录。

  <div style={{maxWidth:550}}> <img src={Img5} alt="确认设置"/></div>

- 看到此窗口说明安装成功。

  <div style={{maxWidth:550}}> <img src={Img6} alt="安装成功"/></div>

## 3. 验证安装

- 在 Windows 10/11 开始菜单中的应用列表中到找到 **ESP-IDF 文件夹**，打开 **ESP-IDF X.X CMD** 或者 **ESP-IDF X.X PowerShell**。

  <div style={{maxWidth:550}}> <img src={Img7} alt="开始菜单"/></div>

- 输入 `idf.py --version`，成功输出版本号。

  <div style={{maxWidth:600}}> <img src={Img8} alt="ESP-IDF PowerShell"/></div>

## 4. 搭配 VS Code 扩展

提前下载并安装好 [VS Code](https://code.visualstudio.com/download)。

### 4.1 安装 ESP-IDF VS Code 扩展

- 进入 ESP-IDF 扩展安装程序下载地址：https://github.com/espressif/vscode-esp-idf-extension/releases

  在最新的 release 中 Assets 下载对应 **esp-idf-extension-xxx.vsix**。

  <div style={{maxWidth:600}}> <img src={Img9} alt="下载 esp-idf-extension-xxx.vsix"/></div>

- 打开 VS Code，按 <kbd>F1</kbd> 键或点击菜单 `查看` -> `命令面板...`，输入 `从 VSIX 安装`，点击 `扩展：从 VSIX 安装`。然后选择之前下载的 `.vsix` 文件来安装扩展。

  <div style={{maxWidth:600}}> <img src={Img10} alt="扩展：从 VSIX 安装"/></div>

  :::tip
  你还可以以相同的方式安装 [C 语言相关扩展](https://github.com/microsoft/vscode-cpptools/releases)，以获得代码高亮和代码导航功能。
  :::

### 4.2 配置 VS Code 扩展

1. 安装扩展后，VS Code 左侧活动栏中会出现 ![Espressif 图标](../images/01-VSCode-ESP-IDF-Extension-Icon.webp) 图标，点击该图标可查看 ESP-IDF 扩展的基本命令列表，在 **Advanced** 中选择 **配置 ESP-IDF 扩展**。

   <div style={{maxWidth:250}}> <img src={ImgESPIDFConfiguration} alt="选择“配置 ESP-IDF 扩展"/></div>

2. 选择 **USE EXISTING SETUP**

   <div style={{maxWidth:600}}> <img src={Img11} alt="USE EXISTING SETUP"/></div>

   此时，ESP-IDF 扩展应该能够自动识别电脑上所有已安装的 ESP-IDF，选择刚刚安装的那个。若无法识别，选择 Serach ESP-IDF in system，手动添加路径。

   <div style={{maxWidth:600}}> <img src={Img12} alt="选择已存在的 ESP-IDF"/></div>

至此，安装完成。

## 5. 参考链接

- [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32s3/get-started/index.html)
- [ESP-IDF VSCode 扩展文档](https://docs.espressif.com/projects/vscode-esp-idf-extension/zh_CN/latest/index.html)