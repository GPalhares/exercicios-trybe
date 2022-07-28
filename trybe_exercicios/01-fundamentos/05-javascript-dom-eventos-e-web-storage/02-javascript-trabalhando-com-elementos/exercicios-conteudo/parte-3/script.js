const pai = document.getElementById("pai");
console.log(pai.children);

for (let index = 0; index < pai.children.length; index += 1) {
  if (
    pai.children[index].id !== "elementoOndeVoceEsta" ||
    "primeiroFilhoDoFilho"
  ) {
    pai.removeChild(pai.children[index]);
  }
}

console.log(pai.children);
