function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Santos',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();

export { pessoa };
