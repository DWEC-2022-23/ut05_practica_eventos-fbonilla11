

let boton = document.getElementsByClassName("BotonAñadir")[0];

boton.addEventListener("click", anadirObjetos);

function anadirObjetos() {

    let lista = document.getElementsByTagName("ul")[0];
    var item = document.getElementsByClassName("AñadirElemento")[0].value;
    var li = document.createElement("li");
    li.innerHTML = item;
    lista.appendChild(li);
}
