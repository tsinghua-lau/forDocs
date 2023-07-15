import { inBrowser, useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import DefaultTheme from "vitepress/theme";
import HomePage from "./components/HomePage.vue";
import Hyperlinks from "./components/Hyperlinks.vue";
import mediumZoom from "medium-zoom";
import "./style/custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomePage", HomePage);
    app.component("Hyperlinks", Hyperlinks);
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
};
