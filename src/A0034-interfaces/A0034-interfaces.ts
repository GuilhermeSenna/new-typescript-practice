// type TipoPessoa = {
//     nome: string;
//     sobrenome: string;
//     nomeCompleto(): string;
// };

interface TipoNome {
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoNomeCompleto {
    nomeCompleto(): string;
}

// Only with type alias
// interface TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto { }

export class Pessoa implements TipoPessoa2 {
    // protected nome: string;
    // protected sobrenome: string;
    constructor(public nome: string, public sobrenome: string) { }

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoaObj: TipoPessoa2 = {
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    },
    nome: 'Luiz',
    sobrenome: 'Agora está OK',
};

const pessoa = new Pessoa('Guilherme', 'Senna');
console.log(pessoa.nomeCompleto());
