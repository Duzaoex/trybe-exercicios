
let custo = 3;
let vVenda = 9;

if (custo >= 0 && vVenda >= 0) {
  let custoTotal = custo * 1.2;
  let Resultado = (vVenda - custoTotal) * 1000;
  console.log(Resultado);
} else {
  console.log("Error, os valores não podem ser negativos!");
};
