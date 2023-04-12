const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://vue3-course-api.hexschool.io',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        process: require.resolve('process/browser')
      }
    }
  }
}
