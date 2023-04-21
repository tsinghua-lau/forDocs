import DefaultTheme from "vitepress/theme";
import HomePage from "./components/HomePage.vue";
import Hyperlinks from "./components/Hyperlinks.vue";
import "./style/custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomePage", HomePage);
    app.component("Hyperlinks", Hyperlinks);
  },
};
