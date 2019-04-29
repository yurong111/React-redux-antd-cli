const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const env = require('./config/env')

let DATAHOST =
  process.env.NODE_ENV === 'production'
    ? JSON.stringify(env.production.DATAHOST)
    : JSON.stringify(env.qa.DATAHOST)

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      DATAHOST: DATAHOST,
    }),
  ],
})
