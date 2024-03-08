var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    let hashMap = new Map();

    for (let c of s) {
        hashMap.set(c, (hashMap.get(c) || 0) + 1);
    }

    for (let c of t) {
        if (!hashMap.has(c)) return false;

        let count = hashMap.get(c) - 1;
        hashMap.set(c, count);
    }

    for (let c of hashMap.values()) {
        let isEmpty = c === 0;

        if (!isEmpty) return false;
    }

    return true;
};