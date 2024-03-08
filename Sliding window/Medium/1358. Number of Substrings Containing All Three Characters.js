
var numberOfSubstrings = function(s) {
    let a = 0, b = 0, c = 0, result = 0;

    for (let right = 0, left = 0; right < s.length; right++) {
        if (s[right] == 'a') a++;
        if (s[right] == 'b') b++;
        if (s[right] == 'c') c++;

        while (a && b && c) {
            result += s.length - right;
            
            if (s[left] == 'a') a--;
            if (s[left] == 'b') b--;
            if (s[left] == 'c') c--;
            left++;
        }
    }
    return result;
};

s = "aaacb";
console.log(numberOfSubstrings(s));

