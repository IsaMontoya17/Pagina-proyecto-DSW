window.onload = function() {
    let i = 0;
    const imgs = document.querySelectorAll('.banner-img');

    function cambiarImagenes() {
        imgs[i].classList.remove('active');
        i = (i + 1) % imgs.length;
        imgs[i].classList.add('active');
    }

    setInterval(cambiarImagenes, 5000);

    let imagenes = document.querySelectorAll('.producto-img');
    imagenes.forEach(function(img) {
        img.setAttribute("onload", "validarImagenCuadrada(this)")
        validarImagenCuadrada(img);
    });
};

function validarImagenCuadrada(img) {
    if (img.complete) {
        ajustarImagen(img);
    } else {
        img.onload = function() {
            ajustarImagen(img);
        };
    }
}

function ajustarImagen(img) {
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

