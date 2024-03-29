import { DefaultTheme } from "vitepress/dist/node";

export const webStudy: DefaultTheme.Sidebar | undefined = {
  "/studyCn": [
    {
      text: "HTML",
      items: [
        {
          text: "介绍",
          link: "/studyCn/HTML/",
        },
      ],
    },
    {
      text: "CSS",
      items: [
        {
          text: "盒模型",
          link: "/studyCn/CSS/",
        },
      ],
    },
    {
      text: "Javascript",
      
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
          link: "/studyCn/Javascript/forInforOf.md",
        },
        {
          text: "暂时性死区",
          link: "/studyCn/Javascript/temporaryDeadzone.md",
        },
        {
          text: "事件循环",
          link: "/studyCn/Javascript/eventLoop.md",
        },
        {
          text: "promise并发控制",
          link: "/studyCn/Javascript/Promise.md",
        },
        {
          text: "常用API",
          link: "/studyCn/Javascript/CommonAPI.md",
        },
      ],
    },
    {
      text: "TypeScript",
      items: [
        {
          text: "type & interface",
          link: "/studyCn/TypeScript/index.md",
        },
        {
          text: "never",
          link: "/studyCn/TypeScript/never.md",
        }]
    },
    {
      text: "Vue2",
      items: [
        {
          text: "v-for key",
          link: "/studyCn/Vue2/",
        },
        {
          text: "v-if & v-show ",
          link: "/studyCn/Vue2/if-show.md",
        },
        {
          text: "v-for & v-if",
          link: "/studyCn/Vue2/for-if.md",
        },
        {
          text: "data对象",
          link: "/studyCn/Vue2/data-object.md",
        },
        {
          text: "computed & watch",
          link: "/studyCn/Vue2/computed-watch.md",
        },
        {
          text: "keep-alive",
          link: "/studyCn/Vue2/keep-alive.md",
        },
        {
          text: "router path & name",
          link: "/studyCn/Vue2/path-name.md",
        },
        {
          text: "npm 安装命令",
          link: "/studyCn/Vue2/s-d-g.md",
        },
        {
          text: "nextTick",
          link: "/studyCn/Vue2/nextTick.md",
        },
        {
          text: "Array",
          link: "/studyCn/Vue2/Array.md",
        },
      ],
    },
    {
      text: "Vue3",
      items: [
        {
          text: "v-if与v-for",
          link: "/studyCn/Vue3/",
        },
      ],
    },
    {
      text: "Network",
      items: [
        {
          text: "UDP 和 TCP 区别",
          link: "/studyCn/Network/",
        },
        {
          text: "HTTP状态码",
          link: "/studyCn/Network/HTTPStatus.md",
        },
        {
          text: "HTTP和HTTPS",
          link: "/studyCn/Network/HTTPHTTPS.md",
        },
        {
          text: "GET和POST",
          link: "/studyCn/Network/GETPOST.md",
        },
        {
          text: "Cookkie、Session和Token",
          link: "/studyCn/Network/CookieSessionToken.md",
        },
        {
          text: "缓存机制",
          link: "/studyCn/Network/cachingMechanism.md",
        },
        {
          text: "XXS和XSRF攻击",
          link: "/studyCn/Network/XSSAndSRF.md",
        },
      ],
    },
  ],
};
