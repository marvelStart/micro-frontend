module.exports = {
  filenameHashing: false,
  configureWebpack:{
    externals: {
      utils: '@xiji/utils',
      'single-spa': 'single-spa',
      'vue': 'vue',
      'vuex': 'vuex',
      'vue-router': 'vue-router',
      'js-md5': 'js-md5'
    }
  }
}
