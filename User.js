function DadosUser() {
    while (nome = ! "") {
        var nome = prompt("Qual o seu nome?");
        if (nome != "") {
            var frase = "Bem vindo(a) " + nome;
            return document.write(frase);
        } else {
            alert("Insira algum nome, por favor")
            continue
        }
    }
}
DadosUser();
console.log("entrou")