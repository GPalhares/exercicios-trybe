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
