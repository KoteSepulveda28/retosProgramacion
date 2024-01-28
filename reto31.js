/*
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

function printText(text){
    let arregloText = text.split(' ');
    const cadenaMasLarga = arregloText.reduce((cadenaMasLarga, cadenaActual) => {
        return cadenaActual.length > cadenaMasLarga.length ? cadenaActual : cadenaMasLarga;
    })

    const maxLargo = cadenaMasLarga.length;
    let asterisco = '';
    for (let index = 0; index < maxLargo + 4; index++) {
        asterisco += '*';
    }


    
    console.log(asterisco);
    arregloText.forEach(element => {
        let faltante = maxLargo - element.length;
        let restante = '';
        for (let index = 0; index < faltante; index++) {
            restante += ' ';
        }
        console.log('* '+element + restante + ' *');
    });
    console.log(asterisco);
}

// printText('¿Que te parece el reto?');
printText('Pedro Perez Pereira pobre pintor Portuguez, pinta preciosos paisajes para poder pasar por Paris');