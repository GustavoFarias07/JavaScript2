function BotaoCalcular() {
    var aluno = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value

    validarNotas(nota1, nota2)
    var media = calcularMedia(nota1, nota2)
    exibirAprovacao(media, nota1, nota2, aluno)

}
function validarNotas(nota1, nota2){
    if(Number(nota1) > 10 ){
      alert("Nota 1 não pode ser maior que 10")
      return true
    } 
    if(Number(nota2) > 10 ){
        alert("Nota 2 não pode ser maior que 10")
        return true
      } 
}

function calcularMedia(nota1, nota2){
    var media = (Number(nota1) + Number(nota2)) / 2
    return media

}

function exibirAprovacao(media, nota1, nota2, aluno){
    if (media >= 7){
        document.getElementById("ResultadoMedia").innerHTML +=
        `<br> O aluno ${aluno} tirou nota ${nota1} e ${nota2}, sua media foi ${media} - <b class = "aprovado"> Aprovado </b>`
    }
    else{
        document.getElementById("ResultadoMedia").innerHTML +=
        `<br> O aluno ${aluno} tirou nota ${nota1} e ${nota2}, sua media foi ${media} - <b class = "reprovado"> Reprovado </b>`
    }
}

function BotaoLimpar() {
    document.getElementById("ResultadoMedia").innerHTML = ""
}
