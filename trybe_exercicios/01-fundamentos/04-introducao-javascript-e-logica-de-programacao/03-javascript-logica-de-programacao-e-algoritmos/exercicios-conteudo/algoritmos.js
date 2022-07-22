let arrayTeste = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < arrayTeste.length; index += 1) {
  sum += arrayTeste[index];
}
if (sum > 15) {
  console.log(sum);
} else {
  console.log("valor menor que 16");
}
