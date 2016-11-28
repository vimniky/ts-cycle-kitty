'use strict'

const { join } = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { ifElse } = require('./utils')

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
  loader: `awesome-typescript-loader`,
  query: {
    configFileName: './tsconfig.json'
  }
}

module.exports = ({ mode }) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  return {
    entry: isDev ? [
      `webpack-dev-server/client?${CLIENT_HOST}:${CLIENT_PORT}`,
      'webpack/hot/dev-server',
      './client/index.ts',
    ] : ['./client/index.ts'],
    output: isDev ? {
      filename: 'bundle.js',
      path: join(process.cwd(), 'build/client') ,
    } : {
      filename: 'bundle.js',
      path: join(process.cwd(), 'build/client') ,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        tsRules,
      ],
    },
    devtool: 'source-map',
    plugins: [
      new ProgressBarPlugin(),
      new CopyWebpackPlugin([
        { from : join(process.cwd(), 'client/assets/index.html') },
        { from : join(process.cwd(), 'client/assets/favicon.ico') },
      ]),
    ].concat(ifElse(isDev)(devPlugins, prodPlugins))
  }
}
