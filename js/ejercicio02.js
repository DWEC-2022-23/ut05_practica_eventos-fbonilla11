//Definimos todos los enlaces

const enlace1 = document.getElementById("enlace_1");
const enlace2 = document.getElementById("enlace_2");
const enlace3 = document.getElementById("enlace_3");

//Definimos todos los divs a esconder/mostrar

const div1 = document.getElementById("contenidos_1");
const div2 = document.getElementById("contenidos_2");
const div3 = document.getElementById("contenidos_3");

//Definimos las funciones por cada div que vayamos a esconder/mostrar

function div1Esconder(){
    
    if(div1.style.display == "none"){

        enlace1.innerHTML = "Ocultar contenidos";
        div1.style.display = "block";
        

    }else{

        enlace1.innerHTML = "Mostrar contenidos";
        div1.style.display = "none";
        
    }
}

function div2Esconder(){

    if(div2.style.display == "none"){

        enlace2.innerHTML = "Ocultar contenidos";
        div2.style.display = "block";

    }else{
        enlace2.innerHTML = "Mostrar contenidos";
        div2.style.display = "none";
    }
}

function div3Esconder(){

    if(div3.style.display == "none"){

        enlace3.innerHTML = "Ocultar contenidos";
        div3.style.display = "block";

    }else{
        enlace3.innerHTML = "Mostrar contenidos";
        div3.style.display = "none";
    }
}

//Hacemos una sentencia if en las funciones donde compare el estado del display, ya que si el div esta escondido, la funcion lo mostrara y viceversa, al igual que de esta manera detecta cuando cambiar el mensaje del enlace.


