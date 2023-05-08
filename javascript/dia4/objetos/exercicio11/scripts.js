let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  let lessons = Object.assign({lesson1, lesson2, lesson3})

  
  
  function todosestudantes(lessons) {
    let total = 0;
    let keys = Object.keys(lessons);
    for (let index = 0; index < keys.length; index += 1) {
      total += lessons[keys[index]].numeroEstudantes;
    }
    return total;
  }
  
  console.log(todosestudantes(lessons));
 
 