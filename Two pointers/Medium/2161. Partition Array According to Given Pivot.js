var pivotArray = function(nums, pivot) {
    return nums.sort((a, b) => Math.sign(a-pivot) - Math.sign(b-pivot));
};