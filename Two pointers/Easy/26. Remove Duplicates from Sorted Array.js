var removeDuplicates = function(nums) {
    let [left, right] = [0, 0];

    while (right < nums.length) {
        let [leftVar, rightVar] = [nums[left], nums[right]];

        const trOfFal = leftVar == rightVar;

        if(!trOfFal) {
            left++;
            nums[left] = rightVar;
        }

        right++
    }
    return left + 1;
};