

//cattura degli elementi da manipolare

let display = document.querySelector("#display");

let tempo = document.querySelector("#tempo");

let start = document.querySelector("#start");

let pause = document.querySelector("#pause");

let reset = document.querySelector("#reset");



let j = 20; // tempo.value
let a = 1;

let conto_rovescia;

start.addEventListener("click", () => {

     conto_rovescia = setInterval(() => {
    
        if (a <= j ) {
    
            display.innerHTML = `Rimangono ${j-a} secondi`;
            a++;
        } else {

            clearInterval(conto_rovescia);
            display.innerHTML = `Tempo finito`;

        }
        
    
    }, 1000);

})


pause.addEventListener("click", () =>{

    clearInterval(conto_rovescia);
    display.innerHTML = `Tempo fermo a ${j-a}`;

})



reset.addEventListener("click", () => {
    
    clearInterval(conto_rovescia);
    display.innerHTML = `Reset del timer`;

})