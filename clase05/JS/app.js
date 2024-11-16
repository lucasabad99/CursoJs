//Objetos 
//son estructuras de datos que permiten almacenar valores de diferentes tipos y acceder a ellos utilizando claves
//El objeto necesita PROPIEDAD y VALOR
//PARA AGREGAR PROPIEDADES SE LE AGREGA LA "," DESPUES DEL VALOR

//ANTES
 const usuarioNombre = "cristian";
 const usuarioApellido = "castro";
 const usuarioEdad = 27;

//CON OBJETOS 

const formulario = {
  nombre: "cristian",
  apellido: "castro",
  edad: 27
}

//CARRITO DE COMPRA
const productoCarrito = {
  imagen: "path de la imagen",
  masVendido: true, 
  descripcion: "las mejores zapas",
  precio: 6999, 
  precioconDescuento: 4894
};


//PARA ACCEDER A LOS OBJETOS LLAMO A LA VARIABLE Y LE PONGO UN "."

if (productoCarrito.masVendido === true) {
    //agrego el estilo
}
//1ra de las formas
console.log(productoCarrito["masVendido"])

//2da de las formas
console.log(productoCarrito.masVendido)


//REASIGNAR UN VALOR DE OBJETO 
//llamar a la propiedad y ponerle un "="
// Reasignar el valor de la propiedad precio
productoCarrito.precio = 6000;
// Verificar la reasignación
console.log(productoCarrito.precio); 

//ESC5
function Persona(nombre, edad, calle){

    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona("lucas",25,"adolfo alsina");
console.log(persona1.nombre);


let cadena = "hola lucas"
console.log(cadena.length);


function alumnosCoder (nombre, apellido, edad, comision, curso, beneficio, rol, top10, tutor ){

this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.comision = comision;
this.curso = curso;
this.beneficio = beneficio;
this.rol = rol;
this.top10 = top10;
this.tutor = tutor;

}

const lucasabad = new alumnosCoder("lucas", "abad",25,60330, "JS", false, "alumno", true, "nicolas");
console.log(lucasabad);


for (const propiedad in lucasabad){
  console.log(lucasabad[propiedad]);
  if(lucasabad[propiedad] === false){
    lucasabad.beneficio === true;
  }
}

class ProductosLucas {
  constructor(nombre, detalle, precio, vendido, shipin){
    this.nombre = nombre.toUpperCase();
    this.detalle = detalle;
    this.precio = parseFloat(precio);
    this.vendido = false;
    this.shipin -shipin;
  }

  sumaIva(){
    this.precio = this.precio * 1.21;
  }
  
  vender(){
    this.vendido = true;
  }

  entregaFree(){
    this.shipin = false;
  }
}

const reporteBi = new ProductosLucas ("reporteBI", "Reporte para empresa de eccomerce", 200, true);
const paginaWeb = new ProductosLucas("pagina web", "pagina web con carrito de compras para empresa de telas", 850, true);

reporteBi.sumaIva();
paginaWeb.vender();
