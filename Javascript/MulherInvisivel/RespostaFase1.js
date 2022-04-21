function VerificaResposta() {
    var Resposta = prompt("Qual a sua escolha?\nResponda utilizando A ou B");
    while (Resposta != "") {
        if (Resposta.toUpperCase() == "A") return window.location.href = "../MulherInvisivel/Fase2_RespostaA_MulherInvisivel.html"
        else if (Resposta.toUpperCase() == "B") return window.location.href = "../MulherInvisivel/Fase2_RespostaB_MulherInvisivel.html"
        else if (Resposta == null) break;
        else {
            alert("Você respondeu de maneira errada, tente novamente!")
            Resposta = prompt("Qual a sua escolha? \nResponda utilizando A ou B");
        }
    }
}
