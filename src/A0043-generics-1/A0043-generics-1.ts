// Custom function
type filterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export const meuFilter = <T>(
    array: T[],
    callbackfn: filterCallback<T>,
): T[] => {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

// const arrayFiltrado = meuFilter(array, (value) => {
//     if (typeof value === 'number') return value < 5;
//     return false;
// });

console.log(arrayFiltradoOriginal);
