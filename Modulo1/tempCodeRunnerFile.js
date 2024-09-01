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