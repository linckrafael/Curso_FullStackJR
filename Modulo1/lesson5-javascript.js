console.log("Hello world"); // Aspas duplas
console.log("Hello world"); // Aspas simples
console.log(`Hello world`); // Crase, serve pra contatenar e mostrar variaveis
console.log(1.0); // Numero é só colocar o numero
console.log(typeof 10); // Mostra o tipo de dado

// VARIAVEIS - 3 FORMAS DE DECLARAÇÃO DE VARIAVEL
name = "Rafa"; // - variavel global - nao usar
let name1 = "Rafa"; // - Padrão - como usar
var name2 = "RAFA"; // - mais antigo - nao usar

// CONSTANTE
const CITY = "porto alegre"; // - é obrigatorio ja colocar valor

//UNDEFINED
let test;
console.log(test); // - Não foi definida a variavel

// NULL
let myNull = null;
console.log(myNull);

//BOOLEAN
let myBoolean = true; //  boolean é true ou false
console.log(myBoolean);

// OPERADORES MATEMATICOS
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // soma;
console.log(num1 - num2); // subtração;
console.log(num1 / num2); // divisão;
console.log(num1 * num2); // multiplicação;
console.log(num1 ** num2); // potência;
console.log(num1 % num2); // modulo ou restante;

//ORDEM DE PROCEDENCIA
// primeiro ()
// depois **
// * / %
// + -
// esquerda pra direita

// CONCATENAÇÃO
let numTest = "5";
console.log(numTest + 10); // como numTest é string irá aparecer 510, pois concatenou
let numTest2 = parseInt(numTest); // OU let numTest2 = Number(numTest) O parseInt ou number transforma a string em numero
console.log(numTest2 + 10); // como virou numero o resultado será 15

//INCREMENTO , DECREMENTO
let counter = 1;
counter = counter + 1; // Aqui incrementa 1
counter++; // Aqui é a mesma coisa do de cima, incrementa 1
counter--; // Diminui 1

//   CUIDAR onde que esta o ++, pois o programa le por passos, da esquerda pra direita
counter1 = 1;
console.log(counter1); //  vai mostrar 1
console.log(counter1++); // vai continuar mostrando 1, por só depois ele é incrementado
console.log(counter1); // vai mostrar 2
console.log(++counter1); // vai mostrar 3 pois incrementou antes

// let step = 2
// counter = counter + step;
// counter += step;             Forma abreviada do ex de cima

// counter = counter - step;
// counter -= step;

// counter = counter * step;
// counter *= step;

// counter = counter / step;
// counter /= step;

// OPERADORES RELACIONAIS
console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 <= 5); //false
console.log(10 >= 5); //true
console.log(10 == 5); //false
console.log(10 == "10"); // Aqui ele vai comparar o numero na string, aqui vai dar true
console.log(10 === "10"); //Aqui ele vai comparar o numero e o tipo, aqui vai dar false
console.log(10 != "10"); //Mesmo caso do primeiro, ele ve o numero e nao o tipo. Vai dar false
console.log(10 !== "10"); //true. pq compara o tipo tbm

// OPERADORES LOGICOS
console.log("Operadores logicos");
console.log(10 < 5 && 10 > 2); //false  E
console.log(10 < 5 || 10 > 2); //true   OU
console.log(10 < 5 || !(10 > 2)); //false   NÃO   o true virou false por causa do !
console.log(!(10 < 5) || 10 > 2); //true   NÃO    o false virou true por causa do !

console.log("TESTE");
let nome = "rafael";
let senha = 1234;
resultado = nome === "rafael" && senha === 1234;
console.log(resultado);
