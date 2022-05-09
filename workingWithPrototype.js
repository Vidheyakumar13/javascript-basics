// https://javascript.info/prototype-inheritance#tasks
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // True
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // Null
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // undefined