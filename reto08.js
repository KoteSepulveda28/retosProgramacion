/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function countPalabras(text)
{
    let dataText = text.split(' ');
    let dataUnique = new Set(dataText);

    console.log(text);

    dataUnique.forEach(element => {
        let count = dataText.filter((filtro) => filtro === element);
        console.log('La palabra: "'+element+'" se repite '+ count.length + ' veces');
    });
}

countPalabras('hola hola hola como como como estas dime dime tu ti ti ti');