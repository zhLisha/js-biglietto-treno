/*
Chiedere eta' e chilometri da percorrere all'User, calcolare poi prezzo del viaggio
- 0,21 € al km
- sconto 20% minorenni
- sconto 40% over 65
Il prezzo avra' un massimo di 2 decimali
*/ 

// Chiedere eta' e km che vuole percorrere
const userAge = prompt ('Inserisci la tua età');
const userTrainKm = parseInt (prompt ('Inserisci i km che dovrai percorrere'));

// Applicare prezzo intero in base ai km dell'utente
let fixedPrice = 0.21;
let fullPrice = userTrainKm * fixedPrice;

// Applicazione dello sconto per under 18 e over 65
let discountOver65 = 65;
let discoutUnder18 = 18;
let discoutPrice;

if (userAge < discoutUnder18) {
    discoutPrice = fullPrice - (fullPrice * 20 / 100);
} else if (userAge > discountOver65) {
    discoutPrice = fullPrice - (fullPrice * 40 / 100);
}

// Messaggio all'user\
let userMessage;

if (userAge < discoutUnder18) {
    userMessage = 'Con lo sconto del 20%, il totale è: ' + discoutPrice + '€';
} else if (userAge > discountOver65) {
    userMessage = 'Con lo sconto del 40%, il totale è: ' + discoutPrice  + '€';
} else {
    userMessage = 'Il totale è: ' + fullPrice  + '€';
}

console.log(userMessage);

// Stampa
alert(userMessage)