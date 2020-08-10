module.exports = {
  pwa: {
    name: 'Crud Crud',
    themeColor: '#69da55',
    msTileColor: '#69da55',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#69da55',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
