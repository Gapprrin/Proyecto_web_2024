function productosget(){
    // variable con url
    let url = "https://api.escuelajs.co/api/v1/products/"
    // pide informacion a url
    for(let i = 1; i <= 6; i++){
    fetch(url + i)
        .then(respuesta => {
            if (!respuesta.ok){ throw new Error("error para conseguir datos") }
            console.log('funca')  
            return respuesta.json();
        
}    )
.then(datos =>{
    let titulo = datos.title;
    console.log(titulo);
    let imagen = datos.images[0];
    let precio = datos.price;
    let descripcion = datos.description;

    let tituloProducto = document.getElementById(`tituloProducto${i}`);
    tituloProducto.innerHTML = titulo;

    let imagenProducto = document.getElementById(`imagen${i}`);
    imagenProducto.src = imagen;

    let precioProducto = document.getElementById(`precio${i}`);
    precioProducto.innerHTML = precio;

    let descripcionProducto = doument.getElementById(`descripcion${i}`);
    descripcionProducto.innerHTML = descripcion;

   // let tituloProducto = document.getElementById('tituloCambiar');
    //tituloProducto.textContent = titulo;

    //let PrecioProducto = document.getElementById("PrecioCambiar");
    //PrecioProducto.textContent = precio;


 
}
    
)
.catch(error => {
    console.error("se produjo un error: ", error);
})




}}