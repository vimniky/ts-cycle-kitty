'use strict'

const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const webpack = require('webpack')
const factory = require('./factory')

const { CLIENT_OUTPUT_PATH, CLIENT_PUBLIC_PATH } = process.env
const webpackConfig = factory('development')
const compiler = webpack(webpackConfig)

mkdirp.sync(CLIENT_OUTPUT_PATH)

compiler.run(function (err, stats) {
  if (err) {
    console.log(err)
  } else {
    fs.copySync(publicPath, buildPath)
  }
})
