const sumAll = function(from, to) {
    let sum = 0;
    function checkNumbers() {
        return typeof Number.isInteger(from)
        && Number.isInteger(to)
        && from > 0
        && to > 0
    }
    if (from > to) {
        const min = to;
        to = from;
        from = min;
    }
    if (checkNumbers()) {
        for (let i = from; i <= to; i++) {
            sum += i;
        };
    } else return 'ERROR';
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
