'use strict'

const path = require('path')
const spawn = require('cross-spawn')
// var chalk = require('chalk')
const glob = require('glob')

const tsc = path.resolve(process.cwd(), 'node_modules', '.bin', 'tsc')
const mocha = path.resolve(process.cwd(), 'node_modules', '.bin', 'mocha')

const args = [
  '--colors',
  // !process.env.CI && (console.log(chalk.green.bold('Enabling watch mode')) || '--watch'),
  'test/**/*.test.js'
].filter(Boolean)

spawn.sync(tsc, ['--outDir', 'test/client', glob.sync('client/**/*.test.ts')], { stdio: 'inherit' })
spawn.sync(mocha, args, {stdio: 'inherit'})
