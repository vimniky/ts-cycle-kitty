'use strict'
var dotenv = require('dotenv')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var { ifElse } = require('./utils')

dotenv.config()
const { CLIENT_PORT, CLIENT_HOST } = process.env

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
]

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
]

const tsRules = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
}
module.exports = (mode) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  return {
    entry: isDev ? [
      `webpack-dev-server/client?${CLIENT_HOST}:${CLIENT_PORT}`,
      'webpack/hot/dev-server',
      './src/',
    ] : ['./src/'],
    output: isDev ? {
      filename: 'bundle.js',
      path: '/',
    } : {
      filename: 'bundle.js',
      path: './public/',
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        tsRules,
      ],
    },
    devtool: 'source-map',
    plugins: [
      new ProgressBarPlugin(),
    ].concat(ifElse(isDev)(devPlugins, prodPlugins))
  }
}

