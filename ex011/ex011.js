function BotaoVerificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

   { if (idade >= 18 && idade <= 65) 
    {
        document.getElementById("Verificacao").innerHTML += `<p class = "aprovado">${nome} Seu voto é obrigatorio</p>`

    } }else if (idade >= 16 || idade > 65)
     {
        document.getElementById("Verificacao").innerHTML += `<p class = "pode">${nome} Seu voto nao é obrigatorio</p>`
    } else if (idade < 16) 

        document.getElementById("Verificacao").innerHTML += `<p class = "reprovado">${nome} Não pode votar</p>`
}

function BotaoLimpar() {
    document.getElementById("Verificacao").innerHTML = ""
}