var findKDistantIndices = function(nums, key, k) {
    const arrOfKeys = [];
    const arrDistantInd = [];

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            arrOfKeys.push(j);
        }
    }

    for (let i = 0; i < nums.length ; i++) {
        for (let j = 0; j < arrOfKeys.length; j++) {
            if (Math.abs(i - arrOfKeys[j]) <= k) {
                arrDistantInd.push(i);
                break;
            }
        }
    }
    return arrDistantInd;
};

const nums = [3,4,9,1,3,9,5], key = 9, k = 1;
// const nums = [2,2,2,2,2], key = 2, k = 2;

console.log(findKDistantIndices(nums, key, k));