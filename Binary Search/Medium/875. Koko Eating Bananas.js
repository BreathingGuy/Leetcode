// #1 
// Time O(N * log(M)) | Space O(1)
var minEatingSpeed = function(piles, h) {
    piles.sort((a, b) => a - b);
    let minK = +Infinity;
    let [left, right] = [0, piles[piles.length - 1]];

    
    while (left <= right) {
        const mid = (right + left) >> 1;
        let j = 0;

        for (let i = 0; i < piles.length; i++) {
            let num = piles[i];

            j += Math.ceil(num / mid);
        }

        if (j <= h) {
            right = mid - 1;
            minK = Math.min(mid, minK);
        }

        if (j > h) {
            left = mid + 1;
        }
    }
    
    return minK;
};

// 4
// let piles = [3,6,7,11], h = 8; 
// 30
// let piles = [30,11,23,4,20], h = 5;
// 23
// let piles = [30,11,23,4,20], h = 6;
// 2
let piles = [312884470], h = 312884469;

console.log(minEatingSpeed(piles, h));