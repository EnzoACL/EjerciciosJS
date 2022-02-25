const numbers = [11,9,13,12]

// Paste your functions here

function swap (posicion1,posicion2,numbers){
    let temporal = null;
    temporal = numbers[posicion1];
    numbers[posicion1] = numbers[posicion2];
    numbers[posicion2] = temporal;
}
function minorInRange (posicion1,posicion2,numbers) {
    for (idx of numbers)
        for (idx=posicion1; idx <= posicion2; idx++){
            if (numbers[idx] > numbers[idx+1] ){
                swap(idx,idx+1,numbers)
            }
        }
    
}
//Se aplica aqui el rango del array que queremos ordenar
(minorInRange(0,3,numbers)); 
console.log(numbers); 
