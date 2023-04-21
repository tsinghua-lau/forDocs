import { defineConfig } from "vitepress";
import { head } from "./config/head";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
import algolia from "./algolia";
import socialLinks from "./link";

export default defineConfig({
  title: "ForDocs",
  description: "VitePress",
  head,
  lastUpdated: true,
  outDir: "../dist",
  themeConfig: {
    logo: "/images/logo.svg",
    nav,
    sidebar,
    outlineTitle: "本页目录",
    algolia,
    // editLinks: true,
    // outline: "deep",
    editLink: {
      pattern:
        "https://github.com/tsinghua-lau/tsinghua-lau.github.io/tree/dev/docs/:path",

      text: "在 GitHub 上编辑此页",
    },
    socialLinks,
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "XXX",
    // },
  },
});
