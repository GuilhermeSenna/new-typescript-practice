export class Pessoa {

    static IdadePadrao = 0;
    static cpfPadrao = '000.000.000-00';

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string,
    ) { }

    static falaOi(): void {
        console.log('oi');
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(
            nome,
            sobrenome,
            Pessoa.IdadePadrao,
            Pessoa.cpfPadrao,
        );
    }
}
const pessoa1 = new Pessoa('Guilherme', 'Senna', 23, '123.345.563-31');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa1);
console.log(pessoa2);
Pessoa.falaOi();
