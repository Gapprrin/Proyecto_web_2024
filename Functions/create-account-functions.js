function validarComuna(){
    let user = document.querySelector("#comuna-usuario");
    var lista_comuna = ("Alhué",
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
        "Lo Espejo");
    
    if(user.value in lista_comuna){
        user.classList.add("valido");
        user.classList.remove("invalido");
        document.querySelector();
    }else{
        user.classList.add("invalido");
        user.classList.remove("valido");
        document.querySelector();
    }
}