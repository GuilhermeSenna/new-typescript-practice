/* eslint-disable @typescript-eslint/no-namespace */

namespace MeuNamespace {
    export const nomeDoNameSpace = 'Luiz';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNameSpace = new PessoaDoNamespace('Guilherme');
    console.log(pessoaDoNameSpace);

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome do outro namespace';
    }
}

const pessoaDoNameSpace = new MeuNamespace.PessoaDoNamespace('Guilherme');
console.log(pessoaDoNameSpace);
console.log(MeuNamespace.nomeDoNameSpace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;
