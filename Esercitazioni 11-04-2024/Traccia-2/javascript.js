

// Compilazione per individuare quanti numeri pari e dispari vi siano tra un intervallo che va da 1-20
let b = 0; 

for (let a = 1; a <= 20; a++) {
    
    if (a%2==0) {
         
        console.log(a);

    }

    if (a%2!==0) {
         
        b++;       

    }
    
}

console.log(`Ci sono ${b} numeri dispari`);
