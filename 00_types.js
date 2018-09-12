// Types

// Number

console.log(10 * 5);
console.log(Math.PI);
console.log(+"10");
console.log(isNaN(1));//is NaN: is not a number


// Strings 
// Sequences of Unicode characters 

console.log("Hello");
console.log("Super duper".length);
console.log("Chris".charAt(4));
console.log("Hello" + " " + "world" + "!");
console.log("i want to be uppercase!!!".toUpperCase());


// Booleans
var shouldBeTrue = true;
var shouldBeNull = null;

if (shouldBeNull === true) {
  console.log("This var is true");
} 
else {
  console.log("This var is not true");
}

// The following evaluates to true //Porque tienen algo
var hasContent = "sfjafdifj";
var myArray = ["asodkasdk", 1, 2, 3, "ada"];

// The following evaluates to false //Porque no tienen contenido
var doesNotHaveContent = "";
var isZero = 0;
var nonAssignedVariable;
var isFalse = false;
var isNotANumber = NaN;


// Objects
// Collections of name-value pairs

var myOtherObject = {
  1: "Chris",
  2: "Sally",
  3: "Bob",
  4: "Billy",
  5: "Jane",
};

myOtherObject['unique value'] = "Ashley";

var anotherObject = {
  firstName: "Chris",
  lastName: "Smith",
  age: 50,
  numbers: {
    mobile: "555-1234",
    home: "555-5555",
  },
  address: "123 Fake St.",
};

var donut1 = {
  type: "coconut",
  glazed: true,
  sweetness: 8,
  hasChocolate: false,
  sayType: function() {
    console.log("Type: " + this.type);
  },
  showSweetness: function() {
    console.log("Sweetness: " + this.sweetness + "/10");  
  },
};

//Constructor pattern for creating objects
function Donut(type, glazed, sweetness, hasChocolate) {
  this.type = type;
  this.glazed = glazed;
  this.sweetness = sweetness;
  this.hasChocolate = hasChocolate;
  this.sayType = function() {
    console.log("Type: " + this.type);
  };
  this.showSweetness = function() {
    console.log("Sweetness: " + this.sweetness + "/10");
  };
}

var coconutDonut = new Donut("coconut", false, 8, true);
var vanillaDonut = new Donut("vanilla", true, 10, false);



// Arrays
var myArray=["1","2","3"];
myArray.push("4");//Agrega datos al array al final
ultimo=myArray.pop();//Pop elimina la ultima posicion del array
myArray.push(ultimo);
console.log(ultimo);
console.log(myArray);

var myArray=["2","1","3"];
myArray.sort();//Ordena array
myArray.reverse();//Ordena al reves
console.log(myArray);

var arreglosConcatenados=arreglo1.concat(arreglo2, arreglo3); //Concatena arreglos
var arreglosConcatenados.slice(5)//Arranca desde la posicion 5 del arreglo
var arreglosConcatenados.slice(5,7)//Arranca desde la posicion 5 del arreglo hasta la 7

var joinedArray=arreglosConcatenados.join(" ");//Junta los elementos del arreglo en un solo string separados por un espacio o lo que indiquemos
// Collection of data
var myNamesArray = ["Chris", "Zack", "Jessica", "John", "Jane"];
var slicedArray = myNamesArray.slice(myNamesArray.length -1);

console.log(slicedArray[0]);
