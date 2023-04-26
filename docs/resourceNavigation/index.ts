import type { navItem } from "./types";

const tutorialUi: navItem[] = [
  {
    id: 1,
    text: "Naive UI",
    link: "https://www.naiveui.com/zh-CN/os-theme?from=thosefree.com",
    icon: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
    desc: "尤雨溪推荐的 Vue3 UI 组件库 有点意思",
  },

  {
    id: 2,
    text: "Ant Design Vue",
    link: "https://www.antdv.com/docs/vue/introduce",
    icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
    desc: " 为 Web 应用提供了丰富的基础 UI 组件",
  },
  {
    id: 3,
    text: "Element Plus",
    link: "https://element-plus.org/zh-CN/component/button.html",
    icon: "https://element-plus.org/images/element-plus-logo.svg",
    desc: "基于 Vue 3 面向设计师和开发者的组件库",
  },
  {
    id: 4,
    text: "iView",
    link: "https://iview.github.io/",
    icon: "https://iview.github.io/dist/76ecb6e76d2c438065f90cd7f8fa7371.png",
    desc: "一套基于 Vue.js 的高质量 UI 组件库",
  },
];

const tutorialVue: navItem[] = [
  {
    id: 1,
    text: "Vite",
    link: "https://cn.vitejs.dev/",
    icon: "https://cn.vitejs.dev/logo.svg",
    desc: "下一代的前端工具链",
  },
  {
    id: 2,
    text: "Webpack",
    link: " https://webpack.js.org/",
    icon: "https://webpack.js.org/assets/icon-square-big.svg",
    desc: "bundle your assets",
  },
  {
    id: 3,
    text: "Rollup",
    link: " https://rollupjs.org/",
    icon: "https://rollupjs.org/rollup-logo.svg",
    desc: "将点滴代码编织成错综复杂的程序。",
  },
];

const conMaterial: navItem[] = [
  {
    id: 1,
    text: "搜图导航",
    link: "https://www.91sotu.com/",
    icon: "https://www.91sotu.com/logo.png",
    desc: "提供一站式快速搜索图像服务",
  },
  {
    id: 2,
    text: "阿里巴巴",
    link: " https://www.iconfont.cn/",
    icon: "https://img.alicdn.com/imgextra/i2/O1CN01FF1t1g1Q3PDWpSm4b_!!6000000001920-55-tps-508-135.svg",
    desc: "阿里巴巴矢量图标库",
  },

  {
    id: 3,
    text: "Openmoji",
    link: "https://openmoji.org/",
    icon: "	https://openmoji.org/assets/logo-openmoji-1F64B.2c7bf38f.svg",
    desc: "Open source emojis for designers, developers and everyone else!",
  },
  {
    id: 4,
    text: "Iconfinder",
    link: " https://www.iconfinder.com/",
    icon: "https://www.iconfinder.com/static/img/logo/black.svg?7cfe2038c8",
    desc: "Make beautiful designs faster",
  },
];

const CSS: navItem[] = [
  {
    id: 1,
    text: "css奇思妙想",
    link: "http://chokcoco.github.io/magicCss/html/index.html",
    icon: "https://www.91sotu.com/logo.png",
    desc: "CSS3 奇思妙想，使用 CSS3 在单个标签内实现各类图形。",
  },
  {
    id: 2,
    text: "css特效资源",
    link: "https://codepen.io/",
    icon: "https://img.alicdn.com/imgextra/i2/O1CN01FF1t1g1Q3PDWpSm4b_!!6000000001920-55-tps-508-135.svg",
    desc: "The best place to build, test, and discover front-end code.",
  },
  {
    id: 3,
    text: "Unocss",
    link: "https://unocss.dev/",
    icon: "../public/images/logo/unocss.svg",
    desc: "Instant On-demand Atomic CSS Engine",
  },
  {
    id: 4,
    text: "tailwindcss",
    link: "https://unocss.dev/",
    icon: "../public/images/logo/tailwindcss.svg",
    desc: "Rapidly build modern websites without ever leaving your HTML.",
  },
];
export { tutorialUi, tutorialVue, conMaterial, CSS };
