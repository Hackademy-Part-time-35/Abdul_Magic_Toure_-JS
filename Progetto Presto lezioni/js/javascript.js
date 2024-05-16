
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let number3 = document.querySelector('#number3');

// let counter1 = 0;
// let counter2 = 0;
// let counter3 = 0;


function crea_intervallo(elemento, numMax, tempo) {
    let counter = 0;
    let intervallo = setInterval(()=> {

        if (counter < numMax) {
            counter++;
            elemento.innerText = counter;
        } else {
            clearInterval(intervallo);
        }
    
    }, tempo);

}

let controllo_ripetzione = false;

let osserva = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting && controllo_ripetzione == false) {

            crea_intervallo(number1, 200, 50);
            crea_intervallo(number2, 1200, 5);
            crea_intervallo(number3, 500, 10);

            controllo_ripetzione = true;
           

           /*  let intervallo1 = setInterval(()=> {

                if (counter1 < 200) {
                    counter1++;
                    number1.innerText = counter1;
                } else {
                    clearInterval(intervallo1);
                }
            
            }, 50);

            let intervallo2 = setInterval(()=> { 

                if (counter2 < 1200) {
                    counter2++;
                    number2.innerText = counter2;
                } else {
                    clearInterval(intervallo2);
                }
            
            }, 5)

            let intervallo3 = setInterval(()=> { 

                if (counter3 < 500) {
                    counter3++;
                    number3.innerText = counter3;
                } else {
                    clearInterval(intervallo3);
                }
            
            }, 10)
 */

        }

    })

});

osserva.observe(number3)