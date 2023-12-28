/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
function printFibonacci() {

    let n1 = 0;
    let n2 = 1;

    for (let index = 0; index < 50; index++) {
        console.log(n1);
        let nl = n1 + n2;
        n1 = n2;
        n2 = nl;
    }
}

printFibonacci();