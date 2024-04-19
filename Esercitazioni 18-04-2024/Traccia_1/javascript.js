


// Stesura di codice che permetta di generare dei numeri casuali che verrano, inseriti in degli array ed ordinati in modo crescente e decrescente

function generatore_num_casuali(N) {
    for (let i = 1; i <= N; i++) {

        let num_casuali = Math.floor(Math.random() * 1000);
    
        array_casuale.push(num_casuali);
    }
}

var array_casuale = [];

generatore_num_casuali(10);


// Prima di essere ordinata

console.log("Array casuale 1 PRIMA di essere ordinato in ordine decrescente")

console.log(array_casuale);

// Dopo essere ordinata in modo decrescente

console.log("Array casuale 1 DOPO essere stato ordinato in ordine decrescente")

array_casuale.sort((a, b) => b - a);

console.log(array_casuale);

console.log("====================================================================================");
// Secondo array casuale 

var array_casuale = [];

generatore_num_casuali(20);

// Prima di essere ordinata
console.log("Array casuale 2 PRIMA di essere ordinato in ordine crescente")

console.log(array_casuale);

// Dopo essere ordinata in modo crescente

console.log("Array casuale 2 DOPO essere stato ordinato in ordine crescente")

array_casuale.sort((a, b) => a - b);

console.log(array_casuale);

     

