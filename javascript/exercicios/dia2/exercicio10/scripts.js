let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numeros.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numeros[index] < numeros[secondIndex]) {
        let position = numeros[index];
        numeros[index] = numeros[secondIndex];
        numeros[secondIndex] = position;
      }
    }
  }

  console.log('crescente', numeros);

for (let index = 1; index < numeros.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numeros[index] > numeros[secondIndex]) {
      let position = numeros[index];
      numeros[index] = numeros[secondIndex];
      numeros[secondIndex] = position;
    }
  }
}

console.log('decrescente', numeros);
