// Time O(log(N)) | Space O(1)
var findMin = function(nums) {
    let [left, right] = [0, nums.length - 1];
    if (nums[left] < nums[right]) {
        return nums[left];
    }
    let minNum = nums[right];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid];

        const moveRight = guess > nums[right];
        if (moveRight) left = mid + 1;

        const moveLeft = guess <= nums[right];
        if (moveLeft) {
            minNum = Math.min(guess, minNum);
            right = mid - 1;
        }
    }

    return minNum;
};

// let nums = [3,4,5,1,2];
// let nums = [4,5,6,7,0,1,2];
let nums = [11,13,15,17];

console.log(findMin(nums));