const fs = require('fs')
const path = require('path')
const join = path.join
const resolve = (dir) => path.join(__dirname, '../', dir)

module.exports = {
    resolve,
    getComponentEntries(path) {
        let files = fs.readdirSync(resolve(path));
        const componentEntries = files.reduce((ret, item) => {
            const itemPath = join(path, item)
            const isDir = fs.statSync(itemPath).isDirectory();
            if (isDir && itemPath.indexOf('style') < 0 && itemPath.indexOf('assets') < 0) {
                ret[item] = resolve(join(itemPath, 'index.ts'))
            } else if (itemPath.indexOf('index.ts') >= 0) {
                const [name] = item.split('.')
                ret[name] = resolve(`${itemPath}`)
            }
            return ret
        }, {})
        console.dir(componentEntries)
        return componentEntries
    },
}


// function walk(dir) {
//     dir = dir || '.'
//     var directory = path.join(__dirname, '../src', dir);
//     fs.readdirSync(directory)
//         .forEach(function (file) {
//             var fullpath = path.join(directory, file);
//             var stat = fs.statSync(fullpath);
//             var extname = path.extname(fullpath);

//             var basename = path.basename(fullpath);
//             if (stat.isFile() && (extname === '.we' || extname === '.vue') || basename === 'entry.js' || basename === 'entry-list.js' || basename === 'pages_config.json') {
//                 var name = path.join(dir, path.basename(file, extname));
//                 if (path.basename(fullpath) === 'entry.js' || path.basename(fullpath) === 'entry-list.js') {
//                     entry[name] = fullpath;
//                     pagesCount++;
//                 } else if (path.basename(fullpath) === 'pages_config.json') {

//                     pages_config.push({
//                         name: path.basename(directory),
//                         path: fullpath,
//                         modulePath: dir.substr(8)
//                     })
//                 } else {
//                     entry[name] = fullpath + '?entry=true';
//                     pagesCount++;
//                 }
//                 // console.log(" entry[name] " + entry[name]);
//                 if (extname === '.we') {
//                     bannerExcludeFiles.push(name + '.js')
//                 }

//             } else if (stat.isDirectory()) {
//                 // var subdir = path.join(dir, file);
//                 // if (subdir !== 'examples' && subdir !== 'components') {
//                 //     walk(subdir);
//                 // }
//                 var subdir = path.join(dir, file);
//                 if (file !== 'examples' && file !== 'views' && file !== 'components' && !((/component/gi).test(file))) {
//                     walk(subdir);
//                 }
//             }
//         });
// }