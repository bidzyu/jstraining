const sum = (x) => {
    let result = x;

    const calc = (y) => {
        result += y;
        return calc;
    };

    calc.toString = () => {
        return result;
    };

    return calc;
};