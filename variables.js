function prueba(){
  var x=true;//Si aca fuese let x=true entonces podria acceder a la variable en cualquier parte dentro de la funcion prueba()
  let nombre;//Declaro la variable nombre sin ningun valor. La puedo usar dentro de la funcion prueba() //Esto es lo mas practico para hacer.

//las variables declaradas con var y con let se pueden reasignar
  
  if(x===true){
    var miPerro="Felipe";
    nombre="Juan";//Le doy valor a variable declarada arriba
  }
  
  console.log(miPerro); //Aunque miPerro esté dentro del if puedo acceder igual al usa var
}

//prueba();

function prueba2(){
  var z=true;
  
  if(z===true){
    let miPerro="Felipe";
  }
  
  console.log(miPerro);//Ahora no puedo acceder a miPerro, con el let solo se puede acceder a la variable dentro del bloque en el que está
}

prueba2();

//Const no pueden ser reasignadas. Si son objetos o arrays se pueden agrear bojetos
//Lo recomendable es usar let y const. Let cuando alguna variable puede cambiar de valor y const si no puede cambiar de valor. Ambas funcionan dentro de un determinado alcance.
