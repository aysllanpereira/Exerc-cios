

function criptografar() {

    var mensagem = document.getElementById("inmensagem");
    var receberMensagem = mensagem.value;
    var mensagemCriptografadaPares = "";
    var mensagemDescriptografadaImpares = "";
    
    if(receberMensagem == "") {
        alert("Informe uma mensagem corretamente!");
        mensagem.focus();
        return;
        // se o formulário estiver vazio, exibe um alerta
    }
    // debugger
    // lopp de repetição para percorrer toda a mensagem
    for(let i = 0; i < receberMensagem.length; i++) {
        // verifica se é par ou impar
        if(i % 2 === 0) {
            mensagemCriptografadaPares += receberMensagem[i];
        } else {
            mensagemDescriptografadaImpares += receberMensagem[i];
        }
    }
    // concatena mensagem pares e impares e exibe a mensagem criptografada
    const mensagemCriptografada = mensagemCriptografadaPares + mensagemDescriptografadaImpares;
    document.getElementById("mensagemCriptografada").textContent = `Mensagem Criptografada é: ${mensagemCriptografada}`;

    

}

var result1 = document.getElementById("criptografar");
result1.addEventListener("click", criptografar);

function recarregar() {
    location.reload();
    // funcção para recarregar a página no final e focar o cursor no formulário
    // const recarregarFormulario = document.getElementById("recarregar");

    // mensagem.focus();
}

var recarregarPágina = document.getElementById("recarregar");
recarregarPágina.addEventListener("click", function() {
    var mensagem = document.getElementById("inmensagem");
    mensagem.value = "";
    mensagem.focus();
    // funcção para recarregar a página no final e focar o cursor no formulário
});

function descriptografar() {
    // função para descriptografar a mensagem e exibir ela da forma que foi escrita
    const mensagemCriptografada = document.getElementById("mensagemCriptografada").textContent.split(": ")[1];
    let mensagemDescriptografada = "";
    // debugger
    // percorre todo o texto
    for(let i = 0, j = 0, k = mensagemCriptografada.length; i < k; i--) {
        // 
        mensagemDescriptografada += i % 2 === 0 ? mensagemCriptografada[j++] : mensagemCriptografada[i++];
        
        
    }

    document.getElementById("mensagemCriptografada").textContent = `Mensagem Descritografada é: ${mensagemDescriptografada}`;
}

var descritografia = document.getElementById("descriptografar");
descritografia.addEventListener("click", descriptografar);