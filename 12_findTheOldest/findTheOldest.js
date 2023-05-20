const findTheOldest = function(arrPeople = []) {
    arrPeople.forEach(obj => {
        if (obj.yearOfDeath === undefined) {
            obj['yearToCount'] = new Date().getFullYear();
        };
    });
    function oldestCallback(prevPerson, currPerson) {
        let oldest;
        const ageCurrPerson = currPerson.yearOfDeath !== undefined
        ? (currPerson.yearOfDeath - currPerson.yearOfBirth)
        : (currPerson.yearToCount - currPerson.yearOfBirth);
        const agePrevPerson = prevPerson.yearOfDeath !== undefined
        ? (prevPerson.yearOfDeath - prevPerson.yearOfBirth)
        : (prevPerson.yearToCount - prevPerson.yearOfBirth);
        if (agePrevPerson < ageCurrPerson) {
            oldest = currPerson;
        } else oldest = prevPerson;
        return oldest;
    }
    return arrPeople.reduce(oldestCallback);
};

// Do not edit below this line
module.exports = findTheOldest;
