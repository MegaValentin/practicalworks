/*Ejercicio 1
Crear una función expresada que permita calcular el factorial de un número entero.
Recibe como parámetro un valor entero y devuelve su factorial. */
function factorial(n){
    
    let resultado = 1;
    for (let i = 1; i <= n; i++){
        resultado *= i;

    }
    console.log(resultado)
    return resultado;
}


factorial(5)

/*Ejercicio 2
Escribe una función declarada llamada esPalíndromo para determinar si una cadena de
texto es o no un palíndromo. La función recibe como parámetro la cadena de texto y
devuelve True o False. */

function esPalindromo(cadena) {   
    let texto = cadena.replace(/\s+/g, '').toLowerCase();
   
    
    if (texto === cadena.split('').reverse().join('').replace(/\s+/g, '').toLowerCase()) {
        console.log("El texto: '", cadena, "' es palindromo.");
        return "El texto: '" + cadena + "' es palindromo.";
    }
    console.log("El texto: '", cadena, "' no es palindromo.");
    return "El texto: '" + cadena + "' no es palindromo.";
}

esPalindromo("neuquen")

/*Ejercicio 3
Crear un objeto llamado persona con las propiedades nombre, apellido y edad. Luego,
agregar un método llamado saludar que imprima un saludo utilizando las propiedades
del objeto. */

const persona = {
    nombre: "Valentin",
    apellido: "Mega",
    edad: 23,
    saludar: function(){
        console.log("Hola, mi nombre completo es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + ".");
    }
}
persona.saludar();


/*Ejercicio 4
Defina una función expresada llamada crearLibro que reciba los siguientes parámetros:
titulo, autor/es, editorial y año de edición. Esta función debe devolver un objeto que
represente un libro con las propiedades proporcionadas. */

function crearLibro(titulo, autores, editorial, añoDeEdición){
    const libro = {
        titulo : titulo,
        autores : autores,
        editorial : editorial,
        añoDeEdicion : añoDeEdición
    }
    console.log(libro)
    return libro
}
crearLibro("cien años de soledad", "Gabriel García Márquez", "	Editorial Sudamericana", 1967);

/*Ejercicio 5
Crear un objeto llamado "empresa" que contenga un arreglo de objetos "empleado".
Cada objeto empleado debe tener las propiedades nombre y salario. Implementar los
métodos para agregar nuevos empleados, calcular el salario promedio de la empresa y
obtener el empleado con el salario más alto. */
function agregarEmpleado(nuevoEmpleado){
    this.empleados.push(nuevoEmpleado)
}
function calcularSalario(){
    let salarioPromedio = 0;

    this.empleados.forEach(empleado => {
        salarioPromedio += empleado.salario
    });
    console.log("El salario promedio es de: " + salarioPromedio);
    return salarioPromedio
}

const empresa = {
    empleados : [
        {
            nombre: "Valentin",
            salario: 1200
        }
    ]
}
agregarEmpleado(
    {
        nombre: "javier",
        salario: 1200
    }
)
console.log(empresa)
/*
Ejercicio 6
Crear una función llamada "filtrarPorValor" que reciba un arreglo de objetos con las 
propiedades nombre y edad y un valor como parámetros, y devuelva un nuevo arreglo 
con los objetos que contengan esa propiedad con el valor especificado. Por ejemplo, 
la función podría filtrar por edad y devolver solo los objetos con esa edad.
*/
function filtrarPorValor(){
    const empleados = [
        {
            nombre: "Valentin",
            edad: 32
        }
    ]
}
