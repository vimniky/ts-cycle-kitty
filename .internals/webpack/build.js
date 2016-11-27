'use strict'

const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const webpack = require('webpack')
const factory = require('./factory')

const buildPath = path.join(process.cwd(), 'build')
const publicPath = path.join(process.cwd(), 'public')

mkdirp.sync(buildPath)
const webpackConfig = factory('development')
const compiler = webpack(webpackConfig)

compiler.run(function (err, stats) {
  if (err) {
    console.log('--------------------------------\n', err)
  } else {
    fs.copySync(publicPath, buildPath)
  }
})
