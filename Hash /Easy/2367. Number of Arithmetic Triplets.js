var arithmeticTriplets = function(nums, diff) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let first = nums[left] - nums[i];
            let second = nums[right] - nums[left];

            if (first === diff && second === diff) {
                count++;
                left++;
                right--;
            } else if (first < diff) {
                left++;
            } else {
                right--;
            }
        }
    }

    return count;
};