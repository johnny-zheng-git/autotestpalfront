module.exports = {
  
  devServer: {
    // host: '0.0.0.0',
    // port: 8081,
      proxy: {
          '/api': {
              // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
              target: 'http://127.0.0.1:8090',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
}
