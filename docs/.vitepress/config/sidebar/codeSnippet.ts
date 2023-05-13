import { DefaultTheme } from "vitepress/dist/node";

export const codeSnippet: DefaultTheme.Sidebar | undefined = {
  "/codeSnippet": [
    {
      text: "CSS",
      collapsible: true,
      items: [
        {
          text: "超出部分省略号",
          link: "/codeSnippet/CSS/ellipsis.md",
        },
      ],
    },
    {
      text: "Javascript",
      collapsible: true,
      items: [
        {
          text: "Promise捕获异常",
          link: "/codeSnippet/Javascript/await-to-js.md",
        },
      ],
    },
  ],
};
