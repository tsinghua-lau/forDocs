import { DefaultTheme } from "vitepress/dist/node";

export const webStudy: DefaultTheme.Sidebar | undefined = {
  "/studyCn": [
    {
      text: "HTML",
      collapsible: true,
      items: [
        {
          text: "介绍",
          link: "/studyCn/HTML/",
        },
      ],
    },
    {
      text: "CSS",
      collapsible: true,
      items: [
        {
          text: "盒模型",
          link: "/studyCn/CSS/",
        },
      ],
    },
    {
      text: "Javascript",
      collapsible: true,
      items: [
        {
          text: "JS数据类型",
          link: "/studyCn/Javascript/",
        },
        {
          text: "typeof",
          link: "/studyCn/Javascript/typeOfnull.md",
        },
        {
          text: "for in 和 for of",
          link: "/studyCn/Javascript/forIn和forOf.md",
        },
        {
          text: "暂时性死区",
          link: "/studyCn/Javascript/暂时性死区.md",
        },
        {
          text: "事件循环",
          link: "/studyCn/Javascript/eventLoop.md",
        },
        {
          text: "常用API",
          link: "/studyCn/Javascript/常用API.md",
        },
      ],
    },
    {
      text: "Vue2",
      collapsible: true,
      items: [
        {
          text: "Vue列表key",
          link: "/studyCn/Vue2/",
        },
      ],
    },
    {
      text: "Vue3",
      collapsible: true,
      items: [
        {
          text: "v-if与v-for",
          link: "/studyCn/Vue3/",
        },
      ],
    },
    {
      text: "Network",
      collapsible: true,
      items: [
        {
          text: "UDP 和 TCP 区别",
          link: "/studyCn/Network/",
        },
        {
          text: "HTTP状态码",
          link: "/studyCn/Network/HTTP状态码.md",
        },
        {
          text: "GET和POST",
          link: "/studyCn/Network/GET和POST.md",
        },
        {
          text: "Cookkie、Session和Token",
          link: "/studyCn/Network/Cookie、Session和token.md",
        },
        {
          text: "缓存机制",
          link: "/studyCn/Network/缓存机制.md",
        },
        {
          text: "XXS和XSRF攻击",
          link: "/studyCn/Network/XSS和CSRF攻击.md",
        },
      ],
    },
  ],
};
