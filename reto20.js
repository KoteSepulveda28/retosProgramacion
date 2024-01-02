/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function conversorDeTiempo(dias,horas, minutos,segundos){

    let milisegundo = (dias * 8.64e+7 ) + (horas * 3.6e+6) + (minutos * 60000) + (segundos * 1000);
    console.log(milisegundo);
}

conversorDeTiempo(2,3,4,23);

