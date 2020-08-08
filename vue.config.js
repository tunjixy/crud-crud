const webpack = require('webpack');

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
    name: 'Design Snitch',
    themeColor: '#F76E4E',
    msTileColor: '#F76E4E',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#F76E4E'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};