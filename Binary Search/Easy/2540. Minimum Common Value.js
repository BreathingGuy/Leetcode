var getCommon = function(nums1, nums2) {
    let bsArr, forArr;
    if (nums1.length < nums2.length) {
        forArr = nums1;
        bsArr = nums2;
    } else {
        forArr = nums2;
        bsArr = nums1;
    }

    for (let i = 0; i < forArr.length; i++) {
        const guess = bs(bsArr, forArr[i]);
        if (guess) {
            return guess;
        }
    }
};

const bs = (arr, target) => {
    let [l, r] = [0, arr.length - 1];

    while (l <= r) {
        const mid = (l + r) >> 1;
        const guess = arr[mid];

        if (guess == target) return guess;
        if (guess > target) r = mid - 1;
        if (guess < target) l = mid + 1;
    }

    return false;
}

// let nums1 = [1,2,3], nums2 = [2,4];
let nums1 = [1,2,3,6], nums2 = [2,3,4,5];

console.log(getCommon(nums1, nums2));