var moveZeroes = function(nums) {
    let [left, right] = [0, 1];

    while (right <= nums.length - 1) {

        if (nums[left] === 0 && nums[right] === 0) {
            right++;
            continue;
        }

        if (nums[left] === 0 && nums[right] > 0 ||
            nums[left] === 0 && nums[right] < 0   ) {
            nums[left] = nums[right];
            nums[right] = 0;
        }
        right++;
        left++;
    }
};