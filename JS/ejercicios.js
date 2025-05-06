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

//Ejercicio 4 - callback
function operar(n1,n2,operacion){
    return operacion(n1,n2);
}

function suma(n1,n2){
    return n1+n2;
}
function multiplicacion(n1,n2){
    return n1*n2;
}

console.log(operar(2,4,suma))
console.log(operar(2,4,multiplicacion))

//Ejercicio 5 - Contador con Botones

let botonInc = document.getElementById("botonIncrementar");
let botonDec = document.getElementById("botonDecrementar");
let display = document.getElementById("displayContador");
let contador = 0;

function actualizarDisplay(){
    display.innerText = contador.toString();
}
function incrementarContador(e){
    contador++;
    actualizarDisplay();
}
function decrementarContador(e){
    contador--;
    actualizarDisplay();
}

actualizarDisplay();

botonInc.addEventListener("click",incrementarContador);
botonDec.addEventListener("click",decrementarContador);

//Ejercicio 6 - Cambiar texto de párrafos
const parrafos = document.getElementsByTagName("p");

function cambiarTexto(textoNuevo){
    for (parrafo of parrafos){
        parrafo.innerText = textoNuevo;
    }
}
let botonCambiarTxt = document.getElementById("botonTexto");
botonCambiarTxt.addEventListener("click",()=>{
    cambiarTexto(prompt());
});
