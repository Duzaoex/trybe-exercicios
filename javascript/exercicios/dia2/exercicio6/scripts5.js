let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 2 !== 0) {
        resultado += 1;
    } 
}

if (resultado === 0) {
    console.log('nenhum valor ímpar encontrado');
  } else {
    console.log(resultado);
  }

// nao consigo achar o erro, vou pesquisar!
// objetivo: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
