var intersect = function(nums1, nums2) {
    let arrFor;
    let arrSort;
    let answArr = [];

    if (nums1.length < nums2.length) {
        arrFor = nums1;
        arrSort = nums2.sort((a, b) => a - b);
    } else {
        arrFor = nums2;
        arrSort = nums1.sort((a, b) => a - b);
    }

    for (let i = 0; i < arrFor.length; i++) {
        const res = search(arrSort, arrFor[i]);
        if (res >= 0) {
            answArr.push(arrSort[res]);
            arrSort.splice(res, 1);
        }
    }

    return answArr;
};

var search = function(nums, target, set) {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = (right + left) >> 1;
        const guess = nums[mid];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isTargetGreater = guess < target;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = target < guess;
        if (isTargetLess) right = mid - 1;
    }

    return -1;
};

// const nums1 = [1,2,2,1], nums2 = [2,2];
const nums1 = [4,9,5], nums2 = [9,4,9,8,4];

console.log(intersect(nums1, nums2));