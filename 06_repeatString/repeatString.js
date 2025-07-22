const repeatString = function (stringValue, n) {
    if (n < 0) {
        return "ERROR"
    } else {

        let repeatedString = "";
        for (let i = 0; i < n; i++) {
            repeatedString += stringValue
        }
        return repeatedString
    }
};

// Do not edit below this line
module.exports = repeatString;
