const TAXA_MULTA = 2 / 100; 
const TAXA_JUROS = 0.33 / 100;
const valoresAnteriores = [];

function calcularMultaJuros() {
    var inDataVenc = document.getElementById("inDataVenc");
    var inValor = document.getElementById("inValor");
    var inMulta = document.getElementById("outMulta");
    var inJuros = document.getElementById("outJuros");
    var inTotal = document.getElementById("outTotal");

    var dataVenc = inDataVenc.value;
    var valor = Number(inValor.value);

    if(dataVenc == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os valores corretamente!");
        inValor.focus();
        return;
    }

    var hoje = new Date();
    var vencto = new Date();

    var partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1] - 1));
    vencto.setFullYear(Number(partes[0]));

    var atraso = hoje - vencto;
    
    var multa = 0;
    var juros = 0;

    if(atraso > 0) {
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    }
    
    var total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);

    valoresAnteriores.push(total);

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos() {
    location.reload();
} 

var btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos); 

/* function mostrarValores() {
    var exibir = "Valores informados anteriormente:\n";

    for(var i = 0; i < valoresAnteriores.length; i++) {
        exibir += valoresAnteriores[i] + "\n";
    }
    
    
}

var btMostrar = document.getElementById("btMostrar");
btCalcular.addEventListener("click", mostrarValores); */ 