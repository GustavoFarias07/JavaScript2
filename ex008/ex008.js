function BotaoCalcular() {
    var aluno = document.getElementById("aluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var media = ( Number(nota1) + Number(nota2) ) / 2

    if(media >= 7 ){
        document.getElementById("ResultadoMedia").innerHTML += `<br>  O aluno ${aluno} tirou ${nota1} e ${nota2} teve média ${media} sendo <br> <b class= "aprovado"> aprovado </b>`
    } 
    else{
        document.getElementById("ResultadoMedia").innerHTML += ` <br> O aluno ${aluno} tirou ${nota1} e ${nota2} teve média ${media} sendo <br> b class=< "reprovado"> reprovado </b> `
    }
}

function BotaoLimpar() {
    document.getElementById("ResultadoMedia").innerHTML = ""
}
