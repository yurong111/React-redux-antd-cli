const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const env = require('./config/env')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      DATAHOST: JSON.stringify(''),
      Request_URL: JSON.stringify(env.development.Request_URL),
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/api': {
        target: env.development.DATAHOST,
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
      },
    },
  },
})
