const removeFromArray = function(userArray = [], ...argumentsToRemove) {
    for (const arg of argumentsToRemove) {
        if (userArray.some((element) => element === arg)) {
            userArray.splice(userArray.indexOf(arg), 1);
        };
    };
    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
