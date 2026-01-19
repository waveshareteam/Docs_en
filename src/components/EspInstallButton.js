import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const InstallButtonInner = ({ manifest }) => {
  useEffect(() => {
    import('esp-web-tools/dist/web/install-button.js');
  }, []);

  return (
    <esp-web-install-button manifest={manifest}>
      {}
      <button 
        slot="activate" 
        className="button button--primary"
        style={{ minWidth: '160px' }}
      >
        Click to Flash Firmware
      </button>

      {}
      <span slot="unsupported">
        ⚠️ Your browser does not support Web Serial. Please use Chrome or Edge.
      </span>

      <span slot="not-allowed">
        🔒 Please access via HTTPS.
      </span>
    </esp-web-install-button>
  );
};

export default function EspInstallButton(props) {
  return (
    <BrowserOnly fallback={<button className="button button--secondary disabled">Loading...</button>}>
      {() => <InstallButtonInner {...props} />}
    </BrowserOnly>
  );
}
