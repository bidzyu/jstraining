const iWantToGet = (ammountRequired, limits) => {

    function collect(ammount, nominals) {
        if (ammount === 0) return {};
        if (!nominals.length) return;
        
        const currentNominal = nominals[0]; 
        const avaliableNotes = limits[currentNominal];
        const notesNeeded = Math.floor(ammount / currentNominal);
        const numberOfNotes = Math.min(avaliableNotes, notesNeeded);
        
        for (let i = numberOfNotes; i >= 0; i--) {
            const result = collect(ammount - currentNominal * i, nominals.slice(1));
            if (result) {
                return i ? {[currentNominal]: i, ...result} : result;
            }
        }
    }

    const nominals = Object.keys(limits).map(Number).sort((a, b) => b - a);
    return collect(ammountRequired, nominals);
};

const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.log(iWantToGet(151040, limits));