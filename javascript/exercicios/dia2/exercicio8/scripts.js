let palavra = 'tryber';
let invertida = '';

for (let index = 0; index < palavra.length; index += 1) {
  invertida += palavra[palavra.length - 1 - index];
}

console.log(invertida);