//1)cattura degli elmenti della pagina che verrano manipolati

let elenco_contatti = document.querySelector("#elenco_contatti");

// cattura caselle di testo

let nome_contatto = document.querySelector("#nome_contatto");

let num_telefono = document.querySelector("#num_telefono");

let num_elimina_contatto = document.querySelector("#num_elimina_contatto");

//cattura dei pulsanti

let aggiungi_contatto = document.querySelector("#aggiungi_contatto");

let visualizza_agenda = document.querySelector("#visualizza_agenda");

let elimina_contatto = document.querySelector("#elimina_contatto");

//Realizziamo l'oggetto

let agenda = {

contatti : [

    {name: "Andrea", tel: "+39 333 786 45 23"},
    {name: "MIchele", tel: "+39 333 289 67 34"},
    {name: "Lucia", tel: "+39 345 270 60 60"},

],

//Creiamo un metodo che ci permetterà di visualizzare l'intero elenco di contatti presenti nella agenda, il contenuto della proprietà contatti, dovrà essere inserito all'interno del contenitore identificato con l'id elenco contatti

visualizzaContatti : function () {
    
    this.contatti.forEach((contatto) => {

        let par_contatto = document.createElement("p");

        par_contatto.innerHTML = `
        
        Nome: <strong>${contatto.name}</strong> - Numero di telefono: <strong>${contatto.tel}</strong>

        `;

        elenco_contatti.appendChild(par_contatto);

    });

}, //end metodo

    aggiungi_contatto : function() {

        let new_contatto = {name: nome_contatto.value, tel: num_telefono.value}

        this.contatti.push(new_contatto);

    },

    elimina_contatto : function() {

        let index = this.contatti.indexOf(this.contatti[parseInt(num_elimina_contatto.value)-1]);
        if (index > -1) { 
          this.contatti.splice(index, 1); 
        }

    },


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

    elimina_contatto();

    agenda.visualizzaContatti();
    visualizza_agenda.innerHTML = "Nascondi Agenda";

    controllo = 1;

    num_elimina_contatto.value = ""; 

})



//===============================elimare elemeto da array===================


// let array = [2, 5, 9];


let array = [{name: "Andrea", tel: "+39 333 786 45 23"},
{name: "MIchele", tel: "+39 333 289 67 34"},
{name: "Lucia", tel: "+39 345 270 60 60"},];

console.log(array);

let index = array.indexOf(array[parseInt(prompt("posizione del elemento da cancellare"))-1]);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 

