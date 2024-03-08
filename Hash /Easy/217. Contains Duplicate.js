var containsDuplicate = function(nums) {
    let numbers = new Set(nums);
    return nums.length != numbers.size
};