/*function mayorQue (numero){
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

console.log(mayorQueDiez(2));*/

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
