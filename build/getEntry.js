const fs   = require('fs')
const path = require('path')

module.exports = getEntry

function getEntry() {
  const packagesDir     = path.resolve(__dirname, '../', 'packages')
  const foldersAndFiles = fs.readdirSync(packagesDir, { withFileTypes: true })
  const entry           = {}

  foldersAndFiles.forEach((item) => {

    if (_isComponent(item)) {

      const componentDir       = path.resolve(packagesDir, item.name)
      const componentFileNames = fs.readdirSync(componentDir)

      entry[item.name] = _handleComponentEntryPath(componentDir, componentFileNames)

    } else if (_isIndexEntry(item)) {

      // todo 这里如何改为相对路径？
      const currentPath = path.join(packagesDir, item.name)

      entry.index = currentPath.split(path.sep).join('/')

    }

  })

  return entry
  
}

function _handleComponentEntryPath(dir, filenames) {
  let result = ''
  
  if (filenames.includes('index.ts')) {
    result = path.resolve(dir, 'index.ts')

  } else if (filenames.includes('plugin.ts')) {
    result = path.resolve(dir, 'plugin.ts')

  } else {
    throw new Error('请按照约定构建组件')
  }

  return result

}

function _isComponent(item) {
  return item.isDirectory() && /^[A-Z]{1}/.test(item.name)
}

function _isIndexEntry(item) {
  return item.isFile() && item.name.includes('index.ts')
}