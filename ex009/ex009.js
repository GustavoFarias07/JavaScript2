function BotaoVerificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if(idade >= 18 ){
        document.getElementById("ResultadoCNH").innerHTML += `<br> <b class="aprovado"> Parabens ${nome}, voce pode tirar CNH </b>`
    } 
    else{
        document.getElementById("ResultadoCNH").innerHTML += ` <br> <b class="reprovado"> Parabens ${nome}, voce não pode tirar CNH </b> `
    }
}

function BotaoLimpar() {
    document.getElementById("ResultadoCNH").innerHTML = ""
}
