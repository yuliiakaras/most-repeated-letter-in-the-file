const fs = require('fs');
const findMostRepeatedLetter = require('@julidino/find-most-repeated-letter');

module.exports = function findMostRepeatedLetterInFile(filePath) {
    try {
        const text = fs.readFileSync(filePath, 'utf-8');
        const mostRepeatedLetter = findMostRepeatedLetter(text);
        console.log('Most repeated letter in', filePath, 'is', mostRepeatedLetter);
    } catch (error) {
        console.error('Error reading the file:', error.message);
    }
}