
// Two pointer / Sliding window 
var containsNearbyDuplicate = function(nums, k) {
    let [left, right] = [0, 1];

    while (right < nums.length) {
        if (nums[left] == nums[right]) {
            if (right - left == k || right - left < k) {
                return true;    
            }

            left ++;
            right = left + 1;
            continue;
        }

        right++;
        if(right == nums.length) {
            left++;
            right = left + 1;
        };
    }

    return false;
};

// Hash table 
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let test = (i - map.get(nums[i])) == k || (i - map.get(nums[i])) < k ;
            if (test) {
                return true;
            }
        }

        map.set(nums[i], i);
    }

    return false;
};

let nums = [1,2,3,1], k = 3;
// let nums = [1,0,1,1], k = 1;
// let nums = [1,2,3,1,2,3], k = 2;
// let nums = [1,2,3,1,2,3], k = 4;

console.log(containsNearbyDuplicate(nums, k));