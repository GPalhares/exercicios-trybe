// // Descubra quantos valores ímpares existem no array e imprima
// o resultado. Caso não exista nenhum, imprima a mensagem:
// "nenhum valor ímpar encontrado";

let totalImpares = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (number of numbers) {
  if (number % 2 !== 0) {
    totalImpares += 1;
  }
}

if (totalImpares != 0) {
  console.log("existem " + totalImpares + " numeros impares");
} else {
  console.log("não existem valores impares no array");
}
