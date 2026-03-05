---
sidebar_position: 3
title: Working with Linux
slug: /PS5268-2MP-USB-Camera-A/Linux
id: PS5268-2P-USB-Camera-A-Linux
product_family:
  - Camera
product_series:
  - USB-Camera
product_model:
  - PS5268-2MP-USB-Camera-A
---

# Working with Linux Embedded Board

## Software Environment

On Linux embedded boards such as Raspberry Pi, Jetson Nano, and RDK series, most systems come with default support for the UVC protocol. You can use OpenCV for image preview testing. To properly preview the image, please connect a display to the board.

## Testing Steps

- Open a terminal and enter the following command to install OpenCV:

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
