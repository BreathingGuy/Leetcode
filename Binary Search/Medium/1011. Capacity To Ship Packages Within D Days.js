var shipWithinDays = function(weights, days) {
    const prefix = prefixSum(weights);
    let [left, right] = [Math.max(...weights), prefix[prefix.length - 1]];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const count = checkDays(weights, mid);

        if (count <= days) right = mid - 1;
        if (count > days) left = mid + 1;
    }

    return left;
};

function prefixSum(nums) {
    let arr = [0];
    for (let i = 0; i < nums.length; i++) {
        arr.push(arr[i] + nums[i]);
    }

    return arr;
}

function checkDays(arr, mid) {
    let count = 0;
    let point = mid;

    for (let i = 0; i < arr.length; i++) {
        point -= arr[i];
    
        if (point < 0) {
            count++;
            i--;
            point = mid;
        }

        if (point == 0) {
            count++;
            point = mid;
        }
    }

    if (point < mid) {
        count++;
    }

    return count;
}

let weights = [1,2,3,1,1], days = 4; 
// let  weights = [3,2,2,4,1,4], days = 3;
// let weights = [1,2,3,4,5,6,7,8,9,10], days = 5;
// let weights = [10,50,100,100,50,100,100,100], days = 5;

console.log(shipWithinDays(weights, days));