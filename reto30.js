/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */

function orderBy(data, type){

    switch (type) {
        case 'ASC':``
            return 'ASC';
        break;
        case 'DESC':
            return 'DESC';     
        break;
        default:
            return 'Type order not supported';
        break;
    }

}


const data = [1,4,3,5,6,7];

console.log(orderBy(data, 'ASC'));
console.log(orderBy(data, 'DESC'));