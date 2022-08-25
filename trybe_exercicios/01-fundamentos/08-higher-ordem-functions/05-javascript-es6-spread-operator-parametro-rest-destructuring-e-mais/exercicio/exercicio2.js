// escreva sum abaixo
function sum(...args) {
  return args.reduce((acc, crr) => acc + crr);
}
console.log(sum(1, 2, 3));
