//Exercícios com 'for'

// 1 - Imprima a sequência de Fibonacci até o 10º termo
// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.
// let numA = 0;
// let numB = 1;
// let numC = 0;
// let fibonacci = " ";

// fibonacci += numA + " " + numB;

// for (let contador = 1; contador <= 8; contador++) {
//   numC = numA + numB;
//   fibonacci += " " + numC;
//   numA = numB;
//   numB = numC;
// }
// console.log(fibonacci);

// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
// Dica: Um número primo só é divisível por 1 e por ele mesmo.

// let numeroDigitado = 29;
// let divisor = 2;
// while (numeroDigitado % divisor != 0) {
//   divisor++;
// }
// if (numeroDigitado == divisor) {
//   console.log("Número Primo!");
// } else {
//   console.log("Número NÃO primo!");
// }

// 3 - Imprima um triângulo de números
// Escreva um programa que use um loop for para imprimir um triângulo de números.
// Dica: Utilize dois loops for, um dentro do outro.

// let simb = "0";
// for (let i = 0; i < 5; i++) {
//   console.log(simb);
//   simb += "0";
// }

// Exercícios com 'while'

// 4 - Calcule o fatorial de um número
// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.
// let num1 = 5;
// let result = num1;
// while (num1 > 1) {
//   num1--;
//   result *= num1;
// }
// console.log(result);

// 5 - Inverta os dígitos de um número
// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
// Dica: Use operações de módulo e divisão para extrair os dígitos.

// 6 - Verifique se um número é palíndromo
// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.
// Exercícios com 'do while'

// 7 - Conte o número de dígitos de um número
// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
// Dica: Use operações de divisão para reduzir o número até que ele seja zero.

// 8 - Calcule a soma dos dígitos de um número
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

// 9 - Imprima um padrão de estrela decrescente
// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
// Dica: Utilize dois loops, um dentro do outro.

// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

// let num1 = Number(prompt("Informe o primeiro valor: "));
// let num2 = Number(prompt("Informe o segundo valor: "));

// let a = num1;
// let b = num2;

// do {
//   let temp = b;
//   b = a % b;
//   a = temp;
// } while (b !== 0);
// const MDC = a;
// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`);
