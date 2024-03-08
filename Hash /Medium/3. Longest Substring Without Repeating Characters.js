var lengthOfLongestSubstring = function(s) {
    let hash = new Set();
    let count = 0; 
    let base = 0;

    for (let i = 0; i < s.length; i++) {
        if (!hash.has(s[i])) {
            hash.add(s[i]);
            count++;
        } else {
            if (count >= 2) {
                for (let j = 1; j < count; j++) {
                    i--;
                }
            } 

            if (count > base) {
                base = count;
            }

            hash.clear();
            count = 0;
            hash.add(s[i])
            count++;
        }
    }

    if (count > base) {
        return count;
    }
    return base;
};