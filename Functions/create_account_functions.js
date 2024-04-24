
/*function capitalize(texto){
    if(typeof texto === String){
        return;
    }else{
        null;
    }
}*/

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
        user.classList.add("valido");
        user.classList.remove("invalido");
        document.querySelector("#error-usuario").innerHTML = "";
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
    
}