const fs = require('fs')
const testConfig = require('../config/test')

const fileName = getFileName()
createNewFile(fileName)


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