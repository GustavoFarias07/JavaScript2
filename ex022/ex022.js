var filme = []
var links = []
function BotaoFilmes(){
    var nome = document.getElementById("nome").value
    var link = document.getElementById("link").value
    filme.push(nome)
    links.push(link)
    document.getElementById('Verificacao').innerHTML = ""

    for (var i = 0; i < filme.length; i++){
        document.getElementById('Verificacao').innerHTML += `<div> <img src="${links[i]}"> <p> ${filme[i]} </p></div>`
    }
}

function BotaoRandom(){
    var Sorteado = parseInt(Math.random() * filme.length)
    document.getElementById('Verificacao').innerHTML = `<div><img src="${links[Sorteado]}"> <p> ${filme[Sorteado]} </p></div>`
}