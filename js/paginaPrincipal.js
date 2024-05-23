let i = 0;
const imagenes = document.querySelectorAll('.banner-img');

function cambiarImagenes() {
    imagenes[i].classList.remove('active');
    i = (i + 1) % imagenes.length;
    imagenes[i].classList.add('active');
}

setInterval(cambiarImagenes, 5000);

function validarImagenCuadrada(img) {
    if (img.naturalWidth !== img.naturalHeight) {
        if (img.naturalWidth > img.naturalHeight) {
            img.style.height = 'auto';
            img.style.width = '20vw';
            img.style.maxHeight = '20vw';
        } else {
            img.style.width = 'auto';
            img.style.height = '20vw';
            img.style.maxWidth = '20vw'; 
        }
    } else {
        img.style.width = '20vw';
    }
}

