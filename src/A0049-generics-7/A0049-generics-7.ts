// type predicate
// 'value is number'
// When the return is true, the type of it will be ...
export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
}

// console.log(soma(1, 2, 3, '4')); // Wrong way
console.log(soma(...[1, 2, 3, 'a'])); // Right way
console.log(soma(1, 2, 3));
console.log(soma('a', 'b', 'c'));
