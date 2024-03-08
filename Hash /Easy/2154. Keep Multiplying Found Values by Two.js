var findFinalValue = function(nums, original) {
    while (nums.includes(original)) {
        original *= 2;
    }
    
    return original;
};

const nums = [5,3,6,1,12], original = 3;
// const nums = [2,7,9], original = 4;

console.log(findFinalValue(nums, original));