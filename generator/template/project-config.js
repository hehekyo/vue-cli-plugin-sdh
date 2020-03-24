module.exports = {
  projectName: '<%- rootOptions.projectName %>',
  topDomain: true,
  css: {
    rem: {
      remUnit: 20
    }    
  },
  dev: {
    // https://webpack.docschina.org/configuration/dev-server/#devserver-proxy
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '^/api': ''
        },
      }
    },
    mock:false,
    allowedHosts: [],
  }
}
