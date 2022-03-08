const phrase = "No hay bien que por mal no venga";
const counters = {};

function countLetter (letter, countersObject) {
    countersObject['letra']= phrase
  
    
        if (letter=countersObject.letra){
            console.log('igual')
            
        }
    
}
    // Put your code here
//counters= "No hay bien que por mal no venga"
 
    
       




/*
    for (letter of phrase)
       for(idx=1; idx < String.length; idx++){
           if (phrase[out] = phrase[idx]){
            countersObject['letter']="prueba"
            
           }
        }
     
    }
*/


for (letter of phrase) {
    console.log(letter)
    countLetter(letter, counters)
}
console.log(counters)
console.log(phrase[1])
console.log(counters.letra)