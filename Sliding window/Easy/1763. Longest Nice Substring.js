// #1 attempt
var longestNiceSubstring = function(s) {
    let set = new Set();
    let string = '';
    let testStr = '';

    for (let i = 0; i < s.length; i++) {

        if (set.size == 0) {
            set.add(s[i]);
            testStr = testStr + s[i];
            continue;
        } else if (set.has(s[i]) || set.has(s[i].toLowerCase()) || set.has(s[i].toUpperCase())) {
            set.add(s[i]);
            testStr = testStr + s[i];
        } else {
            testStr = '';
            set.clear();

            set.add(s[i]);
            testStr = testStr + s[i];
        }

        if (set.size > 1) {
            if (testStr.length > string.length) {
                string = testStr;
            }
        }
    }

    console.log(set);
    console.log(testStr);

    if (string.length < 2) {
        return ''
    }

    return string
};


// #2 attempt
const swapCase = (str) => str.split("").map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("");

var longestNiceSubstring = function(s) {
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j ++) {
            let substring = s.slice(i, j);
            let invertedCaseChars = [...substring].map(swapCase);

            if (invertedCaseChars.every(char => substring.includes(char))) {
                ans = substring.length > ans.length ? substring : ans;
            }
        }
    }

    return ans;
};

let s = "YazaAay";
// let s = "abABB";
console.log(longestNiceSubstring(s));


