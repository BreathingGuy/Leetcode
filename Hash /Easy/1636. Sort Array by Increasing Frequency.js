var frequencySort = function(nums) {
    const map = new Map();
    for (let n of nums) {
        map.set(n, (map.get(n) + 1) || 1);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
};

let nums = [1,1,2,2,2,3];

console.log(frequencySort(nums));