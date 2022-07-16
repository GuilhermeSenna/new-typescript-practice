export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ) { }

    getNome(): string {
        return this.nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    getCpfFormatado(): string {
        return this.cpf.replace(/\D/g, '');
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Guilherme', 'Senna', 23, '123.345.563-31');

console.log(pessoa.getNome());
console.log(pessoa.cpf);
pessoa.cpf = '931.512.412-51';
console.log(pessoa.cpf);
console.log(pessoa.getCpfFormatado());
console.log(pessoa.getNomeCompleto());
