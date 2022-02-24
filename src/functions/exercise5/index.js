const numbers = [11,9,13,12]
function minorInRange (posicion1,posicion2,numbers) {

    // Put your code here
    let valor = Infinity
    for (idx=posicion1; idx < posicion2; idx++){
        if (numbers[idx] < valor ){
            valor = numbers[idx] 
        }
    }
    return valor
}
//console.log(minorInRange(numbers))
console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3,numbers));