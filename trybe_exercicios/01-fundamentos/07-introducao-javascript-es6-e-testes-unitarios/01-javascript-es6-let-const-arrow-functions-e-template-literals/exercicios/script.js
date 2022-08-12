// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;
// `
// );
// const num1 = 3192031
// const string = 'lalalala'

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// const myName = 'Isabella';
// console.log(`Welcome ${myName}!`);
// console.log(`TESTE TEMPLETE ${num1} ${string}\nTERMINO DO TESTE`)

// Situação em que é mais simples usar o operador ternário:
// const checkIfElse = (age) => {
//     if (age >= 18) {
//       return `Você tem idade para dirigir!`;
//     } else {
//       return `Você ainda não tem idade para dirigir...`;
//     }
//   };
  
//   const checkTernary = (age) => (
//     age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`;
//   );
  
//   // ------------------------
  
//   // Situação em que usar o operador ternário não faz muito sentido:
//   const checkIfElse = (fruit) => {
//     if (fruit === `maçã`) {
//       return `Essa fruta é vermelha`;
//     } else if (fruit === `banana`) {
//       return `Esta fruta é amarela`;
//     } else {
//       return `Não sei a cor`;
//     }
//   };
  
  
//   // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
//   // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
//   // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
//   // no futuro!
// const pao = 11
// console.log(pao > 10 && 'Eba temos muitos paes')