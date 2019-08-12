const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')

module.exports = {
  title: 'Document ...',
  configureWebpack: {
    resolve: {
      alias: require('../aliases.config').webpack,
    },
  },
  markdown: {
    config: useMarkdownItVueExample,
  },
  themeConfig: {
    sidebar: [
      ['/', 'Thông tin chung'],
      ['/demos/intro', 'DEMO: Introduction'],
      ['/retail/huong-dan-cai-dat', 'Hướng dẫn cài đặt'],
    ],
  },
}
