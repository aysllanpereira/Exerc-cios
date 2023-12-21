var vetor = [];

function adicionarClubes() {

    var inClube = document.getElementById('inClube');

    var clube = inClube.value;

    if(clube === "") {
        alert("Por favor, insira um dado!");
        inClube.focus();
        return;
    }

    vetor.push({clube: clube});
    inClube.value = "";
    inClube.focus();

    listarClubes();

}

var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes() {
    if(vetor.length == 0) {
        alert("Informe um dado");
        return;
    }

    var lista = "";

    for( var i = 0; i < vetor.length; i++ ) {
        lista += (i + 1) + " - " + vetor[i].clube + "\n";
    }

    document.getElementById('outExibir').textContent = lista;

}

var btListar = document.getElementById('btListar');
btListar.addEventListener("click", listarClubes);

function mostrarTabela() {

    if(vetor.length === 0 || vetor.length % 2) {
        alert("Não há clubes na lista para exibir na tabela");
        return;
    }

    vetor.sort(function (a, b) {
        return (a.clube, b.clube);
    });

    var tabela = "";
    
    for (var i = 0; i < vetor.length / 2; i++) {
            var primeiro = vetor[i].clube;
            var ultimo = vetor[vetor.length - 1 - i].clube;
            var segundo = vetor[i + 1].clube;
            var penultimo = vetor[vetor.length - 2 - i].clube;
            
            tabela += primeiro + " x " + ultimo + "\n";
            tabela += segundo + " x " + penultimo + "\n";

            i++;
        }

    

    /* 
    var primeiroColocado = vetor[1].clube;
    var ultimoColocado = vetor[vetor.length - 1].clube;

    var resultado = primeiroColocado + " x " + ultimoColocado;
    */
    document.getElementById('outExibir').textContent = tabela;
    
}

var btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener("click", mostrarTabela);