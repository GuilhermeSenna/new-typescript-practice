function decorator(classPrototype: any, name: string | symbol): any {
    let valorPropriedade: any;
    return {
        get: () => valorPropriedade,
        set: (valor: any) => {
            // if the param's type is string, then reverse and return it, otherwise just return the original value
            valorPropriedade =
                typeof valor === 'string'
                    ? valor.split('').reverse().join('')
                    : valor;
        },
    };
}

export class UmaPessoa {
    @decorator
    nome: string;
    @decorator
    sobrenome: string;
    @decorator
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`;
    }

    get nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const pessoa = new UmaPessoa('Guilherme', 'Senna', 30);
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
