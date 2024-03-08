var repeatedNTimes = function(nums) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
        if (hash.get(nums[i]) > 1) {
            return nums[i];
        }
    }

};