// Exercícios com if

// 1 - Verifique se um número é positivo, negativo ou zero
// Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.
const prompt = require("prompt-sync")();

// let num = Number(prompt("Digite um numero: "));
// if (num > 0) {
//   console.log("Número positvo");
// } else if (num < 0) {
//   console.log("Número negativo");
// } else if (num === 0) {
//   console.log("Zero");
// } else {
//   console.log("Erro! Digite um número");
// }

// 2 - Verifique se um ano é bissexto
// Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.

// let year = Number(prompt("Digite o ano: "));
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Ano bissexto");
// } else {
//   console.log("Não é bissexto");
// }

// Exercícios com if/else

// 3 - Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.
// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// let grade1 = Number(prompt("Digite a nota 1: "));
// let grade2 = Number(prompt("Digite a nota 2: "));
// let grade3 = Number(prompt("Digite a nota 3: "));
// let average = (grade1 + grade2 + grade3) / 3;
// console.log(`Sua média é: ${average.toFixed(2)}`); //toFixed limite o numero das casas depois da virgula
// if (average >= 8) {
//   console.log("Nota A");
// } else if (average < 8 && average >= 6) {
//   console.log("Nota B");
// } else if (average < 6 && average >= 4) {
//   console.log("Nota C");
// } else if (average < 4 && average >= 2) {
//   console.log("Nota D");
// } else {
//   console.log("Nota E");
// }

// 4 - Verifique se um número é par ou ímpar
// Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar. Imprima uma mensagem apropriada.

// let num = Number(prompt("Digite um número: "));
// let par = num % 2;
// if (par === 0) {
//   console.log("Número par");
// } else {
//   console.log("Número ímpar");
// }

// 5 - Verifique a categoria de um nadador
// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

// let age = Number(prompt("Qual sua idade? "));
// if (age >= 5 && age <= 7) {
//   console.log("Infantil A");
// } else if (age >= 8 && age <= 10) {
//   console.log("Infantil B");
// } else if (age >= 11 && age <= 13) {
//   console.log("Juvenil A");
// } else if (age >= 14 && age <= 17) {
//   console.log("Juvenil B");
// } else if (age >= 18) {
//   console.log("Adulto");
// } else {
//   console.log("Muito novo, volte mais tarde");
// }

// Exercícios com switch

// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

// let day = Number(prompt("Digite de 1 a 7: "));
// switch (day) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda");
//     break;
//   case 3:
//     console.log("Terça");
//     break;
//   case 4:
//     console.log("Quarta");
//     break;
//   case 5:
//     console.log("Quinta");
//     break;
//   case 6:
//     console.log("Sexta");
//     break;
//   case 7:
//     console.log("Sabado");
//     break;
// }

// 7 - Calcule o valor de uma expressão matemática simples
// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.
// Dica: Utilize os operadores aritméticos em cada caso do switch.

// let num1 = Number(prompt("Digite o primeiro número: "));
// let num2 = Number(prompt("Digite o segundo número: "));
// let opr = Number(prompt("Digite a operação:1.Soma 2.Subt 3.Multi 4.Divi: "));
// switch (opr) {
//   case 1:
//     console.log(num1 + num2);
//     break;
//   case 2:
//     console.log(num1 - num2);
//     break;
//   case 3:
//     console.log(num1 * num2);
//     break;
//   case 4:
//     console.log(num1 / num2);
//     break;
// }

// 8 - Verifique a estação do ano
// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente. (1 =
// Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

// let seasons = Number(prompt("Digite de 1 a 4: "));
// switch (seasons) {
//   case 1:
//     console.log("Primavera");
//     break;
//   case 2:
//     console.log("Verão");
//     break;
//   case 3:
//     console.log("Outono");
//     break;
//   case 4:
//     console.log("Inverno");
//     break;
// }

// Exercícios combinados

// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais
// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.

// let age = Number(prompt("Qual sua idade? "));
// if (age <= 12) {
//   console.log("Criança");
//   age = 1;
// } else if (age >= 13 && age <= 17) {
//   console.log("Adolescente");
//   age = 2;
// } else if (age >= 18 && age <= 59) {
//   console.log("Adulto");
//   age = 3;
// } else {
//   console.log("Idoso");
//   age = 4;
// }
// switch (age) {
//   case 1:
//     console.log("Aproveita a infância");
//     break;
//   case 2:
//     console.log("Aproveita a adolescência");
//     break;
//   case 3:
//     console.log("Lembre-se de aproveitar a vida");
//     break;
//   case 4:
//     console.log("Aproveita a aposentadoria");
//     break;
// }

// 10 - Calcule o IMC e determine a categoria
// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

// let height = Number(prompt("Qual sua altura? "));
// let weight = Number(prompt("Qual seu peso? "));
// let imc = weight / height ** 2;
// console.log(`Seu IMC é: ${imc}`);
// if (imc < 18.5) {
//   console.log("Abaixo do peso");
// } else if (imc >= 18.5 && imc <= 24.9) {
//   console.log("Peso normal");
// } else if (imc >= 25 && imc <= 29.9) {
//   console.log("Sobrepeso");
// } else if (imc >= 30 && imc <= 34.9) {
//   console.log("Obesidade I");
// } else if (imc >= 35 && imc <= 39.9) {
//   console.log("Obesidade II");
// } else if (imc >= 40) {
//   console.log("Obesidade III");
// }
