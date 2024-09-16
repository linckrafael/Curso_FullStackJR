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