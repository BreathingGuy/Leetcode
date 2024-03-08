var countCompleteSubarrays = function(nums) {
    let uniqItems = new Set(nums);
    let hashOfNums = new Map();
    let left = 0;
    let subarraysCount = 0;

    for (let right = 0; right < nums.length; right++) {
        hashOfNums.set(nums[right], (hashOfNums.get(nums[right]) || 0) + 1);

        while (hashOfNums.size == uniqItems.size) {
            hashOfNums.set(nums[left], (hashOfNums.get(nums[left])) - 1);
            
            if (hashOfNums.get(nums[left]) == 0) {
                hashOfNums.delete(nums[left]);
            }
            left++;
            subarraysCount += nums.length - right;
        }
    }

    return subarraysCount;
};

let nums = [1,3,1,2,2];
// let nums = [5,5,5,5];

console.log(countCompleteSubarrays(nums));


let set = new Set(nums);
console.log(set);
console.log([...set.values()]);