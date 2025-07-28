const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS"
    }
    let fibonacciArray = [0, 1];
    for (let i = 2; i <= index; i++) {
        fibonacciArray.push(fibonacciArray[(i - 2)] + fibonacciArray[(i - 1)])
    }
    return fibonacciArray[index]
};

// Do not edit below this line
module.exports = fibonacci;
