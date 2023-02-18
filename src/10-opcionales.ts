

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Daenarys',
    hijos: ['Drogon', 'Vyserys']
}

function imprimirHijos(pasajero: Pasajero): void {

    const hijos = pasajero.hijos?.length || 0;

    console.log(hijos);
}

imprimirHijos(pasajero1);