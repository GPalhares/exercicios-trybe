function somaTodos(n) {
  let total = 0;
  for (let index = n; index !== 0; index -= 1) {
    total = total + index;
  }
  return total;
}

console.log(somaTodos(5));
