// Tabuada sem estrutura de repetição

// console.log(5 * 0);
// console.log(5 * 1);
// console.log(5 * 2);
// console.log(5 * 3);
// console.log(5 * 4);
// console.log(5 * 5);
// console.log(5 * 6);
// console.log(5 * 7);
// console.log(5 * 8);
// console.log(5 * 9);
// console.log(5 * 10);

//ESTRUTURA FOR

const prompt = require("prompt-sync")(); //obrigado colocar pra usar o prompt
let multiplier = Number(prompt("Insira o primeiro valor: "));

//for(variavel;condição;incremento){}
for (let counter = 0; counter <= 10; counter++) {
  console.log(`${multiplier}*${counter}=`, multiplier * counter);
}

// Exercicio - imprimir valores pares entre 1 e 20
console.log("Exercico 1 FOR");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//Exercicio 2 - calcular soma de 1 a 100
console.log("Exercicio 2 FOR");
let sum = 0;
for (let j = 1; j <= 100; j++) {
  sum += j;
}
console.log(sum);

//Exercicio 3 - imprimir valores de 1 a 10 em ordem descrescente
console.log("Exercicio 3 FOR");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//ESTRUTURA WHILE
console.log("Estrutura WHILE");
let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// Exercicio - calcular soma dos numeros de 1 a 100
console.log("exercicio 1 WHILE");
let j = 0;
let r = 0;
while (j <= 100) {
  r += j;
  j++;
}
console.log(r);

// Exercicio 2 - Fazer um algoritmo para receber nº decimais até
//que o usuario digite 0 e fazer a media aritmetica desses numeros
let num = Number(prompt("Qual numero? "));
let counter = 0;
let suma = 0;

while (num !== 0) {
  suma += num;
  counter++;
  num = Number(prompt("Outro numero: "));
}
console.log(`A média é:`, suma / counter);

//Exercicio 3 - Imprimir os primeiros 50 primeiros n°s primos maior
//que 100. Obs: N° primo é aquele divisivel somente por 1 e ele mesmo

let cont = 0;
let tot = 0;
let num9 = 101;

do {
  for (let i = 1; i <= num9; i++) {
    if (num9 % i === 0) {
      tot++;
    }
  }
  if (tot === 2) {
    cont++;
    console.log(`O número ${num9} é primo`);
  }
  tot = 0;
  num9 += 2;
} while (cont < 50);

//DO WHILE - Vai ser executar ao menos 1 vez
//Exercicio - solicitar ao usuario até que insira valor negativo
let number1;
do {
  let number1 = Number(prompt("Qual valor?"));
} while (number1 > 0);
