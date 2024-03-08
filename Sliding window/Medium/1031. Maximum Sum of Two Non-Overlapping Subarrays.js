const prefixSum = (arr) => {
    const prefixSum = [0];
    
    for (let i = 0; i < arr.length; i++) {
        prefixSum.push(arr[i] + prefixSum[i]);     
    }

    return prefixSum;
}

var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    const prefSum = prefixSum(nums);
    let maxSum = 0;
    let max = 0;

    for (let i = 0, j = i; i < prefSum.length - firstLen - secondLen; i++) {
        j = i;  
        max += prefSum[i + secondLen] - prefSum[i];
        while (j < prefSum.length - firstLen - secondLen) {
            max += prefSum[j + firstLen + secondLen] - prefSum[j + secondLen];
            
            maxSum = Math.max(max, maxSum);
            max -= prefSum[j + firstLen + secondLen] - prefSum[j + secondLen];
            j++
        }
        max = 0;    
    }

    for (let i = 0, j; i < prefSum.length - firstLen - secondLen; i++) {
        j = 0;  
        max += prefSum[i + firstLen + secondLen] - prefSum[i + firstLen];
        while (j <= i) {
            max += prefSum[j + firstLen] - prefSum[j];
            maxSum = Math.max(max, maxSum);
            max -= prefSum[j + firstLen] - prefSum[j];
            j++
        }
        max = 0;      
    }

    return maxSum;
};

// let nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2;
// let nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2;
let nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3;

console.log(maxSumTwoNoOverlap(nums, firstLen, secondLen));
