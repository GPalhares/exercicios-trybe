// 1. Faça um algoritmo que calcule a soma de 1 a  50 usando a estrutura
// "for" e retorne no formato: A soma de 1 a 50 é: X.
let sum = 0;

for (index = 1; index <= 50; index += 1) {
  sum += index;
}
console.log("A soma de 1 a 50 é: " + sum);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são
// divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let resultado = 0;
for (index = 2; index <= 150; index += 1) {
  if (index % 3 == 0) {
    resultado += 1;
  }
}

if (resultado == 50) {
  console.log("mensagem secreta");
} else {
  console.log("não exibiu a secreta");
}

// 3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova.

let pessoaX = 50;
let pessoaY = 30;
let pessoaZ = 18;

if (pessoaX < pessoaY && pessoaX < pessoaZ) {
  console.log("pessoaX é a mais nova");
} else if (pessoaY < pessoaX && pessoaY < pessoaZ) {
  console.log("pessoaY é a mais nova");
} else {
  console.log("pessoaZ é a mais nova");
}
