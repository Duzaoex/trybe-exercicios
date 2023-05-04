let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vezes2 = [];

for (let index = 0; index < numeros.length; index += 1) {
  if (index < (numeros.length - 1)) { // se não é o último
    vezes2.push(numeros[index] * numeros[index + 1]);
  } else {
    vezes2.push(numeros[index] * 2);
  }
}

console.log(vezes2);