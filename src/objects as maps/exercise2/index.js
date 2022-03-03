const chrono = [
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
//console.log("prueba1", chrono[0])
//console.log("prueba2", chrono[abc+1].time)

// Put your code here
function sort (){
    for (out=0; out < chrono.length; out++){
        for(idx=out+1; idx < chrono.length; idx++){ 
            if ( chrono[out].time > chrono[idx].time ){
                let temp = null;
                temp = chrono[out];
                chrono[out] = chrono[idx];
                chrono[idx] = temp;
            }
        }
    }
return chrono
}
   
    


console.log( chrono)
sort(chrono)
console.log(JSON.stringify(chrono))

