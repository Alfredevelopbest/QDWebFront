/*const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const slickList = document.getElementById('slick-list');
const track = document.getElementById('track');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value){
     const trackWidth = track.offsetWidth;
     const listWidth = slickList.offsetWidth;
     track.style.left = "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat (track.style.left.slice(0,-2));
     if(leftPosition < (trackWidth - listWidth) && value == 2 ){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
     } else if(leftPosition > 0 && value == 1){
            track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
     }
}*/

const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const slickList = document.getElementById('slick-list');  
const track = document.getElementById('track');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;
    
    const leftPosition = track.style.left === "" ? 0 : -parseFloat(track.style.left.slice(0, -2));
    
    if (leftPosition < (trackWidth - listWidth) && value === 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if (leftPosition > 0 && value === 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las imágenes principales dentro de los div del track
    const trackImages = document.querySelectorAll('#track .a picture#principal img');

    // Selecciona las imágenes dentro del carouselExampleFade
    const carouselImages = document.querySelectorAll('#carouselExampleFade .carousel-inner .carousel-item img');

    // Agrega el evento de click a cada imagen principal
    trackImages.forEach((image) => {
        image.addEventListener('click', (event) => {
            // Encuentra el contenedor principal del elemento clicado
            const parent = event.target.closest('.a');

            // Encuentra las imágenes ocultas en el mismo contenedor
            const hiddenPictures = parent.querySelectorAll('.hidden img');

            // Reemplaza las rutas de las imágenes del carrusel con las rutas de las imágenes ocultas
            hiddenPictures.forEach((hiddenImage, index) => {
                if (carouselImages[index]) {
                    carouselImages[index].src = hiddenImage.src;
                }
            });
        });
    });
});


