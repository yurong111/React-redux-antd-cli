const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const env = require('./config/env')

let DATA_HOST =
  process.env.NODE_ENV === 'production'
    ? JSON.stringify(env.production.DATA_HOST)
    : JSON.stringify(env.qa.DATA_HOST)

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      DATA_HOST: DATA_HOST,
    }),
  ],
})
