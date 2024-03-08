// #1
var longestSubarray = function (nums) {
    if (!nums.includes(0)) {
        return nums.length - 1;
    }
    let i = 0;
    while (nums[i] == 0) {
        i++;
    }
    if (i == nums.length) {
        return 0;
    }

    let rem = true;
    let result = 0;
    let sum = 0;
    let reserv;

    for (i; i < nums.length; i++) {
        if (nums[i] == 0 && rem) {
            rem = false;
            reserv = i;
            continue;
        } else if (nums[i] == 0) {
            result = Math.max(result, sum);
            sum = 0;
            rem = true;
            i = reserv;
            continue;
        }
        sum++;
    }

    result = Math.max(result, sum);
    return result;
};


// #2
var longestSubarray = function (nums) {
    let zeroCount = 0;
    let longest = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroCount++;

        while (zeroCount > 1) {
            if (nums[start] === 0) zeroCount--;
            start++;
        }
        
        longest = Math.max(longest, i + 1 - start);
    }

    return longest -1;
};


let nums = [1,0,0,1,1,1,0];

console.log(longestSubarray(nums));