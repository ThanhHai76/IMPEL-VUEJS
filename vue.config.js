// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_medias.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },

  devServer: {
    disableHostCheck: true,
    port: 8088,
    public: 'http://123.31.47.4:8088/',
    watchOptions: {
      clientLogLevel: 'warning'
    }
  }
}
