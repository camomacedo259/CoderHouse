//aAula 2
let nota = 75;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else {
  console.log("Precisa estudar mais");
}

let idade = 20;
let acesso = idade >= 18 && idade <= 30;
console.log(acesso);

let temperatura = 20;
let alerta = temperatura < 0 || temperatura > 32;
console.log(alerta);
