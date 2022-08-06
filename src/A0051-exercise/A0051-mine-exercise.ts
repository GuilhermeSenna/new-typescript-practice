type VotationOption = {
    numberOfVotes: number;
    option: string;
};

export class Votation {
    private _votationOptions: VotationOption[] = [];

    constructor() {
        this._votationOptions = [
            {
                numberOfVotes: 0,
                option: 'a',
            },
            {
                numberOfVotes: 0,
                option: 'b',
            },
        ];
    }

    showVotation() {
        return this._votationOptions;
    }

    createNewOption(option: string) {
        this._votationOptions.push({ numberOfVotes: 0, option });
    }

    voteIn(option: string) {
        this._votationOptions.find((obj) => {
            if (obj.option === option) obj.numberOfVotes++;
        });
    }
}

const votation = new Votation();
votation.createNewOption('teste');
console.log(votation.voteIn('a'));
console.log(votation.showVotation());
