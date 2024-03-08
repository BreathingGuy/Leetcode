var repeatedCharacter = function(s) {
    const map = new Map();

    for (char of s) {
        map.set(char, (map.get(char) || 0) + 1);

        if (map.get(char) == 2) {
            return char;
        }
    }
};

// let s = "abccbaacz";
let s = "abcdd";

console.log(repeatedCharacter(s));