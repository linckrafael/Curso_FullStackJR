// função anonima - loper - envelopa a função - serve pra usar uma função para outra função - Call back
let teste = function () {
  console.log("ola mundo");
};
teste();

//exemplo
function showFunction(sucessCallback, errorCallback) {
  if (false) {
    sucessCallback("Requisisão bem sucedida");
  } else {
    errorCallback("Erro na requisição");
  }
}
let sucessCallback = function (message) {
  console.log(message);
};
let errorCallback = (message) => {
  console.log(message);
};
showFunction(sucessCallback, errorCallback);

//Exercicio - transformar os 5 exercicios da aula 9 em funçoes
//exercicio 1 - Soma dos elementos de uma array
console.log("EXERCICIO 1");
function arraSum(arra) {
  let sum = 0;
  for (let i = 0; i < arra.length; i++) {
    sum += arra[i];
  }
  return sum;
}

console.log(arraSum([10, 20, 30, 40]));

// Exercicio 2 - encontre o maior numero de uma array
console.log("EXERCICIO 2 - resposta com especial");
let arr = [2, 5, 7, 50, 4, 6, 80];
function max(arr) {
  let resul = Math.max.apply(null, arr);
  return console.log(resul);
}
max(arr);

console.log("EXERCICO 2 - com resposta for");
let arr0 = [2, 5, 7, 50, 4, 6, 80, 100];
let max1 = arr0[0];
function findMax(array) {
  for (let j = 0; j < arr0.length; j++) {
    if (arr0[j] > max1) {
      max1 = arr0[j];
    }
  }
  return max1;
}

console.log(findMax(arr0));

//Exercicio 3 - Reverter uma array
console.log("EXERCICO 3");
let rev = [];
let arr1 = [1, 2, 3, 4, 5];
function reverter(arr1) {
  for (let i = arr1.length - 1; i >= 0; i--) {
    rev.push(arr1[i]);
  }
  return rev;
}
console.log(reverter(arr1));

// Exercico 4 - Criar um novo array contendo apenas números pares
console.log("Exercicio 4");
let arr2 = [1, 2, 3, 4, 5, 6];
let eve = [];
function pares() {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
      eve.push(arr2[i]);
    }
  }
  return eve;
}
console.log(pares(eve));

//Exercicio 5 - Contar Ocorrências de um elemento
console.log("Exercicio 5");
let arr3 = [2, 5, 8, 2, 4, 2];
let value = 2;
let count = 0;
function ocorrencia() {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === value) {
      count++;
    }
  }
  return;
}
console.log(ocorrencia(`O valor ${value} ocorre ${count} vezes no vetor`));

// function dataAtualFormatada(){
//     var data = new Date(),
//         dia  = data.getDate().toString().padStart(2, '0'),
//         mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
//         ano  = data.getFullYear();
//     return dia+"/"+mes+"/"+ano;
// }
