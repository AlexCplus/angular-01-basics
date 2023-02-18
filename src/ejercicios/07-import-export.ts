

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/
import { Producto, calculaVentas } from './06-desustructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 33
    },
    {
        desc: 'Telefono 2',
        precio: 50
    }
];

const [total, isv] = calculaVentas(carritoCompras);

console.log(total + ' ' + isv);