let i = 0;
const imagenes = document.querySelectorAll('.banner-img');

function cambiarImagenes() {
    imagenes[i].classList.remove('active');
    i = (i + 1) % imagenes.length;
    imagenes[i].classList.add('active');
}

setInterval(cambiarImagenes, 5000);
