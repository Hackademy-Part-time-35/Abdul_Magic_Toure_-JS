



// Realizzazione di una funzione che stampi i valori da 1 a N, e che per multipli di 3, di 5 e d 15 stampi un apposito testo.


function numero(N) {

    for (let i = 0; i <= N; i++) {

       if (i%15==0) {
        
        console.log("FizzBUzz");

       } else if (i%5==0) {

        console.log("BUzz");

       } else if (i%3==0) {

        console.log("Fizz");

       } else  {
         console.log(i);
       }

    }

}

numero (parseInt(prompt("Inserisci il valore max: ")));






