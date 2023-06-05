/*comentario em
        multiplas linhas*/

//comentario em uma linha

//o alert é utilizado para exibir uma mensagem em popup
//alert("Ola mundo")

/*No console conseguimos vizualizar informaçoes,
sem exibir na pagina*/
console.log("Ola Mundo Utilizando Console")

//Criando uma função chamada quando clicamos no botão
function BotaoTeste() {
    alert("Voce clicou no botão")
}

console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Esta é uma mensagem de informação")

//Declarando variaveis
//String - Conjunto de caraceteres - declarar com "" ou ''
var nome = "Gustavo"
var sobrenome = "Farias Couto"
//Number - todo numero em JS é do tipo Number - declarar sem ""
var idade = 16
//Bolean- somente recebe true ou false
var aprovado = true

console.log(typeof nome) //comando typeof para saber o tipo do dado

console.log(nome + '' + sobrenome) //Concatenando strings com +
//Se utilizarmos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25
console.log(n1 + n2) //Ira somar as 2 variaveis Number (35)
var n3 = "10"
var n4 = "25"
console.log(n3 + n3) //Ira concatenar "juntar" as 2 variaveis ("1025")

n1 = n2 //Uma variavel pode receber o valor de outra variavel
console.log("n1 = " + n1 + 'e o n2 =' + n2)

var salario = 1290.85 //Para atribuir um valor decimal utilizar . não ,
salario = salario + 200 //Posso tambem somar a variavel com ela mesmo 
console.log(salario)
salario += 200 //Representação mais simplificada da expressão acima
console.log(salario)

//Antigamenete para juntar o texto os variaveis faziamos assim
console.log('Ola, ' + nome + 'voce tem ' + idade + 'anos e recebe R$' + salario)
//Hoje utilizamos o templastring forma mais simples
console.log(`Ola, ${nome} Voce tem ${idade} anos e recebe R$ ${salario}`)

function BotaoNome() {
    //No prompt abre opção para digitar algo
    var nome2 = prompt('Qual seu nome?')
    //No confirm abre texto com opção ok e cancel
    confirm(`Ola  ${nome2}, Entendeu o JS?`)
}

function BotaoCalcular() {
    var soma = valor1 + valor2
    //Receber valor de um prompt
    var valor1 = prompt("informe o valor 1:")

    //recebndo valor2 de um prompt
    var valor2 = prompt("informe o valor 2:")
    //variavel soma recebendo um valor1 + valor2
    console.log(valor1 + valor2)
    soma = parseFloat(valor1) + parseFloat(valor2)
    //Exibir em um alert o valor da soma
    //alert(soma)
    document.getElementById("resultadoSoma").innerHTML = soma
}

function ExibirCidade() {
    var nomeCidade = document.getElementById("cidade").value
    document.getElementById("resultadoCidade").innerHTML = nomeCidade
}

//Operadores Aritiméticos e Ordem de precedencia
var opSoma = 5 + 2 //7
console.log(opSoma)//Operador de soma +
var opSubtracao = 5 - 2   //3
console.log(opSubtracao) //Operador de subtração
var opMultiplicacao = 5 * 2  //10
console.log(opMultiplicacao)  //Operador de multiplicação
var opDivisao = 5 / 2  //2.5
console.log(opDivisao)  //Operador de divisão

var opExponenciacao = 5 ** 2 //25
console.log(opExponenciacao)  //Operador de exponenciação
var opResto = 5 % 2 //1
console.log(opResto)  //Operação de Resto da divisão %

//Ordem precedencia
var ordemPrecedencial1 = 5 + 3 / 2
console.log(ordemPrecedencial1)  //6.5
var ordemPrecedencial2 = (5 + 3) / 2
console.log(ordemPrecedencial2)
//4
/* 1º ()
   2º **
   3º * / 
   4º %
   5º + -   */

//Constantes - o valor não pode ser alterado depois de atribuido
const pi = 3.14
// pi = 3 - Se o valor for alterado dará erro no javascript



//Auto atribuição
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n += 3    // quer dizer o mesmo que a expressão acima 

n++ // quando precisamos somar + 1 ao valor da variável
n-- // quando precisamos subtrair -1 ao valor da variável

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2) // > Maior que
console.log(n1 < n2) // < Menor que
console.log(n1 >= n2) // >= Maior ou igual que
console.log(n1 <= n2) // <= Menor ou igual que
console.log(n1 == n2) // == Igual
console.log(n1 != n2) // != Não igual - Diferente

//Estruturas condicionais
if (n1 > n2) {        //Verificando a condição entre parenteses
    // Se a condição for verdadeira "entra" nesse bloco
    console.log("O n1 é maior que o n2")
} else {
    // Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
    console.log("O n1 não é maior que o n2")
}
//Exemplo de condição
var minhaIdade = 18
if (minhaIdade >= 16) {
    console.log("Você pode votar")
} else {
    console.log("Você NÃO pode votar")
}


//Operadores Lógicos
// && representa o E
var login = "adm"
var senha = "123"
//Para entrar na condição TRUE as 2 condiçoes precisar ser verdadeira
if (login == "adm" && senha == "123") {
    //executa esse bloco quando as condiçoes são TRUE
} else {
    //Executa esse bloco se pelo menos 1 condição for FALSE
}

var media = 6
//Operador OU -> || (pipe) 
//Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira

if (media == 6 || media == 5) {
    //executa esse bloco quando 1 condição é TRUE pelo menos
} else {
    //aqui entra se todas as condiçoes falsas
}
//Estruturas condicionais encadeadas
if (media >= 7) {
    console.log("APROVADO")
} else if (media >= 5) { // podemos fazer um novo if junto com else
    console.log("RECUPERAÇÃO")
} else if (media < 5) {
    console.log("REPROVADO")
}

//O debugger
//Podemos utlizar o debugger para analisar o código linha a linha

//Exit
//Quando queremos parar de executar uma função do JS utilizamos o exit

//Para sortearmos um valor aleatorio utilizamos o Math.random()
//o Math.random retorna um numero decimal e precisamos multiplicar
//pelo nr maximo que desejamos e somar 1 quando necessario
//o parseInt utilizamos para obter apenas  parte inteira do numero

var nrSorteado = parseInt(Math.random() * 180) + 1
console.log(nrSorteado)

//Switch Case
//E como se fosse varias if else de forma mais simples
var diaSemana = 3
debugger
switch (diaSemana) {
    case 1:
        console.log("Hoje é: Domingo")
        break   //para o switch case e nao verificar as outras opçoes

    case 2:
        console.log("Hoje é: Segunda")
        break

    case 3:
        console.log("Hoje é: Terça")
        break

    case 4:
        console.log("Hoje é: Quarta")
        break

    case 5:
        console.log("Hoje é: Quinta")
        break

    case 6:
        console.log("Hoje é: Sexta")
        break

    case 7:
        console.log("Hoje é: Sabado")
        break

    default:
        console.log("Dia invalido")
        break
}

// Laços de repetição WHILLE (que quer dizer enquanto)
// while (condição)
// enquanto a condição do parenteses for verdadeira
// continua repetindo o codigo do bloco

var nrVidas = 5
while (nrVidas > 0) {
    console.log (`Voce ainda tem ${nrVidas}`)
    nrVidas--
}

//verificando se número é par com while
var contador = 1 //iniciando o contador de vezes que irá executar
while(contador <= 10){ //enquanto a condiçao for verdadeira
    if(contador % 2 == 0){ //condição para contador par
        console.log (`${contador} é par`)\
    }else{
        console.log (`${contador} é impar`)
    }
    contador++ //adicionamos +1 ao contador para nao ficar em loop infinito
}

for (var cont = 1; cont <= 5; cont++){
    console.log(cont)
}
//For - Lço de repetição
// 1ª Expressão var i = 1
// (Aqui eu inivo o controle vezes)
// 2ª Expressão i <= 10
// (Aqui nos verificamos a condição para se manter no loop)
// 3ª Expressão i++
// (Aqui acrescentamos na variavel +1 vez)
// Exibindo

for (let i= 1; i <= 10; i++){
    console.log(i)
}