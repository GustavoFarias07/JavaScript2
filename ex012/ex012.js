var nrSorteado = parseInt(Math.random() * 100) + 1
var nr = 0

function BotaoChutar() {
    var chutar = prompt("Chutar um número")
    nr = nr + 1

    if (chutar == nrSorteado) {
        document.getElementById("Verificacao").innerHTML += `<b>PARABENS VOCE ACERTOU NO Nº ${chutar} EM ${nr} TENTATIVAS</b>`
    }
    else if (chutar < nrSorteado) {
        document.getElementById("Verificacao").innerHTML += `<p> Voce chutou ${chutar} pensei em um número Maior</p>`
    }
    else if (chutar > nrSorteado) {
        document.getElementById("Verificacao").innerHTML += `<p> Voce chutou ${chutar} pensei em um número Menor</p>`
    } 
   
}

function BotaoNovo() {
    document.getElementById("Verificacao").innerHTML = ""
    nrSorteado = parseInt(Math.random() * 100) + 1
    nr = 0
}