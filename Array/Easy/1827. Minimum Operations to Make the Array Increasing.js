var minOperations = function(nums) {
    let count = 0, prev = 0;

    for (cur of nums) {
        if (cur <= prev) {
            prev += 1
            count += prev - cur
        } else {
            prev = cur
        }
    }

    return count;
};

// let nums = [1,5,2,4,1];

let nums = [1,1,1]

console.log(minOperations(nums));