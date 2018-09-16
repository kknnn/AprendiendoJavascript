//DECLARACION

function diceHola(){
	console.log("Hola");
}

diceHola(); //Salida: "Hola"

//Otra forma de declarar funciones:

var diceHola=function(){
	console.log("Hola");
}

diceHola(); //Salida: "Hola"

//Otra forma:

var diceHola=()=>{
	console.log("Hola");
}

diceHola(); //Salida: "Hola"

//Recorrer arreglo de objetos en este caso:
const usuarios=[{nombre:"agustin", edad: 22},
               {nombre:"antonella", edad: 25}];

const nombresUsuarios=usuarios.map(function(unUsuario){
          return unUsuario.nombre;
          });

console.log(nombresUsuarios); //Salida: ["agustin", "antonella"]
