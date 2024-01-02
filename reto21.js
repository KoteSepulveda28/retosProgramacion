/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

async function sumaConTiempoRespuesta(numb1, numb2, time){

    setTimeout(() => {
        console.log(parseInt(numb1) + parseInt(numb2));
    }, time);
}

sumaConTiempoRespuesta(10,10,11);
sumaConTiempoRespuesta(12,10,10);