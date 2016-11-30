'use strict'

const { join } = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const factory = require('./factory')

const { CLIENT_PORT, CLIENT_HOST } = process.env
const webpackConfig = factory({ mode: 'development' })

const compiler = webpack(webpackConfig)

compiler.plugin('done', () => {
  console.log(`App is running at ${CLIENT_HOST}:${CLIENT_PORT}`)
})

const server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  inline: true,
  contentBase: [
    join(process.cwd(), 'build/client')
  ],
  watchContentBase: true,
  stats: 'errors-only',
})
server.listen(CLIENT_PORT)
