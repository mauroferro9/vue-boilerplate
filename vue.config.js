
module.exports = {
  // <i18n> tag support from http://kazupon.github.io/vue-i18n/guide/sfc.html#vue-cli-3-0
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  },
  css: {
    // global sass styles from https://medium.com/@haixiang6123/vue-import-sass-file-globally-6266b17319cf
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/colors.scss";
          @import "@/styles/variables.scss";
          @import "@/styles/media-queries.scss";
          @import "@/styles/default.scss";
        `
      }
    }
  }
}
