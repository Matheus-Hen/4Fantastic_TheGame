document.getElementById("Resposta").onclick(MouseEvent) = VerificaResposta()
function VerificaResposta() {
    var i = 0;
    while (i < 5){
        var Resposta = prompt("Qual a sua respota? \nResponda utilizando A ou B");
        if (Resposta == "A") {
            window.location.href = "C:\Users\mathe\Documents\Programação\Herois\Home.html"
        }
        else if (Resposta == "B") return window.location.href = "C:\Users\mathe\Documents\Programação\Herois\Home.html"
        else if (i = 4) {
            alert("Você atingiu a quantidade maxima de erro!!!\nGAMEOVER!!!")
            return window.location.href = "C:\Users\mathe\Documents\Programação\Herois\Home.html"
        }
        else {
            alert("Você respondeu de maneira errada, tente novamente!");
            i++
        }
    i++
    }
}


