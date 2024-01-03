/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */


const products = [
    {
        "id" : 1,
        "name" : "Kukies",
        "price" : 550
    },
    {
        "id" : 2,
        "name" : "Coke",
        "price" : 800
    },
    {
        "id" : 3,
        "name" : "Papas fritas",
        "price" : 700
    }
]

function comprarProducto(dinero, producto){
    let productoSelected = products.filter((item) => item.id === producto)
    if(productoSelected.length > 0){
        const {id, name, price} = productoSelected[0];
        const sumaDinero = dinero.reduce((accumulator, currentValue) => accumulator + currentValue);

        // if(sumaDinero :)

    }
    else{
        console.log('Product not found');
    }
}

let monedas = [200,200,200];
let idProducto = 3;
comprarProducto(monedas,idProducto);
