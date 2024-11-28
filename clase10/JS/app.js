const buttonform = document.getElementById("btnEnviar");

buttonform.addEventListener("submit", (event) => {
   event.preventDefault();
   console.log("submit");
});


buttonform.addEventListener("submit", respuestaClick)
function respuestaClick(){  
    console.log("respuesta evento");
}
//2da forma
buttonform.onclick = (event) => {
 console.log("Respuesta evento");
}

//3ra forma 
//hace referencia a la clase del button onclick: ... 
function respuestaClick(){
console.log("Respuesta");
}