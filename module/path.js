const path = require('path')

const filePath = path.join('HanSPy', 'nodejs_course', 'module', 'index.js')

console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))
console.log(path.resolve('index.js'))