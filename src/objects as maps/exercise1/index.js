const phrase = "No hay bien que por mal no venga";
const counters = {};

function countLetter (letter, countersObject) {
for (idx=1; idx<phrase.length; idx++){
    if (letter=phrase[idx]){
        console.log('Igual');
    } else{console.log('No igual')}
}
}

for (letter of phrase) {
    console.log(letter)
    countLetter(letter, counters)
}
//console.log(counters)

