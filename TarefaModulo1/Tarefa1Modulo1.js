// NOTA: Para fazer rodar é preciso instalar o nodejs no computador,
// e após instalação ter o vscode e no terminal instalar o prompt sync
//para isso é preciso digitar no seu terminal: npm install prompt-sync
const prompt = require("prompt-sync")();
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

console.log("1) Número ímpar ou par?");
let number = Number(prompt("Digite um número: "));
if (number % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

console.log("2) Classificação pela idade");
let age = Number(prompt("Qual sua idade? "));
if (age <= 12) {
  console.log("Criança");
} else if (age >= 13 && age <= 17) {
  console.log("Adolescente");
} else if (age >= 18 && age <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

console.log("3) Aprovado, recuperação ou reprovado?");
let grade = Number(prompt("Digite sua nota de 0 a 10: "));
if (grade >= 6) {
  console.log("Aprovado");
} else if (grade < 6 && grade >= 4) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log("4) Menu interativo");
let choice = Number(prompt("Escolha um número de 1 a 3: "));
switch (choice) {
  case 1:
    console.log("Escolha 1");
    break;
  case 2:
    console.log("Escolha 2");
    break;
  case 3:
    console.log("Escolha 3");
    break;
}

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

console.log("5) Calcule seu IMC");
let height = Number(prompt("Qual sua altura? "));
let weight = Number(prompt("Qual seu peso? "));
let imc = weight / height ** 2;
console.log(`Seu IMC é: ${imc}`);
if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.9) {
  console.log("Obesidade I");
} else if (imc >= 35 && imc <= 39.9) {
  console.log("Obesidade II");
} else if (imc >= 40) {
  console.log("Obesidade III");
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

console.log("6) É triângulo? Qual triângulo?");
let sideA = Number(prompt("Digite o primeiro lado: "));
let sideB = Number(prompt("Digite o segundo lado: "));
let sideC = Number(prompt("Digite o terceiro lado: "));
if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
  if (sideA == sideB && sideB == sideC) {
    console.log("Triângulo equilátero");
  } else if (sideA != sideB && sideB != sideC) {
    console.log("Triângulo escaleno");
  } else if (sideA == sideB || sideA == sideC || sideB == sideC) {
    console.log("Triângulo isósceles");
  }
} else {
  console.log("Não é um triângulo");
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

console.log("7) Comprando maçãs");
let apple = Number(prompt("Quantas maçãs você esta comprando? "));
if (apple >= 12) {
  console.log(
    `Você esta comprando ${apple} maças por 0,25 centavos e o total ficou: R$ ${
      apple * 0.25
    }`
  );
} else {
  console.log(
    `Você esta comprando ${apple} maça(s) por 0,30 centavos e o total ficou: R$ ${
      apple * 0.3
    }`
  );
}

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

console.log("8) Ordem crescente");
let nu1 = Number(prompt("Digite um número: "));
let nu2 = Number(prompt("Digite outro número: "));
let array = [];
array.push(nu1);
array.push(nu2);
console.log(array.sort());

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

console.log("9) Contagem regressiva");
let yes = prompt("Esta pronto para contagem regressiva? Digite y ");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

console.log("10) Escrevendo 10 vezes");
let num = Number(prompt("Qual número você quer repetir 10 vezes? "));
for (let i = 1; i <= 10; i++) {
  console.log(i + "." + num);
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

console.log("11) Soma de 5 números");
let average = [];
for (let i = 1; i < 6; i++) {
  let n1 = Number(prompt(`Digite o ${i} número: `));
  average.push(n1);
}
let sum = average.reduce((acum, elem) => acum + elem);
console.log(sum);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

console.log("12) Tabuada");
let num1 = Number(prompt("Digite um número: "));
for (i = 0; i <= 10; i++) {
  console.log(`${num1} * ${i} = ${num1 * i}`);
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

console.log("Média aritmética");
let ar = [];
let n = Number(prompt("Digite um número decimal: "));
while (n !== 0) {
  ar.push(n);
  n = Number(prompt("Digite outro número decimal ou digite zero para sair: "));
}
let ave = ar.reduce((acum, elem) => acum + elem);
console.log(`Seus números: ${ar}`);
console.log(`Soma total do array: ${ave}`);
console.log(`A média aritmética é: ${ave / ar.length}`);

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

console.log("14) Fatorial de um número");
let fat = Number(prompt("Digite o número: "));
let result = fat;
while (fat > 1) {
  fat--;
  result = result * fat;
}
console.log(result);

//Como funciona:
//               fat           fat--      var result      result *= num
// 1ª iteração:   5             4            5             20 = 5 * 4
// 2ª iteração:   4             3           20             60 = 20 * 3
// 3ª iteração:   3             2           60            120 = 60 * 2
// 4ª iteração:   2             1          120            120 = 120 * 1
// 5ª iteração:   1             0          120
// Fim do laço WHILE

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

console.log("15) Fibonacci");
let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = " ";

fibonacci += numA + " " + numB;

for (let i = 1; i <= 8; i++) {
  numC = numA + numB;
  fibonacci += " " + numC;
  numA = numB;
  numB = numC;
}
console.log(fibonacci);

console.log("Fim da Tarefa 1 do modulo 1");
