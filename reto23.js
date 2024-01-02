/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function compareArrays(array1, array2, validate){
    if(validate){
        let data = array1.filter(p => array2.includes(p));
        console.log(data);
    }
    else{
        let data = array1.filter(p => !array2.includes(p));
        let data2 = array2.filter(p => !array1.includes(p));
        let final = data.concat(data2);
        console.log(final);
    }
}


const arreglo1 = [1,2,3,5,6];
const arreglo2 = [2,3,5,6,7];

compareArrays(arreglo1, arreglo2, true);
compareArrays(arreglo1, arreglo2, false);