const path = require('path')
const config = require('./src/config.js')

function resolve (dir) {
  return path.join(__dirname, dir)
};

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'prodution' ? '/vue-vuetify-admin/' : '/',
  configureWebpack: {
    name: config.title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
