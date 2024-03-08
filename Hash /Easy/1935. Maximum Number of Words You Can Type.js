var canBeTypedWords = function(text, brokenLetters) {
    return text.split(' ').reduce((prev, cur) => brokenLetters.split('').some(a => cur.indexOf(a) > -1) ? prev : prev + 1, 0);
};

// const text = "hello world", brokenLetters = "ad";
// const text = "leet code", brokenLetters = "lt";
const text = "leet code", brokenLetters = "e";
// const text = "a b c d e", brokenLetters = "abcde";

console.log(canBeTypedWords(text, brokenLetters));


