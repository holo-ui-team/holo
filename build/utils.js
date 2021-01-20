const fs = require('fs')
const path = require('path')
const join = path.join
const resolve = (dir) => path.join(__dirname, '../', dir)


function findFile(path) {
    let files = fs.readdirSync(resolve(path));
    let lNeedFiles = {};
    files.forEach((item) => {
        const itemPath = join(path, item);
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir && itemPath.indexOf('style') < 0 && itemPath.indexOf('assets') < 0) {
            lNeedFiles = Object.assign({}, lNeedFiles, findFile(itemPath));
        } else if (itemPath.indexOf('index.ts') >= 0 || itemPath.indexOf('index.js') >= 0) {
            const cdirArray = itemPath.split('\\');
            if (cdirArray.length ==2) {
                lNeedFiles.index = resolve(`${itemPath}`);
            } else if (cdirArray.length == 3) {
                lNeedFiles[cdirArray[1]] = resolve(`${itemPath}`);
            }
        }
    })
    return lNeedFiles;
}

module.exports = {
    resolve,
    getComponentEntries(path) {
        let lsds = findFile(path);
        return lsds;
    },
}
