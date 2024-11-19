function mayorQue (numero){
    return(resultado) => {

        if(resultado > numero){
           return true;
        }else if(resultado === numero){
            return "es igual";
        }else{
            return false;
        }   
    }
}

let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(2));

function operaciones (resultadoOp){
   
if(resultadoOp === "sumar"){

 return (a,b) => a + b
}
else if (resultadoOp === "resta"){
    return (a,b) => a - b
    }
    else{
  return false;
    }
}

const suma = operaciones("sumar");
const resta = operaciones("restar");

console.log(suma(2,2));




//SINTAXIS COMPLICADA
// Esta funcion recibe 2 parametros, el array y el mensajito o funcion especifica
//Dentro hay un for que recorre todo el array por cada elemento 
//en este caso imprime cada objeto del array
//la variable objeto se declara dentro del for
//Palabras claves for, of
function porCadaUno(arr, fun){
    for(const objeto of arr){
        fun(objeto)
    }
}
//Creo un array con numeros
const numeritos = [1,2,3,4,5,6];
//Creo un array con cadena vacia, luego pusheo nuevos elementos
multi = [];
//imprimo todo el for y sus elementos
porCadaUno(numeritos, console.log);
//en el print creo una funcion dentro del objeto donde agarro el array vacio y pusheo el objeto multiplicado por 2
porCadaUno(numeritos, objeto => 
                        { multi.push(objeto * 2 )} );
//Imprimo el nuevo array "multi"
console.log(multi);

const jugadores =   [{nombre: "Lucas",valoracion: 89},
                    {nombre: "Nestor", valoracion: 98},
                    {nombre:"Facundo", valoracion:67},
                    {nombre: "Pilo", valoracion:80},
                    {nombre: "Armando", valoracion:60},
                    {nombre: "Victor C", valoracion:84}]

jugadores.forEach(
    jugadores => { 
        if(jugadores.valoracion > 90){
            console.log("este jugador juega de puta madre => ", jugadores)
        }
    }
)

jugadores.push({nombre: "Brindisi", valoracion: 99});
jugadores.push({nombre: "Housseman", valoracion: 101});
console.log(jugadores);

