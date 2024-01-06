//  calculator with function

function sumar (n1, n2){
    console.log(n1 + n2); 
}

function restar(n1, n2){
    console.log(n1 - n2);
} 

function multiplicar(n1, n2){
    console.log(n1 * n2);
} 

function dividir(n1, n2){
    let round_out = Math.floor(n1 / n2);
    console.log(round_out);
}


sumar(5, 7);
restar(7, 5);
multiplicar(5, 5);
dividir (25, 5);

