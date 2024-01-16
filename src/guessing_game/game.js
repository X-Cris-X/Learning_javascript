// juego de adivinanzas 

// colocas el numero en la variable de numberUser y mira a ver si es que adivinas 

let numberUser = 60;
let numberRandom = Math.floor(Math.random() * 100) + 1;

console.log(numberRandom);

if(numberRandom === numberUser){
    console.log(numberUser + ' = ' + numberRandom + ' Adivinaste el numero');
}else{
    console.log(numberUser + ' = ' + numberRandom + ' No adivinaste');
}
