let numerosDaLoteria = [18, 24, 50, 60, 5, 8];
let numerosJogados = [17, 24, 50, 60, 4, 7];
let numerosAcertados = 0;

for (let index = 0; index < numerosJogados.length; index += 1) {
    let numerosbaum = numerosJogados[index];
    console.log('----------');

  for (let jogoindex = 0; jogoindex < numerosDaLoteria.length; jogoindex += 1) {
    let nseimais = numerosDaLoteria[jogoindex];

  if (numerosbaum === nseimais) {
    numerosAcertados = 1;    
    } console.log(numerosAcertados);
  }

}
