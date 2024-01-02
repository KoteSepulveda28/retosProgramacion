/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function dateDiference(date1, date2){
    let dia1 = new Date(date1);
    let dia2 = new Date(date2);

    let diferenciaEnMilisegundos = Math.abs(dia2 - dia1);

    let diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

    console.log(diferenciaEnDias);

}


dateDiference('2023-01-01', '2024-01-01');