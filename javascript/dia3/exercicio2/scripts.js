let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let clienteEncontrado = false;

function removerClientes(cliente) {
  if (typeof cliente === 'string') {
  for (let index =0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1)
        clienteEncontrado = true;
        return 'Cliente excluido(a) com sucesso';
    }
  }
  
  if (clienteEncontrado === false) {
    return 'Cliente nao encontrado(a)';
  }

  } else {
    return 'O parâmetro passado deve ser do tipo "string"';
  }
}

console.log(removerClientes(false));
console.log(removerClientes('Eduardo'));
console.log(removerClientes('Ada'));
console.log(clientesTrybeBank);