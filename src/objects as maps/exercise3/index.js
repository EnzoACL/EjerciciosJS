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
function aFasterThanB (runnerA, runnerB) {
    // Put your code here
    if (runnerA.time < runnerB.time){
        return true }
        else {return false}
    
}

function bFasterThanA (runnerA,runnerB) {
    // Put your code here
    if (runnerB.time < runnerA.time) {return true} 
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
aFasterThanB(people);
console.log("prueba0",people);
sort(aFasterThanB, people);
console.log("prueba1",people);
sort(bFasterThanA, people);
console.log("prueba2",people);

console.log(sort(aFasterThanB,people));
console.log(sort(bFasterThanA, people));