let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resposta = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index !== numbers.length - 1) {
    resposta.push(numbers[index] * numbers[index + 1]);
  } else {
    resposta.push(numbers[index] * 2);
  }
}
console.log(resposta);
