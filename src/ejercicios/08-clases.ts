

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/

class Persona {
    
    constructor(
        public nombre: string,
        public direccion: string
    ) {

    }
}

class Heroe extends Persona{
    //private alterEgo: string;
    //public edad: number;
    //static nombre: number;

    constructor(
        private alterEgo: string,
        public edad: number,
        public nombre: string
    ) {
        super(nombre, 'Calle Avenida Dolores');
    }
}

const ironMan = new Heroe('Iron Man', 44, 'Tony');

console.log(ironMan);
