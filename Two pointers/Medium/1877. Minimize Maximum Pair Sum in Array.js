"use strict";

var minPairSum = function(nums) {
    let [left, right] = [0, nums.length - 1];
    let max = 0;
    nums = nums.sort((a, b) => a - b);

    while (left < right) {
        if ((nums[left] + nums[right]) > max) {
            max = nums[left] + nums[right];
        }
        left++;
        right--;
    }

    return max;
};

// let nums = [3,5,2,3];
let nums = [3,5,4,2,4,6];

console.log(minPairSum(nums));