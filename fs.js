//fyle-systems usaremos asincrono
const fs = require( 'node:fs' )// siempre es usar mejor node: antes de el prefijo
const {promisify} = require('node:util') //modulos que no tienen promesas nativas 
const stats = fs.statSync( './test.txt' )
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)

const text = fs.readFileSync( './test.txt', 'utf-8', ( err, text ) => {
    console.log(text)
})
