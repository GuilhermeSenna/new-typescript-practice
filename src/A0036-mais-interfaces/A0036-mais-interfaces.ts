// Declaration merging
interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: string[];
}

interface Pessoa {
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Senna',
    enderecos: ['Av. Brasil'],
    idade: 30,
};

pessoa.enderecos.push('Rua Nova');
console.log(pessoa);

export default 1;
