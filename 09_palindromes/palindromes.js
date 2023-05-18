const palindromes = function (inString) {
    function nonsenseCheck(text) {
        const array = text.split('');
        let out
        for (let i = 0; i < array.length; i++) {
            if (array[i] === array[i+1] && array[i+1] === array[i+2]) {
              out = true;
              break;
            } else out = false;
        };
        return out;
      }
    function containsSymbol(punctSymbol) {
        return punctSymbol === '!'
        || punctSymbol === ' '
        || punctSymbol === ','
        || punctSymbol === '.'
    }
    
    if (!nonsenseCheck(inString)) {
        const filteredStrait = inString.split('').filter(containsSymbol);
        const filteredReversed = filteredStrait.reverse();
        return filteredStrait === filteredReversed;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
