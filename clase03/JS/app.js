// SOLICITAMOS UN VALOR DE USUARIO
let ingresarNumero = parseInt(prompt("Ingrese un numero"));
//EN CADA REPETICION, CALCULAMOS EL VALOR DE USUARIO X EL NUMERO DE REPETICION0(i)
debugger
for (let i = 1; i <= 10; i++){
    debugger
    let resultado = ingresarNumero * i;
    alert(ingresarNumero + "X" + i + "=" + resultado);
}



for (let i = 1; i <= 20; i++){
    debugger
    const ingreseNombre = prompt("Ingrese nombre del paciente");
    alert("Turno nro" + i + " " + "Nombre:" + ingreseNombre);
}
debugger
for (i=0; i<10 ; i++){
    debugger
  if (i === 5) {
    break;
  }
alert(i);
}


debugger
for (let i=0; i<10 ; i++){
    debugger
  if (i === 5) {
    continue;
  }
console.log(i);
}

let entradaa = prompt("Ingresar un dato");

//Repetimos con While hasta que el usuario ingresa "ESC"
while(entradaa != "ESC" ){
    debugger
    alert("El usuario ingresó "+ entradaa);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entradaa = prompt("Ingresar otro dato");
}

let numero = 0;
debugger
do{
    debugger
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));

debugger
let entrada = prompt("Ingresar un nombre").trim().toLowerCase();
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
    debugger
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA MARIA");
            break;
        case "MARIA":
            alert("HOLA MARIA");
            break;
        case "MARIEL":
                alert("HOLA MARIEL");
                break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
