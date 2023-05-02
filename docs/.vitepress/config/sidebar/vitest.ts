import { DefaultTheme } from "vitepress/dist/node";

export const vitest: DefaultTheme.Sidebar | undefined = {
  "/vitest": [
    {
      text: "入门",
      collapsible: true,
      items: [
        {
          text: "Vitest的初体验",
          link: "/vitest/study01.md",
        },
      ],
    },
  ],
};
