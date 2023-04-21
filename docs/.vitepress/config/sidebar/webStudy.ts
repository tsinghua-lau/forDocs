import { DefaultTheme } from "vitepress/dist/node";

export const webStudy: DefaultTheme.Sidebar | undefined = {
  "/study-cn": [
    {
      text: "HTML",
      collapsible: true,
      items: [
        {
          text: "介绍",
          link: "/study-cn/HTML/",
        },
      ],
    },
    {
      text: "CSS",
      collapsible: true,
      items: [
        {
          text: "盒模型",
          link: "/study-cn/CSS/",
        },
      ],
    },
    {
      text: "Javascript",
      collapsible: true,
      items: [
        {
          text: "JS数据类型",
          link: "/study-cn/Javascript/",
        },
      ],
    },
    {
      text: "Vue2",
      collapsible: true,
      items: [
        {
          text: "Vue列表key",
          link: "/study-cn/Vue2/",
        },
      ],
    },
    {
      text: "Vue3",
      collapsible: true,
      items: [
        {
          text: "v-if与v-for",
          link: "/study-cn/Vue3/",
        },
      ],
    },
    {
      text: "Network",
      collapsible: true,
      items: [
        {
          text: "UDP 和 TCP 区别",
          link: "/study-cn/Network/",
        },
      ],
    },
  ],
};
