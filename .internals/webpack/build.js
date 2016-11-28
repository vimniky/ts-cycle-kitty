'use strict'

const { join } = require('path')
const mkdirp = require('mkdirp')
const webpack = require('webpack')
const factory = require('./factory')

const webpackConfig = factory({ mode: 'production' })

const compiler = webpack(webpackConfig)

compiler.run(function (err, stats) {
  if (err) {
    console.log('--------------------------------\n', err)
  } else {
    console.log('-------------------------------- done')
  }
})
