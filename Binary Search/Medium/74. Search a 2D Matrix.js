// #3 
// Time: O(log(mn))  Space: O(1)
var searchMatrix = function (matrix, target) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    let [left, right] = [0, rows * cols - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const [row, col] = [Math.floor(mid / cols), mid % cols];
        const guess = matrix[row][col];

        const isTarget = guess === target;
        if (isTarget) return true;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return false;
};


// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
// let matrix = [[1]], target = 1;

// console.log(searchMatrix(matrix, target));

// #2 
// O(log(m) + log(n))  Space: O(1)
var searchMatrix = function(matrix, target) {
    let [left, right] = [0, matrix.length - 1];
    let indexOfArr = 0;

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = matrix[mid];

        let isTargetMid = guess[0] <= target && guess[guess.length - 1] >= target;
        if (isTargetMid) {
            indexOfArr = guess;
            break;            
        }
        
        let isTargetGreater = guess[guess.length - 1] < target;
        if (isTargetGreater) left = mid + 1;
    
    
        let isTargetLower = guess[0] > target;
        if (isTargetLower) right = mid - 1;
    }

    [left, right] = [0, indexOfArr.length - 1];
    while (left <= right) {
        const mid = (right + left) >> 1;
        const guess = indexOfArr[mid];

        const isTarget = guess === target;
        if (isTarget) return true;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return false;
};

// #1
var searchMatrix = function(matrix, target) {
    matrix = matrix.flat();

    let [left, right] = [0, matrix.length - 1];


    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = matrix[mid];

        let isTargetMid = guess === target;
        if (isTargetMid) return true
        
        let isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;
    
    
        let isTargetLower = guess > target;
        if (isTargetLower) right = mid - 1;
    }

    return false;
};