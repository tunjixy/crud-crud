const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Crud Crud',
    themeColor: '#69da55',
    msTileColor: '#69da55',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#69da55'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
}
