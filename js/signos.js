let teclast = [
    "AC", "(", ")", "C", '<img src="./img/delete.png" class="eliminar">',
    7, 8, 9, "x²", "√",
    4, 5, 6, "*", "/",
    1, 2, 3, "-", "=",
    "%", 0, ".", "+"
];

function tcsss() {
    let tecs = document.querySelector(".esc");

    teclast.forEach((each_key) => {
        let div = document.createElement("div");
        div.innerHTML = each_key;
        div.classList.add("teclas");

        teclast.forEach((each_key2, indice) => {
            each_key == indice ? div.classList.add("num") : null;
        });
        each_key == "=" ? div.classList.add("igual") : null;

        tecs.appendChild(div);
    });
}

tcsss();
