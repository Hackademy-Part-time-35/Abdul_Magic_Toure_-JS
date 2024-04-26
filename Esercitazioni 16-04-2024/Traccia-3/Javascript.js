// perfetto


// Realizzazione di una funzione che, mi dica da qunate cifre è composto il numero
function num(N) {

    if (N < 10) {
        
        console.log("1 cifra");
        
    } else if (N < 100) {

        console.log("2 cifre");

    } else if (N < 1000) {

        console.log("3 cifre");

    } else  if (N < 10000) {
        
        console.log("4 cifre");

    } else {

        console.log("Numero troppo grande");

    }
    
}

num (parseInt(prompt("Inserisci un valore numerico.(Massimo 9999): ")));

