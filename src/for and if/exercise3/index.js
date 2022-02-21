const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;
let averagewithcouter=0;
let counter = 0;

for (let item of numbers){
    sum = sum + item
    counter++

}


average = sum / numbers.length
averagewithcounter= sum / counter

console.log(sum)
console.log(average)

console.log(averagewithcounter)