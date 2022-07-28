// Crie um irmão para `elementoOndeVoceEsta`.

const pai = document.getElementById("pai");
const irmaoElementoOndeEstaVoce = document.createElement("section");
irmaoElementoOndeEstaVoce.id = "irmaoElementoOndeEstaVoce";
pai.appendChild(irmaoElementoOndeEstaVoce);

// Crie um filho para `elementoOndeVoceEsta`.

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
const filhoElementoOndeEstaVoce = document.createElement("h1");
filhoElementoOndeEstaVoce.id = "filhoElementoOndeEstaVoce";
elementoOndeVoceEsta.appendChild("filhoElementoOndeEstaVoce");

// Crie um filho para `primeiroFilhoDoFilho

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoDoprimeiroFilhoDoFilho = document.createElement("h2");
filhoDoprimeiroFilhoDoFilho.id = "primeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild("filhoDoprimeiroFilhoDoFilho");

// A partir desse filho criado, acesse `terceiroFilho`.

const terceiroFilho =
  filhoDoprimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling; // primeiroFilhoDoFilho // elementoOndeVoceEsta // terceiroFilho
console.log(terceiroFilho);
