var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    let [left, right] = [0, nums.length - 1];
    let indexies = [];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid];

        const isTargetMid = guess === target;
        if (isTargetMid) {
            let leftOfMid = mid - 1;
            while (nums[leftOfMid] === target && leftOfMid >= 0) {
                indexies.push(leftOfMid);
                leftOfMid--;
            }

            let rightOfMid = mid + 1;
            while (nums[rightOfMid] === target && rightOfMid < nums.length) {
                indexies.push(rightOfMid);
                rightOfMid++;
            }

            indexies.push(mid);
            break;
        }

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLower = guess > target
        if (isTargetLower) right = mid - 1;
    }

    return indexies.sort((a, b) => a - b);
};

// let nums = [1,2,5,2,3], target = 2;
// let nums = [1,2,5,2,3], target = 3;
// let nums = [1,2,5,2,3], target = 5;
let nums = [100,1,100], target = 100;


console.log(targetIndices(nums, target));