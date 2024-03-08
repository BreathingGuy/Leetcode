// #1
var mergeArrays = function(nums1, nums2) {
    let [l, r] = [0, 0];
    const mergedArr = [];

    while (l < nums1.length || r < nums2.length) {
        if (l == nums1.length && r != nums2.length) {
            mergedArr.push(...nums2.slice(r));
            break;
        } else if (r == nums2.length && l != nums1.length) {
            mergedArr.push(...nums1.slice(l));
            break;
        }

        if (nums1[l][0] == nums2[r][0]) {
            mergedArr.push([nums1[l][0], nums1[l][1] + nums2[r][1]]);
            l++;
            r++;
            continue;
        }

        if (nums1[l][0] < nums2[r][0]) {
            mergedArr.push(nums1[l]);
            l++;
            continue;
        }

        if (nums1[l][0] > nums2[r][0]) {
            mergedArr.push(nums2[r]);
            r++;
            continue;
        }
    }

    return mergedArr;
};

// #2

var mergeArrays = function(nums1, nums2) {
    return Object.entries([...nums2, ...nums1].reduce((acc, [id, val]) => {
        acc[id] = (acc[id] || 0) + val

        return acc
    }, {})).map(([s, n]) => ([+s, n]))
};

// let nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]];
let nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]];

console.log(mergeArrays(nums1, nums2));