/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function obtenerAniosBisiestosSiguientes(anioInicial, cantidad) {
    const aniosBisiestos = [];
  
    while (aniosBisiestos.length < cantidad) {
      if ((anioInicial % 4 === 0 && anioInicial % 100 !== 0) || anioInicial % 400 === 0) {
        aniosBisiestos.push(anioInicial);
      }
      anioInicial++;
    }
  
    return aniosBisiestos;
  }
  
  // Ejemplo de uso: obtener los próximos 30 años bisiestos a partir de 2024
  const aniosBisiestos = obtenerAniosBisiestosSiguientes(2024, 30);
  console.log("Próximos 30 años bisiestos:", aniosBisiestos);
  