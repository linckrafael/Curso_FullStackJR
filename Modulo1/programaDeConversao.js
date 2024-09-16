// Conversões
const prompt = require("prompt-sync")();
let menu = Number(
  prompt(
    "Escolha o número que deseja no menu:  1. Real para Dolar | 2. Dolar para Real | 3. Euro para Real | 4. Real para Euro | 5. Libra para Kg | 6. Kg para Libra "
  )
);

switch (menu) {
  case 1:
    let dolar = Number(
      prompt("Digite o valor em reais para deixar em dolares:  ")
    );
    let result = dolar * 0.18;
    console.log(result.toFixed(2));
    break;
  case 2:
    let real = Number(
      prompt("Digite o valor em dolares para deixar em reais:  ")
    );
    let result1 = real * 5.63;
    console.log(result1.toFixed(2));
    break;
  case 3:
    let euro = Number(prompt("Digite o valor em euros para deixar em reais: "));
    let result4 = euro * 6.23;
    console.log(result4.toFixed(2));
    break;
  case 4:
    let real1 = Number(
      prompt("Digite o valor em reais para deixar em euros: ")
    );
    let result5 = real1 * 0.16;
    console.log(result5);
    break;
  case 5:
    let libra = Number(prompt("Digite em libras para saber em kg: "));
    let result3 = libra * 0.4535;
    console.log(result3.toFixed(2));
    break;
  case 6:
    let kg = Number(prompt("Digite em kg para saber em libras: "));
    let result2 = kg * 2.2;
    console.log(result2.toFixed(2));
    break;
}
