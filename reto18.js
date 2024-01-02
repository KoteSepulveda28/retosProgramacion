/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */


function carreraDeObstaculos(obstaculos, pasos){
    const valor = 'run_';
    const valor2 = 'jump|';
    let win = true;

    for (let index = 0; index < obstaculos.length; index++) {
        let carrera = pasos[index]+obstaculos[index];
        if(carrera != valor && carrera != valor2)
        {
            obstaculos[index] = obstaculos[index] == '_' ? 'x' : '/';
            win = false
        }
    }

    let textoPartida = win ? 'Carrea completada con exito!' : 'Game Over';

    console.log(textoPartida);
    console.log(obstaculos);
}



let pasosControl = ['run', 'run','jump','jump'];
let obscatulosGame = ['_','|','|','_'];


carreraDeObstaculos(obscatulosGame, pasosControl);