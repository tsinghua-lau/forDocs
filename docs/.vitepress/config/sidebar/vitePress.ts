import { DefaultTheme } from "vitepress/dist/node";

export const vitePress: DefaultTheme.Sidebar | undefined = {
  "/vitepressCn": [
    {
      text: "介绍",
      collapsible: true,
      items: [
        {
          text: "VitePress 是什么?",
          link: "/vitepressCn/",
        },
        {
          text: "开始",
          link: "/vitepressCn/getting-started",
        },
        {
          text: "配置",
          link: "/vitepressCn/configuration",
        },
        {
          text: "部署",
          link: "/vitepressCn/deploying",
        },
      ],
    },
    {
      text: "写作",
      collapsible: true,
      items: [
        {
          text: "Markdown",
          link: "/vitepressCn/markdown",
        },
        {
          text: "资源管理",
          link: "/vitepressCn/asset-handling",
        },
        {
          text: "Frontmatter",
          link: "/vitepressCn/frontmatter",
        },
        {
          text: "在 Markdown 中使用 Vue",
          link: "/vitepressCn/using-vue",
        },
        {
          text: "内置组件 API",
          link: "/vitepressCn/api",
        },
      ],
    },
    {
      text: "主题",
      collapsible: true,
      items: [
        {
          text: "主题指南",
          link: "/vitepressCn/theme-introduction",
        },
        {
          text: "导航",
          link: "/vitepressCn/theme-nav",
        },
        {
          text: "侧边栏",
          link: "/vitepressCn/theme-sidebar",
        },
        {
          text: "上下页",
          link: "/vitepressCn/theme-pre-next-link",
        },
        {
          text: "Edit Link",
          link: "/vitepressCn/theme-edit-link",
        },
        {
          text: "最后编辑时间",
          link: "/vitepressCn/theme-last-updated",
        },
        {
          text: "布局",
          link: "/vitepressCn/theme-layout",
        },
        {
          text: "首页",
          link: "/vitepressCn/theme-home-page",
        },
        {
          text: "团队页面",
          link: "/vitepressCn/theme-team-page",
        },
        {
          text: "页脚",
          link: "/vitepressCn/theme-footer",
        },
        {
          text: "搜索",
          link: "/vitepressCn/theme-search",
        },
        {
          text: "Carbon Ads 广告",
          link: "/vitepressCn/theme-carbon-ads",
        },
      ],
    },
    {
      text: "配置",
      collapsible: true,
      items: [
        {
          text: "配置指南",
          link: "/vitepressCn/config-introduction",
        },
        {
          text: "应用配置",
          link: "/vitepressCn/config-app",
        },
        {
          text: "主题配置",
          link: "/vitepressCn/config-theme",
        },
        {
          text: "Frontmatter 配置",
          link: "/vitepressCn/config-frontmatter",
        },
      ],
    },
    {
      text: "迁移",
      collapsible: true,
      items: [
        {
          text: "从 VuePress 迁移",
          link: "/vitepressCn/migration-from-vuepress",
        },
        {
          text: "从 VitePress 0.x 迁移",
          link: "/vitepressCn/migration-from-vitepress-0",
        },
      ],
    },
  ],
};
