function BotaoVidas(){
    var filmes = ['Harry Potter', 'Interestelar', 'Star Wars', 'Vingadores', 'Barbie']
    for (var i = 0; i < filmes.length; i++){
    document.getElementById("Verificacao").innerHTML += `Posição no vetor ${i}-filme ${filmes[i]}<br>`
    }
}