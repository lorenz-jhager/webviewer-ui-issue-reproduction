const fs = require('fs');
const path = require('path');

function removeDirSync(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((entry) => {
      const entryPath = path.join(dirPath, entry);
      if (fs.lstatSync(entryPath).isDirectory()) {
        removeDirSync(entryPath);
      } else {
        fs.unlinkSync(entryPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

function copyRecursiveSync(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((child) => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const src = path.join(__dirname, './node_modules/@pdftron/webviewer/public');
const dst = path.join(__dirname, './public/lib/webviewer');

if (fs.existsSync(dst)) {
  removeDirSync(dst);
  console.log('Removed:', dst);
}

copyRecursiveSync(src, dst);
console.log('Copied from', src, 'to', dst);

const src2 = path.join(__dirname, './node_modules/@pdftron/webviewer/webviewer.min.js');
const dst2 = path.join(__dirname, './public/lib/webviewer/webviewer.min.js');

fs.copyFileSync(src2, dst2);
console.log('Copied from', src, 'to', dst2);
