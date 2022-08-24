const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

//Peguei no gabarito esse exercicio, não entendi direito
function containsA() {
  return names.reduce(
    (acc, currWord) =>
      acc +
      currWord.split('').reduce((acumulator, currLetter) => {
        if (currLetter === 'a' || currLetter === 'A') return acumulator + 1;
        return acumulator;
      }, 0),
    0
  );
}
