let player = {
  nome: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

console.log(
  "A jogadora " + player["nome"] + " Tem " + player["age"] + " Anos de Idade"
);

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);

console.log(
  "A jogadora " +
    player["nome"] +
    " foi eleita a melhor do mundo 6 vezes " +
    player["bestInTheWorld"]
);

console.log(
  "A jogadora " +
    player["nome"] +
    " possui " +
    player.medals.golden +
    " medalhas de ouro " +
    " e " +
    player.medals.silver +
    " medalhas de prata "
);
