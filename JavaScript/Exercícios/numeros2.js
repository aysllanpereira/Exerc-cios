const { gets, print } = require('./numeros');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;
for (let i = 0; i < n; i++) {
    const numero = gets();

    if(numero % 2 === 0) {
        /* para simplificar, verifico de o maior numero é igual a nulo, se não for, verifico depois se o número é maior que o número par. No final, irá mostrar o maior numero par pois o maior numero está recebendo a variavel numero  */
        if(maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        /* aqui é a mesma lógica, verificar se o menor número é igual a nulo, se não for, verificar se o número é menor que o menor numero impar, por fim, dentro da condição irá mostrar o menor numero recebendo a variavel numero para mostrar o resultado */ 
        if(menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        } /* else if(numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        } */ 
    }
    
}

print(`O maior número par é: ` + maiorNumeroPar);
print(`O menor número ímpar é: ` + menorNumeroImpar);