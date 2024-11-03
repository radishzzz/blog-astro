import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: 'radishzz',
    subtitle: '走走停停',
    author: 'radishzz',
    description: 'Walk and pause',
    website: 'https://radishzz.cc/',
    pageSize: 5,
    socialLinks: [],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: '胡适', path: 'hu-shi' }],
    footer: [
      '<a target="_blank" href="/atom.xml">RSS</a> & <a target="_blank" href="https://views.radishzz.cc/share/mF6auxnITE4rIX0e/radishzz.cc/">Views</a> & <a target="_blank" href="https://status.radishzz.cc/">Status</a>',
      'Powered by <a target="_blank" href="https://astro.build/">Astro</a> & Theme <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a>',
      '© 2024 - %year %author',
    ],
  },
  appearance: {
    locale: 'zh-cn',
    colorsLight: {
      primary: '#333333',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#dbdbdb',
      background: '#121212',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {
    waline: {
      serverURL: 'https://comment.radishzz.cc',
      lang: 'zh-CN',
      emoji: [
        '//unpkg.com/@waline/emojis@1.2.0/bmoji',
        '//unpkg.com/@waline/emojis@1.2.0/tw-emoji',
      ],
      dark: 'html.dark',
    }
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '67d360e0-09a8-4cc9-851c-ed26150d0c6b',
  },
  latex: {
    katex: false,
  },
}
