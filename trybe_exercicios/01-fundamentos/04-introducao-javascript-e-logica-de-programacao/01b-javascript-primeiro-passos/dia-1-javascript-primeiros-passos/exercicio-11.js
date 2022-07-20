// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const porcentagem = 50;

let nota = "";

if (porcentagem >= 90 && porcentagem <= 100 && porcentagem > 0) {
  nota = "A";
} else if (porcentagem >= 80 && porcentagem <= 100 && porcentagem > 0) {
  nota = "B";
} else if (porcentagem >= 70 && porcentagem <= 100 && porcentagem > 0) {
  nota = "C";
} else if (porcentagem >= 60 && porcentagem <= 100 && porcentagem > 0) {
  nota = "D";
} else if (porcentagem >= 50 && porcentagem <= 100 && porcentagem > 0) {
  nota = "E";
} else if (porcentagem <= 0 || porcentagem >= 100) {
  console.log("Erro, nota invalida");
}

console.log(nota);
