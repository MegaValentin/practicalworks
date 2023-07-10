/* Ejercicio 1
Programa una función para contar el número de veces que se repite una palabra en un
texto largo. Por ejemplo, miFuncion("hola mundo chau mundo", "mundo") devolverá 2.*/
console.log("ejercicio 1")
const miFuncion = (texto, palabra) => {
    
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
console.log("ejercicio 2")
const eliminarPatron = (texto, patron) => {
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
console.log("ejercicio 3")
const binarioADecimal = (binario) =>{
    let decimal = 0;
    let potencia = 0;

    for(let i = binario.length -1; i>= 0 ; i--){
        let bit = parseInt(binario.charAt(i));
        decimal += bit * Math.pow(2, potencia);
        potencia++;
    }
    return decimal;
}
let binario = "100";
let decimal = binarioADecimal(binario)
console.log(decimal)


/*Ejercicio 4
Programa una función que dada una fecha válida determine cuantos años han pasado
hasta el día de hoy. Por ejemplo, miFuncion(new Date(1987,10,5)) devolverá 35 años. */
console.log("ejercicio 4")
const edad = (fecha) => {

    let fechaActual = new Date()
    let anioActual = fechaActual.getFullYear()
    let mesActual = fechaActual.getMonth() + 1;
    let diaActual = fechaActual.getDate();
    
    let separarFecha = fecha.split("-");
    console.log(separarFecha)
    let anioFecha = parseInt(separarFecha[0]);
    let mesFecha = parseInt(separarFecha[1]);
    let diaFecha = parseInt(separarFecha[2]);
    
    let restarAños = anioActual - anioFecha

    if(mesActual < mesFecha || (mesActual === mesFecha && diaActual < diaFecha)){
        restarAños--;
    }
    return restarAños
}
let fecha = "1999-12-20"
let cumple = edad(fecha)
console.log(cumple)

/* Ejercicio 5
Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes. Por ejemplo, miFuncion("Hola Mundo") devolverá vocales: 4,
consonantes: 5. Utilizar expresiones regulares.*/
console.log("ejercicio 5")
const vocalesConsonantes = (cadenaTexto) => {
    let vocales = 0;
    let consonantes = 0;

    let cadenaMinuscula = cadenaTexto.toLowerCase();

    for (let i = 0; i < cadenaMinuscula.length; i++){
        let caracteres = cadenaMinuscula[i]

        if (caracteres.match(/[aeiouáéíóú]/)){
            vocales++
        }
        else if (caracteres.match(/[bcdfghjklmnñpqrstvwxyz]/)){
            consonantes++
        }
    }

    return { vocales:vocales, consonantes:consonantes}
}

console.log(vocalesConsonantes("hola Mundo"))


/*Ejercicio 6
Programa una función que dado un arreglo de elementos, elimine los duplicados. Por
ejemplo, miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10",
true]. */
console.log("ejercicio 6")
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

const arr = ["x",2,3,"x",true,2,1, true]
let eliminar = eliminarDuplicados(arr)
console.log(eliminar)


/*Ejercicio 7
Programa una función que dado un arreglo de números obtenga el promedio. Por
ejemplo, promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. No utilizar estructuras
repetitivas. Consultar en la documentación algún método de los arreglos que permitan
solucionar el ejercicio. */
console.log("ejercicio 7")
const promedioDeArr = (arr) => {
    if (arr.length === 0){
        return 0;
    }
    let sum = arr.reduce(function (a, b){
        return a + b
    })
    return sum / arr.length
}

let arreglo = [9,8,7,6,5,4,3,2,1,0]
let promedio = promedioDeArr(arreglo)
console.log(promedio)

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
console.log("ejercicio 8 ")

class Pelicula{
    static generoAceptados = ['Accion', 'Animacion', 'Comedia', 'Drama' , 'Horror' , 'Musical' , 'Thriller']

    constructor(idPelicula, titulo, director, anoEstreno, paisesOrigen, generos, calificacion){
        
        this.idPelicula = idPelicula;
        this.titulo = titulo;
        this.director = director;
        this.anoEstreno = anoEstreno;
        this.paisesOrigen = paisesOrigen;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarId();
        this.validarTitulo();
        this.validarDirector();
        this.validarAnoEstreno();
        this.validarPaisesOrigen();
        this.validarGeneros();
        this.validarCalificacion();

    }
    validarId(){

    }
    validarTitulo(){
        if (this.titulo.length > 100){
            throw new Error("El titulo no puede superar los 100 caracteres")
        }
    }
    validarDirector(){
        if (this.director.length > 50){
            throw new Error("El nombre del director no puede superar los 50 caracteres")
        }
    }
    validarAnoEstreno(){

    }
    validarPaisesOrigen(){

    }
    validarGeneros(){

    }
    validarCalificacion(){

    }
    obtenerGrilla(){
        const grilla = `
        ID : ${this.idPelicula}
        Titulo : ${this.titulo}
        Director : ${this.director}
        Año de Estreno: ${this.anoEstreno}
        Paises de Origen: ${this.paisesOrigen.join(', ')}
        Generos: ${this.generos.join(', ')}
        Calificacion: ${this.calificacion}
        `;
        return grilla
    }
}
