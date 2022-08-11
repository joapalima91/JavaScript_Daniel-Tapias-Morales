var n1 = 0;
var n2 = 7;

var media = (n1 + n2) / 2;
console.log(`média: ${media}`);

if (n1 ===0 || n2 ===0) {
    console.log("Reprovado");
} else if(media < 7) {
    console.log("Reprovado. Fazer prova de recuperação.")
}else {
    console.log("Aprovado, parabens!");
}