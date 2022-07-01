/* eslint-disable */
// Disabling to prevent excluding for redundance by 'type inference'

let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros_: number[] = [4, 5, 6]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayDeStrings_: string[] = ['d', 'e', 'f']

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: "Guilherme Senna",
    idade: 23
}

// Funções

// soma(x: number, y: number) : number

function soma(x: number, y: number) {
    return x + y;
}

// const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
