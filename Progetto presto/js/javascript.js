

let number1 = document.querySelector("#number1");

let number2 = document.querySelector("#number2");

let number3 = document.querySelector("#number3");

let counter1 = 0;

let counter2 = 0;

let counter3 = 0;

let intervallo1 = setInterval(() => {

    if (counter1 < 200) {
        counter1++;
        number1.innerText = counter1;
    } else {
        clearInterval(intervallo1);
    }

}, 50)


function crea_intervallo(elemento, numMax, tempo) {

    let counter = 0;
    let intervallo = setInterval(() => {

        if (counter < numMax) {
            counter++;
            elemento.innerText = counter;
        } else {
            clearInterval(intervallo);
        }
    
    }, tempo)

}

let controllo_ripetizione = false;

let osserva = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting && controllo_ripetizione==false) {

            crea_intervallo(number1, 200, 50);
            crea_intervallo(number2, 1200, 50);
            crea_intervallo(number3, 200, 50);

            controllo_ripetizione = true;

    //         let intervallo1 = setInterval(() => {

    //             if (counter1 < 200) {
    //                 counter1++;
    //                 number1.innerText = counter1;
    //             } else {
    //                 clearInterval(intervallo1);
    //             }
            
    //         }, 50)

    //         let intervallo2 = setInterval(() => {

    //             if (counter2 < 1200) {
    //                 counter2++;
    //                 number2.innerText = counter2;
    //             } else {
    //                 clearInterval(intervallo2);
    //             }
            
    //         }, 5)

    //         let intervallo3 = setInterval(() => {

    //             if (counter3 < 500) {
    //                 counter3++;
    //                 number3.innerText = counter3;
    //             } else {
    //                 clearInterval(intervallo3);
    //             }
            
    //         }, 10)

     }

 })

})



osserva.observe(number3)

//abbiamo creato l'oggetto osserva che ci permette alla visione di un determinato elemnto di eseguire una stringa di codice. usiamo IntersectionObserver, per applicare la prima parte di funzionalità, e all'interno delle parentesi tonde inseriamo "entries" che risulta essere un array, dunque possiamo usare le proprietà degli array ed usiamo ForEach per ciclare tutti gli elementi presenti all'interno dell'array, e decidiamo dunque di selezionare lo specifico elemento. Lo specifico elmento è definito da "entry". ed usiamo isIntersecting per la seconda parte di funzionalità che fa eseguire il codice qunado la sua condizione diventa TRUE. la parte finale necessità di essere richiamata con il nome dell'oggetto con .observe() e all'interno delle parentesi metto l'elmento che voglio che triggheri la mia funzione.