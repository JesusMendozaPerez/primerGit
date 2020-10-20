const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la Tabla de Multiplicar', opts)
    .command('crear', 'Crea un archivo txt de la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = { argv };