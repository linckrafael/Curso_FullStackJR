//OBJETOS
let serie = {
  //objeto declarado com chaves, chaves e valor
  nome: "The Boys", //chave: valor
  genero: ["Ação, Paródia, Heróis"],
  nrTemporada: 4,
  status: "Em andamento",
  classificacao: 18,
  nrEpisodios: {
    //Estou aninhando objetos dessa forma
    temp1: 10,
    temp2: 10,
    temp3: 8,
  },
  mostrarCaracteristicas: function () {
    return `O nome da serie é: ${this.nome} e sua classificação é + ${this.classificacao}`;
  },
};

console.log(serie);
console.log(serie.nome); //vai trazer o nome
console.log(serie.mostrarCaracteristicas());

//Exercicio 1 - Fazer um objeto livro
let livro = {
  nome: "Harry Potter e a Pedra Filosofal",
  genero: "Fantasia, Ação",
  tipoCapa: "Dura",
  classificacao: "livre",
  autor: "J.K",
  paginas: 300,

  lerLivro: function () {
    return `ira ler ${this.nome} do genero: ${this.genero}`;
  },
};
console.log(livro.lerLivro());

// exercicio - fazer objeto carro
let carro = {
  nome: "Classic",
  marca: "Chevrolet",
  ano: 2014,
  cor: "Preto",
  cambio: "Manual",
  nPortas: 4,
  acelerar: function () {
    return `Acelerando a maquina`;
  },
};
console.log(carro);
console.log(carro.acelerar());

//Outra forma de fazer
console.log("chave e valor");
let motor = "1000";
let nome = "BMW";
let tipo = "Esportiva";

let moto = {
  nome: nome,
  tipo: tipo,
  motor: motor,
};

console.log(moto);

//ADICIONAR ATRIBUTO
console.log("atribuir chave e valor");
let atleta = {
  nome: "Rayssa",
  esporte: "Skate",
  idade: 16,
};
atleta.nacionalidade = "Brasil"; //Adicionando o atributo e o valor
atleta.medalhas = {
  ouro: 10,
  prata: 1,
  bronze: 3,
};
atleta.celebrarVitoria = function () {
  // add funçao a atleta
  return "GANHEI";
};

console.log(atleta);
console.log(atleta.celebrarVitoria());

//tudo o que tu fizer no obj2 atinge o obj1, pois é apenas uma referencia, nao uma copia
console.log("REFERENCIA");
let obj1 = {
  nome: "Batman",
  profissao: "Batman",
};
let obj2 = obj1;

obj2.companheiro = "Robin";

console.log(obj1);
console.log(obj2);

//FUNÇÃO CONSTRUTORA
function computador(processador, gpu, ram, armazenamento) {
  (this.processador = processador),
    (this.gpu = gpu),
    (this.ram = ram),
    (this.armazenamento = armazenamento),
    (this.ligar = function () {
      console.log(`O ${this.processador} esta funcionando`);
    });
  this.mostrarEspecificacoes = function () {
    return `
        processador: ${this.processador}
        gpu: ${this.gpu}
        ram: ${this.ram}
        armazenamento: ${this.armazenamento}
        `;
  };
}
let pc = new computador("i9", "rtx4090", "16GB", "500GB");
console.log(pc.ligar());
console.log(pc.mostrarEspecificacoes());

//FACTORY - padrao de projeto -  é uma tecnica pra uma forma de construtora
function jogos(titulo, genero, anoLancamento, empresa) {
  return {
    titulo,
    genero,
    anoLancamento,
    empresa,
  };
}
let jogo1 = jogos("final fantasy", "RPG", "1997", "Square");
console.log(jogo1);

//outras 3 estruturas de repetição FOR IN, FOR OF & FOR EACH
// FOR IN E FOR OF É MAIS ESPECIFICA DA JS
//FOR IN
for (let key in jogo1) {
  console.log(`${key}: ${jogo1[key]}`);
}

//FOR OF - com coisas interaveis
const jogadores = ["pelé", "CR7", "Messi"];
for (jogador of jogadores) {
  console.log(jogador);
}

const NOME = "RAFAEL"; //soletrar o nome
for (char of NOME) {
  console.log(char);
}

for (let jogo of Object.keys(jogo1)) {
  console.log(jogo1[jogo]);
}

//EXERCICIO - Fazer for in e for of dos objetos que fizemos em aula
//carro
for (teste in carro) {
  console.log(`${teste}: ${carro[teste]}`);
}
for (teste1 of Object.keys(carro)) {
  console.log(teste1);
}
//serie
for (teste2 in serie) {
  console.log(`${teste2}: ${serie[teste2]}`);
}

for (let key2 of Object.keys(serie)) {
  console.log(`${key2}: ${serie[key2]}`);
}
//livro
for (teste3 in livro) {
  console.log(`${teste3}: ${serie[teste3]}`);
}

for (let key3 of Object.keys(livro)) {
  console.log(`${key3}: ${livro[key3]}`);
}
