export class Empresa {
    nome: string; // Public
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(readonly nome: string, readonly sobrenome: string) { }
}


export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/1111-11');
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');


empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.popColaborador()
empresa1.adicionaColaborador(colaborador3);

// console.log(empresa1);
console.log(empresa1.mostrarColaboradores());
console.log(empresa1.nome);
