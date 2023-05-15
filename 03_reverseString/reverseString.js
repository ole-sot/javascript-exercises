const reverseString = function(text) {
    const characters = text.split('');
    let reversed = '';
    for (let i = characters.length - 1; i >= 0; i--) {
        reversed += characters[i];
    };
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
