var numJewelsInStones = function(jewels, stones) {
    let hash = new Map();
    for (let i = 0; i < stones.length; i++) {
        if (hash.has(stones[i])) {
            hash.set(stones[i], hash.get(stones[i]) + 1);
        } else {
            hash.set(stones[i], 1)
        }
    }

    let numOfStones = 0;
    for (let i = 0; i < jewels.length; i++) {
        if (hash.has(jewels[i])) numOfStones += hash.get(jewels[i]);
    }

    return numOfStones;
};