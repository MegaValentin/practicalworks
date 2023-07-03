// Funciones y Objetos


/*
Ejercicio 1
Crear una función expresada que permita calcular el factorial de un número entero. 
Recibe como parámetro un valor entero y devuelve su factorial.
*/

// Declarada
function factorial(num) {
      
    let result = 1

    for (let x = 1; x <= num; x++) {
        if (x !== 0){
            result *= x;
        }
      }
    
    console.log(result)
    return result
}

// factorial(5) 


/* ------------------------------------------------------------------------------------ */


/*
Ejercicio 2
Escribe una función declarada llamada esPalíndromo para determinar si una cadena de texto es o 
no un palíndromo. La función recibe como parámetro la cadena de texto y devuelve True o False.
*/

// Expresada
const esPalíndromo = function(word) {

    let newPalindrome = word.replace(/\s+/g, '').toLowerCase();
    let reversePalindrome = word.split("").reverse().join("").replace(/\s+/g, '').toLowerCase();

    if (newPalindrome === reversePalindrome) {
        console.log("El texto: '", word, "' es palindromo.");
        return "El texto: '" + word + "' es palindromo.";
    }

    console.log("El texto: '", word, "' no es palindromo.");
    return "El texto: '" + word + "' no es palindromo.";

}

// esPalíndromo("La ruta nos aporto otro paso natural")


/* ------------------------------------------------------------------------------------ */


/*
Ejercicio 3
Crear un objeto llamado persona con las propiedades nombre, apellido y edad. 
Luego, agregar un método llamado saludar que imprima un saludo utilizando las propiedades del objeto.
*/

const persona = {
    nombre: "Pedro",
    apellido: "Ramirez",
    edad: 32,
    saludar: function(){
        console.log("Hola, mi nombre completo es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + ".");
    }
}

// persona.saludar();


/* ------------------------------------------------------------------------------------ */


/*
Ejercicio 4
Defina una función expresada llamada crearLibro que reciba los siguientes parámetros: 
titulo, autor/es, editorial y año de edición. Esta función debe devolver un objeto que 
represente un libro con las propiedades proporcionadas.
*/

const crearLibro = function(titulo, autores, editorial, añoDeEdición) {
    const libro = {
        titulo : titulo,
        autores : autores,
        editorial : editorial,
        añoDeEdicion : añoDeEdición
    }

    console.log(libro)
    return libro
}

// crearLibro("The Time Machine", "H. G. Wells", "Penguin Random House", 2012)



/* ------------------------------------------------------------------------------------ */


/*
Ejercicio 5
Crear un objeto llamado "empresa" que contenga un arreglo de objetos "empleado". 
Cada objeto empleado debe tener las propiedades nombre y salario. Implementar los 
métodos para agregar nuevos empleados, calcular el salario promedio de la empresa 
y obtener el empleado con el salario más alto.
*/

const empresa = {
    empleados : [
        {
            nombre: "Juan",
            salario: 1200
        }
    ],
    addEmpleado: function(newEmpleado) {
        this.empleados.push(newEmpleado);
    },
    calcularSalarioPromedio: function() {
        let promedio = 0;

        this.empleados.forEach(empleado => {
            promedio += empleado.salario;
            
        });
        console.log("El promedio de salarios es de: " + promedio / this.empleados.length);
        return promedio / this.empleados.length;
    },
    mayorSalario: function() {
        let salario = 0;
        let nombreEmpleado = "";

        this.empleados.forEach(empleado => {
            if (empleado.salario > salario) {
                salario = empleado.salario;
                nombreEmpleado = empleado.nombre;
            }
        });
        console.log("El mayor salario de la empresa es: " + salario + " perteneciente a " + nombreEmpleado);
        return salario;
    }
};


// console.log(empresa.empleados)

// empresa.addEmpleado(
//     {
//         nombre: "Pedro",
//         salario: 3000
//     }
// )

// empresa.calcularSalarioPromedio()
// empresa.mayorSalario()

// console.log(empresa.empleados)


/* ------------------------------------------------------------------------------------ */


/*
Ejercicio 6
Crear una función llamada "filtrarPorValor" que reciba un arreglo de objetos con las 
propiedades nombre y edad y un valor como parámetros, y devuelva un nuevo arreglo 
con los objetos que contengan esa propiedad con el valor especificado. Por ejemplo, 
la función podría filtrar por edad y devolver solo los objetos con esa edad.
*/

function filtrarPorValor(arreglo, valor){
    let objetos = [
        {
            nombre: "Hugo",
            edad: 32
        }
    ]

    arreglo.forEach(persona => {
        objetos.push(persona)
    })

    console.log(objetos);
    console.log(objetos.filter(objeto => objeto.edad === valor));
    return objetos.filter(objeto => objeto.edad === valor);
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 25 },
    { nombre: "Laura", edad: 35 }
  ];

// filtrarPorValor(personas, 25)