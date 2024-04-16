// Ok, mi piace la scelta del for

//Compilazione che permette ad un utente esterno di inserire un valore e scegliere la bevanda



for (let c = 0; c < 1; c++) {

    let bevanda = parseInt(prompt("Inserisci un valore che vada da 1-3 per selezionare la tua bevanda: "));

    switch (bevanda) {
        case 1:

            console.log("E’ stata selezionata l’acqua");
            c = 1;

            break;

        case 2:

            console.log("E’ stata selezionata coca cola");
            c = 1;

            break;

        case 3:

            console.log("E’ stata selezionata birra");
            c = 1;

            break;

        default:

        c=-1;

            break;

    }

}
console.log("Ciclo terminato");