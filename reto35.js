/*
 * Dado un array de enteros ordenado y sin repetidos,
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

function validateArray(arrayNumbers){
    if(arrayNumbers.length > 1){
        for (let index = 0; index < arrayNumbers.length; index++) {
            if(index != 0){
                if(arrayNumbers[index] <= arrayNumbers[index - 1]) return false;
            }
        }

        return true;
    }
    else{
        return false;
    }
}

function numerosFaltantes(arrayNumbers){
    const validacion = validateArray(arrayNumbers);
    if(!validacion) return 'El array esta mal formado';

    const primero = arrayNumbers[0]
    const ultimo = arrayNumbers[arrayNumbers.length -1]


    let data = [];
    for (let index = primero; index <= ultimo; index++) {
        const number = arrayNumbers.find((element) => element == index);
        data.push(number ? '*' + index : index);
    }

    return data;
}



const list = [2,7,9,14,19];
console.log(numerosFaltantes(list));