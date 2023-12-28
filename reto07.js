/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invirtiendoCadenas(text) {
    let data = text.split('');
    let data2 = data.reverse();
    let textoInverso = '';
    data2.forEach((element) => {
        textoInverso += element;
    });
    console.log(textoInverso);
}

invirtiendoCadenas('OSREVNI');