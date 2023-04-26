import { DefaultTheme } from "vitepress/dist/node";

export const codeSnippet: DefaultTheme.Sidebar | undefined = {
  "/codeSnippet": [
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
