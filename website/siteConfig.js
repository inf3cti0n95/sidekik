/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [
// {
//   caption: "inf3cti0n95",
//   // You will need to prepend the image path with your baseUrl
//   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
//   image: "https://avatars0.githubusercontent.com/u/13603045?s=460&v=4",
//   infoLink: "https://github.com/inf3cti0n95",
//   pinned: true
// }
// ];

const siteConfig = {
  title: "sidekik", // Title for your website.
  tagline: "Sidekik for all Data Structures and Algorithms you need.",
  url: "https://inf3cti0n95.github.io", // Your website URL
  baseUrl: "/sidekik/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "sidekik",
  organizationName: "inf3cti0n95",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {
      doc: "contribution-guide",
      label: "Contributing"
    }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: "img/logos/horizontal-white.svg",
  footerIcon: "img/logos/vertical-white.svg",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#20232a",
    secondaryColor: "#007aff",
    secondaryColorGreen: "#00ff91"
  },
  /* Custom fonts for website */
  fonts: {
    myFont: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ],
    myOtherFont: ["-apple-system", "system-ui"]
  },

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/docusaurus.png",
  twitterImage: "img/docusaurus.png"

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
