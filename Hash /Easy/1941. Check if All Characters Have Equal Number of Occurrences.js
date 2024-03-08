var areOccurrencesEqual = function(s) {
    let map = new Map();
    let set = new Set();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let occur of map.values()) {
        set.add(occur);
    }

    return set.size === 1;
};