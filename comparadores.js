const numero=5;
console.log(typeof numero); //number

const palabra="hola";
console.log(typeof palabra); //string

const numeroString="5";
const numeroInt=parseInt(numeroString); //convierte a entero el string. Solo se puede si el string es un valor numerico

//El operador de igualdad == convierte los operandos si no son del mismo tipo, después aplica comparación de igualdad estricta.
//El operador de identidad === devuelve true si los operandos se consideran igual sin aplicar ningún tipo de conversión.
//!== desigualdad
// and: &&
// or: ||

if(!variable){}// si la variable es falsa entra. Es lo mismo a if(varibale===false)
