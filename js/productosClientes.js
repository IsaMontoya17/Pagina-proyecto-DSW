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

document.addEventListener('DOMContentLoaded', () => {
    const botonesCarrito = document.querySelectorAll('.btn-carrito');

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', (event) => {
            const producto = event.target.parentElement;
            const nombre = producto.querySelector('p:nth-child(3)').textContent;
            const precio = parseFloat(producto.querySelector('p:nth-child(2)').textContent.replace('$', '').replace(',', ''));
            const img = producto.querySelector('img').src;

            const item = {
                nombre,
                precio,
                img,
                cantidad: 1
            };

            let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
            const productoExistente = carrito.find(producto => producto.nombre === nombre);

            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                carrito.push(item);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto añadido al carrito');
        });
    });
});