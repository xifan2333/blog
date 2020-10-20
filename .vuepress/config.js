module.exports = {
    title: "饭铺",
    description: "🥣 欢迎光临：）",
    dest: "public",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    theme: "reco",
    themeConfig: {

        nav: [
            {
                text: "主页",
                link: "/",
                icon: "reco-home"
            },
            {
                text: "时间线",
                link: "/timeline/",
                icon: "reco-date"
            },
            {
              text: "文档",
              icon: "reco-message",
              items: [
                {
                  text: "🎤 单口喜剧入门指南",
                  link: "/docs/stand-up-comedy/"
                }
              ]
            },
            {
                text: "关于我",
                icon: "reco-account",
                items: [
                    {
                        text: "GitHub",
                        link: "https://github.com/xifan2333",
                        icon: "reco-github"
                    }
                ]
            }
        ],
        sidebar: {
          "/docs/stand-up-comedy/": [
            "",
            "principle",
            "structure",
            "books",
          ],
        },
        subSidebar: 'auto',
        valineConfig: {
            appId: 'gXvVVABzq7pP01kmiA2ueIeR-gzGzoHsz',
            appKey: 'Y7x1vViTOzmC4hKi8otMy0yz',
            placeholder: "💬 填写邮箱可收到回复哦：）"
        },
        type: "blog",
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            }
        },
        friendLink: [
            // {
            //   title: "午后南杂",
            //   desc: "Enjoy when you can, and endure when you must.",
            //   email: "1156743527@qq.com",
            //   link: "https://www.recoluan.com"
            // },
            // {
            //   title: "vuepress-theme-reco",
            //   desc: "A simple and beautiful vuepress Blog & Doc theme.",
            //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            //   link: "https://vuepress-theme-reco.recoluan.com"
            // }
        ],
        logo: "/logo.png",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "稀饭",
        authorAvatar: "/avatar.jpg",
        record: "xxxx",
        startYear: "2020"
    },
    markdown: {
        lineNumbers: true
    },
    plugins: {
        meting: {
        },
        'code-copy': {
            color: "#7e8078"
        },
    },
    extendMarkdown: md => {
        md.set({ breaks: true })
        md.use(require('markdown-it-mathjax3'))
        md.use(require('markdown-it-plantuml-ex'))
    },
}