const candies = 47;
const nephews = 6;
const auntCandies = candies%nephews
const candiesLeft = candies-auntCandies


/*
console.log(candies%nephews); //esta operación me da el resto que es lo que se queda la tia
console.log(candies-auntCandies);
console.log(candiesLeft/nephews);
*/
console.log(`Cada sobrino recibe ${candiesLeft/nephews} caramelos y sobran ${auntCandies}`);

const candies = 30;
const nephews = 6;
const auntCandies = candies%nephews
const candiesLeft = candies-auntCandies
console.log(`Cada sobrino recibe ${candiesLeft/nephews} caramelos y sobran ${auntCandies}`);

const candies = 4;
const nephews = 6;
const auntCandies = candies%nephews
const candiesLeft = candies-auntCandies
console.log(`Cada sobrino recibe ${candiesLeft/nephews} caramelos y sobran ${auntCandies}`);

//ejercicio 2/*

let hasCourt = false;
let players = 5;
let isRaining = false;

let canPlay = hasCourt && players === 4 && !isRaining;
let needsMorePlayers = players <4;
console.log(canPlay, needsMorePlayers);

//ejercicio 3/*

const firstExam = 7;
const secondExam = 9;
const average = (firstExam + secondExam) / 2; // forzar la suma primero y luego se haría la división normal
console.log(average);

const role = 'admin';
const isAdmin = role.toUpperCase === "Admin".toUpperCase; // convertirlo todo a mayúsculas
console.log(isAdmin); 

const age = '18'; 
const isAdult = age === 18 || age >18; //Quitar un igual. Los 3 iguales comparan valor y tipo y si son dos iguales solo comparan valor.
console.log(isAdult);