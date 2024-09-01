// ESTRUTURA CONDICIONAL SIMPLES
const grade = 6;

if (grade >= 60) {
  console.log("APROVADO");
}
console.log("fim");

// CONDICIONAL COMPOSTA
if (grade >= 60) {
  console.log("APROVADO");
} else {
  console.log("REPROVADO");
}

// Exercicio
console.log("EXERCICIO CONCURSO");
const idade = 12;
if (idade >= 18 && idade <= 32) {
  console.log("Pode fazer");
} else {
  console.log("Não pode");
}

// Operador ternario
// <condição> ? <exp1 true> : <exp2 false> --- Essa é a sintaxe
console.log("Operador ternario");
let ternaryResult = 10 < 100 ? "verdadeiro" : "Falso";
console.log(ternaryResult);

// Exercicio de aula 1 - Saber se numero é impar ou par
console.log("Exercicio 1");
let number = 7;
let result = number % 2;
if (result === 0) {
  console.log("é par");
} else {
  console.log("não é par");
}
// OUTRA FORMA
console.log("outra forma");
let num1 = 18;
num1 % 2 === 0 ? console.log("PAR") : console.log("IMPAR");

//Exercicio de aula 2 - saber qual é o maior numero entre 3
console.log("Exercicio 2");
let number1 = 3;
let number2 = 4;
let number3 = 10;
if (number1 > number2 && number1 > number3) {
  console.log("number1 é maior");
} else if (number2 > number1 && number2 > number3) {
  console.log("number2 é maior");
} else {
  console.log("number3 é maior");
}

//Exercicio de aula 3 - calculadora
console.log("Exercicio 3");
let n1 = 3;
let n2 = 5;
let opr1 = "sum";
let opr2 = "sub";
let opr3 = "multi";
let opr4 = "divi";
if (opr1 === "sum") {
  console.log(n1 + n2);
} else if (opr2 === "sub") {
  console.log(n1 - n2);
} else if (opr3 === "multi") {
  console.log(n1 * n2);
} else if (opr4 === "divi") {
  console.log(n1 / n2);
}

// Calculadora feita pelo professor
console.log("Feita em aula");
const prompt = require("prompt-sync")();

let nu1 = Number(prompt("Insira o primeiro valor: "));
let nu2 = Number(prompt("Insira o segundo valor: "));
let operation = prompt("Informe a operação (+, -, /, *): ");
let re = 0;

if (operation === "+") {
  re = nu1 + nu2;
} else if (operation === "-") {
  re = nu1 - nu2;
} else if (operation === "*") {
  re = nu1 * nu2;
} else if (operation === "/") {
  if (nu2 !== 0) {
    re = nu1 / nu2;
  } else {
    console.log("ERRO: divisão por zero");
    re = undefined;
  }
} else {
  console.log("Operação invalida");
  re = undefined;
}
if (re !== undefined) {
  console.log("Resultado: " + re);
}

// ESTRUTURA SWITCH
console.log("Estrutura Switch");

let option = 1;

switch (option) {
  case 1:
    console.log("primeira opção");
    break;
  case 2:
    console.log("opção dois");
    break;
  default:
    console.log("Nenhuma opção");
    break;
}

//Exercicio switch
//exercicio 1 - calculadora
console.log("calculadora switch");

let nume1 = Number(prompt("Insira o primeiro valor: "));
let nume2 = Number(prompt("Insira o segundo valor: "));
let opr = Number(prompt("Informe a operação (1.+, 2.-, 3./, 4.*): "));

switch (opr) {
  case 1:
    console.log("Resultado: " + (nume1 + nume2));
    break;
  case 2:
    console.log("Resultado: " + (nume1 - nume2));
    break;
  case 3:
    console.log("Resultado: " + nume1 / nume2);
    break;
  case 4:
    console.log("Resultado: " + nume1 * nume2);
    break;
}
