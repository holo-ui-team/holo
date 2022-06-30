const fs   = require('fs')
const path = require('path')

const packagesPath = path.resolve( __dirname, '../', 'packages' )

module.exports = function getEntry () {
  const packages = fs.readdirSync( packagesPath, { withFileTypes: true } )
  const entry    = {}

  packages.forEach( ( item ) => {

    const { name } = item
    if ( isComponent( item ) ) {

      entry[name] = getComponentEntryPath( name )

    } else if ( isIndex( item ) ) {

      entry.Index = getIndexEntryPath( name )
    }

  } )

  return entry

}

function getIndexEntryPath ( name ) {
  const indexPath = path.join( packagesPath, name )

  return indexPath.split( path.sep ).join( '/' )
}

function getComponentEntryPath ( name ) {

  const targetPath = path.resolve( packagesPath, name )
  const files      = fs.readdirSync( targetPath )

  let result = ''

  if ( files.includes( 'index.ts' ) ) {
    result = path.resolve( targetPath, 'index.ts' )

  } else if ( files.includes( 'plugin.ts' ) ) {
    result = path.resolve( targetPath, 'plugin.ts' )

  } else {
    throw new Error( '请按照约定构建组件' )
  }

  return result

}

function isComponent ( item ) {
  return item.isDirectory() && /^[A-Z]{1}/.test( item.name )
}

function isIndex ( item ) {
  return item.isFile() && item.name.includes( 'index.ts' )
}