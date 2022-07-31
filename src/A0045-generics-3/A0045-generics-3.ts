// interface PessoaProtocolo<T, U> {
//     nome: T;
//     sobrenome: T;
//     idade: U;
// }

interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno1: PessoaProtocolo = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

// const aluno2: PessoaProtocolo<number, number> = {
//     nome: 123,
//     sobrenome: 456,
//     idade: 30,
// };
