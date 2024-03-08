// #1
function longestOnes(nums, k) {
    let hash = new Map();
    let left = 0;
    let longestOne = 0;

    for (let right = 0; right < nums.length; right++) {
        let length = right - left + 1;

        hash.set(nums[right], (hash.get(nums[right]) || 0) + 1);

        if (hash.get(0) > k || right === nums.length - 1) {
            // longestOne = longestOne > (hash.get(1) + k) ? longestOne : (hash.get(1) + k);
            while (hash.get(0) > k) {
                hash.set(nums[left], hash.get(nums[left]) - 1);
                left++;
            }
        }

        length = right - left + 1;
        longestOne = Math.max(length, longestOne);
    }

    return longestOne;
}

// #2
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    for (right = 0; right < nums.length; right++) {
        k -= 1 - nums[right];
        if (k < 0) {
            k += 1 - nums[left];
            left += 1;
        }
    }
    return (right - left);
};

// let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;
// let nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3;
// let nums = [0,0,0,1], k = 4;
console.log(longestOnes(nums, k));