

function criptografar() {

    var mensagem = document.getElementById("inmensagem");
    var receberMensagem = mensagem.value;
    var mensagemCriptografadaPares = "";
    var mensagemDescriptografadaImpares = "";
    
    if(receberMensagem == "") {
        alert("Informe uma mensagem corretamente!");
        mensagem.focus();
        return;
    }
    // debugger
    for(let i = 0; i < receberMensagem.length; i++) {
        if(i % 2 === 0) {
            mensagemCriptografadaPares += receberMensagem[i];
        } else {
            mensagemDescriptografadaImpares += receberMensagem[i];
        }
    }
    
    const mensagemCriptografada = mensagemCriptografadaPares + mensagemDescriptografadaImpares;
    document.getElementById("mensagemCriptografada").textContent = `Mensagem Criptografada é: ${mensagemCriptografada}`;

    

}

var result1 = document.getElementById("criptografar");
result1.addEventListener("click", criptografar);

function recarregar() {
    location.reload();

    // const recarregarFormulario = document.getElementById("recarregar");

    // mensagem.focus();
}

var recarregarPágina = document.getElementById("recarregar");
recarregarPágina.addEventListener("click", function() {
    var mensagem = document.getElementById("inmensagem");
    mensagem.value = "";
    mensagem.focus();
});

function descriptografar() {
    const mensagemCriptografada = document.getElementById("mensagemCriptografada").textContent.split(": ")[1];
    let mensagemDescriptografada = "";

    for(let i = 0, j = 0, k = mensagemCriptografada.length; i < k; i++) {
        mensagemDescriptografada += i % 2 === 0 ? mensagemCriptografada[j++] : mensagemCriptografada[i];
    }

    document.getElementById("mensagemCriptografada").textContent = `Mensagem Descritografada é: ${mensagemDescriptografada}`;
}

var descritografia = document.getElementById("descriptografar");
descritografia.addEventListener("click", descriptografar);