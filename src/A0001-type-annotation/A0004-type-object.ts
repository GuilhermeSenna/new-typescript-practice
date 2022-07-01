const objetoA: {
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown; // (Index signature) New key:value unknown
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Outro valore';
objetoA.chaveD = 'Outro valoref';
objetoA.chaveE = 'Outro valorefed';

console.log(objetoA);
