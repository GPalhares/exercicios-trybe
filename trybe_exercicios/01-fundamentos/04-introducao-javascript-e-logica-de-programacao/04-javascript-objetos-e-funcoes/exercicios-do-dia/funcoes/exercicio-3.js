function menorNumeroArray(numbers) {
  let maior = numbers[0];
  let idx = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < maior) {
      maior = numbers[index];
      idx = index;
    }
  }
  console.log(idx);
}

menorNumeroArray([5, 9, 3, 19, 70, 8, 100, 200, 1, 27]);
