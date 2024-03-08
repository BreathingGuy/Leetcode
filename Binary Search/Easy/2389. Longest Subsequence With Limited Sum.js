function prefixSum(nums) {
    let arr = [0];
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        arr.push(arr[i] + nums[i])
    }

    return arr.slice(1);
}

function bs(nums, target) {
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        const guess = nums[mid];
        
        if (guess == target) return mid + 1;

        if (guess < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left] > target ? left : left + 1;
}

var answerQueries = function(nums, queries) {
    nums = prefixSum(nums);
    let outputArr = [];

    for (let i = 0; i < queries.length; i++) {
        const index = bs(nums, queries[i]);  
        outputArr[i] = index;
    }

    return outputArr;
};

let nums = [4,5,2,1], queries = [3,10,21];

console.log(answerQueries(nums, queries));

// console.log(answerQueries(nums, queries));