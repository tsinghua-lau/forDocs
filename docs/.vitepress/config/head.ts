import { HeadConfig } from "vitepress/dist/node";

export const head: HeadConfig[] | undefined = [
  [
    "link",
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  ],
  [
    "link",
    {
      rel: "icon",
      href: "/images/favicon.ico",
      type: "image/vnd.microsoft.icon",
    },
  ],
  [
    "meta",
    {
      name: "author",
      content: "XXY",
    },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/unoss/dist/unoss.min.css",
    },
  ],
  // [
  //   'meta',
  //   {
  //     name: 'keywords',
  //     content:
  //       'vue.js,Vue Router,Vuex,VitePress中文文档,pinia中文文档,VitePress主题,Node.js,Midway.js',
  //   },
  // ],

  // <link rel="icon" href="http://example.com/favicon.ico" type="image/vnd.microsoft.icon">
];
