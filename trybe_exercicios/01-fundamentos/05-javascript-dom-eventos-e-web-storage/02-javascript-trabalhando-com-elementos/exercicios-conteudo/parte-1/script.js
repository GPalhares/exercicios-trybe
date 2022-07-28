// Acesse o elemento elementoOndeVoceEsta.

const exer1 = document.getElementById("elementoOndeVoceEsta");
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const paiExer1 = exer1.parentElement;

paiExer1.style.color = "red";

const pFilhoDFilho = document.getElementById("primeiroFilhoDoFilho");

pFilhoDFilho.innerText = "  Adicionando um texto ao primeiroFilhoDoFilho";

// Acesse o primeiroFilho a partir de pai.

const primeiroFilho = document.getElementById("pai");
primeiroFilho.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
elementoOndeVoceEsta.parentNode;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
elementoOndeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
