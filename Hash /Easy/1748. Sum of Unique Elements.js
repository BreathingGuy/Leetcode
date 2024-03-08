var sumOfUnique = function(nums) {
    let hash = new Map();
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }

    for (let [key, value] of hash) {
        if (value < 2) {
            sum += key;
        }
    }

    return sum;
};