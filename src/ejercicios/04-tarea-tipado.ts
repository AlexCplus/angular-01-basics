

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/

interface InterfazHeroe {
    nombre: string,
    edad: number,
    direccion: Direccion,
    mostrarDireccion: () => string
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}

const superheroe: InterfazHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main street',
        pais: 'USA',
        ciudad: 'NY city'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superheroe.mostrarDireccion();

console.log(direccion);