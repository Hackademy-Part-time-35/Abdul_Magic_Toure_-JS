

let number1 = prompt("Inserisci il primo numero");

let number2 = prompt("Inserisci il secondo numero");

// potevi usare parseInt() quando richiami il promp(), evitando di richiamarla ogni volta che usi le variabili nei calcoli matematici

let somma= parseInt(number1) + parseInt(number2);

let sottrazione= parseInt(number1) - parseInt(number2);

let moltiplicazione= parseInt(number1) * parseInt(number2);

let divisione= parseInt(number1) / parseInt(number2);

let potenza = parseInt(number1) ** parseInt(number2);

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma ${somma}, sottrazione ${sottrazione}, moltiplicazione ${moltiplicazione}, divisione ${divisione}, e potenza ${potenza} `);