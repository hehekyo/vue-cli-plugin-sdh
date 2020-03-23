const path = require('path')
const projectConfig = require('./project-config');
const webpackApiMocker = require('mocker-api');
module.exports = {   
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          'src': path.resolve(__dirname, './src'),
          'views': path.resolve(__dirname, '../src/views'),
          'components': path.resolve(__dirname, '../src/components'),
          'sprite': path.resolve(__dirname, '../src/sprite'),
          'images': path.resolve(__dirname, '../src/images'),
        }
      },     
    }

  },
  chainWebpack(webpackConfig) {
    // --------- Rem ---------
    webpackConfig.when(typeof projectConfig.css.rem === 'object', config => {
      config
        .plugin('html')
        .tap(args => {          
          args[0].remUnit = projectConfig.css.rem.remUnit;
          return args;
        });
    });
  },
   // prettier-ignore-end
   crossorigin: '',
   devServer: {
     allowedHosts: [
       '.foo.cn',
       ...projectConfig.dev.allowedHosts,
     ],
     before(app) {
       if (projectConfig.dev.mock) {
         webpackApiMocker(app, path.resolve('./mock/index.js'));
       }
     },
     proxy: projectConfig.dev.proxy,
   },
}