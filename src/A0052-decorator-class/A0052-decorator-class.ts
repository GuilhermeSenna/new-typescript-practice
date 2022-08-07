@decorator
export class Animal {
    constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
        color: string;
        name: string;

        constructor(...args: any[]) {
            super(...args);
            // this.cor = 'Qualquer coisa';
            this.color = this.invert(args[0]);
            this.name = this.invert(args[1]);
        }

        invert(valor: string): string {
            return valor.split('').reverse().join('');
        }
    };
}

const animal = new Animal('roxo', 'Alberval');
// The '@decorator' prefix does what the code below would do
// const animal = new AnimalDecorated('roxo', 'Alberval');
console.log(animal);
