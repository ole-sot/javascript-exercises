const getTheTitles = function(arrOfObjs = []) {
    const arrTitles = [];
    arrOfObjs.forEach(
        obj => arrTitles.push(arrOfObjs[arrOfObjs.indexOf(obj)].title)
        );
    return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
