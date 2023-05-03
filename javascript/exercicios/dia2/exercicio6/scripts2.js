let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (index = 0; index < numeros.length; index += 1) {
  sum += numeros[index];
}

let media = sum / numeros.length;

console.log(media);
