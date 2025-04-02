let currentIndex = 0; //Indice ctual del carrusel
const images = document.querySelectorAll('img');
const totalImages = images.length;

function moveSlide(direction){
    currentIndex+= direction;
    //Si nos pasamos de la primera o la ultima imagen, volvemos al inicio o al final
    if(currentIndex > 0){
        currentIndex = totalImages -1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    //Movemos el carrusel
    const offset = -currentIndex * 100; // Calcula el desplazamiento en porcentaje
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}