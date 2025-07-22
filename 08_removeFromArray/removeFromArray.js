const removeFromArray = function (arrayValue, ...args) {
    for (let arg of args) {
        let index = arrayValue.findIndex(element => element === arg)
        arrayValue.splice(index, 1)
    }
    return arrayValue
};

// Do not edit below this line
module.exports = removeFromArray;
