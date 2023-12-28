/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagrama(string1, string2) {
    let val;
    string1 == string2 ?
        val = 'NO ANAGRAMA'
    :
        val = validaAnagrama(string1, string2);

    console.log(val);
}

function validaAnagrama(string1, string2)
{
    let array1 = string1.split('');
    let array2 = string2.split('');
    if(array1.length === array2.length)
    {
        array1.forEach(element => {
            let data = array2.find((search) => search === element);
            if(!data)
            {
                return 'NO ANAGRAMA';
            }
        });

        return 'SI ANAGRAMA'
    }
    else
    {

        return 'NO ANAGRAMA';
    }
}

isAnagrama('HOLA', 'HOLAS');
isAnagrama('PALO', 'LOPA');
isAnagrama('CECECECE', 'ECECECEC');
