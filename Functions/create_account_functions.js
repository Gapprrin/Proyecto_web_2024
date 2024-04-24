
/*function capitalize(texto){
    if(texto.classList =! String){
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
    
    if(lista_comuna.includes(user.value) || user.value == "" || user.value == " "){
        user.classList.add("valido");
        user.classList.remove("invalido");
        document.querySelector("#error-comuna").innerHTML = "";
    }else{
        user.classList.add("invalido");
        user.classList.remove("valido");
        document.querySelector("#error-comuna").innerHTML = "No se ha encontrado la comuna.";
    }
}