// NOTA: Para fazer rodar é preciso instalar o nodejs no computador

// Manipulação de Objetos
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

console.log("Exercício 1");
let car = {
  marca: "Chevrolet",
  modelo: "Cruze",
  ano: 2025,
  cor: "Preta",
};
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
console.log("");

// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

console.log("Exercício 2");
let livro = {
  titulo: "Harry Potter",
  autor: "J.K. Rowling",
  anoPublicacao: 1997,
  genero: "Fantasia",
};

for (prop in livro) {
  if (prop === "editora") {
    console.log(livro);
  } else {
    livro.editora = "Rocco";
  }
}
console.log(livro);
console.log("");

// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

console.log("Exercício 3");
let produto = {
  tipo: "doce",
  valor: 2,
  quantidade: 4,
};
function FnewObj(obj, valMin) {
  let newObj = {};
  for (let propi in obj) {
    if (obj[propi] >= valMin) {
      newObj[propi] = obj[propi];
    }
  }
  return newObj;
}
console.log(FnewObj(produto, 2));
console.log("");

// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

console.log("Exercício 4");
let pessoas = [
  { nome: "João", idade: 20, cidade: "Atibaia" },
  { nome: "Maria", idade: 19, cidade: "Porto Alegre" },
  { nome: "Pedro", idade: 35, cidade: "Capão" },
];
for (let people of pessoas) {
  console.log(people);
}
console.log("");

// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

console.log("Exercício 5");
let alunos = [
  { nome: "Aluno1", nota1: 5, nota2: 7 },
  { nome: "Aluno2", nota1: 8, nota2: 8 },
  { nome: "Aluno3", nota1: 7, nota2: 6 },
  { nome: "Aluno4", nota1: 10, nota2: 7 },
];
for (let aluno of alunos) {
  let media = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`Aluno: ${aluno.nome} e Média: ${media}`);
}
console.log("");

// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

console.log("Exercício 6");
let funcionarios = [
  { nome: "Func1", cargo: "Diretor", salario: 10000 },
  { nome: "Func2", cargo: "Desenvolvedor", salario: 3000 },
  { nome: "Func3", cargo: "Estagiário", salario: 1500 },
  { nome: "Func4", cargo: "Recepcionista", salario: 2000 },
];
for (funcio of funcionarios) {
  if (funcio.salario >= 2000) {
    console.log(funcio);
  }
}
console.log("");

// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

console.log("Exercício 7");
let produtos = [
  { nome: "Borracha", preco: 5, desconto: 10 },
  { nome: "Lápis", preco: 3, desconto: 10 },
  { nome: "Caneta", preco: 8, desconto: 10 },
  { nome: "Régua", preco: 6, desconto: 10 },
];
produtos.forEach((produto) => {
  let desconto = produto.preco * 0.1;
  produto.preco -= desconto;
  console.log(`Produto: ${produto.nome}, Novo valor: ${produto.preco}`);
});

console.log("");

// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

console.log("Exercício 8");
let filmes = [
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1972,
  },
  {
    titulo: "Um Sonho de Liberdade",
    diretor: "Frank Darabont",
    anoLancamento: 1994,
  },
  {
    titulo: "A Lista de Schindler",
    diretor: "Steven Spielberg",
    anoLancamento: 1993,
  },
];
let titulos = [];
filmes.forEach((filme) => {
  titulos.push(filme.titulo);
});
console.log(titulos);
console.log("");

// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

console.log("Exercício 9");
let clientes = [
  { nome: "Cliente1", idade: 45, cidade: "Cidade1" },
  { nome: "Cliente2", idade: 15, cidade: "Cidade2" },
  { nome: "Cliente3", idade: 20, cidade: "Cidade3" },
  { nome: "Cliente4", idade: 31, cidade: "Cidade4" },
];
let contador = 0;
clientes.forEach((cliente) => {
  if (cliente.idade > 30) {
    console.log(cliente);
    contador++;
  }
});
console.log(`Há ${contador} clientes acima de 30 anos`);
console.log("");

// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

console.log("Exercício 10");
let vendas = [
  { produto: "prod1", quantidade: 3, valor: 10 },
  { produto: "prod2", quantidade: 2, valor: 20 },
  { produto: "prod3", quantidade: 1, valor: 5 },
  { produto: "prod4", quantidade: 4, valor: 15 },
];
let valorTotal = 0;
vendas.forEach((venda) => {
  valorTotal += venda.quantidade * venda.valor;
});
console.log(valorTotal);
console.log("");

// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

console.log("Exercício 11");
let pedidos = [
  { cliente: "Cliente1", produto: "Prod1", quantidade: 2 },
  { cliente: "Cliente2", produto: "Prod2", quantidade: 3 },
  { cliente: "Cliente3", produto: "Prod3", quantidade: 1 },
];
let totalPedidosCliente = {};
pedidos.forEach((pedido) => {
  totalPedidosCliente[pedido.cliente] = pedido.quantidade;
});
console.log(totalPedidosCliente);
console.log("");

// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

console.log("Exercício 12");
let estoque = [
  { produto: "prod1", quantidade: 2, minimo: 4 },
  { produto: "prod2", quantidade: 4, minimo: 4 },
  { produto: "prod3", quantidade: 3, minimo: 4 },
];
estoque.forEach((esto) => {
  if (esto.quantidade < 4) {
    esto.quantidade *= 2;
    console.log(esto);
  }
});
console.log("");

// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

console.log("Exercício 13");
let carrinho = {
  itens: [
    { nome: "Borracha", quantidade: 2, precoUnitario: 5 },
    { nome: "Caneta", quantidade: 1, precoUnitario: 10 },
  ],
};
let valorTotalCarrinho = 0;
carrinho.itens.forEach((item) => {
  valorTotalCarrinho += item.quantidade * item.precoUnitario;
});
console.log(valorTotalCarrinho);
console.log("");

// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

console.log("Exercício 14");
let empresa = {
  departamentos: [
    {
      nome: "RH",
      funcionarios: [
        { nome: "João", cargo: "Gerente" },
        { nome: "Maria", cargo: "Supervisora" },
      ],
    },
    {
      nome: "Vendas",
      funcionarios: [
        { nome: "André", cargo: "vendedor" },
        { nome: "Ana", cargo: "gerente" },
      ],
    },
  ],
};
for (let i in empresa.departamentos) {
  let departamento = empresa.departamentos[i];
  console.log(`Departamento: ${departamento.nome}`);

  for (let funcionario of departamento.funcionarios) {
    console.log(
      `  Funcionário: ${funcionario.nome} - Cargo: ${funcionario.cargo}`
    );
  }
}
console.log("");

// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

console.log("Exercício 15");
let transacoes = [
  { tipo: "entrada", valor: 10 },
  { tipo: "entrada", valor: 30 },
  { tipo: "saida", valor: 5 },
  { tipo: "saida", valor: 10 },
];
let saldoFinal = 0;
transacoes.forEach((element) => {
  if (element.tipo === "entrada") {
    saldoFinal += element.valor;
  } else {
    saldoFinal -= element.valor;
  }
});
console.log(saldoFinal);
