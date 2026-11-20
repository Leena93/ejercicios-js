x= 3;
y= 1;
let result;
result = x > y;
console.log(result); // true
//
x= 12
y= 6
let result;
result = x > y + 5;
console.log(result); // true
//
y= 6;
let result;
result = 'pepito'.length === y;
console.log(result); // true
//

let x = "Este texto tiene 31 caracteres."; // Tiene 31 caracteres (incluyendo espacios y punto)
let y = 31;

let result;
result = 'La venganza de los ornitorrincos salvajes'.length < y + 10 && x.length === y;
console.log(result); // Imprime: true
//
let x= 30;
let y= 30;

let result;
result = x >= y;
console.log(result); // true
//
let x= 30;
let y= 30;

let result;
result= x !== 'number';
console.log(result); // true
//

let x= 0; // habria que cambiar el valor a 0 porque es el unico numero que indica false
let y= 30;

let result;
result= y && !x; 
console.log(result);
//

