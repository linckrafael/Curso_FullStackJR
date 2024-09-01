const prompt = require("prompt-sync")();
console.log("Média aritmética");
let ar = [];
let n = Number(prompt("Digite um número: "));
while (n !== 0) {
  ar.push(n);
  n = Number(prompt("Digite outro número ou zero para sair: "));
}
let ave = ar.reduce((acum, elem) => acum + elem);
console.log(`Seus números: ${ar}`);
console.log(`Soma total do array: ${ave}`);
console.log(`A média aritmética é: ${ave / ar.length}`);