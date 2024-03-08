var minimumDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    let min = nums[nums.length - 1];

    for (let i = 0; i <= nums.length - k; i++) {
        min = Math.min(nums[i + k - 1] - nums[i], min);
    }

    return min;
};

// let nums = [87063,61094,44530,21297,95857,93551,9918], k = 6;
// let nums = [90], k = 1;
let nums = [9,4,1,7], k = 2;

console.log(minimumDifference(nums, k));