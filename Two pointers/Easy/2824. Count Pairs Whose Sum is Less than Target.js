
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);

    let [l, r] = [0, nums.length - 1];
    let count = 0;

    while (l <= r) {
        if (nums[l] + nums[r] < target && l != r) {
            count++;
            l++;
        } else {
            l = 0;
            r--;
        }

    }

    return count;
};

let nums = [-6,2,5,-2,-7,-1,3], target = -2;
// let nums = [-1,1,2,3,1], target = 2;

console.log(countPairs(nums, target));