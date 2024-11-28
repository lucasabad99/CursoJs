//ARRAYS
//Arrays es un tipo de datos
//Los arrays pueden ser de numeros, string, objetos, funciones, mixtos, arrays, etc 
//Los elementos del array siempre su indice es 0

const alumnos = ["Pepe","Mariel","Genaro","Nico","Tobias","Nestor"];
const profesor = ["Lucas"];

const miArray = ["Nico","gatito",20];
console.log("hay  --> " + miArray.length);


const numeros = [1,2,3,4,5];
for(let index = 0; index < 5; index++) {
    console.log(numeros[index]);
}

const numeros2 = [1,2,3,4,5,6,7,8,9]
//Index e i es lo mismo
debugger
for(let index = 0; index < numeros2.length; index++){
    debugger
    console.log(numeros2[index]);
}

//Se agrega el elemento cuando se declara el push
//agrega el elemento al final
//sirve para agregar elementos+
numeros2.push(10);
console.log("el nuevo array es --> " + numeros2);

//agrega el elemento al principio
//al agregarse al principio de todo obtiene indice 0
numeros2.unshift(-1);
console.log(numeros2);
numeros2.unshift(0);
console.log(numeros2);

//Elimina el primer elemento del array
numeros2.shift();
console.log(numeros2);

//Elimina el ultimo elemento del array
numeros2.pop();
console.log(numeros2);

//Se elimina elementos del medio del array
//se le pasa 2 argumentos/parametros 
//El primero es la posicion de arranque
//el segundo es la cantidad de elementos a eliminar
//cuenta inclusivve el numero donde arranca
alumnos.splice(2,3);
console.log(alumnos);



const nombresAlumnos = ["Mariel", "Nestor", "Lucas", "Vanesa", "Juan", "Chris"];
console.log(nombresAlumnos);
const eliminar = (nombre) => {

let index = nombresAlumnos.indexOf(nombre);
if(index >= 0){
      nombresAlumnos.splice(index,1)
      console.log("se elimino el nombre ${nombre}");
    }else{
        console.log("el nombre no se encontro en la lista")
    }
};

eliminar();
console.log(nombresAlumnos);

class producto {

 constructor (nombre,precio, vendido = false){

  this.nombre = nombre;
  this.precio= precio;
  this.vendido = vendido;;

 }

 sumaIva(){
    this.precio = this.precio *1.21;
 }

}

const productos = [];
debugger
productos.push(new producto("Fideos",12000));
productos.push(new producto("Salsa",1900));
productos.push(new producto("Morron",12000));
productos.push(new producto("Lucchetti",1150));

console.log(productos);


for ( const item of productos)
    item.sumaIva();
console.log(productos);