const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (numberArray) {
    return numberArray.reduce((sum, number) => sum += number, 0);
};

const multiply = function (numberArray) {
    return numberArray.reduce((product, number) => product *= number);
};

const power = function (num, power) {
    return num ** power;
};

const factorial = function (num) {
    if (num === 0) {
        return 1;
    } else {
        let product = 1
        for (let i = 1; i <= num; i++) {
            console.log(i)
            product *= i;
            console.log(product)
        }
        return product
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
