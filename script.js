//A CADA BOTÓN LE AÑADIMOS UN EVENTO PARA LLAMAR A SU FUNCIÓN AL DARLE CLICK
const buttonAdd = document.getElementById("buttonAdd")
buttonAdd.addEventListener("click", addNumber)
const buttonResult = document.getElementById("buttonResult")
buttonResult.addEventListener("click", showResult)

const noOrderList = document.getElementById("noOrderList")

let result = 0
function addNumber() {
    //CREAMOS UN ELEMENTO 'li' Y LE INSERTAMOS TEXTO
    const elementLi = document.createElement("li");
    let idNumber = document.getElementById("idNumber").value
    elementLi.innerText = "Numero " + idNumber;
    //INSERTAMOS EL ELEMENTO DENTRO DE LA LISTA NO ORDENADA (ul)
    document.getElementById("noOrderList").appendChild(elementLi);
    //AL RESULTADO LE VAMOS SUMANDO EL VALOR NUMÉRICO DEL INPUT
    result += Number(idNumber)
}

function showResult() {
    document.getElementById("result").innerHTML = "La sumatoria da: " + result
}