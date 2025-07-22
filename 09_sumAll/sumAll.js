const sumAll = function (firstNumber, secondNumber) {
    let numberArray = [];
    if (firstNumber < 0 ||
        secondNumber < 0 ||
        firstNumber !== Math.floor(firstNumber) ||
        secondNumber !== Math.floor(secondNumber)) {
        return "ERROR";
    }
    if (firstNumber > secondNumber) {
        let temporarySpace = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temporarySpace;
    }
    for (let i = firstNumber; i <= secondNumber; i++) {
        numberArray.push(i);
    }
    return numberArray.reduce((sum, number) => sum + number, 0);
};

// Do not edit below this line
module.exports = sumAll;
