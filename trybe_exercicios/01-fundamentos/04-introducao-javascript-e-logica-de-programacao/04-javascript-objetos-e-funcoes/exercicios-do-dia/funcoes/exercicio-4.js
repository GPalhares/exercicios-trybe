function maiorNomeArray(nomes) {
  let maior = "";

  for (let index = 0; index < nomes.length; index += 1) {
    if (nomes[index].length > maior.length) {
      maior = nomes[index];
    }
  }
  console.log(maior);
}

maiorNomeArray(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
