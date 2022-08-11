// + - * / % **

var n1 = 10;
var n2 = 5;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ** n2);


// OPERADORES DE ATRIBUIÇÃO

var n3 = 20;
// n3 = n3 + 15;
n3 += 15;
console.log(n3)

// INCREMENTO E DECREMENTO

var i = 0;
i++;
// i--
console.log(i++);


// COMPARAÇÃO
/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes 
*/

console.log(n1, n2, n3);

// OPERADORES LÓGICOS

var idade = 18;
let paisPresentes = true;
const podeviajar = idade >= 18 || paisPresentes;
console.log(`Pode viajar: ${podeviajar}`);