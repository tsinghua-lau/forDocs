import { DefaultTheme } from "vitepress/dist/node";

export const notes: DefaultTheme.Sidebar | undefined = {
  "/deploymentRecord": [
    {
      text: "部署",
      collapsible: true,
      items: [
        {
          text: "Vitepress",
          link: "/deploymentRecord/vitepress.md",
          },
          {
            text: "Fusion-Ui",
            link: "/deploymentRecord/fusion-ui.md",
          },
      ],
    },
  ],
};
