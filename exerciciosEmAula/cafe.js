function fazerPedido(pedido) {
  return new Promise((resolve, reject) => {
    if (pedido === "expresso") {
      setTimeout(() => {
        resolve("Seu expresso esta pronto!");
      }, 2000);
    } else if (pedido === "latte") {
      setTimeout(() => {
        resolve("Seu latte esta pronto!");
      }, 3000);
    } else {
      reject("Café não disponível");
    }
  });
}

// async function realizarPedido(pedido) {
//   try {
//     const mensagem = await fazerPedido(pedido);
//     console.log(mensagem);
//   } catch (erro) {
//     console.log(erro);
//   }
// }

function realizarPedido(pedido) {
  fazerPedido(pedido)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

realizarPedido("expresso");
realizarPedido("latte");
realizarPedido("pingado");
