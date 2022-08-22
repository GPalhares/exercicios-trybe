const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name);
  //Adicione seu código aqui
};

console.log(hasName(names, 'Ana'));
