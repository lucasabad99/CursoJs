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

//Metodos de busqueda - Funciones de orden superior
//FOREACH 
const numeros = [1,2,3,4,5,6];
numeros.forEach( (el) => {
    console.log(el);
})

//Find
//Se detiene al encontrar el primer valor que cumpla con la condicion dada y lo devuelve
const Pirania = [{nombre: "Lucas", valoracion: 99, posicion: "LD"}, 
                 {nombre: "Rodri", valoracion: 80, posicion: "MD"},
                 {nombre: "Polaco", valoracion: 90, posicion: "DEF"},
                 {nombre: "Naza", valoracion: 71, posicion: "LI"},
                 {nombre: "Tuki", valoracion: 40, posicion: "EI"},
                 {nombre: "Branqui", valoracion: 99, posicion: "MDC"}]

const scouting = Pirania.find((el) => el.valoracion === 99);
console.log(scouting);

//Filter
//Devuelve todos los objetos a diferencia del find
const subeDescuento = [{ PersonaJuridica : "Bna", Descuento: 100},
                       {PersonaJuridica : "Lemon", Descuento: 60},
                       {PersonaJuridica : "Uala", Descuento: 40},
                       {PersonaJuridica : "Modo", Descuento: 80},
                       {PersonaJuridica : "Prex", Descuento: 20},
                      ]
const encuesta = subeDescuento.filter((el) => el.Descuento > 50);
//Si no pongo json stringify me devuelve object 
console.log(`Estos son los que tienen mejores ofertas ${JSON.stringify(encuesta)}`);
         
//Some
//Devuelve true o false depende si esta o no en el array
const ingredientes = [{producto: "Chocolinas"},
                      {producto: "Chocolate rayado"},
                      {producto: "Medicreem"},
                      {producto: "Nutella"}];

console.log( ingredientes.some((el) => el.producto === "Chocolinas"));
//true
console.log( ingredientes.some((el) => el.producto === "Chocolinas "));
//false

//Map 
//Devuelve todos los atributos pero solo 1 en este caso, que son los nombres de los objetos del array
const barradeboca = [{nombre : "El abuelo", rango: "Lider"},
                     {nombre : "Di zeo", rango: "Jefe"},
                     {nombre : "Mauro martin", rango: "Jefe"},
                     {nombre : "Manco aravena", rango: "subjefe"},
                     {nombre : "El oso", rango: "soldado"},
                     {nombre : "Manzano", rango: "solado"}];
const liderazgo = barradeboca.map((el) => el.nombre)
console.log(liderazgo);

//Reduce 
//En este ejemplo usamos el array de acumulador inicializandolo en 0, y sumamos los elementos
const precios = [12000, 32000, 14000]
const totalprecios = precios.reduce((el,precios) => el + precios);
console.log(totalprecios);


