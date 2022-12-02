// import { defaultTheme } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default {
  sourceDir: "src",
  dest: "docs/",
  title: "loG",
  description: "make a better world. so make a better loG.digiNORI",
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'diginori | loG' }],
    ['meta', { property: 'og:description', content: 'so make a better loG.digiNORI' }],
    ['meta', { property: 'og:image', content: 'https://user-images.githubusercontent.com/10396850/205328536-741b634a-c7e4-4721-b0be-79a4a396b2bc.png' }],
    ['meta', { property: 'og:url', content: 'https://log.diginori.com' }],
  ],

  plugins: [
    searchPlugin({
      // options
    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-B5QYS2JYSW",
      debug: true,
    }),
  ],

  theme: defaultTheme({
    home: "/index.md",

    logo: "/images/wood-mono.svg",
    logoDark: "/images/wood-color.svg",

    repo: "https://github.com/log-diginori/log-diginori.github.io/discussions",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    locales: {
      "/": {
        lang: "ko-KR",
        title: "로그",
        description: "디지노리 로그",
        selectLanguageName: "국어",
      },
      "/en/": {
        lang: "en-US",
        title: "LOG",
        description: "digiNORI LOG",
        selectLanguageName: "English",
      },
    },

    navbar: [
      { text: "tail -f loG", link: "/logs/" },
      { text: "meplace", link: "/logs/travel/meplace.md" },
    ],

    // collapsible sidebar
    sidebar: {
      "/logs/": [
        {
          text: "Technology",
          collapsible: true,
          children: [
            "/logs/tech/nhn-forward/",
            "/logs/tech/naver-cloud-summit/",
            "/logs/tech/google-cloud-innovators-hive/",

            "/logs/tech/1784/",
            "/logs/tech/sre/",
            "/logs/tech/seo/",

            "/logs/tech/ai/",
          ],
        },
        {
          text: "Travel",
          collapsible: true,
          children: [
            "/logs/travel/meplace.md",
            "/logs/travel/정숙성.md",

            "/logs/travel/diet/",
          ],
        },
      ],
    },
  }),
};
