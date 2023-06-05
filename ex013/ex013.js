function BotaoSaber() {
    var Mes =  parseInt(Math.random() * 15) + 1
    var nome = document.getElementById("nome").value


switch (Mes) {
    case 1:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Janeiro </b> <br> <img src="img/casamento.jpg">`
        break

    case 2:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Feverreiro </b> <br> <img src="img/casamento.jpg">`
        break

    case 3:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Março </b> <br> <img src="img/casamento.jpg">`
        break

    case 4:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Abril </b>  <br> <img src="img/casamento.jpg">`
        break

    case 5:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Maio </b> <br> <img src="img/casamento.jpg">`
        break

    case 6:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Junho </b> <br> <img src="img/casamento.jpg">`
        break

    case 7:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Julho </b> <br> <img src="img/casamento.jpg">`
        break

    case 8:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Agosto </b> <br> <img src="img/casamento.jpg">`
        break

    case 9:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Setembro </b> <br> <img src="img/casamento.jpg">`
        break

    case 10:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Outubro </b> <br> <img src="img/casamento.jpg">`
        break

    case 11:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em novembro </b> <br> <img src="img/casamento.jpg">`
        break

    case 12:
        document.getElementById("Verificacao").innerHTML = `<b>Parabens ${nome} voce vai se Casar em Dezembro </b> <br> <img src="img/casamento.jpg">`
        break

    default:
        document.getElementById("Verificacao").innerHTML = `<b> ${nome} Voce nao é pra casar</b> <br>  <img src="img/festa.jpg ">`
        break

}
}
