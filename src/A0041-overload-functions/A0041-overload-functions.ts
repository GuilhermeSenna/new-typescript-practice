// Changes the behaviour of the function based on number of arguments passed in

type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
    return x + (y || 0);
};

console.log(adder(1)); // 1º overload
console.log(adder(1, 2)); // 2º overload
console.log(adder(1, 2, 3, 4)); // 3º overload
