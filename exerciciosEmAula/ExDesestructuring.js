//....       EXERCICIO 1
// Com base nesse array: numeros [10,20,30,40,50,60]
//Use a desestruturação de arrays para atribuir os valores dos tres primeiros elementos para variaveis a, b e c.

//.....      EXERCICIO 2
// const desenvolvedor = {
//   nome: "Carlos",
//   idade: 32,
//   contato: {
//     email: "carlos.dev@example.com",
//     endereco: {
//       cidade: "Porto Alegre",
//       estado: "RS",
//       pais: "Brasil",
//     },
//   },
//   projetos: ["website", "App mobile", "API"],
// };

// 1. Desestruture nome e idade diretamente do objeto
// 2. Extraia o email da propriedade contato
// 3. Extraia cidade, estado e pais do objeto aninhado endereco
// 4. Extraia o primeiro e o segundo projeto da lista de projetos

console.log("EXERCICIO 1");
let numeros = [10, 20, 30, 40, 50, 60];
const [a, b, c] = numeros;
console.log(a);
console.log(b);
console.log(c);

console.log("EXERCICIO 2");
const desenvolvedor = {
  nome: "Carlos",
  idade: 32,
  contato: {
    email: "carlos.dev@example.com",
    endereco: {
      cidade: "Porto Alegre",
      estado: "RS",
      pais: "Brasil",
    },
  },
  projetos: ["website", "App mobile", "API"],
};

console.log(2.1);
const { nome, idade } = desenvolvedor;
console.log(nome);
console.log(idade);

console.log(2.2);
const {
  contato: { email },
} = desenvolvedor;
console.log(email);

console.log(2.3);
const {
  contato: { endereco },
} = desenvolvedor;
console.log(endereco);

console.log(2.4);
const {
  projetos: [w, m],
} = desenvolvedor;
console.log(w, m);

//EXERCICIO 3 REST
// Crie uma função chamada calculaMedia que aceita uma quantidade indefinida de notas de estudantes e calcula a média dessas notas
// Instruçoes:
// use o operador rest para capturar todas as notas passadas como argumentos.
// Dentro da função, some todas as notas e divida pela quantidade de notas para calcular a média.

console.log("EXERCICIO 3");
function calculaMedia(...notas) {
  let media =
    notas.reduce((total, num) => {
      return total + num;
    }) / notas.length;
  return media;
}
console.log(calculaMedia(10, 4, 8));

// EXERCICIO 4 - SPREAD
// Imagine que voce esta desenvolvendo um sistema de e-comerce e precisa mesclar os dados de um cliente com uma atualizaçao recente. Os dados antigos estao em um objeto, e os dados novos chegam em outro. Utilize o operador spread para criar um novo objeto contendo as info atualizadas
// Instruçoes:
// use o operador spread para combinar os dois objetos dando prioridade aos dados mais recentes
console.log("exercicio 4");
const pessoa1 = {
  nome: "joão",
  idade: 30,
};
const endereco1 = {
  cidade: "Poa",
  estado: "RS",
};
const atualizaPessoa = { ...pessoa1, ...endereco1 };
console.log(atualizaPessoa);

//EXERCICIO 5
//Suponha que voce tem uma lista de produtos em um carrinho de compras e deseja adicionar novos produtos sem modificar o array original. Use o operador spread para criar uma nova lista de produtos
//Instruçoes:
//Use o operador spread para adicionar novos itens a um array ja existente
console.log("Exercicio 5");
const produtos = ["camiseta", "bermuda", "bone"];
const novaLista = [...produtos, "casaco"];
console.log(novaLista);
