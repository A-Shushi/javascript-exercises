const convertToCelsius = function (temperature) {
    if (+temperature === 32) {
        return 0
    } else {
        return +((+temperature - 32) * 5 / 9).toFixed(1)
    }
};

const convertToFahrenheit = function (temperature) {
    return +((+temperature * 9 / 5) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};

// (0°C × 9/5) + 32 = 32°F
