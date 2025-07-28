const palindromes = function (phrase) {
    let noPunctuationPhrase = phrase.replace(/[^\w\s]|_/g, "");
    let noSpacesPhrase = noPunctuationPhrase.replace(/\s/g, "")
    let cleanPhrase = noSpacesPhrase.toLowerCase()
    let phraseArray = cleanPhrase.split("");
    let reversedArray = phraseArray.slice().reverse();
    console.log(phraseArray)
    console.log(reversedArray)
    for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i] !== reversedArray[i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
