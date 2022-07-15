export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) { }

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    constructor(
        // nome, sobrenome, idade and cpf is the same as the they parent
        // sala is the new parameter
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);
    }

    getNomeCompleto(): string {
        console.log('Fazendo algo antes');
        return super.getNomeCompleto(); // Calling the method from parent
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do cliente ' + this.nome + ' ' + this.sobrenome;
    }
}

const aluno = new Aluno('Guilherme', 'Senna', 23, '000.000.000-00', '0001');
const cliente = new Cliente('Guilherme', 'Senna', 23, '000.000.000-00');
const pessoa = new Pessoa('Guilherme', 'Senna', 23, '000.000.000-00');
console.log(aluno);
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
