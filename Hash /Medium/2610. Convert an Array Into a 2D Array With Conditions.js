var findMatrix = function(nums) {
    let hash = new Map();
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if (!hash.has(nums[i])) {

            hash.set(nums[i], 0);

            if (typeof(arr[0]) == 'object') {
                arr[0].push(nums[i])
            } else {
                arr[0] = [nums[i]];
            }

        } else {

            hash.set(nums[i], hash.get(nums[i]) + 1);

            if (typeof(arr[hash.get(nums[i])]) == 'object') {
                arr[hash.get(nums[i])].push(nums[i])
            } else {
                arr[hash.get(nums[i])] = [nums[i]];
            }
            
        }
    }

    return arr;
};