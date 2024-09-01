// ARRAY
let carro = Array(); // array no js é um objeto
carro[0] = "Civic";
carro[1] = 10;
carro[2] = true;
carro["Hyago"] = 10; // No js ele aceita tudo, na posição 3 vai se chamar hyago com valor 10

let moto = Array("cbr", "Ninja", 10);

let livros = ["HP", "Fundação", "SA"];
livros.push("Sherlock"); // adiciona no final do array
livros.unshift("1984"); // adiciona no começo do array
livros.pop(); // Retira o ultimo elemento, se passar parametro ele retira
livros.shift(); //Retira o primeiro elemento
livros.splice(2); //Retira tudo a partir do elemento 2
// splice tem muitas funçoes
livros.splice(2, 0, "animais fantasticos"); // assim a partir do index 2, nao vai deletar nenhum e vai adicionar A.F

console.log(livros);

let alunos = ["rafa", "patty", "rosane", "diego"];
