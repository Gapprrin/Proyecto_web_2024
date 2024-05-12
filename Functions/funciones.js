
// APY DOLAR---------------------------------------------------------------------------------------------------------------------------

let accesorios = [
    {
        "nombre": "Neumático blabla",
        "precio": "249000",
        "imagen": "../neumatico3.jpg",
    },
    {
        "nombre": "blabla",
        "precio": "200000",
        "imagen": "",
    },

    {
        "nombre": "Volante",
        "precio": "249000",
        "imagen": "",
    },
    {
        "nombre": "Asiento",
        "precio": "200000",
        "imagen": "",
    },
];

function getProductos() {
    let productos = document.querySelector(".productos");

    // Hacer solicitud HTTP a la API de Mindicador para obtener el tipo de cambio de dólares
    fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
        let dolarPrice = data.dolar.valor; // Obtener el valor del dólar en pesos chilenos

        accesorios.forEach(t => {
            let producto = document.createElement("div");
            producto.classList.add("producto");

            // Agregar imagen
            let imagen = document.createElement("div");
            imagen.classList.add("imagen");
            imagen.style.backgroundImage = 'url(' + t.imagen + ')';
            producto.appendChild(imagen);

            // Calcular precio en dólares
            let precioEnDolares = parseFloat(t.precio) / dolarPrice;

            // Agregar precio en dólares
            let precioDolares = document.createElement("div");
            precioDolares.classList.add("precio");
            precioDolares.innerHTML = `$${precioEnDolares.toFixed(2)} USD`; // Formatear el precio a 2 decimales
            producto.appendChild(precioDolares);

            // Agregar precio en pesos chilenos
            let precioPesos = document.createElement("div");
            precioPesos.classList.add("precio");
            precioPesos.innerHTML = `$${t.precio} CLP`;
            producto.appendChild(precioPesos);

            // Agregar el nombre
            let nombre = document.createElement("div");
            nombre.classList.add("nombre");
            nombre.innerHTML = t.nombre;
            producto.appendChild(nombre);

            productos.appendChild(producto);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

getProductos();

//APY USUARIOS---------------------------------------------------------------------------------------------------------------------------


async function obtenerUsuarioAleatorio() {
    var response = await fetch('https://randomuser.me/api/');
    var data = await response.json();
    return data.results[0];
}

// Función para obtener un testimonio aleatorio de la API
async function obtenerTestimonioAleatorio() {
    var response = await fetch('https://api.quotable.io/random');
    var data = await response.json();
    return data;
}

// Función para mostrar los datos del usuario y el testimonio
async function mostrarDatosUsuario() {
    var usuario = await obtenerUsuarioAleatorio();
    var testimonio = await obtenerTestimonioAleatorio();
    document.getElementById("nombre").textContent = `${usuario.name.first} ${usuario.name.last}`;
    document.getElementById("nacionalidad").textContent = `Nacionalidad: ${usuario.nat}`;
    document.getElementById("testimonio").textContent = `"${testimonio.content}" `;
    document.getElementById("foto").src = usuario.picture.large;
    document.getElementById("foto").alt = `${usuario.name.first} ${usuario.name.last}`;
}

// Mostrar los datos del usuario y el testimonio cuando la página se carga por primera vez
window.onload = function() {
    mostrarDatosUsuario();
};

// Evento de clic en el botón para mostrar nuevos datos del usuario y testimonio
document.getElementById("boton").addEventListener("click", function() {
    mostrarDatosUsuario();
});














