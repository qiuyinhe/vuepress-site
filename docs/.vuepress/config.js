module.exports = {
  title: "maie的网页",
  description: "自用记录",
  /* 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。 */
  base: "/vuepress-site/",
  head: [["link", { rel: "icon", href: "/640.png" }]],
  cache: false,
  /* 使用主题 */
  theme: "reco",
  /* 导航栏 Logo */
  themeConfig: {
    logo: "/favicon.ico",
    /* 禁用导航栏 */
    // navbar: false,
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        ariaLabel: "document",
        items: [
          { text: "笔记", link: "/note/" },
          {
            text: "开发",
            items: [
              { text: "前端", link: "/front/" },
              { text: "后端", link: "/end/" },
            ],
          },
        ],
      },
      { text: "去谷歌", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "网站说明",
        path: "/readfirst",
        collapsable: false, // 不折叠
        children: [{ title: "个人简历", path: "/author" }],
      },
      {
        title: "日常开发",
        // path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "前端", path: "/front/" },
          { title: "后端", path: "/end/" },
        ],
      },
    ],
    subSidebar: 'auto',
    // sidebar: 'auto',
    displayAllHeaders: true,
  },
  
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
