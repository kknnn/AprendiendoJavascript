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

//Es igual a:
const nombresUsuarios=(usuarios)=>{
	usuarios.map((unUsuario)=>unUsuario.age);
}

console.log(nombresUsuarios); //Salida: ["agustin", "antonella"]

//Numeros por defecto
function multiplicador(x,y){
	x=x || 5;
	y=y || 10;
	return x*y;
}

console.log(multiplicador(2,3)); //Si la funcion multiplciador recibe parametros entonces usa esos, si no recibe usa los numeros por defecto, 5 y 10.
