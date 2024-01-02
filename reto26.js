/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function cachiPum(arreglo){
    let player1 = 0;
    let player2 = 0;

    arreglo.forEach(element => {
        switch (element[0]) {
            case "R":
                if(element[0] != element[1]){
                    element[1] == "P" ? player2 ++ : player1 ++;
                }
            break;
            case "S":
                if(element[0] != element[1]){
                    element[1] == "R" ? player2 ++ : player1 ++;
                }
            break;
            case "P":
                if(element[0] != element[1]){
                    element[1] == "S" ? player2 ++ : player1 ++;
                }
            break;
        }
    });

    console.log("player 1: "+player1);
    console.log("player 2: "+player2);

}


cachiPum([["R","P"],["R","S"],["R","P"]]);