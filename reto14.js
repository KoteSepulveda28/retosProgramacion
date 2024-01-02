/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorialRecursivo(n){
    if(n === 0){
        return 'fin';
    }

    return n * factorialRecursivo(n - 1);
}


console.log(factorialRecursivo(5));