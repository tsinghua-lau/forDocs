import { DefaultTheme } from "vitepress/dist/node";

export const vitePress: DefaultTheme.Sidebar | undefined = {
  "/vitepress-cn": [
    {
      text: "介绍",
      collapsible: true,
      items: [
        {
          text: "VitePress 是什么?",
          link: "/vitepress-cn/",
        },
        {
          text: "开始",
          link: "/vitepress-cn/getting-started",
        },
        {
          text: "配置",
          link: "/vitepress-cn/configuration",
        },
        {
          text: "部署",
          link: "/vitepress-cn/deploying",
        },
      ],
    },
    {
      text: "写作",
      collapsible: true,
      items: [
        {
          text: "Markdown",
          link: "/vitepress-cn/markdown",
        },
        {
          text: "资源管理",
          link: "/vitepress-cn/asset-handling",
        },
        {
          text: "Frontmatter",
          link: "/vitepress-cn/frontmatter",
        },
        {
          text: "在 Markdown 中使用 Vue",
          link: "/vitepress-cn/using-vue",
        },
        {
          text: "内置组件 API",
          link: "/vitepress-cn/api",
        },
      ],
    },
    {
      text: "主题",
      collapsible: true,
      items: [
        {
          text: "主题指南",
          link: "/vitepress-cn/theme-introduction",
        },
        {
          text: "导航",
          link: "/vitepress-cn/theme-nav",
        },
        {
          text: "侧边栏",
          link: "/vitepress-cn/theme-sidebar",
        },
        {
          text: "上下页",
          link: "/vitepress-cn/theme-pre-next-link",
        },
        {
          text: "Edit Link",
          link: "/vitepress-cn/theme-edit-link",
        },
        {
          text: "最后编辑时间",
          link: "/vitepress-cn/theme-last-updated",
        },
        {
          text: "布局",
          link: "/vitepress-cn/theme-layout",
        },
        {
          text: "首页",
          link: "/vitepress-cn/theme-home-page",
        },
        {
          text: "团队页面",
          link: "/vitepress-cn/theme-team-page",
        },
        {
          text: "页脚",
          link: "/vitepress-cn/theme-footer",
        },
        {
          text: "搜索",
          link: "/vitepress-cn/theme-search",
        },
        {
          text: "Carbon Ads 广告",
          link: "/vitepress-cn/theme-carbon-ads",
        },
      ],
    },
    {
      text: "配置",
      collapsible: true,
      items: [
        {
          text: "配置指南",
          link: "/vitepress-cn/config-introduction",
        },
        {
          text: "应用配置",
          link: "/vitepress-cn/config-app",
        },
        {
          text: "主题配置",
          link: "/vitepress-cn/config-theme",
        },
        {
          text: "Frontmatter 配置",
          link: "/vitepress-cn/config-frontmatter",
        },
      ],
    },
    {
      text: "迁移",
      collapsible: true,
      items: [
        {
          text: "从 VuePress 迁移",
          link: "/vitepress-cn/migration-from-vuepress",
        },
        {
          text: "从 VitePress 0.x 迁移",
          link: "/vitepress-cn/migration-from-vitepress-0",
        },
      ],
    },
  ],
};
