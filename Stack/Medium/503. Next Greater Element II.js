var nextGreaterElements = function(nums) {
    const doubleSize = [...nums, ...nums];
    const num = Array(doubleSize.length).fill(-1);
    const stack = [[]];

    for (let i = 0; i < doubleSize.length; i++) {
        if (!stack.length || stack[stack.length - 1][1] >= doubleSize[i]) {

            stack.push([i, doubleSize[i]]);

        } else {

            while (stack[stack.length - 1][1] < doubleSize[i]) {
                let [index, val] = stack.pop();
                num[index] = doubleSize[i];
            }
            stack.push([i, doubleSize[i]]);

        }
    }

    return num.slice(0, nums.length);
};

// const nums = [5,4,3,2,1];
// const nums = [1,2,3,4,3]
// const nums = [1,8,-1,-100,-1,222,1111111,-111111]; // [8,222,222,-1,222,1111111,-1,1]
// const nums = [2,1,0,3,4,2,5];
// const nums = [1,2,1];

console.log(nextGreaterElements(nums));