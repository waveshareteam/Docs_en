---
sidebar_position: 4
title: FAQ
slug: /27inch_FHD_Monitor/FAQ
---

import Details from '@theme/Details';

# FAQ

<Details summary="Q: Does this screen come with a fan and ventilation holes?" className="faq-details" open>
  A: Yes, the screen has a built-in fan and ventilation holes on both sides to aid heat dissipation.
</Details>
<Details summary="Q: How to replace the Raspberry Pi boot logo image?" className="faq-details" open>
   A: <br />
   Take Raspberry Pi OS (Trixie) as an example:<br />
   1. Install Plymouth and related themes:
   ```bash
   sudo apt update
   sudo apt install plymouth plymouth-themes
   sudo apt install plymouth-theme-breeze kde-config-plymouth
   sudo apt install firmware-linux
   ```
  2. Navigate to the default theme directory:
   ```bash
  /usr/share/plymouth/themes/pix
   ```    
  3. Replace the boot image: <br />
  Replace your boot image with <b>splash.png</b> 
  4. Update initramfs
   ```bash
  sudo update-initramfs -u
   ```   
  5. After rebooting, the new boot logo will appear.
</Details>