// CONDICIONALES

let passwordDB = "pepe123";

let input = "pepe123"; // SI ES DIFERENTE NO SE LOGIARA 

let result = input == passwordDB;

if (result == true) {
    console.log("Login Correcto");
}

else {
    console.log("Contraseña Incorrecta");
}

// Operadores para el control de flujo (if-else if) (else)

let score = 70;

if (score > 30) {
    console.log("you need to pratice more");
} else if (score > 15) {
    console.log("Estas mejorando");
}

else {
    console.log("You need to follow this tutorial");
}
