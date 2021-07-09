const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const validarLista = palavras.some(x => x === "cerveja" || x === "vodka")
if (validarLista) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("certo, vamos as compras!");
}
