let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numeros[0];

for (let index = 1; index < numeros.length; index += 1) {
  if (numeros[index] > maiorNumero) {
    maiorNumero = numeros[index];
  }
}

console.log(maiorNumero);
