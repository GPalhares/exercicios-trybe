// tasksList.push("Fazer exercícios da Trybe"); // PUSH ADICIONA NO FINAL DO ARRAY
// tasksList.unshift("asda"); // UNSHIFT ADICIONA NO COMEÇO DO ARRAY
// tasksList.pop(); //REMOVE ULTIMO ELEMENTO DO ARRAY
// tasksList.shift(); //REMOVE PRIMEIRO ELEMENTO DO ARRAY
//INDEXOF() ENCONTRA INDICE DO ELEMENTO

let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);

let menu1 = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu1.indexOf("Portfólio");

console.log(indexOfPortfolio);

let menu3 = ["Home", "Serviços", "Portfólio", "Links"];

menu3.push("Contato");

console.log(menu3);
