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
//console.log("prueba2", chrono[0].time)

// Put your code here
function sort (){
    for (isx=0; isx < chrono.length; isx++){
        
        for(idx=1; idx < chrono.length; idx++){
            
            if (chrono[isx].time > chrono[idx].time){  
                let temporal=null;
                temporal=chrono[isx];
                chrono[isx]=chrono[idx];
                chrono[idx]=temporal;
                
                
                
            }
                
                
        }
                 
                   
    }
return console.log(chrono)         
}     


console.log( chrono)
sort (chrono)
console.log(JSON.stringify(chrono))