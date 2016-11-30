'use strict'

const { join } = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
dotenv.config()

const ROOT = process.cwd()
const template = join(ROOT, 'client/template.html')
const clientSrcPath = join(ROOT, 'client')
const entry = join(ROOT, 'client/index.ts')

const { CLIENT_PORT, CLIENT_HOST } = process.env
const url = `${CLIENT_HOST}:${CLIENT_PORT}`
const plugins = [
  new ProgressBarPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template,
  }),
]

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url }),
]

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({ minimize: true }),
]

const tsRules = {
  test: /\.ts$/,
  loader: 'ts-loader',
  include: clientSrcPath,
  query: {
    configFileName: './tsconfig.json'
  },
}

module.exports = ({ mode }) => {
  const isDev = mode === 'development'
  const isProd = mode === 'production'
  return {
    entry: isDev ? [
      `webpack-dev-server/client?${url}`,
      'webpack/hot/dev-server',
      entry,
    ] : [entry],
    output: isDev ? {
      filename: 'bundle.js',
      path: join(ROOT, 'build/client') ,
    } : {
      filename: 'bundle-[hash].js',
      path: join(ROOT, 'build/client') ,
    },
    target: 'web',
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        tsRules,
      ],
    },
    devtool: 'source-map',
    plugins: plugins.concat(isDev ? devPlugins : prodPlugins)
  }
}
