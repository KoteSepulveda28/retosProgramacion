/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */


function secondPosition(arrayNumbers){

    const list = arrayNumbers.sort(compareNumbers);
    return list[1];
}

function compareNumbers(a,b){
    return b-a;
}

const list = [3,5,2,5,7,8];
console.log(secondPosition(list))