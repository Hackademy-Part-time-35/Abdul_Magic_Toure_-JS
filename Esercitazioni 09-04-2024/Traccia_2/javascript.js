// Bene Abdul, hai fatto bene anche a descrivere il tuo lavoro con i commenti, prosegu così

let numero_totale_dei_gatti = parseInt(prompt("Inserisci il valore dei gatti totali: "));

console.log(`Il numero totale di gatti è  ${numero_totale_dei_gatti}`);

let numero_dei_gatti_che_devono_stare_in_una_fila = parseInt(prompt("Inserisci il valore dei gatti che formano una fila completa: "));

console.log(`Il numero di gatti che formano un fila è ${numero_dei_gatti_che_devono_stare_in_una_fila}`);

let numero_di_file_risultanti = parseInt(numero_totale_dei_gatti / numero_dei_gatti_che_devono_stare_in_una_fila);

if  (numero_di_file_risultanti < 1) {
    
    console.log("Non è possibile reaggiungere una fila completa");
    
} else if (numero_di_file_risultanti >= 1) {
    
    console.log(`Il numero di file è ${numero_di_file_risultanti}`);
}

// Per definire il valore dei gatti mancanti per completare una fila, ho eseguito i seguenti passaggi matematici: eseguo il modulo tra il numero totale di gatti ed il numero che serve per formare una fila, una volta ottenuto il modulo così da scoprire il numero di gatti che rimane fuori. Ed infine effettuo la sottrazione tra il numero di gatti necessari per formare una fila interna, ed il valore dei gatti che rimane fuori, così ottengo il numero di gatti mancanti per completare una nuova fila.

let numero_di_gatti_che_rimangono_fuori = parseInt(numero_totale_dei_gatti % numero_dei_gatti_che_devono_stare_in_una_fila) ;


if (numero_di_gatti_che_rimangono_fuori == 0) {

    console.log("Non ci sono dei gatti che rimangono fuori");
}

else if (numero_di_gatti_che_rimangono_fuori > 0) {
    console.log(`Il numero di gatti che rimangono fuori sono ${numero_di_gatti_che_rimangono_fuori}`);

};
    
    
let numero_di_gatti_mancanti_per_completare_una_nuova_fila = parseInt(numero_dei_gatti_che_devono_stare_in_una_fila - numero_di_gatti_che_rimangono_fuori);

if (numero_di_gatti_mancanti_per_completare_una_nuova_fila == 0) {

    console.log("Non sono necessari ulteriori gatti, per completare una fila: le file sono già tutte completate");
}

else if (numero_di_gatti_che_rimangono_fuori > 0) {
    console.log(`Il numero di gatti mancanti per completare una nuova fila sono ${numero_di_gatti_mancanti_per_completare_una_nuova_fila}`);

};

console.log(`Ci sono ${numero_di_file_risultanti} file di gatti e ne mancano ${numero_di_gatti_mancanti_per_completare_una_nuova_fila} per una nuova fila, con avanzo di ${numero_di_gatti_che_rimangono_fuori}`);

        