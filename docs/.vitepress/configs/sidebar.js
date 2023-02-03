module.exports = {
  "/guide/": getGuideSidebar(),
  "/components/": getComponentsSidebar(),
};

function getComponentsSidebar() {
  return [
    {
      text: "Basic 基础组件",
      children: [
        {
          text: "Button 按钮",
          link: "/components/basic/button",
        },
      ],
    },
  ];
}

function getGuideSidebar() {
  return [
    {
      collapsible: true,
      items: [
        {
          text: "开发指南",
          link: "/guide/install",
        },
      ],
    },

    {
      collapsible: true,
      items: [
        {
          text: "Javascript",
          link: "/guide/Javascript/base",
        },
      ],
    },
    {
      text: "Vue2",
      collapsible: true,
      items: [
        {
          text: "基础",
          link: "/guide/Vue2/base",
        },
        {
          text: "进阶",
          link: "/guide/Vue2/advanced",
        },
      ],
    },
    {
      text: "Vue3",
      collapsible: true,
      items: [
        {
          text: "基础",
          link: "/guide/Vue3/base",
        },
        {
          text: "进阶",
          link: "/guide/Vue3/advanced",
        },
      ],
    },
  ];
}
