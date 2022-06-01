/*
Chiedere eta' e chilometri da percorrere all'User, calcolare poi prezzo del viaggio
- 0,21 € al km
- sconto 20% minorenni
- sconto 40% over 65
Il prezzo avra' un massimo di 2 decimali
*/ 

// Chiedere eta' e km che vuole percorrere
const userAge = prompt('Inserisci la tua età');
const userTrainKm = parseInt( prompt('Inserisci i km che dovrai percorrere'));


// Applicare prezzo intero in base ai km dell'utente
const fixedPrice = 0.21;
let fullPrice = userTrainKm * fixedPrice;


// Applicazione dello sconto per under 18 e over 65
let discountOver65 = 65;
let discoutUnder18 = 18;
let discoutPrice;

if (userAge < discoutUnder18) {
    discoutPrice = fullPrice - (fullPrice * 20 / 100);
} else if (userAge > discountOver65) {
    discoutPrice = fullPrice - (fullPrice * 40 / 100);
} else {
    discoutPrice = fullPrice
}


/* 
Riduzione 2 cifre decimali (non necessario in questo caso, ma 
per casi futuri in cui le percentuali o il prezzo fisso dovessero 
cambiare) 
*/
let decimalsNumber = discoutPrice.toFixed(2);


// Messaggio all'user\
let userMessage;

if (userAge < discoutUnder18) {
    userMessage = 'Con lo sconto del 20%, il totale è: ' + decimalsNumber + '€';
} else if (userAge > discountOver65) {
    userMessage = 'Con lo sconto del 40%, il totale è: ' + decimalsNumber + '€';
} else {
    userMessage = 'Il totale è: ' + decimalsNumber  + '€';
}


// Stampa
alert(userMessage)