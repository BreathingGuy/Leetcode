var maximumUniqueSubarray = function(nums) {
    const set = new Set([nums[0]]);
    let max = nums[0];
    let count = nums[0];

    for (let r = 1, l = 0; r < nums.length; r++) {
        if (!set.has(nums[r])) {
            set.add(nums[r]);
            count += nums[r];
        } else {
            while(nums[l] !== nums[r]) {
                set.delete(nums[l]);
                count -= nums[l];
                l++
            }
            l++;
        }
        max = Math.max(count, max);
    }
    return max;
};

// const nums = [5,2,1,2,5,2,1,2,5];
// const nums = [4,2,4,5,6];
// const nums = [2,2,2,2,2,2,2,2,3,4,5,6];
const nums = [1,1,2,3,4,3,3,5,6,7,7,8];


console.log(maximumUniqueSubarray(nums));