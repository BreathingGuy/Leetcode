var maxVowels = function(s, k) {
    s = s.split("");
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let max = 0;
    let count = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            count++;
        }
    }

    for (let i = k; i < s.length; i++) {
        max = Math.max(max, count);

        if (vowels.includes(s[i])) {
            count++;
        }

        if (vowels.includes(s[i - k])) {
            count--
        }

        if (max === k) {
            return k;
        }
    }

    max = Math.max(max, count);
    return max;
};

// let s = "abciiidef", k = 3;
// let s = "aeiou", k = 2
let s = "weallloveyou", k = 7;

console.log(maxVowels(s, k));