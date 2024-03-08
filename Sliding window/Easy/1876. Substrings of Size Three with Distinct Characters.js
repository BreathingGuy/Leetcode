
var countGoodSubstrings = function(s) {
    let set;
    let goodSubstrings = 0;

    for (let i = 3; i <= s.length; i++) {
        set = new Set(s.slice(i - 3, i));
        goodSubstrings += set.size == 3 ? 1 : 0;
    }

    return goodSubstrings;
};

// let s = "xyzzaz";
let s = "aababcabc";
console.log(countGoodSubstrings(s));




