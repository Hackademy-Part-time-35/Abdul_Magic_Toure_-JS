// rendere disponibili i dati presenti nel file JSON
// Utilizzeremo un API di JS fetch()
// fetch() esegue una REQUEST, cioè richiede di collegarsi al file JSON
// viene ottenuta una rispsota RESPONSE, tale risposta viene restituita come una PROMISE
// in un primo step il file carico non è direttamente utlizzabile, in quanto per JS rappresenta una semplice stirnga
// dobbiamo fare in modo tali dati siano utilizzabili
/* 

1 - fetch() --> si collega al file elenco_immobili.json
2 - .then() --> estrae dalla Promise il contenuto del file, utillizzando il metodo .json()
3 - .then() -- > viene creato un oggetto che è un array di oggetti

*/
let cont_annunci = document.querySelector('#cont_annunci');
let filtra_regione = document.querySelector('#filtra_regione')

fetch('./dati/elenco_immobili.json')
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

        // visualizzare tutti gli annunci nella pagina al caricamento della stessa
        creaCardAnnunci(data);

        function creaRadioRegioni() {

            // creaimo un array vuoto che conterrà l'eleco unico delle regioni
            let elencoUnicheRegioni = [];

            /* 
            popolo l'array elencoUnicheRegioni 
            */
            data.forEach((annuncio) => {

                // se il valore della chiave regione non esiste tra gli elementi dell'array elencoUnicheRegioni, inserisci quel valore nell'array
                if (!elencoUnicheRegioni.includes(annuncio.Regione)) {
                    elencoUnicheRegioni.push(annuncio.Regione)
                }

                //console.log(annuncio.Regione);
            })

            /* 
            utilizzando l'array elencoUnicheRegioni popolato, creo dinamicamente tanti radio button quanti sono gli elementi dell'array popolato

            I seguenti passaggi devono essere inseriti all'interno del forEach che ciclerà all'interno dell'array elencoUnicheRegioni

            1) creare un elemento HTML che conterrà il codice necessario per visualizzare il radio button
            2) associare una classe all'elemento creato
            3) utilizzando la prorpietà innerHTML, andiamo a inserire il codice HTML dentro l'elemento appena creato
            4) inseriamo l'elemtno all'interno del contenitore che abbiamo identificato con l'id
            
            */

            elencoUnicheRegioni.forEach((singola_regione) => {

                // 1)
                let div = document.createElement('div');
                
                // 2)
                div.classList.add('form-check');

                // 3)
                div.innerHTML = `
                    <input class="form-check-input" type="radio" name="sel_regioni" id="${singola_regione}">
                    <label class="form-check-label" for="${singola_regione}">
                      ${singola_regione}
                    </label>
                `;

                // 4)
                filtra_regione.appendChild(div);



            })


            //console.log(elencoUnicheRegioni);


        }

        // creare dinamicamente un elenco di radio button che corrispondono all'elenco delle regioni uniche
        creaRadioRegioni();

        function filtraRegione(regione) {

            if (regione == 'all') {
                creaCardAnnunci(data);
            } else {
                /* 
                il metodo filter, che restituisce un nuovo array, ci permette di cercare un valore all'interno dell'array data, indicando una condizione
                quando la condizione restituisce True, l'elemnto corrispondete dell'array data viene aggiunto a un nuovo array che abbimo chiamato annunci_filtrati
                */
                let annunci_filtrati = data.filter(annuncio => annuncio.Regione == regione);
                creaCardAnnunci(annunci_filtrati);
                console.log(annunci_filtrati);
            }

        }

        //filtraRegione('Umbria');

        /* 
        devo catturare tutti gli elementi input di tipo radio button che sono stati creati dinamicamente dalla fuznioe creaRadioRegioni()
        ogni elemento input possiede una classe uguale che mi permetterà di catturarli tutti, utilizzando il metodo querySelectorAll, che seleziona tutti gli elementi HTML che possegono il nome della classe o il nome dell'id passato
        */
        let radio_regione = document.querySelectorAll('.form-check-input');

        /* 
        querySelectorAll restituisce una NodeList che è un particolare array che in JS possiamo solo iterare con il metodo forEach
        */
        radio_regione.forEach(singolo_radio => {

            /* 
            abbiamo chiamato il singolo elemento della nodelist singolo_radio, e questo ci permette di associrgli l'evento click tramite addEventListener

            */
            singolo_radio.addEventListener('click', () => {

                console.log(singolo_radio.id);

                /* 
                il nostro obiettivo è recuperare da ciscun radio button il valore dell'attributo id
                quando catturiamo un elemento, possiamo accedere al valore dei suoi attributi:
                
                nome_elemento.nome_attributo

                */

                //memorizziamo nella variabile regione_Selezionata il valore dell'attributo id di ogni elemento <input>, che è un radiobutton
                let regione_Selezionata = singolo_radio.id;

                /* 
                il valore dell'attributo id coinciderà con il nome della regione, tale valore verrà passato alla funzione filtraRegione che ci permetterà di visualizzare solo gli annunci che corrispondo alla regione selezionata
                */
                filtraRegione(regione_Selezionata);

            })


        })
        //console.log(mio_radio_button);


})