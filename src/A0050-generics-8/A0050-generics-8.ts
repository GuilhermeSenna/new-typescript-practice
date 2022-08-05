/* eslint-disable prettier/prettier */

// Record
// First argument: type of key
// Second argument: Type of values
const objeto1: Record<string, string | number> = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

// Required
// all params (optionals or not) becomes non-optional
type PessoaRequired = Required<PessoaProtocol>;
// Partial
// all params (optionals or not) becomes optional
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
};

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// Keep all types that are in ABC that not in CDE
type tipoExclude = Exclude<ABC, CDE>;
// Keep all types that are in both
type tipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
    sobrenome: string;
};

// Change _id to id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

// type AccountApi = {
//     id: string;
//     nome: string;
//     idade: number;
// };

const accountMongo: AccountMongo = {
    _id: 'dawwdawdwaawdwa',
    nome: 'Guilherme*',
    idade: 30,
    sobrenome: 'Senna'
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API: ')
console.log(accountApi);


// Module mode
export default 1;
