var n = 1

n = n || 10

console.log(n)

var isValid = true
/*
if (isValid) {
    console.log("é valido");
}*/
isValid && console.log("é valido");
// se primeiro valor for falso, segundo valor não será executado

isValid || console.log("não é valido");
// se primeiro valor for true, segundo valor não será executado