// Bene Abdul
/* 
Alcune osservazioni:
1) il metodo mostra_singolo_contatto() accetta un parametro, ma nel codice del metodo questo non viene usato, dovrebbe essere scritto così:
 mostra_singolo_contatto : function name(params) {
    
    console.log(agenda.contatti[params]);

}

2)
hai creato questo metodo per aggiungere un contatto:

aggiungere_un_nuovo_contatto: function (nome, telefono) {
    agenda.contatti.push(nome);
    agenda.contatti.push(telefono);
    console.log(agenda.contatti[this.contatti.length - 1]);

}

il codice scritto aggiunge all'array contatti il parametro nome, DOPO aggiunge un altro elemento, cioè telefono

usa nomi diversi per i parametri del metodo, altrimenti ti confondi:

aggiungere_un_nuovo_contatto: function (nuovo_nome, nuovo_telefono) {
    
    agenda.contatti.push({nome: nome, telefono: telefono})
    console.log(agenda.contatti[this.contatti.length - 1]);

}

l'inserimento del contatto deve avvenire simultaneamente:

*/


//Traccia 2 Esercizio da completare

let agenda = {
    contatti: [
  
  {nome: 'Nicola', telefono: '3331111111'},
  {nome: 'Lorenzo', telefono: '3332222222'},
  {nome: 'Paola', telefono: '3333333333'},
  {nome: 'Antonio', telefono: '7777777'},
  
  ],
  
  // Segueno i metodi richiesta 



 // mostrare tutti i contatti dell'agenda 
  mostrare_tutti_i_contatti:function () {

    let elenco_contatti = Object.values(agenda);

    console.log(elenco_contatti);
    
  },

  //mostra un singolo contatto

 mostra_singolo_contatto : function name(params) {
    
    console.log(agenda.contatti[2]);

},

//eliminare un contatto dall'agenda

eliminare_un_contatto_dalla_agenda: function (params) {
    

    
    this.contatti.splice(1, 1); // Rimuove l'elemento alla posizione 1
    console.log(this.contatti); // Outputs: [nicola ecc, paola ecc, Antonio ecc]


},

// Aggiungere un nuovo contatto

aggiungere_un_nuovo_contatto: function (nome, telefono) {


    agenda.contatti.push(nome);
    
    agenda.contatti.push(telefono);

    console.log(agenda.contatti[this.contatti.length - 1]);

},

//modficiare un contatto

modificare_un_contatto: function name(params) {
    

    agenda.contatti.splice(agenda.contatti.indexOf(prompt()), 1, prompt())

    console.log(array);

} }


// ===============================



for (let index = 0; index < 1; index++) {
    
    let scelta = parseInt(prompt("Scegli 1 per vedere tutti i contatti, 2 per mostrare un singolo contatto, 3 per eliminare un contatto, 4 per aggiungere un nuovo contatto, 5 per modificare un contatto esistente: "));

    if (scelta == 1) {
        
        console.log("Opzione selezionata Mostrare tutti i contatti");

        agenda.mostrare_tutti_i_contatti()

    } else if (scelta == 2) {

        console.log("Opzione selezionata Mostrare singolo contatto");

        agenda.mostra_singolo_contatto()

    } else if (scelta == 3) {

        console.log("Opzione selezionata Eliminare contatto dall'agenda");

        agenda.eliminare_un_contatto_dalla_agenda()

    } else if (scelta == 4) {

        console.log("Opzione selezionata Aggiungere un nuovo contatto");

        agenda.aggiungere_un_nuovo_contatto(prompt("Inserisci il nome del contatto: "),prompt("Inserisci il numero del contatto:"))

    } else if (scelta == 5) {

        console.log("Opzione selezionata Modificare un contatto");

        agenda.modificare_un_contatto()

    } else {

        console.log("Selezionare una delle opzioni sopra elencate");

        index = -1;
    }
}