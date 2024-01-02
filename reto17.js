/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function convertirPrimeraMayuscula(texto){
    let dataTexto = texto.split(' ');
    let textoUpercase = dataTexto.map(function(x) {
        console.log(x);
        return x.charAt(0).toUppercase() + x.slice(1);
    })


    console.log(textoUpercase);

}


convertirPrimeraMayuscula('jose miguel sepulveda');