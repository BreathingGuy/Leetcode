var countPairs = function(nums, k) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            const arr = map.get(nums[i]);

            for (let j = 0; j < arr.length; j++) {
                count += (arr[j] * i) % k == 0 ? 1 : 0;
            }
            map.get(nums[i]).push(i);
        } else {
            map.set(nums[i], [i]);
        }
    }

    return count;
};

var countPairs = function(nums, k) {
    var count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j] && (i * j) % k == 0){
                count++;
            }
        }
    }
    return count;
};

// const nums = [3,1,2,2,2,1,3], k = 2;
// const nums = [1,2,3,4], k = 1;
const nums = [5,5,9,2,5,5,9,2,2,5,5,6,2,2,5,2,5,4,3], k = 7;

console.log(countPairs(nums, k));
