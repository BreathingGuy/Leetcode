/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumStrongPairXor = function(nums) {
    let max = 0;
    for (let x = 0, y = 0; x < nums.length; ) {
        if (Math.abs(nums[x] - nums[y]) <= Math.min(nums[x], nums[y])) {
            max = Math.max(max, (nums[x] ^ nums[y]));
        }
        y++;

        if (y == nums.length) {
            x++;
            y = x;
        }
    }
    return max
};

// let nums = [1,2,3,4,5];
// let nums = [10,100];
// let nums = [5,6,25,30];
let nums = [1,1,10,3,9];
console.log(maximumStrongPairXor(nums));

// console.log(10 ^ 9);