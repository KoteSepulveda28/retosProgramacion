/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

function gatoGame(matrizGato) {

    const arregloFormasDeGanar = [['0-0', '0-1', '0-2'], ['1-0', '1-1', '1-2'], ['2-0', '2-1', '2-2'], ['0-0', '1-0', '2-0'], ['0-1', '1-1', '2-1'], ['0-2', '1-2', '2-2'], ['0-0', '1-1', '2-2'], ['0-2', '1-1', '2-0']];
    let keysGame = ['X', 'O'];

    for (const element of keysGame) {
        for (const formasDeGanar of arregloFormasDeGanar) {
            let isGanador = validaPremio(element, formasDeGanar, matrizGato);
            if (isGanador) { return element }
        }
    }

    return 'Empate';
}

function validaPremio(valorKey, formasDeGanar, matrizGato) {

    let win = true;
    formasDeGanar.forEach(element => {
        let data = element.split('-');
        if (matrizGato[data[0]][data[1]] != valorKey) { win = false }
    })
    return win;
}


let gato = [
    ['X', 'O', 'O'],
    ['O', 'X', 'O'],
    ['O', 'X', 'X']
];


console.table(gato);
console.log("The winner is: " + gatoGame(gato));