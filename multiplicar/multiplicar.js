const fs = require('fs');
const colors = require('colors');


listarTabla = (base, limite) => {

    let respuesta = `Tabla del ${base} hasta el ${limite}`;
    console.log(respuesta.blue);
    for (let i = 1; i <= limite; i++) {


        console.log(`${base} * ${i} = ${base * i}`);

    }


}

crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato introducido BASE: ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El dato introducido LIMITE: ${limite} no es un numero`);
            return;
        }

        let respuesta = `Tabla del ${base}\n`;

        for (let i = 1; i <= limite; i++) {

            respuesta += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, respuesta, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.green);
            }

        });

    });
}

module.exports = { crearArchivo, listarTabla };