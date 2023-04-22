import { defineConfig } from "vitepress";
import { head } from "./config/head";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
import algolia from "./algolia";
import socialLinks from "./link";

export default defineConfig({
  head,
  title: "ForDocs",
  description: "VitePress",
  themeConfig: {
    nav,
    sidebar,
    algolia,
    socialLinks,
    outlineTitle: "本页目录",
    logo: "/images/logo.svg",
    editLink: {
      pattern:
        "https://github.com/tsinghua-lau/tsinghua-lau.github.io/tree/dev/docs/:path",

      text: "在 GitHub 上编辑此页",
    },
    // lastUpdated: true,
    // outDir: "../dist",
    // editLinks: true,
    // outline: "deep",
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "XXX",
    // },
  },
});
