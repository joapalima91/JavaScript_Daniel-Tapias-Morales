// strings, number(int, float), boolean

let minhaVar = "minha string";
let minhavar2 = 'minha "string" com aspas simples';
var minhavar3 = 'minha template literal';

let idade = 40;
//let msg = "eu possuo " + idade + " anos";
let msg = 'eu possuo ${idade} anos'; // não está rodando

console.log(msg);
console.log("Hello " + "World!");

// verificar tipo da vairável
console.log(typeof msg, typeof idade);

// dado numérico (inteiro, real)

const n1 = 10
const n2 = 1.1
console.log('o tipo de n1 é ' + (typeof n1));
console.log('o tipo de n2 é ' + (typeof n2));

// booleanos

const isValid = true;
console.log('isValid: '+isValid)

// valor undefined

let varTeste;
console.log(varTeste);
console.log(typeof varTeste)