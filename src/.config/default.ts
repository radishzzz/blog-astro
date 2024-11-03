import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: 'radishzz',
    subtitle: '',
    author: 'radishzz',
    description: 'Share my thoughts and ideas.',
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
      'Blog <a target="_blank" href="/atom.xml">RSS</a> and <a target="_blank" href="https://views.radishzz.cc/share/mF6auxnITE4rIX0e/radishzz.cc">Views</a>',
      'Powered by <a target="_blank" href="https://astro.build/">Astro</a> and <a target="_blank" href="https://github.com/Moeyua/astro-theme-typography">Typography</a>',
      '© 2024 - %year %author',
    ],
  },
  appearance: {
    locale: 'zh-cn',
    colorsLight: {
      primary: '#121212',
      background: '#E8EAED',
    },
    colorsDark: {
      primary: '#E8EAED',
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
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '67d360e0-09a8-4cc9-851c-ed26150d0c6b',
  },
  latex: {
    katex: false,
  },
}
