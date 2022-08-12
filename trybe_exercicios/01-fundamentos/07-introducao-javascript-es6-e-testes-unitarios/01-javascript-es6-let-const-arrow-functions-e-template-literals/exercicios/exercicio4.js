const maiorPalavra = (frase) => {
  let longer = frase[0];
  frase = frase.split(' ');

  for (let i = 0; i < frase.length; i += 1) {


    for (let i2 = 1; i2 < frase.length; i2 += 1) {

        if(frase[i].length < frase[i2].length){
            longer = frase[i2]
        }else{}

    }
  }
  console.log(longer)
};

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');
