module.exports = {
  title: "maie的网页",
  description: "Just playing around",
  /* 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。 */
  base: "",
  head: [["link", { rel: "icon", href: "/640.png" }]],
  cache: false,
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

    sidebar: 'auto',
    displayAllHeaders: true,
  },
};
