//converter para número
// parseFloat, parseInt, Number()

let n1 = "10";
n1 = parseInt(n1);
let n2 = 2;

let n3 = 10.123456
n3 = parseFloat(n3);

var n4 = "14asd"
n4 = Number(n4);

console.log(n1 / n2, typeof n1, typeof n2, typeof n3, n3);
console.log(n1 + n2, typeof n1, typeof n2);
console.log(typeof n4, n4);



// converter número para string

var n5 = 20;
n5 = n5.toString(n5);
console.log(typeof n5, n5);