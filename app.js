/* 
// TIPO DE DATOS 

"Hello world" // String + Para las abreviacion en ingles se debe utilizar este 
'Hello world' // String 

// Number
1000000
-2.3

//Boolean
true
false

// array - arreglo
['joe', 'ryan', 'martha'] // lista de usuario, list de string
[1,2,3] // list number
[true, false, true, false] // list boolean

// object

{
    "username": 'ryan',
    "score": 70.4,   
    "hours": 14,
    "proffesional": true
}
*/
/* // objet codigo valido
console.log({"username": "ryan",
"score": 70.4});  
*/


//  VARIABLES // 
/*
// nota: El codigo se ejecuta de arriba hacia abajo 

var nameuser = "jhon";
let lastname = "Carter";

nameuser = "pepe";

const PI = 3.1415; // ejemplo de donde se puede usar const

console.log(nombreDePersona);

// camelcase formas de escribir cogigo mas facil de leer

let userName = "gordon";
*/

// OPERADORES

//ej con string

/*
let name = "Jhon";
let lastname = "Carter";

let completeName = name + ' ' + lastname; // no es una suma es una concatenacion 

console.log(completeName);
*/

/* ej de operadores

let numberOne = 100;
let numberTwo = 500;

let result = numberOne == numberTwo;  COMPARACION 
let result = numberOne === numberTwo; COMPARACION ESTRICTA
//let result = numberOne != numberTwo; DIFERENTE 
// let result = numberOne <= numberTwo; MAYOR O IGUAL , PUEDE SER VICEVERSA
// let result = numberOne + - / * numberTwo; UTILIZADON LOS OPERDORES MATEMATICOS     

console.log(result);
*/

// ej de un login para iniciar sesion 

/*
let passwordDB = "pepe123";

let input = "pepe123"; // SI ES DIFERENTE NO SE LOGIARA 

let result = input == passwordDB;

console.log(result);
*/

// CONDICIONALES
/*
let passwordDB = "pepe123";

let input = "pepe123"; // SI ES DIFERENTE NO SE LOGIARA 

let result = input == passwordDB;

if (result == true) {
    console.log("Login Correcto");
}

else {
    console.log("Contraseña Incorrecta");
}
*/ //----------------------------------------------

/* Operadores para el control de flujo (if-else if) (else)

let score = 70;

if (score > 30) {
    console.log("you need to pratice more");
} else if (score > 15) {
    console.log("Estas mejorando");
}

else {
    console.log("You need to follow this tutorial");
}
*/

// SWICH
/*
let typeCard = "Credit Card";

/*switch(typeCard) {
    case "Debit Card":
    console.log("This is a debit card");
    break;
    case "Credit Card":
    console.log("This is a credit card");
    break;
    default: console.log("No Card");
}
*/

// BUCLES

/* While
let count = 1;

while(count <= 50) {
    console.log(count);
    count++;1
 }
*/

//let names = ["ryan", "joe", "jhon", "mario"];

// console.log(names);  puedes llamar solo uno usando [0,1...] 


/* FOR
let names = ["ryan", "joe", "jhon",];

for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
*/

function greeting(person, damn = 'maldito') {
    console.log("Hello " +  person + " " + damn);
}

greeting("ryan", "adios");
greeting("ryan");