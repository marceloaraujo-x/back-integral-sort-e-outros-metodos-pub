const numeros = [0, 122, 4, 6, 7, 8, 44];

const validarArray = numeros.every(x => x % 2 === 0);

if (validarArray) {
    console.log("array válido");
} else {
    console.log("array inválido");
}