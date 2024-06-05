// Selecciona los elementos del formulario y el contenedor de productos
const descripcionInput = document.getElementById('descripcionProducto');
const precioInput = document.getElementById('precioProducto');
const agregarBoton = document.getElementById('agregarProducto');
const productosContainer = document.getElementById('productos');

// Agrega un evento de click al botón de agregar producto
agregarBoton.addEventListener('click', function() {
    // Lee los valores de los inputs
    const descripcionProducto = descripcionInput.value;
    const precioProducto = precioInput.value;

    // Verifica si el último conjunto de productos está lleno
    const ultimaFila = productosContainer.lastElementChild;
    const productosEnFila = ultimaFila ? ultimaFila.querySelectorAll('.producto').length : 0;

    // Si la última fila está llena o no existe, crea una nueva fila
    if (!ultimaFila || productosEnFila === 4) {
        const nuevaFila = document.createElement('div');
        nuevaFila.classList.add('fila'); // Clase para estilizar la fila si es necesario
        productosContainer.appendChild(nuevaFila);
    }

    // Encuentra la última fila (que podría ser la nueva fila creada)
    const filaActual = productosContainer.lastElementChild;

    // Crea un nuevo producto
    const nuevoProducto = document.createElement('div');
    nuevoProducto.classList.add('producto'); // Puedes añadir estilos o clases según sea necesario
    nuevoProducto.innerHTML = `
        <div class="nombre">${descripcionProducto}</div>
        <div class="precio">${precioProducto}</div>
    `;

    // Inserta el nuevo producto en la fila actual
    filaActual.appendChild(nuevoProducto);

    descripcionInput.value = '';
    precioInput.value = '';
});