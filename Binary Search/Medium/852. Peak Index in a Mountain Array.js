var peakIndexInMountainArray = function(arr) {
    let [left, right] = [0, arr.length - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = arr[mid];

        if (guess > arr[mid + 1] && guess > arr[mid - 1]) {
            return mid;
        }

        if (guess > arr[mid + 1]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};

// let arr = [0,10,5,2];
// let arr = [0,1,0];
let arr = [0,2,1,0];
// let arr = [24,69,100,99,79,78,67,36,26,19];
// let arr = [3,5,3,2,0];
// let arr = [0,3,5,12,2];

console.log(peakIndexInMountainArray(arr));