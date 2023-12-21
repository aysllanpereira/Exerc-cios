function mostrarPromocao() {
    let inMedicamento = document.getElementById("inMedicamento");
    let inPreco = document.getElementById("inPreco");
    let outValor = document.getElementById("outValor");

    let med = inMedicamento.value;
    let preco = Number(inPreco.value);

    let calcular = Math.floor(preco * 2);
    outValor.textContent = `Promoção de ${med}. Leve 2 por apenas R$: ${calcular.toFixed(2)}`;
}

let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocao);