/* eslint-disable prettier/prettier */
export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) { }
}

export class Stack<T> {
    private count = 0;
    private elements: { [k: number]: T } = {};

    push(elemento: T) {
        this.elements[this.count] = elemento;
        this.count++;
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined;

        this.count--;
        const elemento = this.elements[this.count];
        delete this.elements[this.count];
        return elemento;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    length(): number {
        return this.count;
    }

    showStack(): void {
        for (const chave in this.elements) {
            console.log(this.elements[chave]);
        }
    }
}

// const pessoa1 = new Pessoa('Luiz', 30);
// const pessoa2 = new Pessoa(['Luiz'], 30);
// const pessoa3 = new Pessoa(['Luiz'], { idade: 30 });
// const pessoa4 = new Pessoa<string, number>('Luiz', 30);

const stack = new Stack<number | string>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('string');
// stack.mostrarstack();

while (!stack.isEmpty()) {
    console.log(stack.pop());
}
