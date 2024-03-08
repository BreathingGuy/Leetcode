var findTheArrayConcVal = function(nums) {
    let sum = 0;
    let [left, right] = [0, nums.length - 1];
    
    while (left < right) {
        sum += +(`${nums[left]}` + `${nums[right]}`);

        left++;
        right--;
    }

    if (nums.length % 2 !== 0) {
        sum += nums[left];
    }

    return sum;
};

// let nums = [7,52,2,4];
let nums = [5,14,13,8,12];

console.log(findTheArrayConcVal(nums));