const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const env = require('./config/env')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const path = require('path')

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
    new CleanWebpackPlugin(),
    new ParallelUglifyPlugin({
      uglifyJS: {},
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        'react-vendor': {
          test: (module, chunks) => /react/.test(module.context),
          priority: 1,
        },
      },
    },
    runtimeChunk: true,
  },
  performance: {
    hints: false,
  },
})
