

var sortArrayByParity = function(nums) {
    if (nums.length == 1) {
        return nums;
    }

    const evenNum = [];
    const oddNum = [];
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        if (nums[left] % 2 == 0) {
            evenNum.push(nums[left]);
        } else {
            oddNum.push(nums[left]);
        }

        if (nums[right] % 2 == 0 && right != left) {
            evenNum.push(nums[right]);
        } else if (right != left) {
            oddNum.push(nums[right]);
        }

        left++;
        right--;
    }
    
    return [...evenNum,...oddNum];
};

// let nums = [3,1,2,4];
let nums = [0,2,4];

console.log(sortArrayByParity(nums));