class Notas {
    constructor(nome, nota1, nota2, nota3) {
        this.nome = nome;
        this.notas = [nota1, nota2, nota3];
    }

    calcularMedia() {
        const somaNotas = this.notas.reduce((total, nota) => total + parseFloat(nota), 0);
        return somaNotas / this.notas.length;
    }

    calcularValorDaMedia() {
        let media = this.calcularMedia();

        if(media < 5) {
            return (`Reprovado!`);
        } else if(media >= 5 && media < 7) {
            return (`Recuperação!`);
        } else {
            return (`Aprovado!`);
        }
    }
}


function calcular() {
    let aluno = document.getElementById('ialuno').value;
    let nota1 = document.getElementById('inota1').value;
    let nota2 = document.getElementById('inota2').value;
    let nota3 = document.getElementById('inota3').value;
    let res = document.getElementById('res');
    let nota = new Notas(aluno, nota1, nota2, nota3);
    let mediaDoAluno = nota.calcularMedia();
    let resultado = nota.calcularValorDaMedia();

    res.innerHTML = `${aluno} a sua primeira nota foi ${nota1}, a sua segunda nota foi ${nota2} e a terceira e ultima nota foi ${nota3}. A sua média final foi ${mediaDoAluno.toFixed(2)} ${resultado}!`;
} 