let angulo1 = 50;
let angulo2 = 40;
let angulo3 = 60;

let angulos = angulo1 + angulo2 + angulo3;

let todososangulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(todososangulos){
    if (angulos === 150) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido!');
  }