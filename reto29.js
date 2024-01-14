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

const coinsSupport = [200,100,50,10,5];

function comprarProducto(dinero, producto){

    let validate = 0;

    dinero.forEach(element => {
        let value = coinsSupport.filter((filtro) => filtro == element); 
        validate = value.length > 0 ? validate + 0 : validate + 1;
    });

    if(validate > 0){
        return 'Monedas no soportadas';
    }

    let productoSelected = products.filter((item) => item.id === producto)
    if(productoSelected.length > 0){
        const {id, name, price} = productoSelected[0];
        const sumaDinero = dinero.reduce((accumulator, currentValue) => accumulator + currentValue);
        if(sumaDinero < price){
            return 'Insert more monedas';
        }
        
        let vuelto = sumaDinero - price;
        let arregloMonedasVuelto = generarVuelto(vuelto, coinsSupport);
        console.log(arregloMonedasVuelto);
        return 'El producto seleccionado es: '+name;
    }
    else{
        return 'Producto not found';
    }
}


function generarVuelto(valor, monedasSoportadas) {
   
    let vuelto = [];
    monedasSoportadas.forEach(element => {
        while (valor >= element) {
            vuelto.push(element);
            valor -= element;
        }
    });

    return vuelto;
}
let monedas = [200,200,200,200,200];
let idProducto = 1;
console.log(comprarProducto(monedas,idProducto));
