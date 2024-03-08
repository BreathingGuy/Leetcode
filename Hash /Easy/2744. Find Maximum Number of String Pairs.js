var maximumNumberOfStringPairs = function(words) {
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (!hash.has(words[i].split('').sort().join(''))) {
            hash.set(words[i].split('').sort().join(''), 0);
        } else {
            count++;
        }
    }

    return count; 
};