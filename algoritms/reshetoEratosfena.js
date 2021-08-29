const getPrimes = num => {
    const result = [];
    const notPrimes = [];
    
    for (let i = 2; i <= num; i++) {
        if (!notPrimes[i]) {
            result.push(i);

            for (let j = i * i; j <= num; j += i) {
                notPrimes[j] = true;
            }
        }
    }
    console.log(notPrimes);
    return result;
};

getPrimes(37);