

function findLongestWordLength(sentence) {
let trimsen = sentence.split(' ');
let maxLen = 0;
for (let word of trimsen) {
    if (word.length > maxLen) {
        maxLen = word.length;
    }
}
return maxLen;
}
console.log(findLongestWordLength("hello people"))



