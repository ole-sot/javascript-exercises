const fibonacci = function(fibN) {
    if (fibN <= 0) return 'OOPS';
    const fibArr = [1, 1];
    for (let i = 2; i < fibN; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    };
    return fibArr[fibN - 1];
};

// Do not edit below this line
module.exports = fibonacci;
