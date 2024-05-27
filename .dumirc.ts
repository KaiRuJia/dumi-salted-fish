import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/salted-fish',
  publicPath: '/salted-fish/',
  theme: {
    '@c-primary': '#1DA57A',
    'primary-color': '#1DA57A',
  },
  themeConfig: {
    name: 'salted fish',
    logo: '/salted-fish/logo.png',
    footer: 'Copyright © 2024 | Powered by salted fish',
    nprogress: false,
    socialLinks: {
      github: 'https://github.com/KaiRuJia/dumi-salted-fish.git'
    },
    nav: [],
  },
});
