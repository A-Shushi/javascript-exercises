const findTheOldest = function (array) {
    let ageArray = [];
    let oldestAge = 0
    let oldestIndex;
    for (let person of array) {
        if (!person.yearOfDeath) {
            ageArray.push((new Date().getFullYear()) - person.yearOfBirth)
        } else {
            ageArray.push(person.yearOfDeath - person.yearOfBirth)
        }
    }
    for (let i = 0; i < ageArray.length; i++) {
        if (ageArray[i] > oldestAge) {
            oldestAge = ageArray[i]
            oldestIndex = i;
        }
    }
    return array[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
