/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function convertirPrimeraMayuscula(texto){
    let dataTexto = texto.split(' ');
    let textoFinal = '';
    dataTexto.map(function(x) {
        textoFinal += x.charAt().toUpperCase() + x.slice(1) + ' ';
    })

    console.log(textoFinal);

}


convertirPrimeraMayuscula('jose miguel sepulveda');