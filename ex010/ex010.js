function Botao(){
    var nome = document.getElementById("Usuario").value
    var senha = document.getElementById("senha").value

    if(nome == "adm" && senha == "123"){
        document.getElementById("verificar").innerHTML += `<p class= "aprovado">Bem vindo(a) ${nome} !</p>`
    } 
    else{
        document.getElementById("verificar").innerHTML += ` <p class= "reprovado">Usuário ou senha invalido !</p> `
    }
}