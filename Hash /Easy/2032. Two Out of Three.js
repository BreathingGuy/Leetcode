"use strict";

var twoOutOfThree = function(nums1, nums2, nums3) {
    let hash = new Set();
    let repeatedPoints = [];
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    nums3 = new Set(nums3);

    for (let value of nums1) {
        hash.add(value);
    }

    for (let value of nums2) {
        if (hash.has(value) && !repeatedPoints.includes(value)) {
            repeatedPoints.push(value);
        } else {
            hash.add(value);
        }
    }

    for (let value of nums3) {
        if (hash.has(value) && !repeatedPoints.includes(value)) {
            repeatedPoints.push(value);
        } else {
            hash.add(value);
        }
    }

    return repeatedPoints;
};