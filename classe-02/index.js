const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const maior = cidades.reduce((acc, x) => x.length > acc.length ? x : acc);
console.log(maior);