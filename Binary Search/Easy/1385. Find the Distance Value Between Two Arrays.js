var findTheDistanceValue = function(arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  let count = 0;
  

  for (let i = 0; i < arr1.length; i++) {
    let [left, right] = [0, arr2.length - 1];
    
    while (left <= right) {
      const mid = (left + right) >> 1;
      const guess = arr2[mid];

      if (Math.abs(guess - arr1[i]) <= d) {
        count--;
        break;
      }

      const isTargetGreater = guess < arr1[i];
      if (isTargetGreater) left = mid + 1;

      const isTargetLess = guess > arr1[i];
      if (isTargetLess) right = mid - 1; 
    }

    count++;
  }

  return count;
};

// let arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3;
// let arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;
// let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
// let arr1 = [-803,715,-224,909,121,-296,872,807,715,407,94,-8,572,90,-520,-867,485,-918,-827,-728,-653,-659,865,102,-564,-452,554,-320,229,36,722,-478,-247,-307,-304,-767,-404,-519,776,933,236,596,954,464], 
// arr2 = [817,1,-723,187,128,577,-787,-344,-920,-168,-851,-222,773,614,-699,696,-744,-302,-766,259,203,601,896,-226,-844,168,126,-542,159,-833,950,-454,-253,824,-395,155,94,894,-766,-63,836,-433,-780,611,-907,695,-395,-975,256,373,-971,-813,-154,-765,691,812,617,-919,-616,-510,608,201,-138,-669,-764,-77,-658,394,-506,-675,523,730,-790,-109,865,975,-226,651,987,111,862,675,-398,126,-482,457,-24,-356,-795,-575,335,-350,-919,-945,-979,611], d = 37;

console.log(findTheDistanceValue(arr1, arr2, d));