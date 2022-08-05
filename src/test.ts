/* eslint-disable prettier/prettier */

const getPersonWithHigherSalary = (...pessoas: Person[]) => {
    return pessoas.filter(person => person.salary > 2000)
}

type Person = {
    name: string;
    age: number;
    salary: number;
};

const person1: Person = {
    name: 'Fulano',
    age: 20,
    salary: 1231.12
}

const person2: Person = {
    name: 'Beltrano',
    age: 51,
    salary: 412.12
}

const person3: Person = {
    name: 'Ciclano',
    age: 12,
    salary: 4214.12
}

console.log(getPersonWithHigherSalary(person1, person2, person3));

export default 1;
