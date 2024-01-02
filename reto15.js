/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

function numberAmstrong(number){
    let numberToText = number.toString();
    numberToText = numberToText.split('');
    let potencia = numberToText.length;
    let valor = 0;
    numberToText.forEach(element => {
        valor = valor + ( parseInt(element) ** parseInt(potencia));
    });

    return valor == number ? 'Amstrong' : 'Not Amstrong';
}

console.log(numberAmstrong(153));