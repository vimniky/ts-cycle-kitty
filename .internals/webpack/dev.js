'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const factory = require('./factory')

const { CLIENT_PORT, CLIENT_HOST } = process.env
const webpackConfig = factory('development')

const compiler = webpack(webpackConfig)

compiler.plugin('done', function () {
  console.log(`App is running at ${CLIENT_HOST}:${CLIENT_PORT}`)
})

const server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  contentBase: './public',
  stats: 'errors-only',
})

server.listen(CLIENT_PORT)
