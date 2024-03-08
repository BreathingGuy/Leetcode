// #1
var sortedSquares = function(nums) {
    let [l, r] = [0, nums.length - 1];
    const sortedArr = [];

    while (l <= r) {
        if (l == r) {
            sortedArr.push(Math.pow(nums[l], 2));
            break;
        }

        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            sortedArr.push(Math.pow(nums[l], 2));
            l++;
        } else if (Math.abs(nums[l]) < Math.abs(nums[r])) {
            sortedArr.push(Math.pow(nums[r], 2));
            r--;
        } else {
            sortedArr.push(Math.pow(nums[l], 2));
            sortedArr.push(Math.pow(nums[r], 2));
            l++;
            r--;
        }
    }

    return sortedArr.reverse()
};


// # no yet done
var sortedSquares = function(nums) {
    let [l, r] = [0, nums.length - 1];
    const sortedArr = Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            sortedArr[i] = (Math.pow(nums[l], 2));
            l++;
        } else if (Math.abs(nums[l]) < Math.abs(nums[r])) {
            sortedArr[i] = (Math.pow(nums[r], 2));
            r--;
        } else {
            sortedArr[i] = (Math.pow(nums[l], 2));
            sortedArr[i] = (Math.pow(nums[r], 2));
            l++;
            r--;
        }
    }
    
    return sortedArr.reverse()
};

// let nums = [-4,-1,0,3,10];
let nums = [-7,-3,2,3,11];
x
console.log(sortedSquares(nums));