const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let nota = 0;

const comparaNota = (gabarito, chutes) => {
  for (let i = 0; i < gabarito.length; i += 1) {
    if (chutes == 'N.A') {
    } else if (gabarito[i] == chutes[i]) {
      nota += 1;
    } else {
      nota -= 0.5;
    }
  }
  return nota;
};

const hofNota = (gabarito, chutes, func) => {
  return func(gabarito, chutes);
};
console.log(hofNota(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaNota));
