/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzBuzz()
{
    for (let index = 1; index <= 100; index++) {
        let multiploDe3 = (index % 3) == 0 ? true : false;
        let multiploDe5 = (index % 5) == 0 ? true : false;
        let print = (multiploDe3 ?  (multiploDe5 ? 'FIZZBUZZ' : 'FIZZ') : (multiploDe5  ? 'BUZZ' : index ) );
        console.log(print);
    }
}

fizzBuzz();