var findKthPositive = function(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const missingCount = arr[mid] - mid - 1;

      if (missingCount < k) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return left + k;
};

// mine nothing works, but good try - hahhaahahah
var findKthPositive = function (arr, k) {
  let [left, right] = [0, arr.length - 1];

  // if (arr[left] > 1) {
  //   let num = k - (arr[left] - 1);
  //   if (num <= 0) {
  //     return k
  //   } else {
  //     k = num;
  //   }
  // }

  // const missingNusms = ((arr[right] - arr[left] - 1) - (right - left - 1));
  // if (missingNusms < k) {
  //   return (k - missingNusms) + arr[right];
  // }

  while (left <= right) {
    const mid = (left + right) >> 1;
    const numsBetween = mid - left - 1;
    const nonExistedNumsBetw = arr[mid] - arr[left] - 1 - numsBetween;


    if (nonExistedNumsBetw < k) {
      left = mid + 1;
      k -= nonExistedNumsBetw;
      continue;
    }

    if (nonExistedNumsBetw > k) {
      right = mid - 1;
    }
  }

  return left + k;
};

// let arr = [2, 3, 4, 7, 11], k = 5;
// let arr = [7, 17, 22, 26, 34], k = 9;
// let arr = [1,2,3,4], k = 2;
let arr = [1,10,21,22,25], k = 12;

console.log(findKthPositive(arr, k));