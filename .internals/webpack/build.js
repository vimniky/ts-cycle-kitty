'use strict'

const { join } = require('path')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const webpack = require('webpack')
const factory = require('./factory')

const webpackConfig = factory({ mode: 'production' })

const compiler = webpack(webpackConfig)

compiler.run(function (err, stats) {
  if (err) {
    console.log(chalk.red('--------------------------------\n'), err)
  } else {
    console.log(chalk.green('-------------------------------- done\n'))
  }
})
