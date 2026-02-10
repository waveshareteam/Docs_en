---
sidebar_position: 3
title: Working with Linux
slug: /IMX415-8MP-USB-Camera-A/Linux
id: IMX415-8MP-USB-Camera-A-Linux
product_family:
  - Camera
product_series:
  - USB-Camera
product_model:
  - IMX415-8MP-USB-Camera-A
---

# Usage Instructions for Linux Embedded Boards

## Software Environment

On Linux embedded boards such as Raspberry Pi, Jetson Nano, RDK, etc., since most systems support the UVC protocol by default, they can be used with OpenCV for image preview testing. To preview images normally, please connect a screen to the board.

## Testing Steps

- Open the terminal and enter the following command to install OpenCV:

  ```bash
  sudo apt-get install python3-opencv
  ```

- Download the demo and test.

  ```bash
  wget https://files.waveshare.com/wiki/common/Usb_camera_examples.zip
  unzip Usb_camera_examples.zip
  cd Usb_camera_examples
  sudo python3 Usb_camera_examples.py
  ```