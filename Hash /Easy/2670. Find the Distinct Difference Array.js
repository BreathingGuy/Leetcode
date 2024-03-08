var distinctDifferenceArray = function(nums) {
    let res = [];

    for (let i=0; i < nums.length; i++){

        res.push(new Set(nums.slice(0, i + 1)).size - new Set(nums.slice(i + 1)).size);

    }

    return res 
};