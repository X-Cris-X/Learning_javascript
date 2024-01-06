// BUCLES

// While
let count = 1;

while(count <= 50) {
    console.log(count);
    count++;1
 }

//let names = ["ryan", "joe", "jhon", "mario"];

// console.log(names);  puedes llamar solo uno usando [0,1...] 


// FOR
let names = ["ryan", "joe", "jhon",];

for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


function greeting(person, damn = 'maldito') {
    console.log("Hello " +  person + " " + damn);
}

greeting("ryan", "adios");
greeting("ryan");