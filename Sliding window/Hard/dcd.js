var maxSlidingWindow = function(nums, k) {
    let arr = [];
    let testArr = [];

    for (let i = 0; i < k; i++) {
        testArr.push(nums[i]);
    }

    arr.push(Math.max(...testArr));

    for (let i = k; i < nums.length; i++) {
        testArr.shift();
        testArr.push(nums[i]);
        arr.push(Math.max(...testArr));
    }

    return arr;
};

let nums = [1], k = 1;

console.log(maxSlidingWindow(nums, k));