const buttonAdd = document.getElementById("buttonAdd")
buttonAdd.addEventListener("click", addNumber)
const buttonResult = document.getElementById("buttonResult")
buttonResult.addEventListener("click", showResult)

const noOrderList = document.getElementById("noOrderList")

let result = 0
function addNumber() {
    const elementLi = document.createElement("li");
    let idNumber = document.getElementById("idNumber").value
    elementLi.innerText = "Numero " + idNumber;
    document.getElementById("noOrderList").appendChild(elementLi);
    result += Number(idNumber)
}

function showResult() {
    document.getElementById("result").innerHTML = "La sumatoria da: " + result
}