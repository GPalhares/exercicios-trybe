// yearSeasons: estações do ano.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
//DESESTRUTURAR OBJETOS
const { spring, summer, autumn, winter } = yearSeasons;
const meses = { ...spring, ...summer, ...autumn, ...winter };

console.log(meses);
