ricardoCalculeTabuada(3)
ricardoCalculeTabuada(9)
ricardoCalculeTabuada(240)

function ricardoCalculeTabuada(nr) {
    for (var i = 1; i <= 20; i++) {
        console.log(`${nr} x ${i} = ${nr * 1}`)
    }
}

var resultado = 0
resultado = calcularDobro(3)
console.log(resultado)

function calcularDobro(nr) {
    var dobro = nr * 2
    return dobro
}

function calculaMedia(nota1, nota2) {
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var mediaAluno1 = calculaMedia(9, 7)
console.log(`Média do aluno 1 é ${mediaAluno1}`)
var mediaAluno2 = calculaMedia(5, 3)
console.log(`Mediado aluno 2 é ${mediaAluno2}`)



var login = "admin"
var senha = "123"
var possoAcessar = 

function validarLogin(login, senha) {
    if (login == '' || senha == '') {
        return false
    }
    if(login == 'admin' && senha == '123'){
        return true
    } else {
        return false
    }
}