function BotaoTabuada() {
    var numero = document.getElementById("numero").value
    document.getElementById("Verificacao").innerHTML = ""
    for (var valor = 1; valor <= 10; valor++) {
        var multiplicacao = Number(valor) * (numero)
        document.getElementById("Verificacao").innerHTML += `${numero} X ${valor} = ${multiplicacao} <br> `
    }
}