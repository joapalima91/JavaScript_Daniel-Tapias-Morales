var idade = 27;
var paisPresentes = false;
var comprouBilhete = true;
const podeViajar=(idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

var msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

if(!comprouBilhete){
    console.log("Não comprou o bilhete")
} else {
        console.log(msgMaiorIdade)
   }

// media de notas

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