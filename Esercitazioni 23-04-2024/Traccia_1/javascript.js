



//Traccia 1

let persona = {

    nome: prompt("Inserisci il tuo nome: "),
    cognome :prompt("Inserisci il tuo cognome: "),
    età: parseInt(prompt("Inserisci la tua età: ")),

    salutare: function () {
        
        console.log(`Ciao, sono ${this.nome}, il mio cognome è ${this.cognome}, ho ${this.età} anni`);

    }

}

persona.salutare();