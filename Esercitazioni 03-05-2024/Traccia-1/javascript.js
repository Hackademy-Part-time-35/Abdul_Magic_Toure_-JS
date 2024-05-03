//1)cattura degli elmenti della pagina che verrano manipolati

let card_contatti = document.querySelector("#card_contatti")

let elenco_contatti = document.querySelector("#elenco_contatti");

// cattura caselle di testo

let nome_contatto = document.querySelector("#nome_contatto");

let num_telefono = document.querySelector("#num_telefono");

let email_contatto = document.querySelector("#email_contatto");

let num_elimina_contatto = document.querySelector("#num_elimina_contatto");

//cattura dei pulsanti

let aggiungi_contatto = document.querySelector("#aggiungi_contatto");

let visualizza_agenda = document.querySelector("#visualizza_agenda");

let elimina_contatto = document.querySelector("#elimina_contatto");

let genera_card = document.querySelector("#genera_card");

//Realizziamo l'oggetto

let agenda = {

contatti : [

    {
        name: 'Andrea',
        tel: '+39 333 786 45 23',
        mail: 'info@abc.it'
        },
        {
        name: 'Michele',
        tel: '+39 099 234 67 45',
        mail: 'michele@anotnio.com'
        },
        {
        name: 'Lucia',
        tel: '+39 789 45 23',
        mail: 'lucia@lucia.org'
        }

],

//Creiamo un metodo che ci permetterà di visualizzare l'intero elenco di contatti presenti nella agenda, il contenuto della proprietà contatti, dovrà essere inserito all'interno del contenitore identificato con l'id elenco contatti

visualizzaContatti : function () {
    
    this.contatti.forEach((contatto) => {

        let par_contatto = document.createElement("p");

        par_contatto.innerHTML = `
        
        Nome: <strong>${contatto.name}</strong> - Numero di telefono: <strong>${contatto.tel}</strong> - Email : <strong>${card.mail}</strong>

        `;

        elenco_contatti.appendChild(par_contatto);

    });

}, //end metodo

    aggiungi_contatto : function() {

        let new_contatto = {name: nome_contatto.value, tel: num_telefono.value, mail: email_contatto.value}

        this.contatti.push(new_contatto);

    },

    elimina_contatto : function() {

        let index = this.contatti.indexOf(this.contatti[parseInt(num_elimina_contatto.value)-1]);
        if (index > -1) { 
          this.contatti.splice(index, 1); 
        }

    },

    genera_card : function () {

    this.contatti.forEach((card) => {

    let par_card = document.createElement("div");

    par_card.innerHTML = `
        
    <div class="card mb-2">
    <div class="card-body">
    <strong>${card.name}</strong> - Numero di telefono: <strong>${card.tel}</strong> - Email : <strong>${card.mail}</strong>;
    </div>
  </div>

    `;

    card_contatti.appendChild(par_card);

    })

    }


};

let controllo = 0;

visualizza_agenda.addEventListener("click", () => {
    
    if (controllo==0) {

        agenda.visualizzaContatti();
        visualizza_agenda.innerHTML = "Nascondi Agenda";
        controllo = 1;

    } else {

        visualizza_agenda.innerHTML = "Visualizza Agenda";

        elenco_contatti.innerHTML = "";

        controllo = 0;

    };
    

})


aggiungi_contatto.addEventListener("click", () => {
    
    agenda.aggiungi_contatto();

    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = "Nascondi Agenda";

    controllo = 1;

    nome_contatto.value  = "";

    num_telefono.value = "";

})

elimina_contatto.addEventListener("click",() => {

    agenda.elimina_contatto();

    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = "Nascondi Agenda";

    controllo = 1;

    num_elimina_contatto.value = ""; 

})

genera_card.addEventListener("click", () => {


 agenda.genera_card();

 


})



//===============================elimare elemeto da array===================


 

