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
