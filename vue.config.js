// vue.config.js
module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'layout-header-background': '#0F2546',
          'primary-color': '#4397D2',
          'border-radius': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
}
