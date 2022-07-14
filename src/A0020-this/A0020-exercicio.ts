export function funcao(this: Date, name: string, age: number): void {
    console.log(this);
    console.log(name, age);
}

funcao.call(new Date(), 'Luiz', 30);
funcao.apply(new Date(), ['Luiz', 30]);
