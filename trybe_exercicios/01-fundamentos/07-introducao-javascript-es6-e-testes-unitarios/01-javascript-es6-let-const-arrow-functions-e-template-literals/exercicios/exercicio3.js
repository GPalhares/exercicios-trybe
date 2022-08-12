const fatorial = (n) => {
    let result = 0

  for (let i = 1; i < n; i += 1) {
    result += n * i;

  }
  console.log(`Esse é o fatorial ${result} resultado da função`)

};
fatorial(4)


