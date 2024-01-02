/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function expresionesEquilibradas(string1, string2) {
    data1 = string1.split('');
    data2 = string2.split('');

    let filtro1 = data1.filter(p=> !data2.includes(p));
    let filtro2 = data2.filter(p=> !data1.includes(p));

    console.log(filtro1);
    console.log(filtro2);
}

expresionesEquilibradas( 'ABCDEFG', 'DEFGHI' )