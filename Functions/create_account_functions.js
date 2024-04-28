
function capitalize(texto){
    let palabras = "";
    if(typeof texto === "string" && texto.trim().length > 0){
        for (const iterator of texto.split(" ")) {
            //console.log(iterator[0].toUpperCase());
            for (const letra in iterator){
                if (letra == 0){
                    palabras += iterator[letra].toUpperCase();
                }else{
                    palabras += iterator[letra].toLowerCase();
                }
            }
            palabras += " ";
        }
        return palabras.trim();
    }else{
        return;
    }
}

// listas medio raras que servirán para valdar xdd
let usuario = {
    userName: "Alfonso",
    userEmail: "acerda@gmail.com",
    userCommune: "Huechuraba",
    userPassword: "12345_R",
}



function validarComuna(){
    let user = document.querySelector("#input-comuna");
    var lista_comuna = ["Alhué",
        "Curacaví",
        "María Pinto",
        "Melipilla",
        "San Pedro",
        "Cerrillos",
        "Cerro Navia",
        "Conchalí",
        "El Bosque",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "La Cisterna",
        "La Granja",
        "La Florida",
        "La Pintana",
        "La Reina",
        "Las Condes",
        "Lo Barnechea",
        "Lo Espejo"];
    
    if(lista_comuna.includes(user.value.trim())){
        user.classList.add("valido");
        user.classList.remove("invalido");
        document.querySelector("#error-comuna").innerHTML = "";
    }else if(user.value.trim() == ""){
        user.classList.remove("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-comuna").innerHTML = "Debe rellenar el campo.";
    }else{
        user.classList.add("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-comuna").innerHTML = "No se ha encontrado la comuna.";
    }
}


function validarNombre(){

    let user = document.querySelector("#input-nombre-usuario");

    if(user.value.trim().length >= 5){
        if(capitalize(user.value) == usuario.userName){
            document.querySelector("#error-usuario").innerHTML = "Nombre de usuario no disponible.";
        }else{
            user.classList.add("valido");
            user.classList.remove("invalido");
            document.querySelector("#error-usuario").innerHTML = "";
        }
    }else if(user.value.trim() == ""){
        user.classList.remove("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-usuario").innerHTML = "Debe rellenar el campo.";
    }else{
        user.classList.add("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-usuario").innerHTML = "Nombre de usuario inválido.";
    }
}

function validarContrasenia(){
    let user = document.querySelector("#pass");
    if(user.value.length >= 8){
        user.classList.add("valido");
        user.classList.remove("invalido");
        document.querySelector("#error-contrasenia").innerHTML = "";
    }else if(user.value.trim() == ""){
        user.classList.remove("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-contrasenia").innerHTML = "Debe rellenar el campo.";
    }else{
        user.classList.add("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-contrasenia").innerHTML = "Debe tener un largo mínimo de 8 caracteres.";
    }
}

