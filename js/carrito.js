document.addEventListener('DOMContentLoaded', () => {
    const carritoItemsContainer = document.querySelector('.carrito-items');
    const carritoTotalPrecio = document.getElementById('carrito-total-precio');
    const carritoComprarButton = document.getElementById('carrito-comprar');
    const carritoCuponAplicarButton = document.getElementById('carrito-cupon-aplicar');
    const carritoCuponCodigoInput = document.getElementById('carrito-cupon-codigo');

    let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
    let descuento = 0;

    function actualizarCarrito() {
        carritoItemsContainer.innerHTML = '';
        let total = 0;

        carrito.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('carrito-item');

            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.nombre}">
                <div class="carrito-item-info">
                    <p>${item.nombre}</p>
                    <p class="carrito-item-precio">$${Math.round(item.precio)}</p>
                </div>
                <div class="carrito-item-cantidad">
                    <input type="number" value="${item.cantidad}" min="1" data-index="${index}">
                </div>
                <button class="carrito-item-eliminar" data-index="${index}">Eliminar</button>
            `;

            carritoItemsContainer.appendChild(itemElement);

            total += item.precio * item.cantidad;
        });

        total = total - (total * descuento / 100);
        carritoTotalPrecio.textContent = `$${Math.round(total)}`;
    }

    carritoItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('carrito-item-eliminar')) {
            const index = event.target.getAttribute('data-index');
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
        }
    });

    carritoItemsContainer.addEventListener('change', (event) => {
        if (event.target.type === 'number') {
            const index = event.target.getAttribute('data-index');
            carrito[index].cantidad = parseInt(event.target.value);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
        }
    });

    carritoComprarButton.addEventListener('click', () => {
        alert('Compra realizada con éxito');
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    });

    carritoCuponAplicarButton.addEventListener('click', () => {
        const cuponCodigo = carritoCuponCodigoInput.value.trim();

        // cambiar coso de descuento
        if (cuponCodigo === 'DESCUENTO10') {
            descuento = 10;
            alert('Cupón aplicado: 10% de descuento');
        } else {
            descuento = 0;
            alert('Cupón no válido');
        }

        carritoCuponCodigoInput.value = '';  
        actualizarCarrito();
    });

    actualizarCarrito();
});
