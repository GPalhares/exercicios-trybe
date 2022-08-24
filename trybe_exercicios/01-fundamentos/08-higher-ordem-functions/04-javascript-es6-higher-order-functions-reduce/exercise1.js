const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(ar) {
  // escreva seu código aqui
  return ar.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten(arrays));
