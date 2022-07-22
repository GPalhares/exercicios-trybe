let n = 6;
let linha = "";
let coluna = 0;

for (let index = 0; index < n; index += 1) {
  linha += "*";
}

for (coluna = 0; coluna < n; coluna += 1) {
  console.log(linha);
}
