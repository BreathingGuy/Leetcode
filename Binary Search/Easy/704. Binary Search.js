// Time O(log(N)) | Space O(1)
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = (right + left) >> 1;
        const guess = nums[mid];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return -1;
};

// let nums = [-1,0,3,5,9,12], target = 9;
let nums = [-1,0,3,5,9,12], target = 2;

console.log(search(nums, target));

// console.log((3 + 0) >> 1);