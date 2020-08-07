const path = require('path') // 引入path模块
const process = require('process')
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}

const name = '视频'
module.exports = {
  lintOnSave: false, // 是否开启eslint
  outputDir: 'dist', // build输出目录
  /* chainWebpack: (config) => {
    config.resolve.alias
      // set第一个参数：设置的别名，第二个参数：设置的路径
      // .set('@', resolve('./src'))
      .set('_c', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('views', resolve('./src/views'))
      .set('styles', resolve('./src/styles'))
    // 注意 store 和 router 没必要配置
  }, */
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        views: resolve('src/views')
      }
    }
  },
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    // host: 'localhost',
    port: '8090',
    https: false, // 是否使用https协议
    hot: true, // 是否开启热更新
    proxy: null
  }
}
