// Create a method to multiplication
import _ from 'lodash';

_.mul = function (array: number[]): number {
    return array.reduce((total, actual) => total * actual, 1);
};

global.MINHAGLOBAL = 'VALOR DA MINHA GLOBAL';

export default _;
