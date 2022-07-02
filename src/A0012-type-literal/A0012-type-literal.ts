const y = 10; // type is 100 -> 100 is subtype of number

const pessoa = {
    nome: 'Luiz' as const,
    sobrenome: 'Miranda',
};

// The inputs are TYPES not VALUES
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
    return cor;
}

console.log(escolhaCor('Amarelo'));

export default 1;
