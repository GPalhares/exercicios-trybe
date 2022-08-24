const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage(estudantes, notas) {
  return estudantes.map((estudante, index) => {
    return {
      name: estudante,
      average:
        notas[index].reduce((acc, curr) => acc + curr) / grades[index].length,
    };
  });
}
console.log(studentAverage(students, grades));
