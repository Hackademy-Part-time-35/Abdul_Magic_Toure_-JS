

// Realizzazione di una funziona che definisce il giocatore vincente in base alla somma dei punti ottenuti in base a "n" tiri.

let tiri = parseInt(prompt("Inserisci il numero di tiri che si vuole effettuare: "));

let pt_pl_1 = 0; //punti player 1

let pt_pl_2 = 0; //punti player 2


function dadi () {
    for (let i = 1; i < tiri; i++) {
        
    let val_dado_1 = Math.floor(Math.random() * (6 - 1) + 1);

    pt_pl_1 += val_dado_1;

    let val_dado_2 = Math.floor(Math.random() * (6 - 1) + 1);

    pt_pl_2 += val_dado_2;
        
    }
     console.log(`Il punteggio di giocatore 1 è ${pt_pl_1} `);

     console.log(`Il punteggio di giocatore 2 è ${pt_pl_2} `);
}

 dadi();

if (pt_pl_1 > pt_pl_2) {

    console.log("Giocatore 1 ha vinto");

} else if (pt_pl_1 < pt_pl_2) {

    console.log("Giocatore 2 ha vinto");

} else if (pt_pl_1 == pt_pl_2) {

    console.log("I giocatori hanno pareggiato");
}


