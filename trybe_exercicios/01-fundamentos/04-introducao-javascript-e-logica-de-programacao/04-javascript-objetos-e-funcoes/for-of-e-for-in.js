let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (nome in names) {
  console.log("Olá " + names[nome]);
}

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (carro in car) {
  console.log(carro, car[carro]);
}
