

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anyo: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeren',
        anyo: 2015
    }
}

//const { volumen, segundo, cancion, detalles: { autor: autorDetalles } } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es ', volumen);
console.log('El segundo actual es ', segundo);
console.log('La cancion actual es ', cancion);
console.log('El autor actual es ', autor);

const nombres: string[] = ['Alfredo', 'Fetuccini', 'Pasta'];
const [, , pos3] = nombres;

console.log('Nombre 1 ', nombres[0]);
console.log('Nombre 2',  nombres[0]);
console.log('Nombre 3 ', pos3);
