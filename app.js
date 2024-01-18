// Ejemplo de uso del prototipo string
const mensaje = "Hola, mundo!";

// Si una variable es de prototipo string, obtiene acceso a los métodos del prototipo string

const mensajeEnMayusculas = mensaje.toUpperCase();

console.log(mensajeEnMayusculas);  // Salida: HOLA, MUNDO!



// Ejemplo de uso del prototipo de number
const numero = 42;

// Si una variable es de prototipo number, obtiene acceso a los métodos del prototipo number
const numeroRedondeado = numero.toFixed(2);

console.log(numeroRedondeado);  // Salida: "42.00"


// Ejemplo de uso del prototipo de Boolean
const esVerdadero = true;

// Utilizando el método toString() heredado del prototipo Object
const representacionString = esVerdadero.toString();

console.log(representacionString);  // Salida: "true"




// ARRAYS EN JAVASCRIPT

// Crear un array
const colores = ["rojo", "verde", "azul"];

// Acceder al primer elemento (índice 0)
console.log(colores[0]);  // Salida: "rojo"


// MÉTODO PUSH PARA ARRAYS:

const frutas = ["manzana", "pera"];

// ESTE MÉTODO AGREGA AL FINAL DEL ARREGLO UN NUEVO VALOR
frutas.push("uva");

console.log(frutas);  // Salida: ["manzana", "pera", "uva"]



// MÉTODO POP:

const numeros = [1, 2, 3, 4];

// ESTE METODO ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
// ALMACENAMOS EL NUMERO ELIMINADO EN LA CONSTANTE ultimoNumero:
const ultimoNumero = numeros.pop();

console.log(ultimoNumero);  // Salida: 4
console.log(numeros);  // Salida: [1, 2, 3]




// OBJETOSS EN JAVASCRIPT

// Crear un objeto literal de la siguiente manera:
const persona = {
    nombre: "Juan", // propiedades y valores como en css
    edad: 25,
    ciudad: "Lima"
};

// Agragando propiedades a un objeto literal 
persona.trabajo = "Programador";
console.log(persona);


//Quitar una propiedad 
delete persona.ciudad;
console.log(persona);


//accdeder a una propiedad especifica
console.log(persona.nombre);  // Salida: "Juan"

// DESTRUCTURAR DATOS DE UN OBJETO

const { nombre, edad } = persona;
console.log(nombre, edad);  // Salida: "Juan" 25





// THIS EN OBJETOS LITERALES

const coche = {
    marca: "Toyota",
    modelo: "Camry",
    obtenerInfo: function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
};

coche.obtenerInfo();  // Salida: "Marca: Toyota, Modelo: Camry"


// DECLARACION DE FUNCIONES
// lAS FUNCIONES SIRVEN PARA REPETIR UN BLOQUE DE CODIGO CADA VEZ QUE LO LLAMEMOS
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}
// ASIGNANDO FUNCION A VARIABLES
const sumar = function(a, b) {
    return a + b;
};

// ASGINANDO FUNCION DE ARROW DE UNA SOLA LINEA PARA SER MAS CONCISO
const multiplicar = (a, b) => a * b;




