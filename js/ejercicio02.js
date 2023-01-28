
const boton = document.getElementById("boton");

boton.addEventListener("click", cambiarFondo);

function cambiarFondo(){

    let div = document.getElementsByTagName("div").item(0);
    
    if(div.className == "oscuro"){

        let divClaro = document.querySelector(".claro");

        div.className = "inverso";
        boton.innerHTML = "Fondo oscuro";

    }else if(div.className == "inverso"){

        let divOscuro = document.querySelector(".oscuro");

        div.className = "oscuro";
        boton.innerHTML = "Fondo claro";

    }

}