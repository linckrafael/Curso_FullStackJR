// Exercicio 1 - Soma dos elementos de uma array
console.log("EXERCICIO 1");
// let result = 0;
// let myArray = [2, 5, 7];
// for (let i = 0; i < myArray.length; i++) {
//   result += myArray[i];
// }
// console.log(result);

// Exercicio 2 - encontre o maior numero de uma array
console.log("EXERCICIO 2 - resposta com especial");
// let arr = [2, 5, 7, 50, 4, 6, 80];
// let resul = Math.max.apply(null, arr);
// console.log(resul);
// Aqui funciona com um item especial do js
console.log("EXERCICO 2 - com resposta for");
// let arr = [2, 5, 7, 50, 4, 6, 80];
// let max = arr[0];
// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] > max) {
//     max = arr[j];
//   }
// }
// console.log(max);

//Exercicio 3 - Reverter uma array
console.log("EXERCICO 3");
// let rev = [];
// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {  //o -1 serve pra voltar o valor correto da array
//   rev.push(arr[i]);
// }
// console.log(arr);
// console.log(rev);

// Exercico 4 - Criar um novo array contendo apenas números pares
console.log("Exercicio 4");
// let arr = [1, 2, 3, 4, 5, 6];
// let eve = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     eve.push(arr[i]);
//   }
// }
// console.log(eve);

//Exercicio 5 - Contar Ocorrências de um elemento
console.log("Exercicio 5");
// let arr = [2, 5, 8, 2, 4, 2];
// let value = 2;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === value) {
//     count++;
//   }
// }
// console.log(`O valor ${value} ocorre ${count} vezes no vetor`);

// ARRAYS/VETORES MULTI DIMENSIONAL (matriz)
console.log("array multidimensionais");
// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(matriz); // ira mostar em linha como de costume
// console.table(matriz); // ira mostrar como uma tabela mesmo
// console.log(matriz[0][2]); // ira mostar apenas o numero especifico, linha 0 e elemento 3 -> index 2
// console.log(matriz[1][1]); // linha 1 coluna 1, vai trazer o nº5

// EXERCICIO 1- trazer os elementos em cada posição
console.log("exercicio 1");
// let matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let linha = 0; linha < matriz.length; linha++) {
//   // primeiro for para linhas
//   for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
//     // segundo for para as colunas
//     console.log(
//       `Elemento na posição[${linha}][${coluna}]: ${matriz[linha][coluna]}`
//     );
//   }
// }

//Exercicio 2 - somar matrizes
console.log("Somar os arrays");
//para fazer soma os arrays precisam ser do mesmo tamanho

// let m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let m2 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let resultado = [];

// if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
//   throw new Error("Os arrays precisam ter o mesmo tamanho!");
// }

// for (let i = 0; i < m1.length; i++) {
//   let somaLinha = [];
//   for (let j = 0; j < m1[i].length; j++) {
//     somaLinha.push(m1[i][j] + m2[i][j]);
//   }
//   resultado.push(somaLinha);
// }
// console.table(resultado);

//Exercicio 3 - soma da diagonal principal
console.log("Exercico 3");

let m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// MEUS TESTES
// let activities = [
//   ["work", 9],
//   ["eat", 1],
//   ["sleep", 7],
//   ["game", 1],
// ];
// console.table(activities);
// console.log(activities[2][0]);
// activities.splice(1, 2);
// console.table(activities);
