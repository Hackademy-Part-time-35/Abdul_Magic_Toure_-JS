

//Stesura di un codice che esegue l'iva di un array 

function incassi_one_by_one(N) {
    for (let i = 1; i <= N; i++) {

        let val_incassi = parseInt(prompt("Inserisci il valore dell'incasso: "))

        arr_incassi.push(val_incassi);

        let iva = val_incassi*(22/100);

        console.log(iva);

        arr_iva.push(iva.toFixed(2));

    }
}


let arr_incassi = [];

let arr_iva = [];

incassi_one_by_one(parseInt(prompt("Inserire il numero di incassi che si richiedono all'interno dell'Array: ")));

console.log("L'array incassi è pari:");

console.log(arr_incassi);

console.log("Il valore dell'iva degli incassi è pari a :");

console.log(arr_iva);






