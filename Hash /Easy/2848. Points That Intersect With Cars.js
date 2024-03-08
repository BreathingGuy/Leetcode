"use strict";

// 1
var numberOfPoints = function(nums) {
    let output = nums.reduce((acc, curr) => {
        for (let i = curr[0]; i <= curr[1]; i++) {
            acc.add(i);
        }

        return acc;
    }, new Set());
    
    return output.size;
};


// 2
var numberOfPoints = function (nums) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = nums[i][0]; j <= nums[i][1]; j++) {
            set.add(j);
        }
    }

    return set.size;
}

let nums = [[3,6],[1,5],[4,7]];
// let nums = [[1,3],[5,8]];

console.log(numberOfPoints(nums));