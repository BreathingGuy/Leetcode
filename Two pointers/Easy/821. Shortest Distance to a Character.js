// var shortestToChar = function(s, c) {
//   const indexesOfC = [];
//   const translatedCharsToNums = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == c) {
//       indexesOfC.push(i);
//     }
//   }

//   let [left, right] = [0, 1];

//   for (let i = 0; i < s.length; i++) {
//     while ( i <= indexesOfC[left] ) {
//       translatedCharsToNums.push(indexesOfC[left] - i);
//       i++;
//     }

//     while (i > indexesOfC[left] && i <= indexesOfC[right]) {
//       const numLeft = i - indexesOfC[left];
//       const numRight = indexesOfC[right] - i;
//       translatedCharsToNums.push(Math.min(numLeft, numRight));
//       i++;
//     }
    
//     if (!(right >= indexesOfC.length - 1)) {
//       console.log('efew');
//       right++;
//       left++;
//       continue;
//     }

//     while (i >= indexesOfC[right]) {
//       translatedCharsToNums.push(i - indexesOfC[right]);
//       i++;
//     }

//     // console.log(translatedCharsToNums);
//   }

//   return translatedCharsToNums;
// };


//  #2
var shortestToChar = function(s, c) {
  const indexesOfC = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      indexesOfC.push(i);
    }
  }

  let left = 0;
  const translatedCharsToNums = [];
  for (let i = 0; i < s.length; i++) {
    if (i > indexesOfC[left]) {
      if (left == indexesOfC.length - 1) {
        translatedCharsToNums.push(i - indexesOfC[left]);
      } else {
        left++;
      }
    }

    if (i <= indexesOfC[left]) {
      translatedCharsToNums.push(indexesOfC[left] - i)
    } 
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (i < indexesOfC[left]) {
      if (left == 0) {
        translatedCharsToNums[i] = Math.min(indexesOfC[left] - i, translatedCharsToNums[i]);
      } else {
        left--;
      }
    }

    if (i >= indexesOfC[left]) {
      translatedCharsToNums[i] = Math.min(translatedCharsToNums[i], i - indexesOfC[left]);
    }
  }

  return translatedCharsToNums;
};

// #3 leet
var shortestToChar = function(s, c) {
  const n = s.length;
  const result = new Array(n).fill(Infinity);

  let prev = -Infinity;

  // Iterate from left to right
  for (let i = 0; i < n; i++) {
      if (s[i] === c) {
          prev = i;
      }
      result[i] = Math.min(result[i], Math.abs(i - prev));
  }

  prev = Infinity;

  // Iterate from right to left
  for (let i = n - 1; i >= 0; i--) {
      if (s[i] === c) {
          prev = i;
      }
      result[i] = Math.min(result[i], prev - i);
  }

  return result;
};

// let s = "loveleetcode", c = "e";
// let s = "aaba", c = "b";
let s = "aaab", c = "b";

console.log(shortestToChar(s, c));