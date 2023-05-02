import { DefaultTheme } from "vitepress/dist/node";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "学习领域",
    items: [
      { text: "🧸 HTML", link: "/studyCn/HTML/" },
      { text: "🎯 CSS", link: "/studyCn/CSS/" },
      { text: "🎃 Javascript", link: "/studyCn/Javascript/" },
      { text: "🔨 Vue2", link: "/studyCn/Vue2/" },
      { text: "⚒️ Vue3", link: "/studyCn/Vue3/" },
      { text: "🪐 Network", link: "/studyCn/Network/" },
    ],
  },
  {
    text: "资源导航",
    items: [{ text: "💰 学习资源", link: "/resourceNavigation/" }],
  },
  {
    text: "代码片段",
    items: [
      { text: "Javascript", link: "/codeSnippet/Javascript/await-to-js.md" },
    ],
  },
  {
    text: "vitest",
    items: [{ text: "Vitest", link: "/vitest/study01.md" }],
  },
  {
    text: "VitePress",
    link: "/vitepressCn/",
  },
];
