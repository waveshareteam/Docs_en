---
title: Getting to Know Raspberry Pi Pico
slug: /Getting-To-Know-Raspberry-Pi-Pico
id: Getting-To-Know-Raspberry-Pi-Pico
product_family:
  - Raspberry-Pi-Pico
---

# Getting to Know Raspberry Pi Pico

## 1. Pico Series Development Boards

The Raspberry Pi Pico, often referred to simply as the Pico, is a microcontroller development board launched by the Raspberry Pi Foundation. It emphasizes high performance, low power consumption, and high programmability, targeting applications in embedded development, education, industrial control, and maker projects. It offers developers exceptional flexibility and controllability through its powerful real-time processing capabilities, versatile peripheral interfaces, and unique PIO architecture. To date, the Raspberry Pi Foundation has released the WiFi-enabled Pico W, as well as the second-generation products, the Pico 2 and Pico 2 W.

The following is a comparison of the four development boards:

<table style={{ margin: "0 auto", textAlign: "center" }}>
  <tr>
    <th><strong>Model</strong></th>
    <th>Pico 2 W</th>
    <th>Pico 2</th>
    <th>Pico W</th>
    <th>Pico</th>
  </tr>

  <tr>
    <td><strong>Processor</strong></td>
    <td colspan="2" ><br />
      RP2350A <br />
      Dual-core ARM Cortex-M33<br />
      Dual-core Hazard3 RISC-V<br />
      @150MHz
    </td>
    <td colspan="2" ><br />
      RP2040 <br />
      Dual-core ARM Cortex-M0+<br />
      @133MHz
    </td>
  </tr>

  <tr>
    <td><strong>SRAM</strong></td>
    <td colspan="2" >520KB</td>
    <td colspan="2" >264KB</td>
  </tr>

  <tr>
    <td><strong>Flash</strong></td>
    <td colspan="2" >4MB</td>
    <td colspan="2" >2MB</td>
  </tr>

  <tr>
    <td><strong>Wi-Fi</strong></td>
    <td colspan="1" ><br />
      2.4GHz<br />
      802.11n <br />
      WiFi4
    </td>
    <td colspan="1" >-</td>
     <td colspan="1" ><br />
      2.4GHz<br />
      802.11n <br />
      WiFi4
    </td>
    <td colspan="1" >-</td>
  </tr>

  <tr>
    <td><strong>Bluetooth</strong></td>
    <td colspan="1" >Bluetooth 5.2</td>
    <td colspan="1" >-</td>
    <td colspan="1" >Bluetooth 5.2</td>
    <td colspan="1" >-</td>
  </tr>

  <tr>
    <td><strong>Security Features</strong></td>
    <td colspan="2" ><br />
      Secure Boot Signatures<br />
      OTP storage usable for decryption<br />
      Hardware SHA-256 Accelerator, etc.
    </td>
    <td colspan="2" >-</td>
  </tr>

  <tr>
    <td rowspan="3"><strong>Peripherals</strong></td>
    <td colspan="4" ><br />
      2 × UART<br />
      2 × SPI<br /> 
      2 × I2C<br />
      3 × ADC<br /> 
      1 × USB 1.1 and PHY<br />
      16 × PWM
    </td>
  </tr>
  <tr>
    <td colspan="2">12 x PIO State Machines</td>
    <td colspan="2">8 x PIO State Machines</td>
  </tr>

  <tr>
    <td colspan="2">1 x HSTX</td>
    <td colspan="2" >-</td>
  </tr>
  
  <tr>
    <td><strong>GPIO Pins</strong></td>
    <td colspan="4" >26</td>
  </tr>
</table>

## 2. RP Series Chips

In addition to the development boards mentioned above, the Waveshare official website has also released several development boards based on RP series chips, including the RP2040, RP2350A, and the RP2350B development board which features more pins. While the chip models differ in processor architecture, performance, and security features, they all adopt the unified Raspberry Pi Pico SDK, support C/C++ and MicroPython development, and ensure good code portability and a consistent development experience.

The following is a comparison of the three chip models:

<table style={{ margin: "0 auto", textAlign: "center" }}>
  <tr>
    <th><strong>Model</strong></th>
    <th>RP2350B</th>
    <th>RP2350A</th>
    <th>RP2040</th>
  </tr>

  <tr>
    <td><strong>Processor</strong></td>
    <td colspan="2" ><br />
      Dual-core ARM Cortex-M33<br />
      Dual-core Hazard3 RISC-V<br />
      @150MHz
    </td>
    <td colspan="1" ><br />
      Dual-core ARM Cortex-M0+<br />
      @133MHz
    </td>
  </tr>

  <tr>
    <td><strong>SRAM</strong></td>
    <td colspan="2" >520KB</td>
    <td colspan="1" >264KB</td>
  </tr>

  <tr>
    <td><strong>Security Features</strong></td>
    <td colspan="2" ><br />
      Secure Boot Signatures<br />
      OTP storage usable for decryption<br />
      Hardware SHA-256 Accelerator, etc.
    </td>
    <td colspan="1" >-</td>
  </tr>

  <tr>
    <td rowspan="3"><strong>Peripherals</strong></td>
    <td colspan="1" ><br />
      2 × UART<br />
      2 × SPI<br /> 
      2 × I2C<br />
      8 × ADC<br /> 
      1 × USB 1.1 and PHY<br />
      24 × PWM
    </td>
    <td colspan="2" ><br />
      2 × UART<br />
      2 × SPI<br /> 
      2 × I2C<br />
      4 × ADC<br /> 
      1 × USB 1.1 and PHY<br />
      16 × PWM
    </td>
  </tr>
  <tr>
    <td colspan="2">12 x PIO State Machines</td>
    <td colspan="1">8 x PIO State Machines</td>
  </tr>

  <tr>
    <td colspan="2">1 x HSTX</td>
    <td colspan="1">-</td>
  </tr>
  
  <tr>
    <td><strong>GPIO Pins</strong></td>
    <td colspan="1" >48</td>
    <td colspan="2" >30</td>
  </tr>
</table>
