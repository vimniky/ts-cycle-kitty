'use strict'
var dotenv = require('dotenv')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var { ifElse } = require('./utils')

dotenv.config()
const { CLIENT_PORT, CLIENT_HOST } = process.env

const devPlugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
]

const prodPlugins = [
  new webpack.HotModuleReplacementPlugin(),
]

module.exports = (mode) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  return {
    entry: isDev ? [
      `webpack-dev-server/client?${CLIENT_HOST}:${CLIENT_PORT}`,
      'webpack/hot/dev-server',
      './src/'
    ] : ['./src'],
    output: {
      filename: 'bundle.js',
      path: '/'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    devtool: 'source-map',
    plugins: [
      new ProgressBarPlugin(),
    ].concat(ifElse(isDev)(devPlugins, prodPlugins))
  }
}

