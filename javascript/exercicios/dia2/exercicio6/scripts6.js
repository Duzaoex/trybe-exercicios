let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numeros[0];

for (let index = 1; index < numeros.length; index += 1) {
  if (numeros[index] < menorNumero) {
    menorNumero = numeros[index];
  }
}

console.log(menorNumero);
