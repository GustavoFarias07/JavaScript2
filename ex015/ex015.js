function BotaoTabuada(){
         var numero = document.getElementById("numero").value
    var valor = 1
    document.getElementById("Verificacao").innerHTML = ""
    while(valor <= 10){
        var multiplicacao = Number(valor) * (numero)
        document.getElementById("Verificacao").innerHTML += `${numero} X ${valor} = ${multiplicacao} <br> `
        valor ++
    }
}