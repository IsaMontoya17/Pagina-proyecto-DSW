const productos = [
    {
        img: './img/producto1.webp',
        precio: '$30,000',
        descripcion: 'Kit de brochas pink travel x6'
    },
    {
        img: './img/producto2.webp',
        precio: '$40,000',
        descripcion: 'Lip gloss 1st scene'
    },
    {
        img: './img/producto3.jpg',
        precio: '$15,000',
        descripcion: 'GEL fijador de cejas Melu'
    },
    {
        img: './img/producto4.jpg',
        precio: '$190,000',
        descripcion: 'Polvo One Size'
    },
    {
        img: './img/producto5.jpg',
        precio: '$230,000',
        descripcion: 'Translucent loose setting powder Laura Mercier'
    },
    {
        img: './img/producto6.jpg',
        precio: '$65,000',
        descripcion: 'Maybelline Lifter Gloss Plump'
    },
    {
        img: './img/producto7.jpg',
        precio: '$100,000',
        descripcion: 'Hair vitamins Sugarbearhair'
    },
    {
        img: './img/producto8.webp',
        precio: '$110,000',
        descripcion: 'Paleta Classic Atenea'
    },
    {
        img: './img/producto9.jpg',
        precio: '$200,000',
        descripcion: 'Sol de Janeiro Mist'
    }
];

window.onload = function() {
    let i = 0;
    const imgs = document.querySelectorAll('.banner-img');

    function cambiarImagenes() {
        imgs[i].classList.remove('active');
        i = (i + 1) % imgs.length;
        imgs[i].classList.add('active');
    }

    setInterval(cambiarImagenes, 5000);

    mostrarProductos();
    pasarProductos();
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

let currentIndex = 0;
const itemsPerPage = 3;

function mostrarProductos() {
    const contenedorFavoritos = document.querySelector('.favoritos');
    contenedorFavoritos.innerHTML = '';

    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const productosPagina = productos.slice(start, end);

    productosPagina.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${producto.img}" alt="${producto.descripcion}" class="producto-img">
            <p>${producto.precio}</p>
            <p>${producto.descripcion}</p>
            <button class="btn-carrito">Añadir al carrito</button>
        `;
        contenedorFavoritos.appendChild(card);
    });

    let imagenes = document.querySelectorAll('.producto-img');
    imagenes.forEach(function(img) {
        validarImagenCuadrada(img);
    });

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
}


function pasarProductos() {
    const btnAnterior = document.querySelector('.anterior');
    const btnSiguiente = document.querySelector('.siguiente');

    btnAnterior.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = Math.ceil(productos.length / itemsPerPage) - 1;
        }
        mostrarProductos();
    });

    btnSiguiente.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex * itemsPerPage >= productos.length) {
            currentIndex = 0;
        }
        mostrarProductos();
    });
}
