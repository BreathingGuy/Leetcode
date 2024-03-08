var smallerNumbersThanCurrent = function(nums) {
    let hash = new Map();
    let arr = [...nums];
    let sum = 0;
    nums.sort((a, b) => a - b);


    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }

    for (let [key, value] of hash) { 
        hash.set(key, sum);
        sum += value;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = hash.get(arr[i])
    }

    return arr;
};