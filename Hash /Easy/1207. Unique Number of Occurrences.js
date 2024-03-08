var uniqueOccurrences = function(arr) {
    const hash = new Map();
    const set = new Set();

    for (let element of arr) {
        hash.set(element, (hash.get(element) || 0) + 1);
    }

    for (let val of hash.values()) {
        if (set.has(val)) {
            return false;
        } else {
            set.add(val);
        }
    }

    return true;
};

// let arr = [1,2,2,1,1,3];
let arr = [1,2];

console.log(uniqueOccurrences(arr));