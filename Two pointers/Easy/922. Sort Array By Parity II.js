var sortArrayByParityII = function(nums) {
  const odd = [];
  const even = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  for (let i = 0, j = 0; j < odd.length; j++) {
    nums[i] = even[j];
    nums[i + 1] = odd[j];
    i = i + 2;
  }

  return nums;
};

var sortArrayByParityII = function(nums) {
  let even = 0;
  let odd = 1;

  while (odd < nums.length && even < nums.length) {
    const isEvenValid = even % 2 === nums[even] % 2;
    const isOddValid = odd % 2 === nums[odd] % 2;

    if (!isEvenValid && !isEvenValid) {
      [nums[even], nums[odd]] = [nums[odd], nums[even]];
      even += 2;
      odd += 2;
    } else {
      if (isEvenValid) even += 2;
      if (isOddValid) odd += 2;
    }
  }

  return nums;
};

let nums = [4,2,5,7];
// let nums = [2,3];

console.log(sortArrayByParityII(nums));