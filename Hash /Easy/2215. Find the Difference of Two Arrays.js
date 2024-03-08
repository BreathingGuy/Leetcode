var findDifference = function(nums1, nums2) {
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            nums1 = nums1.filter((a) => a != nums2[i]);
            nums2 = nums2.filter((a) => a != nums2[i]);
            i--;
        }
    }
    let num1 = new Set(nums1);
    let num2 = new Set(nums2);
    // console.log(nums1, nums2);
    return [[...num1], [...num2]];
};