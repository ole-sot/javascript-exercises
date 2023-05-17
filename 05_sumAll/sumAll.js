const sumAll = function(from, to) {
    let sum = 0;
    function checkNumbers() {
        return typeof from === 'number'
        && typeof to === 'number'
        && from > 0
        && to > 0
    }
    if (checkNumbers()) {
       if (from < to) {
            for (let i = from; i <= to; i++) {
                sum += i;
            };
        } else {
            for (let i = to; i <= from; i++) {
                sum += i;
            }; 
        }; 
    } else return 'ERROR';
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
