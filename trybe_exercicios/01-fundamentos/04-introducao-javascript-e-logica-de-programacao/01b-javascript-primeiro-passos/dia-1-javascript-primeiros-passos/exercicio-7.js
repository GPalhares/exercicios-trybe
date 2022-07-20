// Faça um programa que retorne o maior de
// três números. Defina no começo do programa
//  três constantes com os valores que serão comparados.

const a = 1;
const b = 2;
const c = 3;

if (a > b && a > c) {
  console.log("a é a maior");
} else if (b > a && b > c) {
  console.log("b é a maior");
} else if (c > a && c > b) {
  console.log("c é a maior");
} else {
  console.log("a e b e c tem o mesmo valor!");
}
