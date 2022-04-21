function VerificaResposta() {
    var Resposta = prompt("Qual a sua escolha?\nResponda utilizando A ou B");
    while (Resposta != "") {
        if (Resposta.toUpperCase() == "A") return window.location.href = "../Coisa/Fase3_Coisa_RespostaA.html"
        else if (Resposta.toUpperCase() == "B") return window.location.href = "../Coisa/Fase3_Coisa_RespostaB.html"
        else if (Resposta == null) break;
        else {
            alert("Você respondeu de maneira errada, tente novamente!")
            Resposta = prompt("Qual a sua escolha? \nResponda utilizando A ou B");
        }
    }
}
function VoltaHome(){
    location.href = "../index.html"
}