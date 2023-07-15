## Vitepress部署

### 配置图片放大功能

```ts
import mediumZoom from "medium-zoom";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // ...
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};

export default theme;
```

### 注意

版本不同可能会出现问题

> "vue": "^3.2.45"

> "vitepress": "1.0.0-alpha.69"

