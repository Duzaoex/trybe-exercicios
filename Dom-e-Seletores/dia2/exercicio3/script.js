const pai = document.getElementById('pai');
const irmaoDoElementoQueEstou = document.createElement('section');
irmaoDoElementoQueEstou.id = 'irmaoDoElementoQueEstou';
pai.appendChild(irmaoDoElementoQueEstou);

const elementoQueEstou = document.getElementById('elementoOndeVoceEsta');
const filhoDoElementoQueEstou = document.createElement('section');
filhoDoElementoQueEstou.id = 'filhoDoElementoQueEstou';
elementoQueEstou.appendChild(filhoDoElementoQueEstou);

const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const primeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.id = 'primeiroFilhoDoFilho';
filhoDoFilho.appendChild(primeiroFilhoDoFilho);

const terceiroFilho = primeiroFilhoDoFilho 
  .parentElement
  .parentElement
  .nextElementSibling;
  console.log(terceiroFilho);

const textosectionPai = document.getElementById('irmaoDoElementoQueEstou');
const texto1 = document.createElement('p');
texto1.innerText = 'Deu bom';
textosectionPai.appendChild(texto1);

console.log(textosectionPai);
