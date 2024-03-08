// 2
var countDistinctIntegers = function(nums) {
    //o(nlogm) time |o(n) space
    const length = nums.length;

    for(let i = 0; i < length; i++){
        let copy = nums[i];
        let reverse = 0;

        while(copy > 0){
            reverse = reverse * 10 + (copy % 10);
            copy = Math.floor(copy / 10);
        }
        nums.push(reverse);
    }

    const set = new Set(nums);
    
    return set.size;
};

// 1
var countDistinctIntegers = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        nums.push(Number(String(nums[i]).split("").reverse().join("")))
    }

    return new Set(nums).size
};



let nums = [1,13,10,1222,31];

console.log(countDistinctIntegers(nums));