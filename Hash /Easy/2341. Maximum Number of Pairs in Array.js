var numberOfPairs = function(nums) {
    let hash = new Map();
    let sumOfPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0)+ 1);

        if (hash.get(nums[i]) == 2) {
            sumOfPairs++;
            hash.delete(nums[i]);
        }
    }
    return [sumOfPairs, hash.size];
};