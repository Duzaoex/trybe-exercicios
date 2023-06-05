const numbers = [19, 21, 30, 3, 45, 22, 15];

const verificarNumeros = numbers.find((numero) => numero % 3 === 0 && numero % 5 === 0);
console.log(verificarNumeros);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verificarNomes = names.find((nome) => nome.length === 5);
console.log(verificarNomes);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const idDaMusica = musicas.find((musica) => musica.id === '31031685');
console.log(idDaMusica);