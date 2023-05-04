let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function novosClientes(cliente) {
  if (typeof cliente === 'string'){
    clientesTrybeBank.push(cliente)
    return 'Clinte adicionado(a) com sucesso'
  } else {
    return 'O parâmetro passado deve ser de tipo "string"'
  }
}

console.log(novosClientes('Eduardo'));
console.log(clientesTrybeBank);