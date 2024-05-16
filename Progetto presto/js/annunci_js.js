//rendere disponibili i dati presenti nel file json
//utilizzeremmo un API di JS che si chiama Fetch()
//fetch() esegue una REQUEST, richiede di collegarsi al file JSON
//Viene ottenuta una risposta RESPONSE, tale rispsota viene restituita come una PROMISE
//in un primo step il file carico non è direttamente utillizzabile, in quanto per il JS rappresenta una semplice stringa
//dobbiamo fare in modo che tali dati siano utilizzabili



/*
1 - fetch() --> si collega al file elelnco_immobili.json
2 - .then() --> estrae dalla PROMISE il contenuto del file, utilizzando il metodo .json(), ch eè in grado di leggere il contenuto del file per poi poterlo usare
3 - .then() --> viene creato un oggetto che è un array di oggetti.

*/
//cattura contenitore annunci
let cont_annunci =  document.querySelector("#cont_annunci");

//cattura contenitore radio
let contenitore_radio = document.querySelector("#contenitore_radio");

//cattura input per la ricerca delle case in base al valore
let input_val_casa = document.querySelector("#input_val_casa");


//cattura button per la ricerca delle case in base al valore
let button_val_casa = document.querySelector("#button_val_casa");

// let annunci_filtrati = [];

fetch("./dati/elenco_immobili.json")
.then(response => response.json())
.then(data => {
  
  function creaCardAnnunci(array_annunci) {
    cont_annunci.innerHTML = '';
    array_annunci.forEach(annuncio => {
        let colonna = document.createElement('div');

        colonna.classList.add('col-4', 'mb-4');

        colonna.innerHTML = `
                <div class="card">
                <img src="${annuncio.immagine}" class="card-img-top" >
                <div class="card-body">
                <h5 class="card-title">${annuncio.Regione}</h5>
                <p class="card-text">
                    <em>Euro</em> <strong>${annuncio.prezzo}</strong>
                </p>
                
                </div>
            </div>
        `;
        cont_annunci.appendChild(colonna);

    }); // END forEach che carica tutti gli annunci 

}

  // function creaRadioButton() {
      
  //   data.forEach(radioButton => {
      
  //     let cont_radio = document.createElement("div");
      
  //     cont_radio.classList.add("col-12");
      
  //     cont_radio.innerHTML = `
      
  //     <div class="form-check">
  //     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  //     <label class="form-check-label" for="flexRadioDefault1">
  //     ${radioButton.Regione}
  //     </label>
  //     </div>
              
  //     `;
      
  //     contenitore_radio.appendChild(cont_radio);

  //   })
    
  // }

  creaCardAnnunci(data);

  function creaRadioRegioni() {

    // creiamo un array vuoto che conterrà l'elenco unico delle regioni

    let elencoUnicheRegioni = [];

    data.forEach((annuncio) =>{


      //se il valore dellla chiave della regione non esiste  tra gli elementi dell'array elencoUnicheRegioni, inserisci quel valore nell'array
      if(!elencoUnicheRegioni.includes(annuncio.Regione)) {
        elencoUnicheRegioni.push(annuncio.Regione)
      }

    })

    elencoUnicheRegioni.forEach((singola_regione) =>{

      //1
      let div = document.createElement("div");
      //2
      div.classList.add("form-check");
      //3
      div.innerHTML = `
      
     <input class="form-check-input" type="radio" name="flexRadioDefault" id="${singola_regione}">
     <label class="form-check-label" for="${singola_regione}">
     ${singola_regione}
     </label>
      `;
      contenitore_radio.appendChild(div);


    })


  }

  creaRadioRegioni();

  function filtraRegione(regione) {

    if (regione == "all") {

      creaCardAnnunci(data);

    } else {

      //Il metood filter, ci permette di cercare un valore all'interno dell'array, indicando una condizione, qunado la condizione restituisce TRUE L'elemento corrispondente dell'array data viene aggiunto a un nuovo array che abbiamo chiamato annunci_filtrati
    let annunci_filtrati = data.filter(annuncio => annuncio.Regione == regione );
    creaCardAnnunci(annunci_filtrati);
    console.log(annunci_filtrati);

    }

    

  }



  function filtraRegionePerPrezzo(val_casa) {

    if (val_casa == "all") {

      creaCardAnnunci(data);

    } else {

      //Il metood filter, ci permette di cercare un valore all'interno dell'array, indicando una condizione, qunado la condizione restituisce TRUE L'elemento corrispondente dell'array data viene aggiunto a un nuovo array che abbiamo chiamato annunci_filtrati
    let annunci_filtrati = data.filter(annuncio => annuncio.prezzo <= val_casa );
    creaCardAnnunci(annunci_filtrati);
    console.log(annunci_filtrati);

    }

    

  }

  
  
  // creaCardAnnunci();

  // filtraRegione();

  // creaRadioButton();

  let radio_regione = document.querySelectorAll(".form-check-input");

  radio_regione.forEach(singolo_radio => {

    singolo_radio.addEventListener("click", () => {

      console.log(singolo_radio.id);

      let regione_Selezionata = singolo_radio.id;

      filtraRegione(regione_Selezionata);

    })

  })

  button_val_casa.addEventListener("click", () => {

    let val_casa = input_val_casa.value;

    console.log(val_casa);

    filtraRegionePerPrezzo(val_casa);

  })
  
});

