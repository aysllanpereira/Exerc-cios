function calcular() {

    // validação das entradas 
    const contrato = parseInt(document.getElementById("icontrato").value);
    const prazo = parseFloat(document.getElementById("iprazo").value);
    const valorPago = parseFloat(document.getElementById("ivalor").value);
    
   // conversão de datas 
    const dataDoDia = moment(document.getElementById("idatadodia").value);
    const dataQuitacao = moment(document.getElementById("idata").value);

    // calculos 
    const multiplicar = (valorPago * 0.01);
    const diasEmAtraso = dataDoDia - dataQuitacao;
    const diferencaEmDias = Math.floor(Math.abs(diasEmAtraso) / (1000 * 60 * 60 * 24));
    const final = (multiplicar / prazo) * diferencaEmDias;

    // se não informar um valor correto, irá exibir um alerta
    if(isNaN(prazo)) {
        alert("Por favor, insira um valor numérico válido para o prazo");
        return;
    }

    // adicionando o prazo 
   dataQuitacao.add(prazo, 'days');

   // atualização do resultado da página
   const resultado = document.getElementById("resultado");
   resultado.innerHTML = `O resultado é: ${dataQuitacao.format("DD/MM/YYYY")} e está a ${diferencaEmDias} dias em atraso e o valor é: ${final.toFixed()}`;

}

const mostrar = document.getElementById("resultado");
mostrar.addEventListener("click", calcular);