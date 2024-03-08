var maximumCount = function(nums) {
  if (nums[0] > 0) {
    return nums.length;
  }

  let [left, right] = [0, nums.length - 1];
  let leftNum = 0;
  let rightNum = 0;
  
  while (left <= right) {
    const mid = (right + left) >> 1;
    const guess = nums[mid];

    const guessGreate = guess > 0;
    if (guessGreate) right = mid - 1;

    const guessLess = guess <= 0;
    if (guessLess) left = mid + 1;
  }
  leftNum =nums.length - (left);

  [left, right] = [0, nums.length - 1];
  while (left <= right) {
    const mid = (right + left) >> 1;
    const guess = nums[mid];

    const guessGreate = guess >= 0;
    if (guessGreate) right = mid - 1;

    const guessLess = guess < 0;
    if (guessLess) left = mid + 1;
  }
  rightNum = right + 1;

  return Math.max(rightNum, leftNum);
};

// let nums = [-2,-1,-1,1,2,3];
// let nums = [-7, -6, -4, -3,-2,-1,0,0,0,0,0,0,1,5,4,3,7,8,2];
// let nums = [-3,-2,-1,0,0,1,2];
let nums = [5,20,66,1314];

console.log(maximumCount(nums));