/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

function calculateAspectRatio(urlImagen) {
    var img = new Image();
    img.onload = function() {
        console.log('Ancho:', this.width, 'px');
        console.log('Alto:', this.height, 'px');
    };
    img.src = url;
}

calculateAspectRatio('https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_917506-214429.jpg?w=1380');