import { DefaultTheme } from "vitepress/dist/node";
import { vitePress } from "./sidebar/vitePress";
import { webStudy } from "./sidebar/webStudy";

export const sidebar: DefaultTheme.Sidebar | undefined = {
  ...vitePress,
  ...webStudy,
};
