var datos = document.getElementById("datos");
var titulo = document.getElementById("titulo");
var info = document.getElementById("info")

let body = document.querySelector('#body');
document.addEventListener('mousemove', raton);

let body1 = document.querySelector('#body');
document.addEventListener('keydown', teclado);

function raton(e) {
    titulo.innerHTML = "Ratón";
    datos.innerText = `
    Navegador [${e.screenX}, ${e.screenY}]
    Página [${e.clientX}, ${e.clientY}]`;
    info.style.backgroundColor = null;
}

function teclado(e1) {
    titulo.innerHTML = "Teclado";
    datos.innerText = `
    Caracter [${e1.key}]
    Código [${e1.keyCode}]`;
    info.style.backgroundColor = "#CCE6FF";
}

function cambiarColor(){
    info.style.backgroundColor = "#FFFFCC";
}




