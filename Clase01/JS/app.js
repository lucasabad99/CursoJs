//QUE ES UNA VARIABLE
// ES UN ESPACIO DE MEMORIA QUE UTILIZZA JAVA SCRIPT

//3 FORMAS DE DECLARAR VARIABLES
//6 tipos de valores en JS
//las variables pueden tener cualquier tipo de valor
// string, number
//var brebaje = "gin bombay shappire"; //---> esto no es buena practica porque usamos VAR. ES5

let brebaje = "Gin bombay sapphire"; //---> no es buena practica porque usamos VAR. ES6, STRING
//YO PUUEDO REASIGNAR ESTA VARIABLE 
brebaje = "Fernet";

const precioBotella = 700; // ES6, NUMBER 
//precioBotella = 800; NO SE PUEDE REASIGNAR LA VARIABLE
const vodka = "vodka";
const ginBombay = "Gin bombay sapphire";
const ronMalibu = "Ron malibu";

//buenas practicas de la declaracion de variables
//siempre tirar a const
//puede ser camelcase, snakecase
//CAMELCASE 
const nombreAlumno = "matias alaniz";
//SNAKECASE
const nombre_Alumno = "matias crevecoure";
//LO MEJOR QUE PUEDEN HACER ES SEGUIR LA SINTAXIS QUE UTILIZA LA EMPRESA

//calculadora

const primerNumero = 50;
const segundoNumero = 50;
const resultado= primerNumero + segundoNumero;
console.log("el resultado super calculado por el genio es" + " " + resultado );

const primerNum = prompt("Escriba el primer numero: ");
const segundoNum = prompt("Escriba el segundo numero por favor: ");
debugger
const result= primerNum + segundoNum;
console.log("el resultado super calculado por el genio es" + " " + result);

alert("te sacaremos de la pagina web");


//concat
const comision = "Comision";
const numeroComision = 63330;
const comision63330 = comision + " " + numeroComision;
console.log(comision63330);

//Trabajo en clase con parse
const primerNume = parseInt(prompt("escriba el primer dato"));
const secondNume = prompt("escriba el segundo dato");
debugger
const secondParse = parseInt(secondNume);
const resultaditoParse = primerNume + secondParse; //concatenacion
console.log( "el resultadito es :" + resultaditoParse);


