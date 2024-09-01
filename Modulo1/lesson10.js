let thingsList = Array();

thingsList["hardware"] = Array(); // aqui estou dizendo que a linha 1 sera hardware
thingsList["fruits"] = Array(); // linha 2 fruits
thingsList["people"] = Array("rafael", "patty"); // pode ser declarado assim tbm

thingsList["hardware"][0] = "notebook"; // na array things tem um array hardware e posição 0 o notebook
thingsList["hardware"][1] = "Mouse"; // na posição 1 esta mouse
thingsList["hardware"][2] = "teclado";
thingsList["fruits"][0] = "laranja";
thingsList["fruits"][1] = "maça";

console.table(thingsList);

let fruitList = Array();

fruitList[0] = "Maça";
fruitList[1] = "Banana";
fruitList[2] = "Melancia";
fruitList[3] = "Uva";
fruitList[4] = "Morango";

console.log(fruitList);

// exercicio 1 - ordenar a lista de forma alfabetica
console.log(fruitList.sort()); // é so colocar .sort que ele ja ordena
//Porém nao ordena de forma adequada os numeros
let numberList = [];
numberList[0] = 10;
numberList[1] = 12;
numberList[2] = 0;
numberList[3] = 16;
numberList[4] = 7;
numberList[5] = 9;
console.log(numberList.sort()); //Não ira funcionar como deve, pra isso precisa fazer isso
console.log(numberList.sort((a, b) => a - b));
//a e b são parametros e esta fazendo a comparação

console.log(fruitList.indexOf("Morango")); // é uma função que ira retornar o numero da posição do morango na lista e o primeiro que encontrar
let index = fruitList.indexOf("Morango"); // se não exiter volta -1
if (index === -1) {
  console.log("Não existe");
} else {
  console.log(`elemento existe e esta em posição ${index}`);
}

//FUNÇÕES
// Nome da função precisa explicar o pq dela, entre () vai os parametros.
//Função sempre precisa do return, sempre vai voltar algo
//é preciso passar os parametros para a função
console.log("FUNÇOES");
function calculateArea(w, h) {
  let area = w * h; //esta variavel só existe no escopo da função.
  return area;
}
let width = 10;
let height = 200;

let area1 = calculateArea(width, height);
console.log(`A area possui ${area1}m²`);

//3 ESCOPOS NO JS
// GLOBAL - Variavel pode ser acessada em qualquer lugar do codigo
// FUNÇÃO - variavel so pode ser acessada na função
// BLOCO - variavel so existe no contexto do bloco PORÉM se for var
// será acessada em qualquer lugar

//Exercico 1 - criar uma função que ordene uma lista
let alfabeto = ["a", "e", "c", "b", "d"];
console.log(alfabeto);

function odernar(arrOrdenado) {
  return arrOrdenado.sort();
}
console.log(odernar(alfabeto));
