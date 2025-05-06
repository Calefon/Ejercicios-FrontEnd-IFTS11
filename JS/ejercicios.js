//Ejercicio 1 - filtrar números pares
function filtrarPares(arr){
    return arr.filter((val) => ((typeof val === "number") && val%2 === 0) );
}

let [a,b,c] = [[1,2,3,4,5], ["a","b","c","d"], [[1],2,3,4,5]]

console.log(filtrarPares(a))
console.log(filtrarPares(b))
console.log(filtrarPares(c))

//Ejercicio 2 - calcular promedio
function calcularPromedio(arr){
    let suma = 0;
    for (valor of arr) {
        if(typeof valor !== "number")
            return "Error: el array no contiene solo números"

        suma+=valor;
    }
    return suma / arr.length;
}

console.log(calcularPromedio(a))
console.log(calcularPromedio(b))
console.log(calcularPromedio(c))

//Ejercicio 3 - Imprimir con retraso
function imprimirConRetraso(arr){
    imprimirConRetrasoRecurs(arr,0);
}

//Sin await
function imprimirConRetrasoRecurs(arr, i){
    if(i >= arr.length)
        return
    setTimeout(()=>{
        console.log(arr[i]);
        imprimirConRetrasoRecurs(arr,i+1);
    }, 1000)
}

imprimirConRetraso(a)

