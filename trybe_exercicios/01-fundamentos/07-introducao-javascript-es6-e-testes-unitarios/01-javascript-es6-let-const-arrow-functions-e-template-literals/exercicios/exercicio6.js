function susbsX(frase, nome) {
  frase = frase.split(' ');
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] == 'x') {
      frase[i] = nome;
    }
  }
  frase = frase.join(' ');
  console.log(frase);
}

susbsX('ola mundo x funciona', 'gabriel');
