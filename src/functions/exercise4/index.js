const numbers = [11,12,13,14]

function swap (posicion1,posicion2,numbers){
    let temporal = null;
    temporal = numbers[posicion1];
    numbers[posicion1] = numbers[posicion2];
   numbers[posicion2] = temporal;
  
}

// Put your code here

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);