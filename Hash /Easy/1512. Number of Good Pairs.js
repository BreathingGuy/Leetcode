var numIdenticalPairs = function(nums) {
    let hash = new Map();
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }

    hash.forEach((a) => {
        if (a >= 2) {
            for (let i = 1; i < a; i++) {
                sum += i;
            }
        }
    })

    return sum;
};