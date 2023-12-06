const findMostRepeatedLetterInFile = require('./mostRepeatedLetter');

if (process.argv.length > 2) {
    const filePath = process.argv[2];
    findMostRepeatedLetterInFile(filePath);
} else {
    console.log('Please provide a file path. Example usage: node index.js text.txt');
}
