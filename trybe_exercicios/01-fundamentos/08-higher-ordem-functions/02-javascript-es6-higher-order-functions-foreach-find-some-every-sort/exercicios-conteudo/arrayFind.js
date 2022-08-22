const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  const divisible = array.find(
    (number) => number % 3 === 0 && number % 5 === 0
  );
  return divisible;
  // Adiciona seu código aqui
};

console.log(findDivisibleBy3And5(numbers));
