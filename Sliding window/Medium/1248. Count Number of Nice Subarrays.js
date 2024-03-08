// #1 Math solution - bad time
var numberOfSubarrays = function (nums, k) {
    const oddIndexes = nums.map((value, index) => {if (value % 2 != 0) {return index + 1; }})
                           .filter(value => value !== undefined);
    let oddCount = 0;


    for (let i = 0, j = k - 1; j < oddIndexes.length; j++, i++) {
        let left = i > 0 ? oddIndexes[i] - 1 - oddIndexes[i - 1] : oddIndexes[i] - 1;
        let right = oddIndexes.length - 1 != j ? oddIndexes[j + 1] - oddIndexes[j] - 1 : nums.length - oddIndexes[j];

        oddCount += left * right;
        oddCount += left + right;
        oddCount += 1;
    }

    return oddCount;
};


// #2 
const numberOfSubarrays = function(nums, k) {
    let start = 0;
    let result = 0;
    let oddCount = 0;
    let count = 0; 

    for (let end = 0; end < nums.length; end++) {

        if (nums[end] % 2) {
            oddCount++;

            if (oddCount >= k) {
                count = 1;

                while (nums[start++] % 2 === 0) {
                    count++;
                }

                result += count
            }
        } else if (oddCount >= k) {
            result += count;
        }
    }

    return result;
};

// let nums = [1, 1, 2, 1, 1], k = 3;
let nums = [2,2,2,1,2,2,1,2,2,2], k = 2;
// nums = [2,4,6], k = 1;

console.log(numberOfSubarrays(nums, k));