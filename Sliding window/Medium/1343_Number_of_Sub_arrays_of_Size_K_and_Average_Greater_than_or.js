// #1
var numOfSubarrays = function (arr, k, threshold) {
    let num = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    if (sum / k >= threshold) {
        num++;
    }

    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];

        if (sum / k >= threshold) {
            num++;
        }
    }

    return num;
};

// #2
// var numOfSubarrays = function (arr, k, threshold) {

//     let start = 0
//     let end = 0
//     let total = 0
//     let sum = 0


//     while (end < arr.length) {
//         sum = sum + arr[end]

//         if (end - start + 1 >= k) {
//             let avg = sum / k;

//             if (avg >= threshold) {
//                 total++
//             }

//             let first = arr[start]
//             sum = sum - first
//             start++
//         }
//         end++
//     }
//     return total

// };

// let arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4;
let arr = [7, 7, 7, 7, 7, 7, 7],
    k = 7,
    threshold = 7;

console.log(numOfSubarrays(arr, k, threshold));