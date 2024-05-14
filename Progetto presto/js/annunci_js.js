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

let cont_annunci =  document.querySelector("#cont_annunci");

let contenitore_radio = document.querySelector("#contenitore_radio");

fetch("./dati/elenco_immobili.json")
.then(response => response.json())
.then(data => {
  
  function creaCardAnnunci() {
    
    data.forEach(annuncio => {
      
      let colonna = document.createElement("div");
      
      colonna.classList.add("col-4");
      
      colonna.innerHTML = `
      
      <div class="card" >
      <img src="${annuncio.immagine}" class="card-img-top" alt="foto villa">
      <div class="card-body">
      <h5 class="card-title">${annuncio.Regione}</h5>
      <p class="card-text">
      Euro ${annuncio.prezzo}
      Metri quadri: ${annuncio.metri_quadrati}
      </p>
      
      </div>
      
      `;
      
      cont_annunci.appendChild(colonna);
      
      
    }); //End foreach
    
   
    
    
  }

  function creaRadioButton() {
      
    data.forEach(radioButton => {
      
      let cont_radio = document.createElement("div");
      
      cont_radio.classList.add("col-12");
      
      cont_radio.innerHTML = `
      
      <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
      ${radioButton.Regione}
      </label>
      </div>
              
      `;
      
      contenitore_radio.appendChild(cont_radio);

    })
    
  }
  
  creaCardAnnunci();

  creaRadioButton();
  
});

