"use strict";

// #1
var deleteGreatestValue = function (grid) {
    let sum = 0;
    while (grid[0].length > 0) {
        let max = [];
        for (let j = 0; j < grid.length; j++) {
            max.push(...grid[j].splice(grid[j].indexOf(Math.max(...grid[j])), 1));
        }

        sum += Math.max(...max);
    }

    return sum;
};


// #2
var deleteGreatestValue = function (grid) {
    let res = 0;
    for (let arr of grid) {
        arr.sort((a, b) => b - a)
    }

    for (i = 0; i < grid[0].length; i++) {
        let max = 0;
        for (let arr of grid) {
            max = Math.max(max, arr[i])
        }

        res += max;
    }

    return res;
};