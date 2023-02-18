

console.log('Hola Mundoooooo!');

/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 20.5
}

const tableta: Producto = {
    desc: 'Ipad',
    precio: 300
}

export function calculaVentas(productos: Producto[]): [number,number] {
    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total*0.15];
}

const articulos: Producto[] = [telefono, tableta];

const [total, isv] = calculaVentas(articulos);

console.log(total + ' ' + isv);