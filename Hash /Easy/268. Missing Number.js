var missingNumber = function(nums) {
    if (nums.length === 1 ) {
        if (nums[0] === 1) {
            return 0;
        } else {
            return 1;
        }
    }
    nums.sort((a,b) => {return a - b;});

    if (nums.includes(0)) {
        nums.push(0);
    } else {
        return 0;
    }
    

    for (let i = 0, j = nums[0]; i < nums.length; i++, j++) {
        if (nums[i] != j) {
            return j;
        }
    }
};