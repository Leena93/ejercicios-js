let shelfA = 'Libros';
let shelfB = 'Discos';

let shelfC = shelfA;
shelfA = shelfB;
shelfB = shelfC;

let result = `los estantes quedan así shelfA=${shelfA} y shelfB=${shelfB}`;

console.log(result)

const unitPrice = 12.5 //usar const/*
const quantity = 3
const discount = 5
let normalPrice = unitPrice * quantity //aqui estaba mal porque el let no hace falta/*
let discountedPrice = normalPrice - discount //aqui estaba mal porque el let no hace falta/*

let result1 = `Subtotal: ${normalPrice} €`; //aqui estaba mal porque el let no hace falta/*
let result2 = `Total: ${discountedPrice} €`; //aqui estaba mal porque el let no hace falta/*

console.log(result1)
console.log(result2)

//usar siempre que haya dudas const y si falla sería let/*