

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumentos: T) {
    return argumentos;
}

let soyString = queTipoSoy('SoyString');
let soyNumero = queTipoSoy(22);

let soyExplicito = queTipoSoy<number>(444);