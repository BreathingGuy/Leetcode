var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    if (set1.size < set2.size) {
        return setIntersec(set1, set2);
    } else {
        return setIntersec(set2, set1);
    }
};

const setIntersec = (set1, set2) => {
    const output = [];

    for (let value of set1.values()) {
        if (set2.has(value)) output.push(value);
    }

    return output;
}

// let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
let nums1 = [1,2,2,1], nums2 = [2,2];

console.log(intersection(nums1, nums2));