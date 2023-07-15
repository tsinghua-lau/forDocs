import { DefaultTheme } from "vitepress/dist/node";
import { vitePress } from "./sidebar/vitePress";
import { webStudy } from "./sidebar/webStudy";
import { codeSnippet } from "./sidebar/codeSnippet";
import { vitest } from "./sidebar/vitest";
import { notes } from "./sidebar/notes";

export const sidebar: DefaultTheme.Sidebar | undefined = {
  ...vitePress,
  ...webStudy,
  ...codeSnippet,
  ...vitest,
  ...notes,
};
