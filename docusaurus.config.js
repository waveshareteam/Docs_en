// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WaveShare Documentation Platform",
  tagline: "WaveShare Documentation Platform, share awesome hardware",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.waveshare.com",
  baseUrl: "/",
  projectName: 'Docs_en',
  organizationName: 'waveshareteam',
  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/ESP32-S3-RLCD-4.2",
            from: ["/wiki/ESP32-S3-RLCD-4.2"],
          },
        ],
      },
    ],
  ],

  markdown: {
    remarkRehypeOptions: {
      footnoteLabel: "Footnotes",
      footnoteBackContent: "⤴", // Set the button that returns the original text to "⤴"
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/waveshareteam/Docs_en/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: ".markdown :not(a) > img",
        background: {
          dark: "rgb(50, 50, 50)",
          light: "rgb(255, 255, 255)",
        },
        config: {
          margin: 80,
        },
      },

      image: "img/ws-logo-green.png",
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "Waveshare Logo",
          src: "img/ws-wiki-logo-green.png",
          href: "/support",
        },
        items: [
          { to: "/support", label: "All Documents", position: "left" },
          {
            position: "left",
            label: "ESP32",
            items: [
              {
                label: "Basic Tutorials",
                to: "/ESP32-Tutorials-Intro",
              },
              {
                label: "ESP32-S3",
                to: "/ESP32-S3",
              },
              {
                label: "ESP32-C3",
                to: "/ESP32-C3",
              },
              {
                label: "ESP32-C6",
                to: "/ESP32-C6",
              },
            ],
          },
          {
            href: "https://github.com/waveshareteam",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Tutorials",
                to: "/ESP32-Tutorials-Intro",
              },
              {
                label: "GitHub",
                href: "https://github.com/waveshareteam",
              },
            ],
          },
          {
            title: "Information",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCV_48_r0rplaYB-VqxXB04g",
              },
            ],
          },
          {
            title: "Purchase",
            items: [
              {
                label: "Official Store",
                href: "https://www.waveshare.com",
              },
              {
                label: "Amazon (UK)",
                href: "https://www.amazon.co.uk/stores/Waveshare/page/83E99F27-83F1-45D1-B549-7CBC42CD852C",
              },
            ],
          },
          {
            title: "About Waveshare",
            items: [
              {
                label: "About Us",
                href: "https://www.waveshare.com/about_us",
              },
              {
                label: "Contact Us",
                href: "https://www.waveshare.com/contact_us",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Waveshare`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
