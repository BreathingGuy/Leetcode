var characterReplacement = function(s, k) {
    let left = 0;
    let map = new Map();
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        let length = right - left + 1;

        map.set(s[right], (map.get(s[right]) || 0) + 1);

        if ((length - Math.max(...map.values())) > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        length = right - left + 1;
        result = Math.max(length, result);
    }

    return result;
};

let s = "AABABBA", k = 1
console.log(characterReplacement(s, k));