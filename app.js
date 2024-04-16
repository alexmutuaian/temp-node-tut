// local
const secret = 'SUPER SECRET'
//share
const faro = 'Faro'
const faroG = 'Faro Green'


module.exports = {faro, faroG}

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'sub', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
