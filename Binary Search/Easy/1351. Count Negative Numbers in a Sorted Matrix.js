
var countNegatives = function(grid) {
    let count = 0
    const cols = grid[0].length
    for(const row of grid){
        let left = 0
        let right = cols - 1
        while (left <= right){
            const mid = Math.floor(left + (right - left) / 2 )
            if (row[mid] < 0){
                count += right - mid + 1
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
    }
    return count
};


var countNegatives = function(arr) {
    const n = arr[0].length;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] < 0) {
            sum += n;
            continue;
        }

        let [left, right] = [0, n - 1];

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2 )
            const guess = arr[i][mid];
            
            if (guess < 0) {
                sum += right - mid + 1;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return sum;
};

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
// let grid = [[3,2],[1,0]];
// let grid = [[5,1,0],[-5,-5,-5]];
// let grid = [[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]];

console.log(countNegatives(grid));