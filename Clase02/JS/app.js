/*let edadUsuario = 18;
if(edadUsuario == 18){
    console.log("El chico ya puede ir preso");
}


if(edadUsuario == 18){
    console.log("el chico no puede ir preso");
} else{
    console.log("no va preso pero si los padres lo tienen que venir a buscary retarlo");
}

//debugger
if( edadUsuario == 18){
    console.log("el chico puede entrar al boliche");
} else if( edadUsuario == 19) {
    console.log("el chico puede entrar al boliche");
}else if( edadUsuario == 20) {
    console.log("el chico puede entrar al boliche");
}else if( edadUsuario == 21) {
    console.log("el chico puede entrar al boliche");
}else if( edadUsuario == 22) {
    console.log("el chico puede entrar al boliche");
}else if( edadUsuario == 23) {
    console.log("el chico puede entrar al boliche");
} else {
    console.log("el chico no puede entrar y se lo lleva minoria");
}

if(edadUsuario >= 18){
    console.log("el chico puede bailar tranquilo");
} else {
    console.log("se lo lleva minoria");
}

///NUEVO EJEMPLO
//DOBLE IGUAL == COMPARA EL VALOR DEL DATO
//TRIPLE IGUAL === COMPARA EL VALOR Y EL TIPO DE DATO

//CUANDO HABLO DE TIPO DE DATOS ME REFIERO A :STRING, NUMBER, BOOLEAN...


const numeroUsuario = prompt("indicame un numero"); 

if (numeroUsuario == 6) {
    console.log("El usuario es igual a 6");
} 

if (numeroUsuario === 6) {
    console.log("el usuario no es igual a 6");
}


let nombreIngreso = prompt("ingrese name");
let apellidoIngreso = prompt("ingrese surname");
debugger
if ((nombreIngreso != "")  && (apellidoIngreso != "")) { 
    
    alert("el nombre es: " + " " + nombreIngreso + " y el apellido es "+ apellidoIngreso );
} else {
    alert("error: ingresar nombre y apellido");
}*/

//Crear codigo para que yo completo el nombre pero no el apellido me diga ingrese su apellido
//Que pasa si yo completo el apellido pero no el nombre, me diga ingrese su nombre
//Crear codigo para validar que el usuario no me escriba un numero.

//Caracteristicas del operador &&
//para que la condicion total sea true, las comparaciones tiene que ser true;
//Puede haber multiples comparaciones

/*let nombreIngresoUsuario = prompt("ingrese nombre");
debugger
//toLowerCase es un metodo de js que pasa todo a minuscula
if ((nombreIngresoUsuario.toLowerCase() === "ANA") || (nombreIngresoUsuario.toLocaleLowerCase() === "ana")) { 
    alert("el nombre es Ana");
} else {
     alert("el nombre no es Ana");
}*/

/*const usuarioCarnet = prompt("Tenes carnet?");
const edadUsarioCarnet = parseInt(prompt("Ingrese su edad")); 
debugger
if ( usuarioCarnet.toLowerCase() == "Si") {
    if (edadUsarioCarnet >= 18) {
        console.log("puede conducir");
    } else {

    console.log("Te levanto el auto pa");
}
} else{

    console.log("llamare a tus padres");
}*/

   

// Pausa en el depurador para analizar el código cuando se ejecuta
//debugger;

// Solicita al usuario que indique si tiene carnet de conducir

/*const usuarioCarnet = prompt("¿Tenés carnet?");
// Compara la respuesta en minúsculas para verificar si es "si"
if (usuarioCarnet.toLowerCase() === "si") { 
    // Si el usuario tiene carnet, solicita la edad
    const edadUsarioCarnet = parseInt(prompt("Ingrese su edad"));

    // Verifica si la edad es mayor o igual a 18
    if (edadUsarioCarnet >= 18) {
        console.log("Puede conducir"); // Imprime en consola que puede conducir
        alert("Puede conducir"); // Muestra una alerta indicando que puede conducir
    } else {
        console.log("Te levanto el auto pa"); // Imprime en consola que no puede conducir
        alert("Te levanto el auto pa"); // Muestra una alerta indicando que no puede conducir
    }
} else {
    // Si el usuario no tiene carnet, muestra un mensaje en consola y en alerta
    console.log("Llamaré a tus padres");
    alert("Llamaré a tus padres");
}*/


/*const usuarioCarnet = prompt("¿Tenés carnet?");
const edadUsarioCarnet = parseInt(prompt("Ingrese su edad"));
if ((usuarioCarnet.toLowerCase() === "si") && ( edadUsarioCarnet >= 18)){

    console.log("puede conducir tranquilo rey");
    alert("puede conducir tranquilo rey");

} else if(edadUsarioCarnet < 18) {

    console.log("tenes que ser mayor");
    alert("tenes que ser mayor");
    
} else if (usuarioCarnet.toLowerCase() === "no") {

    console.log("necesitas carnet flaco");
    alert("necesitas carnet flaco");

} else {
    console.log("marche preso");
    alert("marche preso");
}*/
    
// Solicitamos la información del usuario
// Solicitamos la información del usuario
const edadUsarioCarnet = parseInt(prompt("Ingrese su edad"));
const usuarioCarnet = prompt("¿Tenés carnet?").toLowerCase();
// Combinamos las condiciones usando el operador &&
if ( (edadUsarioCarnet >= 18) && (usuarioCarnet === "si")) {
    console.log("Puede conducir tranquilo rey");
    alert("Puede conducir tranquilo rey");
} else if ((edadUsarioCarnet < 18) && (usuarioCarnet === "si")) {
    console.log("Tenés que ser mayor");
    alert("Tenés que ser mayor");
} else if ((edadUsarioCarnet > 18) && (usuarioCarnet === "no")) {
    console.log("Necesitas carnet flaco");
    alert("Necesitas carnet flaco");
} else {
    console.log("marche preso");
    alert("marche preso");
}