// import DefaultTheme from "vitepress/theme";
// import "vitepress-theme-demoblock/dist/theme/styles/index.css";
// import { useComponents } from "./useComponents";
// import "./styles/index.css";
// // import Button from "../../../src/components/Button.vue";
// // import '../../../src/styles/index.css'

// export default {
//   ...DefaultTheme,
//   enhanceApp(ctx) {
//     DefaultTheme.enhanceApp(ctx);
//     useComponents(ctx.app);
//     // ctx.app.component(Button.name, Button);
//   },
// };

// vitepress-theme-demoblock是vitepress的一个主题插件，可以去github查看
// 组件注册就和我们平时开发vue项目一样
import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import { useComponents } from "./useComponents";
// Demo组件和DemoBlock是两个vue组件，等会我们要在md文件中使用他来展示组件

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "relaxplus/lib/relax.css";

// enhanceApp方法传很多方法进来，感兴趣的可以去官网查看，比如app、router等，这里我们需要使用app实例来注册我们的组件
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(ElementPlus);
    useComponents(ctx.app);
  },
};
