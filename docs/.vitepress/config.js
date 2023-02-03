// base是我们的发布路径，默认为/，可以在环境变量中自行配置
const base = process.env.BASE || "/";
// nav导航我们抽离在configs下面nav.js文件，方便管理
const nav = require("./configs/nav");
const sidebar = require("./configs/sidebar");

module.exports = {
  title: "@瞎折腾",
  description: "Life is short, Keep it simple.",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  base: base,
  outDir: "../dist/",
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
    editLinks: true,
    lastUpdated: "上次更新",

    editLink: {
      pattern: "https://github.com/tsinghua-lau/",
      text: "在 GitHub 上编辑此页",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tsinghua-lau",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present lqh",
    },
  },

  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1] },
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};
