require('webpack')
const path = require('path')
const fs = require('fs')
const testConfig = require('./config/test')
const file = getTestFileName()

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon-chai'],
    mime: { 'text/x-typescript': ['ts', 'tsx'] },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    webpack: {
      mode: 'development',
      output: {
        filename: '[name].js'
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader',
            },
            exclude: [path.join(__dirname, 'node_modules')]
          }
        ]
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      },
    },
    files: [file],
    exclude: [],
    preprocessors: { 'tests/**/*.spec.ts': ['webpack'] },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}

function getTestFileName() {
  const inputFileName = process.argv[3]?.split('=')[1]
  let relativePath = ''

  if (inputFileName) {
    const fileName = testConfig.formatFileName(inputFileName)
    const filePath = testConfig.getAbsolutePath(__dirname, fileName)

    relativePath = path.relative(__dirname, filePath)
    const doesExsit = fs.existsSync(filePath)
    if (!doesExsit) {
      throw Error(`\n×× file 【${fileName}】 does not exsit. ××\n`)
    }
  }
  return relativePath || testConfig.FILE
}
