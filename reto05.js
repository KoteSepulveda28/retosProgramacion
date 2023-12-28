/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */


function calculateArea(poligon) {

    let area;
    const {type, ancho, largo} = poligon;
    switch (type) {
        case 'triangulo':
            area = (ancho * largo) / 2;
        break;
        case 'cuadrado':
        case 'rectangulo':
            area = ancho * largo;
        break;
        default:
            console.log("type not supported")
            return false;
        break;
    }
    console.log("El area del "+type+" es: " + area);
}

calculateArea({"type" : "triangulo", "largo" : 15, "ancho" : 15 });
calculateArea({"type" : "cuadrado", "largo" : 20, "ancho" : 40 });
calculateArea({"type" : "rectangulo", "largo" : 15.6, "ancho" : 12.9 });
calculateArea({});