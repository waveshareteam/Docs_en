// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const redirects = require('./redirects');

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
        redirects,
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
      algolia: {
        // The application ID provided by Algolia
        appId: "HY4GVNM7LI",

        // Public API key: it is safe to commit it
        apiKey: "59957bcee7309714863dd62a27ee9207",

        indexName: 'Waveshare Documentation Website EN',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        maxResultsPerGroup: 7, 

        // Optional: Algolia search parameters
        // searchParameters: {
        //  hitsPerPage: 15,
        // },

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: true,

        //... other Algolia params
      },
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
                label: "ESP32-P4",
                to: "/ESP32-P4",
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
          {
            position: "left",
            label: "Raspberry Pi Pico",
            items: [
              {
                label: "Basic Tutorials",
                to: "/Raspberry-Pi-Pico-Tutorials-Intro",
              },
              {
                label: "RP2350",
                to: "/RP2350",
              },
            ],
          },
          {
            position: "left",
            label: "IoT / Communication",
            items: [
              {
                label: "Long-Range Wireless",
                to: "/Long-Range-Wireless",
              },
            ],
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

        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
