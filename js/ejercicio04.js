
const lista = document.getElementsByTagName("ul")[0];


let botonAñadir = document.getElementsByClassName("boton")[0];
botonAñadir.addEventListener("click", anadirObjetos);

function anadirObjetos() {

    var item = document.getElementsByClassName("AñadirElemento")[0].value;
    var li = document.createElement("li");
    li.innerHTML = item;
    lista.appendChild(li);
}

let botonBorrarUltimo = document.getElementsByClassName("boton")[1];
botonBorrarUltimo.addEventListener("click", borrarUltimo);

function borrarUltimo(){

    lista.removeChild(lista.lastChild);

}


let botonBorrarPrimero = document.getElementsByClassName("boton")[2];
botonBorrarUltimo.addEventListener("click", borrarPrimero);


function borrarPrimero(){

    lista.removeChild(lista.firstChild);

}