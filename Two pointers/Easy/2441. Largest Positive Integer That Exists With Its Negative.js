var findMaxK = function(nums) {
    nums.sort((a, b) => a - b);

    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        if (nums[left] * -1 > nums[right]) {
            left++;
        } else if (nums[left] * -1 < nums[right]) {
            right--;
        } else {
            return nums[right];
        }
    }
};

let nums = [-1,2,-3,3];

console.log(findMaxK(nums));