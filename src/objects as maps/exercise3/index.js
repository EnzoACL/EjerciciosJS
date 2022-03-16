const people = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]

// Your code here
function aFasterThanB (a,b) {
    // Put your code here
    if (a.time < b.time){
        return true }
        else {return false}
    
}

function bFasterThanA (a,b) {
    // Put your code here
    if (b.time < a.time) {return true} 
    else {return false}
}   

function swap (posicion1,posicion2,numbers){
    let temporal = null;
    temporal = numbers[posicion1];
    numbers[posicion1] = numbers[posicion2];
    numbers[posicion2] = temporal;
}
function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            if (
                comparator(array[currentIdx], array[nextIdx])
            ) swap (currentIdx, nextIdx, array)
        }
    }
}

console.log("Sin ordenar",JSON.stringify(people));
console.log('l')
console.log('l')
sort(aFasterThanB, people);
console.log("Mayor a menor",JSON.stringify(people));
console.log('l')
console.log('l')
sort(bFasterThanA, people);
console.log("Menor a",JSON.stringify(people));

console.log(sort(aFasterThanB,people));
console.log(sort(bFasterThanA,people));