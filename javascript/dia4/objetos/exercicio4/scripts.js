let customer2 = {
    firstName: 'Roberto',
    age: 23,
    job: 'Teacher',
  };
  
 
  let customer3 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';

  function addProperty(object, key, value) {
    object[key] = value;
  };
  addProperty(customer2, newKey, lastName);
  console.log(customer2);