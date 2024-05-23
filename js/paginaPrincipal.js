let currentIndex = 0;
const imagenes = document.querySelectorAll('.banner-image');

function cambiarImagenes() {
    imagenes[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imagenes.length;
    imagenes[currentIndex].classList.add('active');
}

setInterval(cambiarImagenes, 5000);
