var filmes = []

function BotaoFilmes(){
    var nome = document.getElementById("numero").value
    filmes.push(nome)
    document.getElementById('Verificacao').innerHTML = ''

    for (var i = 0; i < filmes.length; i++){
        document.getElementById('Verificacao').innerHTML +=
             `${filmes[i]} <br> `
}
}