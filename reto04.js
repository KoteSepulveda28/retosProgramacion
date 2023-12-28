/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function buclePrimos() {
    for (let index = 1; index <= 100; index++) {
        console.log(esPrimo(index) ? index : '');
    }
}

function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

buclePrimos();