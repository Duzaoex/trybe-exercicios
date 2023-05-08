let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
 // function customerInfo(order) {
  //  return 'Ola, ' + order.order. delivery.deliveryPerson 
  //  + ', entrega para: ' + order.name + ', telefone: ' 
  //  + order.phoneNumber + ", " + order.address.street 
  //  + ", N: " + order.address.number + ', AP: ' 
 //   + order.address.apartment;
//} 
//console.log(customerInfo(order));

 
  
  function orderModifier(order) {    
  order.name = 'Luiz Silva'
  order.payment = '50,00'
  return 'Olá, ' + order.name + ', o valor total de seu pedido de ' 
  + Object.keys(order.order.pizza).join(', ') + 'e ' 
  + order.order.drinks.coke.type + 'é R$' + order.payment;
}
  
  console.log(orderModifier(order));