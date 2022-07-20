// 🚀 Faça um programa que defina três constantes com os valores
// dos três ângulos internos de um triângulo. Retorne true se os
// ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum
// ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 60;
const b = 60;
const c = 60;

const soma = a + b + c;

if (soma == 180 && a > 0 && b > 0 && c > 0) {
  console.log(true);
} else if (soma != 180 && a > 0 && b > 0 && c > 0) {
  console.log(false);
} else {
  console.log("Erro, algum número informado é invalido!");
}
