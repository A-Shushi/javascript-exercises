const reverseString = function(stringValue) {
    let stringArray = stringValue.split("")
    stringArray.reverse()
    return stringArray.join("")
};

reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
