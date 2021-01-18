const path = require('path')
const FILE_DIR = 'tests'
const FILE_SUFFIX = '.spec.ts'

module.exports = ({
  FILE_DIR,
  FILE_SUFFIX,
  FILE: `${FILE_DIR}/**/*${FILE_SUFFIX}`,
  formatFileName(str) {
    const fileName = formatFileSuffix(str)
    return upperFirstLetter(fileName)
  },
  getAbsolutePath(from, to) {
    return path.resolve(
      from,
      path.relative(from, FILE_DIR),
      formatFileSuffix(to)
    )
  }
})

function formatFileSuffix(str) {
  return str.indexOf(FILE_SUFFIX) > 0 ? str : str + FILE_SUFFIX
}

function upperFirstLetter(str) {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1)
}