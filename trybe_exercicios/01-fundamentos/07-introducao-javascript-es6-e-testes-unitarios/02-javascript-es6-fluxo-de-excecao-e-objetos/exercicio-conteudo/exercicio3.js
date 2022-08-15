const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  const listKeys = (obj) =>  Object.keys(obj);


console.log(listKeys(lesson1));

const sizeObj = (obj) =>  Object.keys(obj).length;

console.log(sizeObj(lesson1));

const listValues = (obj) =>  Object.values(obj);

console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const array = Object.keys(obj);
      
    for (index in array) {
      total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total; // a função retorna o total de alunos após as iterações do "for/in"
  };
  console.log(getNumberOfStudents(allLessons));