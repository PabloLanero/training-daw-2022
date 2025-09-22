// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
    let sumaTotal = 0;
    let numeroGrande= array[0];
    let numeroPequeno = array[0];
    
    for (let i=0; i<array.length; i++) {
        let numero=array[i];
        if(numero > numeroGrande)numeroGrande=numero;
        if(numero < numeroPequeno)numeroPequeno;
        sumaTotal = numero+ sumaTotal
    };

    console.log(`El numero mas grande es el ${numeroGrande}`)
    console.log(`El numero mas pequeño es el ${numeroPequeno}`)
    console.log(`La suma de los numeros es el ${sumaTotal}`)
    console.log(`La media de los numeros es ${sumaTotal/array.length}`)
    

}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])