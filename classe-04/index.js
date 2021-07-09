const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const limite = palavras.some(x => x.length > 5);
if (limite) {
    console.log("existe palavra inválida");
} else {
    console.log("array validado");
}