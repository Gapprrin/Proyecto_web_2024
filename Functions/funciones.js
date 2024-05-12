
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


const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');

const foto = document.querySelector('#foto');

const generarUsuario = async () => {
    //consultar a la API
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
}


//crear un evento
document.addEventListener('DOMContentLoaded', generarUsuario);
boton.addEventListener('click', generarUsuario);














