const specialFruit = ['Maça', 'Nectaria', 'Melancia'];

const additionalItens = ['Arroz', 'Feijão', 'Macarrão'];

const fruitSalad = (fruit, additional) => {
  const todosItens = [...fruit, ...additional]
  return todosItens;
};

console.log(fruitSalad(specialFruit, additionalItens));