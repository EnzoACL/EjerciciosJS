const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];


function minorValue(array) {
    let valor = Infinity
    for (idx=0; idx < array.length; idx++){
        if (array[idx] < valor){
            valor = array[idx]
            
        }
    }

return valor

}
    
//Forma alternativa:
// const menor = Math.min(...array) //Con la funcion Math.min Math.max se obtiene el valor < o > de un array.
//return menor                    // se añade ... porque si no da NaN.

const minor1 = minorValue(numbers1);
console.log(minor1);
console.log(minorValue(numbers2));
console.log(minorValue(numbers3));
console.log(minorValue(numbers4));