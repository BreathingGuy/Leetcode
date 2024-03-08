var countKDifference = function(nums, k) {
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }


    for (let i = 0; i < nums.length; i++) {
        count += hash.get(nums[i] - k) || 0;
    }

    return count;
};