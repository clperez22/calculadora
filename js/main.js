let resultaddo = document.querySelector("#pantalla");

function agt() {
    let ll = this.innerHTML;
    resultaddo.value = resultaddo.value + ll;
}

function eloperacion() {
    resultaddo.value = "";
}

function eltdo() {
    resultaddo.value = "0";
    document.querySelector(".pnt").innerHTML = "";
}

function elletra() {
    var content = resultaddo.value;
    var nuevoValor = content.slice(0, -1);
    resultaddo.value = nuevoValor;
}

function operacion() {
    let operacion = document.querySelector("#pantalla");
    let t = eval(operacion.value);
    sigg(operacion.value, t);
    operacion.value = t;
}

let keys_dom = document.querySelectorAll(".teclas");

keys_dom.forEach((keys_content) => {
    let content = keys_content.innerHTML;

    if (content == "C") {
        keys_content.addEventListener("click", eloperacion);
    } else if (content == "=") {
        keys_content.addEventListener("click", operacion);
    } else if (content == "AC") {
        keys_content.addEventListener("click", eltdo);
    } else if (content == '<img src="./img/delete.png" class="eliminar">') {
        keys_content.addEventListener("click", elletra);
    } else {
        keys_content.addEventListener("click", agt);
    }
});
