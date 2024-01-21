// Juego de adivinansas, utilizando funciones en su desarrollo

function guessingGame(numberUser) {
    const numberRandom = Math.floor(Math.random() * 10) + 1;

    // Realizo la comprobacion utilizando el "Operador ternario"
    return numberUser == numberRandom ? "Adivinaste!": "Fallaste...";
}

console.log(guessingGame(4));
console.log(guessingGame(8));
console.log(guessingGame(1));
console.log(guessingGame(6));