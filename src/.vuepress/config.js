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
    ['meta', { property: 'og:title', content: 'diginori loG' }],
    ['meta', { property: 'og:description', content: 'so make a better loG.digiNORI' }],
    ['meta', { property: 'og:image', content: 'https://user-images.githubusercontent.com/10396850/205328536-741b634a-c7e4-4721-b0be-79a4a396b2bc.png' }],
    ['meta', { property: 'og:url', content: 'https://log.diginori.com' }],
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
      // title: 'loG',
      // description: 'make a better world. so make a better loG.digiNORI',
    },
    '/': {
      lang: 'ko-KR',
      // title: '디지노리 로그',
      // description: '더 나은 세상을 만들자. 이를 위해 더 나은 로그를 남겨가자. 디지노리.',
    },
  },

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
    locales: {
      '/': {
        selectLanguageName: 'Korean',
      },
      '/en/': {
        selectLanguageName: 'English',
        sidebar: {
          "/en/logs/": [
            {
              text: "Technology",
              collapsible: true,
              children: [
                "/en/logs/tech/nhn-forward/",
                "/en/logs/tech/naver-cloud-summit/",
                "/en/logs/tech/google-cloud-innovators-hive/",
    
                "/en/logs/tech/1784/",
                "/en/logs/tech/sre/",
                "/en/logs/tech/seo/",
    
                "/en/logs/tech/ai/",
              ],
            },
            {
              text: "Travel",
              collapsible: true,
              children: [
                "/en/logs/travel/meplace.md",
                "/en/logs/travel/정숙성.md",
    
                "/en/logs/travel/diet/",

                "/en/logs/travel/naverunion.md",
              ],
            },
            {
              text: "Korean culture",
              collapsible: true,
              children: [
                "/en/logs/korean-culture/",
              ],
            },
            {
              text: "about",
              collapsible: true,
              children: [
                "/en/logs/about/me/resume.md",
              ],
            },
          ],
        },
      },
    },

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
            
            "/logs/tech/drone/",
          ],
        },
        {
          text: "Travel",
          collapsible: true,
          children: [
            "/logs/travel/meplace.md",
            "/logs/travel/정숙성.md",

            "/logs/travel/diet/",

            "/logs/travel/naverunion.md"
          ],
        },
        {
          text: "Korean culture",
          collapsible: true,
          children: [
            "/logs/korean-culture/",
          ],
        },
        {
          text: "about",
          collapsible: true,
          children: [
            "/logs/about/me/resume.md",
          ],
        },
      ],
    },
  }),
};
