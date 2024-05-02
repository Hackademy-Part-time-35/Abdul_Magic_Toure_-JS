
// Ok benissimo
let anno_corrente = prompt("Inserire l'anno corrente: ");

console.log(`L'anno corrente è ${anno_corrente}`);

let anno_di_nascita = prompt("Inserire l'anno di nascita: ");

console.log(`L'anno di nascita è ${anno_di_nascita}`);

let età_persona = parseInt(anno_corrente) - parseInt(anno_di_nascita);

let cento_anni = 100 - parseInt(età_persona);

console.log(`Hai ${età_persona} anni e ti mancano ${cento_anni} anni per compierne 100`);