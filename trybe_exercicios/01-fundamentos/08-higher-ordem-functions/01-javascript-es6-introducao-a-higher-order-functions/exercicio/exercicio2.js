const sorteioHof = (apostado, func) => {
  const resultado = (Math.random() * 5).toPrecision(1);
  return func(apostado, resultado);
};
const verificaNumero = (apostado, resultado) => {
  return apostado == resultado
    ? 'Parabéns você ganhou, está rico!'
    : 'Tente Novamente';
};
console.log(sorteioHof(3, verificaNumero));
