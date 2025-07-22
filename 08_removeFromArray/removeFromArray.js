const removeFromArray = function (arrayValue, ...args) {
    for (let arg of args) {
        while (arrayValue.findIndex(element => element === arg) >= 0) {
            let index = arrayValue.findIndex(element => element === arg)
            arrayValue.splice(index, 1)
        }
    }
    return arrayValue
};

// Do not edit below this line
module.exports = removeFromArray;
