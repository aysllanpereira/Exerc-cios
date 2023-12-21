function clearDisplay() {
    document.getElementById("display").value = "";
}

function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
   var result = eval(document.getElementById("display").value);
   document.getElementById("display").value = result;
}

