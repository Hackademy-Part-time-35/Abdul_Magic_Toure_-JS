
// Benissimo, hai fatto bene a usare while che è un'ottima alternativa al for

//Codice per la realizzazione di una tabellina in base al valore numero inserito dall'utente

let num = parseInt(prompt("Inserisci un valore per vedere la sua tabellina fino a 10: "));

console.log(`Il valore inserito è ${num}`);

let f = 1;

while (f <= 10) {

    console.log(`${num} x ${f} = ${num * f}`);
    f++;
    
};