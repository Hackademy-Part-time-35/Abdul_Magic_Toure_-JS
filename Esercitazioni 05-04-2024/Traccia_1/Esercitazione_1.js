
// Bene Abdul
let num1 = prompt("Inseriesci il di num1: ");

console.log(`Il valore di num1 è ${num1}`);

let num2 = prompt("Inseriesci il di num2: ");

console.log(`Il valore di num2 è ${num2}`);

let num3 = prompt("Inseriesci il di num3: ");

console.log(`Il valore di num3 è ${num3}`);

let num4 = prompt("Inseriesci il di num4: ");

console.log(`Il valore di num4 è ${num4}`);

let num5 = prompt("Inseriesci il di num5: ");

console.log(`Il valore di num5 è ${num5}`);

let somma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);

// mi sfugge il motivo per cui hai usato toFixed()
console.log(`La somma è uguale a ${somma.toFixed(3)}`);

let media = parseInt(somma) / 5 ;

console.log(`La media è uguale a ${media.toFixed(3)}`);