/* Ejercicio 1
Programa una función para contar el número de veces que se repite una palabra en un
texto largo. Por ejemplo, miFuncion("hola mundo chau mundo", "mundo") devolverá 2.*/

function miFuncion(texto, palabra){
    
    let ponerMinuscula = texto.toLowerCase();
    let palabraMinuscula = palabra.toLowerCase();

    let separarPalab = ponerMinuscula.split(" ");

    let contador = 0;

    for(let x=0; x < separarPalab.length; x++){
        if ( separarPalab[x] === palabraMinuscula){
            contador++;
        }
    }
    console.log(contador)
    return contador
}

    const textoLargo = "Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro incidunt nostrum a, quasi explicabo corporis, similique maiores necessitatibus aut eligendi aliquam libero. Quod magni a eum, labore eveniet vitae!"

miFuncion(textoLargo, "Lorem")

/*Ejercicio 2
Programa una función que elimine cierto patrón de caracteres de un texto dado. Por
ejemplo, miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5”. */

function eliminarPatron(texto, patron){
    let patronRegex = new RegExp(patron, 'g')
    let textoSinPatron = texto.replace(patronRegex, ' ')
    return textoSinPatron
}

let texto = "hola gente como anda";
let patron = "gen";
let textoSinPatron = eliminarPatron(texto, patron)
console.log(textoSinPatron)

/*Ejercicio 3
Programa una función para convertir números de base binaria a decimal y viceversa. Por
ejemplo, miFuncion(100, 2) devolverá 4 en base 10. */

function binarioADecimal (binario){
    let decimal = 0;
    let potencia = 0;

    for(let i = binario.length -1; i>= 0 ; i--){
        let bit = parseInt(binario.charAt(i));
        decimal += bit * Math.pow(2, potencia);
        potencia++;
    }
    return decimal;
}
let binario = "10101";
let decimal = binarioADecimal(binario)
console.log(decimal)


/*Ejercicio 4
Programa una función que dada una fecha válida determine cuantos años han pasado
hasta el día de hoy. Por ejemplo, miFuncion(new Date(1987,10,5)) devolverá 35 años. */

/* Ejercicio 5
Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes. Por ejemplo, miFuncion("Hola Mundo") devolverá vocales: 4,
consonantes: 5. Utilizar expresiones regulares.*/

/*Ejercicio 6
Programa una función que dado un arreglo de elementos, elimine los duplicados. Por
ejemplo, miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10",
true]. */


/*Ejercicio 7
Programa una función que dado un arreglo de números obtenga el promedio. Por
ejemplo, promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. No utilizar estructuras
repetitivas. Consultar en la documentación algún método de los arreglos que permitan
solucionar el ejercicio. */


/*Ejercicio 8
Programa una clase llamada Pelicula.
La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la
película, titulo, director, año de estreno, país o países de origen, géneros y calificación.
• Todos los datos del objeto son obligatorios.
• Valida que el id tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes
números.
• Valida que el título no supere los 100 caracteres.
• Valida que el director no supere los 50 caracteres.
• Valida que el año de estreno sea un número entero de 4 dígitos.
• Valida que el país o países sean introducidos en forma de arreglo.
• Valida que los géneros sean introducidos en forma de arreglo.
• Valida que los géneros introducidos estén dentro de los géneros aceptados
(Action, Animation, Comedy, Drama, Horror, Musical, Thriller).
• Crea un método estático que devuelva los géneros aceptados.
• Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de
una posición.
• Crea un método que devuelva toda la ficha técnica de la película.
• A partir de un arreglo con la información de 3 películas genera 3 instancias de la
clase de forma automatizada e imprime la ficha técnica de cada película. */