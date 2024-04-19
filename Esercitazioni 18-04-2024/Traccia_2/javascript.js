

// Stesura di un codice che permetta di inserire dei valori all'interno di un array ed eseguire la media di questi valori.

function quantitativo_elementi(N) {
    for (let i = 1; i <= N; i++) {

        let val_elementi = parseInt(prompt("Inserisci il valore dell'elemento: "))

        mio_array.push(val_elementi);
    }
}

let mio_array = [];

quantitativo_elementi(parseInt(prompt("Inserire il numero di elmenti che si richiedono all'interno dell'Array: ")));

console.log(mio_array);

let media = mio_array.reduce((acc,el) => (acc+el)) / mio_array.length;

console.log(`Il valore della media degli elmenti che conpongono l'array è di: ${media}`);
