const body = document.getElementById("body");
body.style.backgroundColor = "grey";

const titulo = document.getElementById("titulo");
titulo.style.color = "red";

const paragrafo = document.getElementById("paragrafo");
paragrafo.style.color = "white";

const divPai = document.getElementById("divPai");

//TEXT COLOR INPUT
const inputTextColor = document.createElement("INPUT");
inputTextColor.style.color = "black";
const inputTextColortext = document.createElement("p");
inputTextColortext.innerText = "INSIRA A COR DO TEXTO:";
divPai.appendChild(inputTextColortext);
inputTextColortext.appendChild(inputTextColor);

//BACKGROUND COLOR INPUT
const inputTextBackgroundtext = document.createElement("p");
inputTextBackgroundtext.innerText = "INSIRA A COR DO BACKGROUND";
const inputTextBackground = document.createElement("input");
inputTextBackgroundtext.appendChild(inputTextBackground);
divPai.appendChild(inputTextBackgroundtext);

//MANTER ALTERAÇÕES APÓS O CARREGAMENTO

window.onload = () => {
  localStorage.getItem("corBackground");
  body.style.backgroundColor = localStorage.getItem("corBackground");
};

function corBackground() {
  localStorage.setItem("corBackground", inputTextBackground.value);
  body.style.backgroundColor = localStorage.getItem("corBackground");
}

inputTextBackground.addEventListener("keyup", corBackground);

function textCorBackground() {
  if (inputTextColor.value === "monospace") {
    paragrafo.style.fontFamily = inputTextColor.value;
    console.log("MUDAR FONTE");
  } else {
    paragrafo.style.color = inputTextColor.value;
  }
}

inputTextColor.addEventListener("keyup", textCorBackground);

//Tamanho da fonte
const buttonAdiciona = document.createElement("button");
buttonAdiciona.innerText = "++";
divPai.appendChild(buttonAdiciona);
const buttonDiminue = document.createElement("button");
buttonDiminue.innerText = " - - ";
divPai.appendChild(buttonDiminue);

let value = 10;

function aumentaFonte() {
  let valueFont = value + "px";
  console.log(valueFont);
  paragrafo.style.fontSize = valueFont;
  value += 1;
}

buttonAdiciona.addEventListener("click", aumentaFonte);

function diminueFonte() {
  let valueFont = value + "px";
  console.log(valueFont);
  paragrafo.style.fontSize = valueFont;
  value -= 1;
}

buttonDiminue.addEventListener("click", diminueFonte);
/*
//BACKGROUND COLOR INPUT
const inputTextBackgroundtext = document.createElement("p");
inputTextBackgroundtext.innerText = "INSIRA A COR DO BACKGROUND";
const inputTextBackground = document.createElement("input");
inputTextBackgroundtext.appendChild(inputTextBackground);
divPai.appendChild(inputTextBackgroundtext);

//BACKGROUND COLOR INPUT
const inputTextBackgroundtext = document.createElement("p");
inputTextBackgroundtext.innerText = "INSIRA A COR DO BACKGROUND";
const inputTextBackground = document.createElement("input");
inputTextBackgroundtext.appendChild(inputTextBackground);
divPai.appendChild(inputTextBackgroundtext);*/
