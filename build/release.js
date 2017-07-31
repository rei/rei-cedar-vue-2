require('./check-versions')()
require('./check-theme')()

process.env.NODE_ENV = 'release'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.release.conf')

var spinner = ora('building for release...')
spinner.start()

rm(path.join(config.release.assetsRoot), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Release files built.\n'))
        console.log(chalk.yellow(
            '  Message here about using them or something.\n'
        ))
    })
})
