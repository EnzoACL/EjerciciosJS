const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];

for (let item of mix) {
    if (typeof item === "string") strings.push(item)
   // if (typeof item ==="number") numbers.push(item); Sol alternativa
   else if (typeof item === "number") numbers.push(item);
}
  
    
    // Put your code here


console.log("Strings:",strings,"Numbers:",numbers)


// Se puede solucionar con un else if, con un 2 if o con un else, este
// ultimo no lleva condicion.