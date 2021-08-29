const iWantToGet = (ammount, notes) => {
    if (ammount < 0) return null;

    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];

        if (ammount - note === 0) return note;
        
        let step = iWantToGet(ammount - note, notes);
        if (step) {
            if (Array.isArray(step)) {
                return [...step, note];
            } else {
                return [step, note];
            }
        }
    }

    return null;
};

const marks = [500, 100, 50, 30];

trinity(230, marks);
//-----------------------------------------------
const iWantToGet = (ammount, limits) => {
    const notes = Object.keys(limits).sort((a, b) => b - a);

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        
        if (ammount - note < 0 || limits[note] < 1) {
            continue;
        }
        if (ammount - note === 0) {
            return {[note] : 1};
        }
        
        const step = iWantToGet(ammount - note, limits);

        if (step) {
            step[note] = step[note] + 1 || 1;
            return step;
        }
        
    }

    return;    
};

const limits = {
    1000: 5,
    500: 2,
    100: 5,
    50: 100,
    30: 6,
};

console.log(iWantToGet(140, limits));