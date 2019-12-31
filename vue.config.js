module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://pdftexapi.pythonanywhere.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/faas': {
        target: 'http://127.0.0.1:8080/function/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/faas': ''
        }
      }
    }
  }
}
