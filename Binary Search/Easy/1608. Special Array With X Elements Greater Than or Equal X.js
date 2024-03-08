const bs = (arr, target) => {
  let [left, right] = [0, arr.length - 1];

  while(left < right){
      const mid = (left + right) >> 1;

      if(arr[mid] >= target){
          right = mid;
      }else{
          left = mid+1;
      }
  }
  return left 
}

var specialArray = function(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const result = bs(nums, i);
    if ((nums.length - result) == i) return i;
  }

  return -1;
};


let nums = [3,5];
// let nums = [0,0];
// let nums = [0,4,3,0,4];
// let nums = [3,6,7,7,0];

console.log(specialArray(nums));