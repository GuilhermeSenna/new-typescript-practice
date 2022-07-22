type Veiculo = {
    marca: string;
    ano: string;
};

type Car = {
    // brand: string;
    // year: string;
    brand: Veiculo['marca'];
    year: Veiculo['ano'];
    name: string;
};

const carro: Car = {
    brand: 'Ford',
    year: '2020',
    name: 'Nome',
};

console.log(carro);
