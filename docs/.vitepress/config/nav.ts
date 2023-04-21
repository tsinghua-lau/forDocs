import { DefaultTheme } from "vitepress/dist/node";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "🔥 学习领域",
    items: [
      { text: "🧸 HTML", link: "/study-cn/HTML/" },
      { text: "🎯 CSS", link: "/study-cn/CSS/" },
      { text: "🎃 Javascript", link: "/study-cn/Javascript/" },
      { text: "🔨 Vue2", link: "/study-cn/Vue2/" },
      { text: "⚒️ Vue3", link: "/study-cn/Vue3/" },
      { text: "🪐 Network", link: "/study-cn/Network/" },
    ],
  },
  {
    text: "VitePress",
    link: "/vitepress-cn/",
  },
];
