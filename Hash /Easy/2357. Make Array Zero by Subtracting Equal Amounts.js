var minimumOperations = function(nums) {
    const set = new Set(nums);
    const arr = [...set.values()].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            return arr.length - i;
        }
    }

    return 0;
};

var minimumOperations = function(nums) {
    let set = new Set(nums);
    return set.has(0) ? set.size - 1 : set.size;
};

let nums = [1,5,0,3,5];
// let nums = [1];
// let nums = [0];
// let nums = [1,2,3,5];


console.log(minimumOperations(nums));