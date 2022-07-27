/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 Crie e execute uma função que corrija o texto da tag <h1>.
 Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */
const descricaoFuturo = document.getElementsByTagName("p");
descricaoFuturo[1].innerText = "Me vejo um bom programador daqui 2 anos";

const amarelouTotal = document.getElementsByClassName("main-content");
amarelouTotal[0].style.backgroundColor = "rgb(76,164,109)";

const vermelhouTotal = document.getElementsByClassName("center-content");
vermelhouTotal[0].style.backgroundColor = "white";

const correcaoTexto = document.getElementsByTagName("h1");
correcaoTexto[0].innerText = "Exercício 5.1 - JavaScript";

const aumentaTexo = document.getElementsByTagName("p");

for (i = 0; i < aumentaTexo.length; i += 1) {
  aumentaTexo[i].innerText = aumentaTexo[i].innerText.toUpperCase();
}

const exibeConsole = document.getElementsByTagName("p");

for (i = 0; i < exibeConsole.length; i += 1) {
  console.log(exibeConsole[i].innerText);
}
