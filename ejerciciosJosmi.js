console.log(1 + '1'); //11, seria un número más un string
console.log(typeof '42'); // string, es tipo de text string porque está entre comillas
console.log(2 + 3 * 4); //14
console.log(17 % 5); 2// se queda con el resto
console.log('Godofredo'.length); //9, los números de las letras que tiene
console.log(10 === '10'); //false, porque 10 número es falso que diez texto
console.log('Ornitorrinco'.toUpperCase().includes('RINCO')); //true, las convierte todas a mayúsuclas y si que incluye rinco entonces es verdadero
console.log(typeof (5 > 3)); //boolean, boolean falso
console.log(`${2 + 2} manzanas`); //4 manzanas
console.log(!(3 >= 3) || 'a' !== 'b'); //el primero es true pero como tiene la exclamación se queda en false. El otro es true. false o true es TRUE.//Es verdad si esto o lo otro es verdad (OR)

//ejercicio2

const title = 'La venganza de Xindasvinto';
const author = 'Ruperto Gil';
const pages = 320;
const isRead = true;

bookCard = (`"${title} " de ${author} . ${pages} . Leído: ${isRead}`);
isLongBook = (pages > 300);
hasRevengeInTitle = (title.toUpperCase().includes('VENGANZA'))
titleLength = (title.length)
console.log(bookCard, isLongBook, hasRevengeInTitle, titleLength);

//ejercicio 3

const username = 'godo';
const isValidUsername =
username.length >= 3 &&
username.length <= 15 &&
!username.startsWith('_') &&
!username.includes(' ');

console.log(isValidUsername);

const username = '_rodofasio';
const isValidUsername =
username.length >= 3 &&
username.length <= 15 &&
!username.startsWith('_') &&
!username.includes(' ');

console.log(isValidUsername);

const username = 'gu';
const isValidUsername =
username.length >= 3 &&
username.length <= 15 &&
!username.startsWith('_') &&
!username.includes(' ');

console.log(isValidUsername);

const username = 'ruperto el grande';
const isValidUsername =
username.length >= 3 &&
username.length <= 15 &&
!username.startsWith('_') &&
!username.includes(' ');

console.log(isValidUsername);

const username = 'abc';
const isValidUsername =
username.length >= 3 &&
username.length <= 15 &&
!username.startsWith('_') &&
!username.includes(' ');

console.log(isValidUsername);

const username = 'xindasvinto_2025';
const isValidUsername =
username.length >= 3 &&
username.length <= 15 &&
!username.startsWith('_') &&
!username.includes(' ');

console.log(isValidUsername);

