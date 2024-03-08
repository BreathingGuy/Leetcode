var divideArray = function(nums) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        if (map.get(nums[i]) % 2 == 0) {
            count++;
        }
    }

    console.log(count);

    return nums.length / 2 == count;
};

// let nums = [3,2,3,2,2,2];
// let nums = [1,2,3,4];
let nums = [18,19,5,5,18,19,5,6,12,19,13,4,16,11,4,16,10,8,12,8,2,1,8,17,4,18,3,5,16,2,16,12,17,16,7,16,2,17,19,9,1,20,17,17,4,6];
// let nums = [15,13,5,20,18,2,20,8,20,17,10,19];
// let nums = [4,1,1,1];

console.log(divideArray(nums));


