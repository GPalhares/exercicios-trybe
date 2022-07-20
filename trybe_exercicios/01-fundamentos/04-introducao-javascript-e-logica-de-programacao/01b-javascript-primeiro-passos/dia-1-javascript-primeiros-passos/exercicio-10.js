// Escreva um programa que receba o nome de uma peça de xadrez e
// retorne os movimentos que ela faz.

const pecaXadrez = "peão";

switch (pecaXadrez) {
  case "peão":
    console.log("Anda 1 para frente e na abertura 2, e só captura na diagonal");
    break;

  case "cavalo":
    console.log("Anda em L, 3 para para um lado e depois 1 para o lado");
    break;

  case "bispo":
    console.log("Anda quantas quiser na diagonal sempre");
    break;

  case "torre":
    console.log("Anda quantas quiser para frente trás ou lados");
    break;

  case "rainha":
    console.log("Anda como qualquer outra peça, exceto o cavalo");
    break;

  case "rei":
    console.log("Anda 1 para qualquer lado");
    break;
  default:
    console.log("Informe uma peça valida");
}
