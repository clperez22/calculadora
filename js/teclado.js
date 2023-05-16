function sigg(operation, result){
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".pnt");
    records_box_DOM.innerHTML += `
        <li>
            <span > ${operation} </span>
            <span class="signo-igual"> = </span>
            <span class="result"> ${result} </span>
        </li>`;
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
}
