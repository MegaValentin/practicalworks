/*
Ejercicio 1
Dado un array de números enteros, se deberá calcular el puntaje total en función de lo
siguiente:
1. Suma 1 punto por cada número par del array.
2. Suma 3 puntos por cada número impar del array, excepto el valor 5.
3. Suma 5 puntos cada vez que aparezca el valor 5.
Por ejemplo:
Entrada: [1, 2, 3, 4, 5]
Resultado: 13
*/


function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arrayEnteros = [];
for (var i = 0; i < 10; i++) {
    var numeroAleatorio = generarNumeroAleatorio(1, 20);
    arrayEnteros.push(numeroAleatorio);
}
function calcularPuntaje(arr){
    console.log(arr);
    let puntaje = 0;
    for (let i = 0; i < arr.length; i++){
        const numero = arr[i];
        if(numero % 2 === 0){
            puntaje += 1;
        } else if( numero === 5){
            puntaje += 5;
        } else {
            puntaje += 3;
        }
    }
    console.log(puntaje)
};
calcularPuntaje(arrayEnteros);

/*Ejercicio 2
Completar las condiciones de los if del siguiente script para que los mensajes se
muestren siempre de forma correcta:
let numero1 = 5;
let numero2 = 8;
if(...) {
console.log("numero1 no es mayor que numero2");
}
if(...) {
console.log("numero2 es positivo");
}
if(...) {
console.log("numero1 es negativo o distinto de cero");
}
if(...) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace
mayor o igual que numero2");
} */
let numero1 = -5;
let numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
};
if(numero2 > 0) {
console.log("numero2 es positivo");
};
if(numero1 < 0) {
console.log("numero1 es negativo o distinto de cero");
};
if(numero1 ++ < numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2") 
};

/*Ejercicio 3
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso
matemático sencillo que se basa en obtener el resto de la división entera entre el
número de DNI y el número 23. A partir del resto de la división, se obtiene la letra
seleccionándola dentro de un array de letras.
El array de letras es:
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es
la A. Con estos datos, elaborar un pequeño script que:
1. Almacene en una variable el número de DNI del usuario y en otra variable la letra
del DNI.
2. En primer lugar, se debe comprobar si el número es menor que 0 o mayor que
99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el
número proporcionado no es válido y el programa no muestra más mensajes.
3. Si el número es válido, se calcula la letra que le corresponde según el método
explicado anteriormente.
4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario.
Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha
indicado no es correcta. En otro caso, se muestra un mensaje indicando que el
número y la letra de DNI son correctos. */
function DNI(){
    let dniNumero = prompt("Numero del DNI:");
    let dniLetra = prompt("Letra del DNI");
    
    if (dniNumero < 0 || dniNumero > 99999999){
        console.log("Numero de DNI no valido");
    } else {
        let resto = dniNumero % 23;
        let letraCalculada = dniLetra[resto];
    
        if (letraCalculada !== dniLetra.toUpperCase()){
            console.log("Letra ingresada no es correcta");
        } else {
            console.log("El numero y letra de DNI es correcto")
        }
    }
}
DNI()

/*Ejercicio 4
El factorial de un número entero n es una operación matemática que consiste en
multiplicar todos los factores n x (n-1) x (n-2) ...... Así, el factorial de 5 (escrito como 5!)
es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
  */

function factorial(n){
    let resultado = 1;
    for (let i = 1; i <= n; i++){
        resultado *= i;

    }
    
    return resultado;
}
console.log(factorial(5))

/*Ejercicio 5
Almacenar en una variable una cadena de texto e indicar si la misma es un palíndromo,
es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo: "La ruta nos aporto otro paso natural". */

function esPalindromo(cadena) {   
    cadena = cadena.replace(/\s/g, '').toLowerCase();

    if (cadena === cadena.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
  

/*Ejercicio 6
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array
el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
Mostrar un mensaje indicando cual es el valor que más veces se repitió. */
function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
function tirarDosDados() {
    let dice1 = tirarDado();
    let dice2 = tirarDado();
    return dice1 + dice2;
}
let valorRepetido = {};
for (let i = 0; i < 36000; i++) {

    let suma = tirarDosDados();
    if (valorRepetido.hasOwnProperty(suma)) {
        
        valorRepetido[suma]++;
        
    } else {
        valorRepetido[suma] = 1;
    }
}
console.log(valorRepetido)
let mostFrequentSum = Object.keys(valorRepetido)[0];
console.log(mostFrequentSum)
for (let sum in valorRepetido) {
    if (valorRepetido[sum] > valorRepetido[mostFrequentSum]) {
      mostFrequentSum = sum;
    }
}
console.log("El valor que más veces se repitió es: " + mostFrequentSum);
