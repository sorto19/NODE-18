//repasando node y actualizando 
console.log( "hola devs" );
console.info( "deeee" );
// variable global = globalThis //es una variable global de node
//module.exports = nombre_modulo //common js module exports forma clasica para node ya por ser depratado
//mmdulos nbativos de node js
const os = require( 'node:os' )
console.log( 'info de sitema operativo','plataforma', os.platform(),'version', os.release(),
    'arquitectura', os.arch(),'cpus corriendos', os.cpus(), 'espacio en memoria', os.freemem() / 1024,
    os.totalmem() / 1024 / 4024 )
console.log('cuantos dias llevas encendido', os.uptime()/60/60)