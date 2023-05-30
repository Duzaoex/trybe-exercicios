const taBem = document.getElementById('where-are-you');
const parent = taBem.parentElement;
parent.style.color = 'red';

const texto = taBem.firstElementChild;
texto.innerText = 'primeiro filho do filho';

const primeiroFilho = parent.firstElementChild;

const primeiroFilho2 = taBem.previousElementSibling;

const textoDoElemento = taBem.nextSibling;

const terceiroGilho = taBem.nextElementSibling;

const terceiroFilho2 = parent.lastElementChild.previousElementSibling;