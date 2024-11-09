let nombreIngresado = prompt("Ingresar nombre");
alert("El nombre ingresado es " + nombreIngresado);
debugger
nombreIngresado = prompt("Ingresar nombre");
alert("El nombre ingresado es " + nombreIngresado);
debugger
nombreIngresado = prompt("Ingresar nombre");
alert("El nombre ingresado es " + nombreIngresado);

function saludarUsuario() {
 
    let nombreUsuario = prompt("Ingrese el nombre de usuario");
     alert("El nombre del usuario es -->  " + nombreUsuario);
     console.log("El nombre del usuario es -->  " + nombreUsuario);
}

saludarUsuario();
saludarUsuario();
saludarUsuario();

const nombre = prompt("ingrese nombre");
const apellido = prompt("ingrese apellido");
debugger
function conParametro(Parametro1 , parametro2){
    debugger
  console.log("entramos perrito malvado");
  console.log(Parametro1 + " " + Parametro2);  
}

conParametro(nombre, apellido);


//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado);



//FUNCION ANONIMA
const suma = function(a,b) { return a + b};

console.log(suma(2,2));

const resta = (c,d) => c - d;
console.log(resta(4,2));

//Ejercicio iva
const sumador = (a,b) => a + b;
const restador = (c,d) => c - d;
const descuento = 50;
const precioProducto = 500;
const iva = precioProducto => precioProducto * 0.21;
const resultadoConDescuento = restador(sumador(precioProducto,iva(precioProducto)), descuento);

console.log(resultadoConDescuento);