
const numero = document.getElementById("numero");

//Definimos el estilo inicial de la pagina
numero.style.textAlign = "center";

//Funcion que calcula el valor del triple del numero que esta en el div y el resultado lo imprimer directamente en la pagina

function triple(){

    numero.innerHTML *= 3;

}

//Funcion que cambia el color del div al pasar el cursor por encima

function cambiarColor(){

    numero.style.backgroundColor = "yellow";
    
}

//Funcion que devuelve el color del div al quitar el cursor de encima

function devolverColor(){

    numero.style.backgroundColor = null;

}
