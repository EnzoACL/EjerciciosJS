let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]
// let numbers = [2,1,3]

for (let idx = 0; idx < numbers.length;idx++){
    
    for (let ord=idx+1; ord < numbers.length;ord++){
    
        if (numbers[idx] > numbers[ord]){
            let temporal = null;
            temporal = numbers[idx];
            numbers[idx] = numbers[ord];
            numbers[ord] = temporal;
            console.log(numbers);
        }       
    }
}



// Put your code here
//Compara el primer elemento del array con cada uno de los siguientes.
 //Si alguno de los elementos siguientes es más pequeño que el primero,
 // intercambia la posición de ese elemento y el primero.

 //Ya tenemos el elemento más pequeño en la primera posición.
//Ahora toma el segundo elemento de la lista y compáralo con cada uno de los siguientes elementos.
// Si algún elemento es más pequeño que el segundo, intercambia su posición con el segundo.

//Prodece de igual manera para el resto de elementos de la lista consecutivamente.