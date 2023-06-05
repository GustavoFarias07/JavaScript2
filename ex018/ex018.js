function BotaoVidas() {
    var numero = document.getElementById("numero").value
    document.getElementById("Verificacao").innerHTML = ""
    for (var contador = 1; contador <= numero; contador++) {
        document.getElementById("Verificacao").innerHTML += ` <img class = "coracao" src="img/5644880-vermelho-coracao-em-pixel-estilo-arte-icone-de-8-bit-simbolo-dia-dos-namorados-gratis-vetor.jpg">`
    }
}