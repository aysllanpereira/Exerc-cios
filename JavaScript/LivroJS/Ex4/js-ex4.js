function repetirFruta() {
    var inFruta = document.getElementById('inFruta');
    var inNumero = document.getElementById('inNumero');
    var outResultado = document.getElementById('outResultado');

    var fruta = inFruta.value;
    var num = Number(inNumero.value);

    if(fruta === "" || num === 0 || isNaN(num)) {
        alert('Número inválido!');
        inNumero.focus();
        return
    }

    var resultado = "";

    for (var i = 1; i <= num; i++) {
        if(i % 2 == 1) {
            resultado += fruta + "*";
        } else {
            resultado += fruta;
        } 
        
    }

    outResultado.textContent = resultado;
}

var mostrar = document.getElementById('btMostrar');
mostrar.addEventListener("click", repetirFruta);