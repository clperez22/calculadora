function sigg(operation, result) {
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".pnt");
    let listItem = document.createElement("li");
    let operationSpan = document.createElement("span");
    let equalSpan = document.createElement("span");
    let resultSpan = document.createElement("span");
    let deleteButton = document.createElement("button");
  
    operationSpan.textContent = operation;
    equalSpan.classList.add("signo-igual");
    equalSpan.textContent = "=";
    resultSpan.classList.add("result");
    resultSpan.textContent = result;
    deleteButton.classList.add("delete-item");
    deleteButton.textContent = " X ";
  
    listItem.appendChild(operationSpan);
    listItem.appendChild(equalSpan);
    listItem.appendChild(resultSpan);
    listItem.appendChild(deleteButton);
    records_box_DOM.appendChild(listItem);
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
  
    deleteButton.addEventListener("click", function () {
      let listItem = this.parentNode;
      let resultText = listItem.querySelector(".result").textContent;
      listItem.remove();
      if (resultaddo.value === resultText) {
        resultaddo.value = "";
      }
    });
  
    let currentResult = resultaddo.value;
    resultaddo.addEventListener("input", function () {
      currentResult = resultaddo.value;
    });
  
    listItem.addEventListener("click", function () {
      resultaddo.value = result;
    });
  }
  
