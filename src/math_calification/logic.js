// Calculo de calificaciones (Promedio)

alert("Acontinuacion colocara sus 3 calificaciones segun la materia");

alert("Then enter the grades for each subject");

let nota1 = 95;//parseInt(prompt("Ingrese su calificacion de Matematicas"));
let nota2 = 85;//parseInt(prompt("Ingrese su calificacion de Español"));
let nota3 = 75; //parseInt(prompt("Ingrese su calificacion de Sociales"));

let total = (nota1+nota2+nota3)/3;

if (total < 80){
    console.log("reprobado (C): " + total); //alert("reprobado (C): " + total);
}else if(total >= 80 && total < 90){
    console.log("Bueno (B): " + total); //alert("Bueno (B): " + total);
}else if (total >= 90 && total <= 100){
    console.log("Excelente (A) : " + total); //alert("Excelente (A) : " + total);
}else{
    console.log("Favor ingrese un numero valido");//alert("Favor ingrese un numero valido");
}







// while numero de 0 a 50

/*

let count = 50

while(count >= 0){
	console.log(count);
	count--;
}
*/









// numero aleatorio al azar

/*
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);
*/









// arreglos 
/*

let names = ['carl', 'james', 'ray'];

for (i = names.length - 1; i >= 0; i--){
	console.log(i);
}
*/


