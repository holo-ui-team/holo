const fs = require('fs')
const path = require('path')
const testConfig = require('../config/test')


try {
  checkDir()
  const fileName = getFileName()
  createNewFile(fileName)
} catch (error) {
  throw new Error(error)
}


function createNewFile(fileName) {
  const testPath = testConfig.getAbsolutePath(__dirname, fileName)
  const template = getTemplate()
  try {
    const doesExsit = fs.existsSync(testPath)
    if (doesExsit) {
      throw Error('^(*￣(oo)￣)^ notice: file does exsit!!')
    }
    fs.writeFileSync(testPath, template)
    console.info(`\n\\(^o^)/~ file【${fileName}】 is created.\n`)
  } catch (error) {
    console.error('\no(╥﹏╥)o oh, something is wrong..\n' + error + '\n')
  }
}

function checkDir() {
  const doesExsit = fs.existsSync(testConfig.FILE_DIR)
  if (!doesExsit) {
    fs.mkdirSync((
      path.resolve(__dirname, '../', testConfig.FILE_DIR)
    ), {})
  }
}

function getFileName() {
  const randomNumber = Math.random() * 1000000
  return testConfig.formatFileName(process.argv[2] || 'random' + parseInt(`${randomNumber}`, 10))
}

function getTemplate() {
  return `import {expect} from 'chai'

describe('Test a', () => {
  it('a to be true', () => {
    expect(true).to.be.true
  })
})`
}