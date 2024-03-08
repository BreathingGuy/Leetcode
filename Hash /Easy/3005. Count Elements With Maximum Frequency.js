var maxFrequencyElements = function(nums) {
    if (nums.length == 1) {
        return 1;
    }

    const hash = new Map();
    const arrMax = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }

    for (let val of hash.values()) {
        arrMax[val - 1] += val;
    }

    console.log(arrMax);
    console.log(hash);

    for (let i = arrMax.length - 1; i >= 0; i--) {
        if (arrMax[i] !== 0) {
            return arrMax[i];
        }
    }
};

let nums = [1,1,1,1];

console.log(maxFrequencyElements(nums));