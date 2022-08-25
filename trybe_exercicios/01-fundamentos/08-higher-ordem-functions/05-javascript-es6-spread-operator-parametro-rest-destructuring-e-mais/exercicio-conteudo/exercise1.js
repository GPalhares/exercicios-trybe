// Faça uma lista com as suas frutas favoritas
const specialFruit = ['sada', 'fa', 'fs'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['fa', 'fa', 'ga1'];

const fruitSalad = (fruit, additional) => {
  const saladaTotal = { ...fruit, ...additional };
  return saladaTotal;
  // Esreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens));
