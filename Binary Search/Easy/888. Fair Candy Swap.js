var fairCandySwap = function(aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((a, b) => a + b);
  const bobSum = bobSizes.reduce((a, b) => a + b);
  const diff = (aliceSum - bobSum) / 2;

  for (let i = 0; i < bobSizes.length; i++) {
    const target = diff + bobSizes[i];
    let [left, right] = [0, aliceSizes.length -1];

    while (left <= right) {
      const mid = (left + right) >> 1;
      const guess = aliceSizes[mid];

      const isTarget = guess === target;
      if (isTarget) return [aliceSizes[mid], bobSizes[i]];

      const isTargetGreater = guess < target;
      if (isTargetGreater) left = mid + 1;

      const isTargetLower = guess > target
      if (isTargetLower) right = mid - 1;
    }
  }
};

let aliceSizes = [1,1], bobSizes = [2,2];
// let aliceSizes = [1,2], bobSizes = [2,3];
// let aliceSizes = [2], bobSizes = [1,3];
// let aliceSizes = [1,2,5], bobSizes = [2,4];

console.log(fairCandySwap(aliceSizes, bobSizes))