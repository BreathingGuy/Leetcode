"use strict";

///////////////// 1. Two Sum

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2, 5, 5, 11], 10));



///////////////// 9. Palindrome Number

var isPalindrome = function (x) {
    return x == x.toString().split('').reverse().join('');
};

console.log(isPalindrome(101));



///////////////// 2. Add Two Numbers НЕ РЕШИЛ, НУЖНО ПОНЯТЬ ЧТО ТАКОЕ СПИСОК
var addTwoNumbers = function (l1, l2) {
    function reverse(arg) {
        let reversed = []
        for (let i = 0; i < arg.length; i++) {
            reversed.unshift(arg[i])
        }
        return reversed
    }
    return reverse(('' + (Number(reverse(l1).join('')) + Number(reverse(l2).join('')))).split('').map(function (digit) {
        return +digit;
    }));
};
console.log(addTwoNumbers([0], [0]));

//////////////////////////////////////////////////////////////////////////// easy array

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function deleteRepeated(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                i--;
                j--;
            }
        }
    }

    return arr;
}

console.log(deleteRepeated(arr));

// nice
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

//////////////////////////////////////////////////////////////////////////// easy array



// console.log(nums.filter(function(curValue){
//     return curValue !== 2;
// }));

var removeElement = function (nums, val) {
    let count = 0;
    let passed = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            passed.push(nums[i]);
            count++;
        }
    }
    nums = passed;
    console.log(nums == nums);
    return count;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];

// var removeElement = function(nums, va ) {
//     nums = nums.filter((value) => {
//         return value !== val;
//     });

//     return nums;
// };


// WORKS
// var removeElement = function(nums, val) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[count++] = nums[i];
//         }
//     }

//     return count;
// };

console.log(removeElement(nums, 2));
console.log(removeElement([3, 2, 2, 3], 3));


//////////////////////////////////////////////////////////////////////////// easy array
let digits = [1, 2, 3];
console.log(+digits.join('') + 1);
digits = 123;
console.log(Array.from(String(digits), function (element) {
    return Number(element);
}));


var plusOne = function (digits) {
    digits = BigInt(digits.join('')) + BigInt(1);
    return Array.from(String(digits), function (element) {
        return Number(element);
    });
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));


//////////////////////////////////////////////////////////////////////////// easy array

// var merge = function(nums1, m, nums2, n) {
//     for (let i = m; i < nums1.length; i++) {
//         delete nums1[i];
//     }

//     for (let i = n; i < nums2.length; i++) {
//         delete nums2[i];
//     }

//     nums1 =  [...nums1,...nums2].filter((element) => {
//         return element !== undefined;
//     }).sort((a, b) => {
//         return a - b;
//     });
// };

let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;

var merge = function (nums1, m, nums2, n) {
    for (let i = m, j = 0; i < nums1.length; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => {
        return a - b;
    });
};

console.log(merge(nums1, m, nums2, n));

//////////////////////////////////////////////////////////////////////////// easy array

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

nums = [3, 0, 1];

nums = [0, 1];

nums = [1, 2];

// var missingNumber = function(nums) {
//     nums.sort((a,b) => {return a - b;});

//     for (let i = 0, j = nums[0]; i < nums.length; i++, j++) {
//         if (nums[i] != j) {
//             return j;
//         }
//     }
// };

// var missingNumber = function(nums) {
//     if (nums.length === 1) {
//         return 0;
//     }

//     nums.sort((a,b) => {return a - b;});
//     nums.push(0);
//     console.log(nums);

//     for (let i = 0, j = nums[0]; i < nums.length; i++, j++) {
//         if (nums[i] != j) {
//             return j;
//         }
//     }
// };

var missingNumber = function (nums) {
    if (nums.length === 1) {
        if (nums[0] === 1) {
            return 0;
        } else {
            return 1;
        }
    }
    nums.sort((a, b) => {
        return a - b;
    });

    if (nums.icludes(0)) {
        nums.push(0);
    } else {
        nums.unshift(0);
    }


    for (let i = 0, j = nums[0]; i < nums.length; i++, j++) {
        if (nums[i] != j) {
            return j;
        }
    }
};

console.log(missingNumber(nums));

//////////////////////////////////////////////////////////////////////////// easy array

var runningSum = function (nums) {
    let arr = [nums[0]];
    let sum = 0;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            sum += nums[j];
        }
        arr.push(sum);
        sum = 0;
    }
    return arr;
};

// let nums = [1,1,1,1];
nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(runningSum(nums));


//////////////////////////////////////////////////////////////////////////// easy array

let one = [];
console.log(one.length)

var summaryRanges = function (nums) {
    let arr = [];
    let str = [];
    for (let i = 0, j = nums[0]; i < nums.length; i++, j++) {
        if (nums[i] == j) {
            str.push(nums[i]);
        } else {
            if (str.length > 1) {
                arr.push(str[0] + "->" + str[str.length - 1]);
            } else {
                arr.push(`${str[0]}`);
            }
            nums.splice(0, str.length);
            str = [];
            i = 0 - 1;
            j = nums[0] - 1;
        }
    }
    if (str.length > 1) {
        arr.push(str[0] + "->" + str[str.length - 1]);
    } else {
        arr.push(`${str[0]}`);
    }
    return arr;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));



//////////////////////////////////////////////////////////////////////////// easy array


var findDifference = function (nums1, nums2) {
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            nums1 = nums1.filter((a) => a != nums2[i]);
            nums2 = nums2.filter((a) => a != nums2[i]);
            i--;
        }
    }
    let num1 = new Set(nums1);
    let num2 = new Set(nums2);
    // console.log(nums1, nums2);
    return [
        [...num1],
        [...num2]
    ];
};

nums1 = [-3, 6, -5, 4, 5, 5], nums2 = [6, 6, -3, -3, 3, 5];

console.log(findDifference(nums1, nums2));


var findDifference = function (nums1, nums2) {
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)
    for (let i of nums1) {
        if (nums2.has(i)) {
            nums1.delete(i)
            nums2.delete(i)
        }
    }
    return [Array.from(nums1), Array.from(nums2)]

};


//////////////////////////////////////////////////////////////////////////// easy array


var maxProfit = function (prices) {
    let profitDay = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] - profitDay < 0) {
            profitDay = prices[i + 1];
        }
        if (prices[i + 1] - profitDay > profit) {
            profit = prices[i + 1] - profitDay;
        }
    }
    return profit;
};

let prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));


//////////////////////////////////////////////////////////////////////////// easy array 

var searchInsert = function (nums, target) {

    if (!nums.includes(target)) {
        nums.push(target);
        nums.sort((a, b) => a - b);
    }

    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];

        if (guess == target) {
            return mid;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null
};

nums = [1, 3, 5, 6], target = 7;
console.log(searchInsert(nums, target));

///BEST
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    if (nums.includes(target)) return nums.indexOf(target)

    nums.unshift(target)
    nums.sort((a, b) => {
        return a - b
    })

    return nums.indexOf(target)
};



//////////////////////////////////////////////////////////////////////////// easy HASH 

var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let hashSq = new Map();

    for (let c of s) {
        hashSq.set(c, hashSq.has(c) ? hashSq.get(c) + 1 : 1);
    }

    for (let c of t) {
        if (!hashSq.has(c)) {
            return false;
        }

        let count = hashSq.get(c) - 1;

        if (count === 0) {
            hashSq.delete(c);
            continue;
        }

        hashSq.set(c, count)
    }

    return hashSq.size === 0;
};


var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    let hashMap = new Map();

    for (let c of s) {
        hashMap.set(c, (hashMap.get(c) || 0) + 1);
    }

    for (let c of t) {
        if (!hashMap.has(c)) return false;

        let count = hashMap.get(c) - 1;
        hashMap.set(c, count);
    }

    for (let c of hashMap.values()) {
        let isEmpty = c === 0;

        if (!isEmpty) return false;
    }

    return true;
}



let s = "anagram",
    t = "nagaram";

console.log(isAnagram(s, t));



//////////////////////////////////////////////////////////////////////////// easy HASH 

// #1 42%
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums.indexOf(target - nums[i], i + 1);

        if (num > 0) {
            return [i, num];
        }
    }
};

// #2 84%
var twoSum = function (nums, target) {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];

        if (!hashMap.has(key)) {
            hashMap.set(nums[i], i);
        } else {
            return [hashMap.get(key), i];
        }
    }
};


// nums = [2,7,11,15], target = 9;
nums = [3, 2, 4], target = 6
console.log(new Map(nums));

console.log(twoSum(nums, target));


let huh = [1, 2, 3, 4, 5];
let kk = new Map(Object.entries(huh));
console.log(kk);


//////////////////////////////////////////////////////////////////////////// medium HASH 

var groupAnagrams = function (strs) {
    const hashCode = (word) => {
        const frequency = new Array(26).fill(0);

        for (const char of word) {
            /* Time O(K) */
            const charCode = getCode(char); /* Time O(1) | Space (1) */

            frequency[charCode]++; /*           | Space O(1) */
        }

        return buildHash(frequency)
    }
    const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
    const buildHash = (frequency) => frequency.toString();


    let hashMap = new Map();
    let array = [];

    for (let i = 0; i < strs.length; i++) {
        let hashCod = hashCode(strs[i]);

        if (hashMap.has(hashCod)) {
            let varuable = hashMap.get(hashCod);
            varuable.push(strs[i]);
            hashMap.set(hashCod, varuable);
        } else {
            hashMap.set(hashCod, [strs[i]]);
        }
    }

    for (let c of hashMap.values()) {
        array.push(c);
    }

    return array;
};

var groupAnagrams = function (strs) {
    const map = new Map();
    for (let str of strs) {
        const sorted = [...str].sort().join("");
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str]);
        }
    }

    return Array.from(map.values());
};

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let strs = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"];


console.log(groupAnagrams(strs));



//////////////////////////////////////////////////////////////////////////// medium HASH 


var topKFrequent = function (nums, k) {
    let hashMap = new Map();
    let array = [];
    let topK = [];

    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            let count = hashMap.get(nums[i]) + 1;
            hashMap.set(nums[i], count);
        } else {
            hashMap.set(nums[i], 1);
        }
    }

    console.log(hashMap);

    for (let [key, value] of hashMap) {
        array[value].push([key]);
    }

    console.log(array);

    for (let i = array.length - 1; i >= 0; i--) {
        if (topK.length < k && array[i] != null || undefined) {
            topK.push(array[i]);
        }
    }

    return topK;

};

//  nums = [1,1,1,2,2,3], k = 2;
//  nums = [1], k = 1;
//  nums = [-1, -1], k = 1;
nums = [1, 2], k = 2;


console.log(topKFrequent(nums, k));



//////////////////////////////////////////////////////////////////////////// medium HASH 


var productExceptSelf = function (nums) {
    let result = [];
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }

    return result;
};

nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums));


//////////////////////////////////////////////////////////////////////////// medium HASH 


var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {

        let arr = board[i].filter(a => a != '.');
        let example = new Set(arr);
        if (example.size != arr.length) {
            return false;
        }

        let coloumn = [];
        for (let k = 0; k < 9; k++) {
            coloumn.push(board[k][i])
        }
        arr = coloumn.filter(a => a != '.');
        example = new Set(arr);
        if (example.size != arr.length) {
            return false;
        }
    }

    let tetr = [];
    for (let k = 0; k < 3; k++) {

        for (let j = 0; j < 3; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 0; k < 3; k++) {

        for (let j = 3; j < 6; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 0; k < 3; k++) {

        for (let j = 6; j < 9; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 3; k < 6; k++) {

        for (let j = 0; j < 3; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 3; k < 6; k++) {

        for (let j = 3; j < 6; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 3; k < 6; k++) {

        for (let j = 6; j < 9; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 6; k < 9; k++) {

        for (let j = 0; j < 3; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 6; k < 9; k++) {

        for (let j = 3; j < 6; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    tetr = [];
    for (let k = 6; k < 9; k++) {

        for (let j = 6; j < 9; j++) {

            tetr.push(board[k][j])
        }
    }
    arr = tetr.filter(a => a != '.');
    example = new Set(arr);
    if (example.size != arr.length) {
        return false;
    }

    return 'good';
};


// better

var isValidSudoku = function (board) {
    const isValidRow = (row) => {
        const rowMap = {};
        for (let i = 0; i < 9; i++) {
            const num = row[i];
            if (num !== '.') {
                if (rowMap[num]) return false;
                rowMap[num] = true;
            }
        }
        return true;
    };

    const isValidColumn = (col) => {
        const colMap = {};
        for (let i = 0; i < 9; i++) {
            const num = board[i][col];
            if (num !== '.') {
                if (colMap[num]) return false;
                colMap[num] = true;
            }
        }
        return true;
    };

    const isValidSubgrid = (startRow, startCol) => {
        const subgridMap = {};
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const num = board[startRow + i][startCol + j];
                if (num !== '.') {
                    if (subgridMap[num]) return false;
                    subgridMap[num] = true;
                }
            }
        }
        return true;
    };

    for (let i = 0; i < 9; i++) {
        if (!isValidRow(board[i]) || !isValidColumn(i)) return false;
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isValidSubgrid(i, j)) return false;
        }
    }

    return true;
};

// let board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board));



//////////////////////////////////////////////////////////////////////////// medium HASH 
let rrr = [1, 2, 3]
let p = new Set(rrr);
let d = JSON.parse(JSON.stringify(p));;
// p.clear();
console.log([] == null);

var longestConsecutive = function (nums) {

    let noDupl = new Set(nums);
    nums = Array.from(noDupl);


    nums.sort((a, b) => a - b);


    // console.log(nums);

    let consNum = [];
    let consTest = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] == nums[i] + 1) {
            console.log(nums[i], nums[i + 1])
            consTest.add(nums[i]);
            consTest.add(nums[i + 1]);
        } else {
            if (consTest.size >= consNum.length) {
                consNum = Array.from(consTest);
            }
            consTest.clear();

            console.log(consNum);
        }
    }

    if (consNum.length == 0 && nums.length != 0) {
        return 1;
    }

    // console.log(consNum);

    return consNum.length;
};

////////////#2

var longestConsecutive = function (nums) {
    let setted = new Set(nums);
    let hash = new Set();
    let secondHash = new Set();

    for (let i = 0; i < nums.length; i++) {

        let variable = nums[i];

        if (!setted.has(variable - 1)) {

            if (secondHash.size >= hash.size) {
                hash.clear();
                hash.add(variable);
            } else {
                secondHash.clear();
                secondHash.add(variable);
            }


            while (true) {
                variable += 1;
                if (setted.has(variable)) {
                    hash.add(variable);
                } else {
                    break;
                }
            }
        }


    }

    console.log(hash, secondHash);

    if (hash.size > secondHash.size) {
        return hash.size;
    } else {
        return secondHash.size;
    }
};

////////////#3 - BEST

var longestConsecutive = (nums, maxScore = 0) => {
    const numSet = new Set(nums);

    for (const num of numSet) {
        const prevNum = num - 1;

        if (numSet.has(prevNum)) continue;
        let [currNum, score] = [num, 1];

        const isStreak = () => numSet.has(currNum + 1)
        while (isStreak()) {
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}

// nums = [100,4,200,1,3,2]; // => 4
// nums = [0,3,7,2,5,8,4,6,0,1]; // => 9
nums = [9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]; // => 4
// nums = [7,-9,3,-6,3,5,3,6,-2,-5,8,6,-4,-6,-4,-4,5,-9,2,7,0,0]; // => 4

console.log(longestConsecutive(nums));









//////////////////////////////////////////////////////////////////////////// easy TWO POINTERS

var isPalindrome = function (s) {

    return s.replace(/[\W_]/g, "").toLowerCase().split('').join('') == s.replace(/[\W_]/g, "").toLowerCase().split('').reverse().join('');
};

/////#2
var isPalindrome = function (s) {
    if (s.length < 1) return true;

    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;

    while (left < right) {
        leftChar = s[left];
        rightChar = s[right];

        if (!/[a-zA-Z0-9]/.test(leftChar)) {
            left++;
        } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
            right--;
        } else {
            if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }


    }

    return true;
};



let tests = ["A man, a plan, a canal: Panama",
    "race a car",
    " ",
    "ab_a"
];

for (let i = 0; i < tests.length; i++) {
    console.log(isPalindrome(tests[i]));
}



//////////////////////////////////////////////////////////////////////////// medium TWO POINTERS



// var twoSum = function(numbers, target) {
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {

//         const sum = numbers[left] + numbers[right];
//         const isTarget = sum === target;

//         if (isTarget) return [left + 1, right + 1];


//         const isGreater = sum > target;
//         if (isGreater) right--;

//         const isLower = sum < target;
//         if (isLower) left++;
//     }
// };


var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) return [left + 1, right + 1];

        if (sum > target) {
            right--;
            continue
        }

        left++
    }
};


numbers = [2, 7, 11, 15], target = 9;
// console.log(numbers.slice(1, 3));
// numbers = [2,3,4], target = 6;
// numbers = [-1,0], target = -1;

console.log(twoSum(numbers, target));


//////////////////////////////////////////////////////////////////////////// medium TWO POINTERS

///////////////// 245/312 - BesTry#1

// var threeSum = function(nums) {

//     console.log(    nums.sort((a,b) => a - b)
//     );
//     nums.sort((a,b) => a - b);
//     let [left, right] = [0, nums.length - 1];
//     let triplets = [];

//     while (left < right) {

//         let sum = nums[left] + nums[right];
//         let variable = new Set (nums.slice(left + 1, right));
//         let on = false;

//         if (variable.has(-sum)) {
//             let G;        
//             if (triplets.length > 0) {
//                 for (let i = 0; i < triplets.length; i++) {
//                     if (JSON.stringify(triplets[i]) == JSON.stringify([nums[left], -sum, nums[right]])) {
//                         G = true;
//                         break;
//                     }
//                 }
//             }

//             if (!G) {
//                 triplets.push([nums[left], -sum, nums[right]]);
//                 on = true;
//             }
//         }

//         // if (on) {
//         //     let numNow = nums[right];
//         //     while (nums[right] >= numNow) {
//         //         right--;
//         //     }
//         //     continue;
//         // }

//         if (sum < 0) {
//             left++;
//             right = nums.length - 1;
//             continue;
//         }

//         right--;
//     }

//     return triplets;
// };


///////////////// Best

var threeSum = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a > 0) break;
        if (i > 0 && a === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const threeSum = a + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
};


nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
// nums = [34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86, 56, 94, 74, 83,
//     -14, 28, -66, 46, -49, 62, -11, 43, 65, 77, 12, 47, 61, 26, 1, 13, 29, 55, -82, 76, 26, 15, -29, 36, -29, 10,
//     -70, 69, 17, 49
// ];
console.log(threeSum(nums));


//////////////////////////////////////////////////////////////////////////// medium TWO POINTERS


var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let sum = Math.min(height[left], height[right]) * ((right) - left);

        max = Math.max(max, sum);

        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return max;
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// height = [1,1]
console.log(maxArea(height));



//////////////////////////////////////////////////////////////////////////// HARD TWO POINTERS

//////////////// TRY 162/322
var trap = function (height) {
    let left = 0;
    let right = 1;
    let water = 0;

    while (left <= height.length) {

        while (height[right] < height[left]) {
            right++;

            if (right >= height.length) {
                left++;
                right = left + 1;
            }
        }

        for (let i = left + 1; i < right; i++) {
            water += height[left] - height[i];
        }

        left = right;
        right++;
    }

    if (water === 0) {
        height.reverse();

        left = 0;
        right = 1;
        water = 0;

        while (left <= height.length) {

            while (height[right] < height[left]) {
                right++;

                if (right >= height.length) {
                    left++;
                    right = left + 1;
                }
            }

            for (let i = left + 1; i < right; i++) {
                water += height[left] - height[i];
            }

            left = right;
            right++;
        }

    }

    return water;
};



/////////////////// BEST
// var trap = function (height) {
//     let maxLeft = [];
//     let maxRight = [];
//     let minLeftRight = [];

//     let current = 0;
//     for (let i = 0; i < height.length; i++) {
//         maxLeft.push(current);
//         current = Math.max(height[i], current);
//     }

//     current = 0;
//     for (let i = height.length - 1; i >= 0; i--) {
//         maxRight.push(current);
//         current = Math.max(height[i], current);
//     }

//     maxRight.reverse();

//     for (let i = 0; i < height.length; i++) {
//         let minMin = Math.min(maxLeft[i], maxRight[i]);
//         minLeftRight.push(minMin);
//     }

//     let water = 0;
//     for (let i = 0; i < height.length; i++) {
//         if (minLeftRight[i] - height[i] > 0) {
//             water += minLeftRight[i] - height[i]
//         }
//     }

//     return water;
// };



// height = [0,1,0,2,1,0,1,3,2,1,2,1];
// height = [4,2,0,3,2,5];
// height = [4, 2, 3];
// height = [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]
// height = 
// height = 

console.log(trap(height));

//////////////////////////////////////////////////////////////////////////// easy HASH


let o = new Map();
o.set(1, 1);
o.set(1, 2);

o.delete(1);

for (let c of o) {
    console.log(c);
}

var numJewelsInStones = function (jewels, stones) {
    let hash = new Map();
    for (let i = 0; i < stones.length; i++) {
        if (hash.has(stones[i])) {
            hash.set(stones[i], hash.get(stones[i]) + 1);
        } else {
            hash.set(stones[i], 1)
        }
    }

    let numOfStones = 0;
    for (let i = 0; i < jewels.length; i++) {
        if (hash.has(jewels[i])) numOfStones += hash.get(jewels[i]);
    }

    return numOfStones;
};

jewels = "aAc", stones = "k"
console.log(numJewelsInStones(jewels, stones));


//////////////////////////////////////////////////////////////////////////// medium HASH


var setZeroes = function (matrix) {
    let arr = matrix.join(',').split(',');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {

            for (let k = 0; k < matrix.length; k++) {
                matrix[k][i % matrix[0].length] = 0
            }

            for (let j = 0; j < matrix[0].length; j++) {
                matrix[Math.floor(i / matrix[0].length)][j] = 0;
            }
        }
    }

    return matrix;
};

matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
console.log(setZeroes(matrix));



//////////////////////////////////////////////////////////////////////////// easy Two Pointers

////
var removeDuplicates = function (nums) {
    let i = 0;
    let setOfNums = new Set(nums);

    console.log(nums);
    setOfNums.forEach((a) => {
        nums[i] = a;
        i++;
    })
    console.log(nums);
    return i;
}


////
var removeDuplicates = (nums) => {
    let [left, right] = [0, 0];

    while (right < nums.length) {
        const [leftVal, rightVal] = [nums[left], nums[right]];

        const isEqual = (rightVal === leftVal);
        if (!isEqual) {
            left++;
            nums[left] = rightVal;
        }

        right++;
    }
    console.log(nums);
    return (left + 1);
};

// nums = [0,0,1,1,1,2,2,3,3,4];
// nums = [1,1,1,2,2,3];
// nums = [0,0,1,1,1,1,2,3,3];
nums = [1, 1];

console.log(removeDuplicates(nums));





//////////////////////////////////////////////////////////////////////////// medium Two Pointers II 


var removeDuplicates = (nums) => {
    let [left, right] = [0, 0];
    let i;

    while (right < nums.length) {
        const [leftVal, rightVal] = [nums[left], nums[right]];
        const isEqual = (rightVal === leftVal);

        if (!isEqual) {
            if (right - left > 2) {
                left += 2;
                i = right;
                right = left;

                while (i < nums.length) {
                    nums[right] = nums[i];
                    i++;
                    right++
                }

                right = left;

            } else {
                left = right;
            }
        }
        right++;
    }

    if (nums[nums.length - 1] == nums[nums.length - 2]) {
        left++;
    }
    console.log(nums);
    return (left + 1);
};

// nums = [0,0,1,1,1,2,2,3,3,4];
nums = [1, 1, 1, 2, 2, 3];
// nums = [0,0,1,1,1,1,2,3,3];
// nums = [1,1];
// nums =
// nums =
// nums =
console.log(removeDuplicates(nums));


//////////////////////////////////////////////////////////////////////////// easy Hash 

var numIdenticalPairs = function (nums) {
    let hash = new Map();
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }

    hash.forEach((a) => {
        if (a >= 2) {
            for (let i = 1; i < a; i++) {
                sum += i;
            }
        }
    })



    return sum;
};

// nums = [1,2,3,1,1,3]
// nums = [1,1,1,1];
nums = [1, 2, 3];
console.log(numIdenticalPairs(nums));


//////////////////////////////////////////////////////////////////////////// easy Hash 

var smallerNumbersThanCurrent = function (nums) {
    let hash = new Map();
    let arr = [...nums];
    let sum = 0;
    nums.sort((a, b) => a - b);


    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }

    for (let [key, value] of hash) {
        hash.set(key, sum);
        sum += value;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = hash.get(arr[i])
    }

    return arr;
};

nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers 

// does not work fully
var arithmeticTriplets = function (nums, diff) {
    let [left, right] = [0, 1];
    let arr = [];

    while (left < right) {
        if (nums.length > 3 && nums[left] == 0) {
            left++;
            right++;
            continue;
        }

        if (nums[right] - nums[left] == diff) {
            arr.push(nums[left], nums[right]);
            right++;
            left++;
            continue;
        }

        if (nums[right] - nums[left] < diff) {
            right++;
        } else {
            left++;
        }
    }

    return arr;
    // return Math.floor(arr.length / 3);

};


//
var arithmeticTriplets = function (nums, diff) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let first = nums[left] - nums[i];
            let second = nums[right] - nums[left];

            if (first === diff && second === diff) {
                count++;
                left++;
                right--;
            } else if (first < diff) {
                left++;
            } else {
                right--;
            }
        }
    }

    return count;
};

nums = [0, 1, 4, 6, 7, 10], diff = 3;
// nums = [4,5,6,7,8,9], diff = 2;
// nums = [0,1,2], diff = 1;
// nums = [0,4,5,7,9], diff = 5;
// nums = [0,2,3,4,7], diff = 2;
console.log(arithmeticTriplets(nums, diff));


//////////////////////////////////////////////////////////////////////////// easy Hash

var isHappy = function (n) {
    let set = new Set();
    let sum = 0;

    while (n > 1) {
        n = n.toString().split('');

        for (let i = 0; i < n.length; i++) {
            sum += n[i] * n[i]
        }

        if (!set.has(sum)) {
            set.add(sum);
        } else {
            return false;
        }

        n = sum;
        sum = 0;
    }
    return true;
};

n = 2;
console.log(isHappy(n));


//////////////////////////////////////////////////////////////////////////// medium Hash

/// otvratno no rabotaet
var lengthOfLongestSubstring = function (s) {
    let hash = new Set();
    let count = 0;
    let base = 0;

    for (let i = 0; i < s.length; i++) {
        if (!hash.has(s[i])) {
            hash.add(s[i]);
            count++;
            console.log(s[i])
        } else {
            if (count >= 2) {
                for (let j = 1; j < count; j++) {
                    i--;
                }
            }

            if (count > base) {
                base = count;
            }

            hash.clear();
            count = 0;
            hash.add(s[i])
            count++;
        }
    }

    if (count > base) {
        return count;
    }
    return base;
};


// BEST

var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let set = new Set();
    let ans = 0,
        i = 0,
        j = 0;

    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        } else {
            set.delete(s[i++]);
        }
    }

    return ans;
};


// s = "abcabcbb";
// s = "bbbbb"
// s = "pwwkew";
s = "au";
// s = "dvdf";

console.log(lengthOfLongestSubstring(s));



//////////////////////////////////////////////////////////////////////////// medium Hash

var partitionLabels = function (s) {
    let set = new Set([...s]);
    let charArr = [];
    let partitionArr = []

    for (let value of set) {
        charArr.push([s.indexOf(value), s.lastIndexOf(value)]);
    }

    partitionArr.push(charArr[0]);
    for (let i = 1, j = 0; i < charArr.length; i++) {

        if (charArr[i][0] < partitionArr[j][1]) {

            if (charArr[i][1] > partitionArr[j][1]) {
                partitionArr[j][1] = charArr[i][1];
            }

            continue;
        }

        partitionArr.push(charArr[i]);
        j++;
    }

    for (let i = 0; i < partitionArr.length; i++) {
        partitionArr[i] = partitionArr[i][1] - partitionArr[i][0] + 1;

    }

    return partitionArr;
};


// s = "ababcbacadefegdehijhklij";
s = "eccbbbbdec";
// s = 
// s = 

console.log(partitionLabels(s));




//////////////////////////////////////////////////////////////////////////// easy Stack


var isValid = function (s, stack = []) {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        const isInMap = (char in map);
        if (!isInMap) {
            stack.push(char);
            continue;
        }

        const isEqual = (stack[stack.length - 1] === map[char]);
        if (isEqual) {
            stack.pop();
            continue
        }

        return false;
    }

    return true;
};


var isValid = (s, stack = []) => {
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (const char of s) {
        /* Time O(N) */
        const isBracket = (char in map)
        if (!isBracket) {
            stack.push(char);
            continue;
        } /* Space O(N) */

        const isEqual = (stack[stack.length - 1] === map[char])
        if (isEqual) {
            stack.pop();
            continue;
        }

        return false;
    }

    return (stack.length === 0);
}

// s = "()[]{}";
// s = "(]";
s = "[";
console.log(isValid(s));


// stack = [];
// let isEmpty = !stack.length;
// console.log(isEmpty);


//////////////////////////////////////////////////////////////////////////// medium Stack

//////#1
class MinStack {
    constructor() {
        this.head = null;
    }

    push(val) {
        this.head = (!this.head) ?
            new Node(val, val, null) :
            new Node(val, Math.min(val, this.head.min, this.head))
    }

    pop() {
        this.head = this.head.next;
    }

    top() {
        return this.head.val;
    }

    getMin() {
        return this.head.min;
    }
}

class Node {
    constructor(val, min, next) {
        this.val = val;
        this.min = min;
        this.next = next;
    }
}


///////#2


class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val, {
        minStack
    } = this) {
        this.stack.push(val);

        const isMinEmpty = !this.minStack.length;
        const hasNewMin = val <= this.top(minStack);
        const addMin = isMinEmpty || hasNewMin;
        if (addMin) this.minStack.push(val);
    }
}


//////////////////////////////////////////////////////////////////////////// medium Stack

var evalRPN = function (tokens) {
    let stack = [];
    let num;

    for (let char of tokens) {

        switch (char) {
            case "+":
                num = stack.pop() + stack.pop();
                stack.push(num);
                break;

            case "-":
                num = stack.pop();
                num = stack.pop() - num;
                stack.push(num);
                break;

            case "*":
                num = stack.pop() * stack.pop();
                stack.push(num);
                break;

            case "/":
                num = stack.pop();
                num = stack.pop() / num;
                if (num <= 0) {
                    stack.push(Math.ceil(num));
                } else {
                    stack.push(Math.floor(num));
                }

                break;

            default:
                stack.push(+char);

        }
    }

    return stack[0];
};



// tokens = ["2","1","+","3","*"];
tokens = ["4", "13", "5", "/", "+"];
// tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
// tokens = ["0", "3", "/"];

console.log(evalRPN(tokens));


//////////////////////////////////////////////////////////////////////////// easy Hash


var countPoints = function (rings) {
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < rings.length; i++) {
        if (!/\D/.test(rings[i])) {
            if (!hash.has(rings[i])) {
                hash.set(rings[i], rings[i - 1])
            } else {
                hash.set(rings[i], hash.get(rings[i]) + rings[i - 1])
            }
        }
    }

    hash.forEach((value) => {
        if (value.includes("B") && value.includes("R") && value.includes("G")) {
            count++;
        }
    });

    return count;
};

// rings = "B0B6G0R6R0R6G9";
// rings = "B0R0G0R9R0B0G0";
rings = "G4";

console.log(countPoints(rings));


//////////////////////////////////////////////////////////////////////////// medium Stack


////////////// TRY 39/48 - timeout
var dailyTemperatures = function (temperatures) {
    let stack = [];
    const daysToWarm = [];

    stack.push(temperatures[0]);

    for (let i = 1; i < temperatures.length; i++) {
        let variable = i;

        if (temperatures[i] >= temperatures[i - 1]) {
            // console.log(temperatures[i]);
            daysToWarm.push(stack.length);
            stack.pop();
            stack.push(temperatures[i]);
            continue;
        }

        while (temperatures[i - 1] > temperatures[variable]) {
            stack.push(temperatures[variable]);
            variable++;
        }

        if (variable != temperatures.length || temperatures[variable] > temperatures[i - 1]) {
            // console.log(variable);
            daysToWarm.push(stack.length);
            stack = [];
            stack.push(temperatures[i]);
        } else {
            stack = [];
            daysToWarm.push(0);
            stack.push(temperatures[i]);
            // console.log(daysToWarm + '  fffff');
        }


    }
    daysToWarm.push(0);
    // console.log(stack);
    // console.log(daysToWarm);
    return daysToWarm;
};



////////////// best    Time O(N) | Space O(N)

var dailyTemperatures = function (temperatures, stack = []) {
    const days = Array(temperatures.length).fill(0);

    for (let day = 0; day < temperatures.length; day++) {
        /* Time O(N + N) */
        while (canShrink(stack, temperatures, day)) {
            /* Time O(N + N) */
            const prevColdDay = stack.pop();
            const daysToWait = (day - prevColdDay);

            days[prevColdDay] = daysToWait; /* Ignore Space O(N) */
        }

        stack.push(day);
        console.log(stack); /* Space O(N) */
    }

    return days;
};

const canShrink = (stack, temperatures, day) => {
    const previousDay = stack[stack.length - 1];
    const [prevTemperature, currTemperature] = [temperatures[previousDay], temperatures[day]];
    const isWarmer = prevTemperature < currTemperature;

    return stack.length && isWarmer;
}

// temperatures = [55,38,53,81,61,93,97,32,43,78];
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// temperatures = [30,40,50,60];
// temperatures = [30,60,90];
// temperatures = [89,62,70,58,47,47,46,76,100,70];

console.log(dailyTemperatures(temperatures));



//////////////////////////////////////////////////////////////////////////// easy Two Pointers


var moveZeroes = function (nums) {
    let [left, right] = [0, 1];

    while (right <= nums.length - 1) {
        if (nums[left] === 0 && nums[right] === 0) {
            right++;
            continue;
        }

        // console.log(nums +' left: ' + left + '    right  ' + right);

        if (nums[left] === 0 && nums[right] > 0) {
            nums[left] = nums[right];
            nums[right] = 0;

        }

        right++;
        left++;
    }

    // console.log(nums +' left: ' + left + '    right  ' + right);
    console.log(nums);
};

// nums = [0,1,0,3,12];
nums = [0, 0, 0, 0, 4, 8, 0, 0, 6, 3, 6, 7, 7, 0, 0, 8, 9, 0, 7];
// nums = [1,0,1];


console.log(moveZeroes(nums));


//////////////////////////////////////////////////////////////////////////// easy Hash Table


var checkIfPangram = function (sentence) {
    let set = new Set(sentence);
    return set.size === 26;
};

sentence = "thequickbrownferthelazydog";
console.log(checkIfPangram(sentence));



//////////////////////////////////////////////////////////////////////////// easy Hash Table

////// BAD 8%
var countConsistentStrings = function (allowed, words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let set = new Set([...allowed, ...words[i]]);
        if (set.size == allowed.length) {
            count++;
        }
    }

    return count;
};

////// BEST 
var countConsistentStrings = function (allowed, words) {
    const re = new RegExp(`^[${allowed}]+$`);
    let count = 0

    words.forEach(word => {
        if (word.match(re)) count++
    })

    return count;
};
// allowed = "ab", words = ["ad","bd","aaab","baa","badab"];
// allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];
allowed = "cad", words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];

console.log(countConsistentStrings(allowed, words));



//////////////////////////////////////////////////////////////////////////// easy Hash Table

///66ms

var sortPeople = function (names, heights) {
    let hash = new Map();
    let sortedNames = [];

    for (let i = 0; i < names.length; i++) {
        hash.set(heights[i], names[i]);
    }

    console.log(hash);

    heights.sort((a, b) => b - a);

    for (let i = 0; i < names.length; i++) {
        sortedNames.push(hash.get(heights[i]));
    }

    return sortedNames;
};

///70ms
// var sortPeople = function(names, heights) {
//     let hash = new Map(Object.entries(heights));
//     let answ = [];

//     heights.sort((a,b) => b - a);

//     for (let [key, value] of hash) {
//         answ[heights.indexOf(value)] = names[+key];
//     }

//     return answ;
// };

names = ["Mary", "John", "Emma"], heights = [180, 165, 170];
// names = ["Alice","Bob","Bob"], heights = [155,185,150];


console.log(sortPeople(names, heights));



//////////////////////////////////////////////////////////////////////////// easy Hash Table


var maximumNumberOfStringPairs = function (words) {
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (!hash.has(words[i].split('').sort().join(''))) {
            hash.set(words[i].split('').sort().join(''), 0);
        } else {
            count++;
        }
    }

    return count;
};

// words = ["cd","ac","dc","ca","zz"];
// words = ["ab","ba","cc"];
words = ["aa", "ab"];
// console.log(words[3].split('').sort().join(''));

console.log(maximumNumberOfStringPairs(words));


//////////////////////////////////////////////////////////////////////////// easy Hash Table

/// 84%
var areOccurrencesEqual = function (s) {
    let hash = new Map();
    let testOfEqual = true;

    for (let char of s) {
        if (hash.has(char)) {
            hash.set(char, (hash.get(char) + 1))
        } else {
            hash.set(char, 1)
        }
    }

    let num = hash.get(s[0]);

    hash.forEach((value) => {
        if (value != num) {
            testOfEqual = false;
        }
    })

    return testOfEqual;

};


//Best 88%
var areOccurrencesEqual = function (s) {
    const map = new Map();
    const set = new Set();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (const quantity of map.values()) {
        console.log(quantity);
        set.add(quantity);
    }
    console.log(set);
    return set.size === 1
};

// s = "abacbc";
s = "aaabb";

console.log(areOccurrencesEqual(s));


//////////////////////////////////////////////////////////////////////////// easy Hash Table

var distinctDifferenceArray = function (nums) {
    let answ = [];

    for (let i = 0; i < nums.length; i++) {

        let prefix = [...new Set(nums.slice(0, i + 1))];
        let postfix = [...new Set(nums.slice(i + 1))];

        console.log(prefix, postfix, `   :::${i}`);
        answ[i] = prefix.length - postfix.length;
    }

    return answ;
};


// nums = [1,2,3,4,5];
nums = [3, 2, 3, 4, 2];


console.log(distinctDifferenceArray(nums));


//////////////////////////////////////////////////////////////////////////// easy Hash Table


var countKDifference = function (nums, k) {
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }


    for (let i = 0; i < nums.length; i++) {
        count += hash.get(nums[i] - k) || 0;
    }

    return count;
};

// nums = [1,2,2,1], k = 1;
// nums = [3,2,1,5,4], k = 2;
nums = [1, 3], k = 3;
console.log(countKDifference(nums, k));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers

var makeSmallestPalindrome = function (s) {
    let [left, right] = [0, s.length - 1];
    s = s.split('');

    while (left < right) {

        if (s[left] == s[right]) {
            right--;
            left++;
            continue;
        }

        if (s[left] > s[right]) {
            s[left] = s[right];
            right--;
            left++;
            continue;
        } else {
            s[right] = s[left];
            right--;
            left++;
        }
    }
    return s.join('');
};


// s = "egcfe";
// s = "abcd";
s = "seven";

console.log(makeSmallestPalindrome(s));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers


var flipAndInvertImage = function (image) {
    let left;
    let right;

    image.forEach((a) => {
        left = 0;
        right = a.length - 1;

        while (left <= right) {

            if (a[right] == 0) {

                if (a[left] == 0) {
                    a[right] = 1;
                } else {
                    a[right] = 0;
                }

                a[left] = 1;
            } else {

                if (a[left] == 0) {
                    a[right] = 1;
                } else {
                    a[right] = 0;
                }

                a[left] = 0;
            }

            right--;
            left++;
        }
    });

    return image;
};

// image = [[1,1,0],[1,0,1],[0,0,0]];
image = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
];

console.log(flipAndInvertImage(image));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers

var mergeAlternately = function (word1, word2) {

    let theNewWord = [];

    for (let i = 0; i < word1.length + word2.length; i++) {
        theNewWord.push(word1[i]);
        theNewWord.push(word2[i]);
    }

    return theNewWord.join('');
};

// word1 = "abc", word2 = "pqr";
word1 = "ab", word2 = "pqrs";
console.log(mergeAlternately(word1, word2));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers

var reversePrefix = function (word, ch) {
    let [left, right] = [0, word.indexOf(ch)];
    let thirdChar;
    let arr = [...word];

    while (left < right) {
        thirdChar = arr[left];
        arr[left] = arr[right];
        arr[right] = thirdChar;

        left++;
        right--;
    }

    return arr.join('');
};

// word = "abcdefd", ch = "d";
word = "xyxzxe", ch = "z";

console.log(reversePrefix(word, ch));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers

var firstPalindrome = function (words) {
    let left;
    let right;
    let indicator;


    for (let i = 0; i < words.length; i++) {
        left = 0;
        right = words[i].length - 1;
        indicator = true;

        while (left <= right) {
            if (words[i][left] != words[i][right]) {
                indicator = false;
            }

            left++;
            right--;
        }

        if (indicator) {
            return words[i];
        }
    }

    return "";
};

// words = ["abc","car","ada","racecar","cool"];
// words = ["notapalindrome","racecar"];
// words = ["def","ghi"];

console.log(firstPalindrome(words));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers

var diStringMatch = function (s) {
    let [left, right] = [0, s.length];
    let perm = [];

    for (let i = 0; i <= s.length; i++) {
        if (s[i] == 'I') {
            perm.push(left);
            left++;
            continue;
        } else {
            perm.push(right);
            right--;
        }
    }

    return perm;
};

// s = "IDID";
// s = "III";
s = "DDI";

console.log(diStringMatch(s));


//////////////////////////////////////////////////////////////////////////// easy Two Pointers

var reverseString = function (s) {
    let thirdChar;

    for (let left = 0, right = s.length - 1; left <= right; left++, right--) {
        thirdChar = s[left];
        s[left] = s[right];
        s[right] = thirdChar;
    }

};

// s = ["h","e","l","l","o"];
s = ["H", "a", "n", "n", "a", "h"];

console.log(reverseString(s));


//////////////////////////////////////////////////////////////////////////// medium Stack

/// try
// var carFleet = function (target, position, speed) {
//     let fleet = 0;
//     let stack = [];
//     let hash = new Map();
//     for (let i = 0; i < position.length; i++) {
//         hash.set(position[i], speed[i]);
//     }
//     position.sort((a, b) => b - a);
//     for (let i = 0; i < speed.length; i++) {
//         speed[i] = hash.get(position[i]);
//     }

//     console.log(hash);

//     while (position.length > 0) {

//         console.log(speed, position, stack);

//         for (let i = 0; i < position.length; i++) {
//             if (i > 0 && position[i] + speed[i] > position[i - 1]) {
//                 // position[i] = position[i - 1];
//                 speed[i] = speed[i - 1] + 1;
//             } else {
//                 position[i] += speed[i];
//             }
//         }

//         for (let i = 0; i < position.length; i++) {
//             if (position[i] >= target) {
//                 stack.push(position[i]);
//                 position.shift();
//                 speed.shift();
//                 i--;
//             }
//         }



//         if (stack.length > 0) {
//             let set = new Set(stack);
//             for (let i = 0; i < set.size; i++) {
//                 fleet++;
//             }
//             stack = [];
//         }
//     }
//     return fleet;
// };

///

var carFleet = function (target, position, speed) {
    const coordinates = getCoordinates(target, position, speed); /* Time O(N * log(N)) | Space O(N) */
    // console.log(coordinates);
    return searchAscending(coordinates); /* Time O(N)          | Space O(N) */
};

var getCoordinates = (target, position, speed) => position
    .map((_position, index) => [_position, speed[index]]) /* Time O(N)          | Space O(N) */
    .sort(([aPosition], [bPosition]) => aPosition - bPosition) /* Time O(N * log(N)) | HeapSort Space 0(1) | QuickSort Space O(log(N)) */
    .map(([_position, _speed]) => (target - _position) / _speed); /* Time O(N)          | Space O(N) */

var searchAscending = (coordinates, stack = []) => {
    for (const coordinate of coordinates) {
        /* Time O(N + N) */
        shrink(coordinate, stack); /* Time O(N + N) */
        stack.push(coordinate); /* Space O(N) */
        console.log(stack);
    }

    return stack.length;
}

const shrink = (coordinate, stack) => {
    const isPreviousLess = () => stack[stack.length - 1] <= coordinate;
    while (stack.length && isPreviousLess()) stack.pop(); /* Time O(N + N) */
}


target = 31, position = [5, 26, 18, 25, 29, 21, 22, 12, 19, 6], speed = [7, 6, 6, 4, 3, 4, 9, 7, 6, 4];
// target = 12, position = [10, 8, 0, 5, 3], speed = [2, 4, 1, 1, 3];
// target = 10, position = [8,3,7,4,6,5], speed = [4,4,4,4,4,4];
// target = 100, position = [0,2,4], speed = [4,2,1];
// target = 10, position = [3], speed = [3];
console.log(carFleet(target, position, speed));


//////////////////////////////////////////////////////////////////////////// easy Stack

var maxDepth = function (s) {
    let stack = [];
    s = s.split('');
    let maxSize = 0;
    const reg = new RegExp(/[^()]+/);

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            stack.pop();
        }

        if (reg.test(s[i]) && stack.length > maxSize) {
            maxSize = stack.length;
        }
    }
    return maxSize;
};

// s = "(1+(2*3)+((8)/4))+1";
s = "(1)+((2))+(((3)))";

console.log(maxDepth(s));


//////////////////////////////////////////////////////////////////////////// easy Stack

var removeOuterParentheses = function (s) {
    let [left, right] = [0, 0];
    let stack = [];
    let clearParentheses = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
            left++
        } else {
            stack.push(')');
            right++;
        }
        if (left === right) {
            clearParentheses.push(...stack.slice(1, stack.length - 1))

            stack = [];
        }
    }
    return clearParentheses.join('');
};


// s = "(()())(())";
// s = "(()())(())(()(()))";
s = "()()";

console.log(removeOuterParentheses(s));


//////////////////////////////////////////////////////////////////////////// easy Stack

var backspaceCompare = function (s, t) {
    let stackS = [];
    let stackT = [];
    let length = s.length > t.length ? s.length : t.length;

    for (let i = 0; i < length; i++) {

        if (s[i] == '#') {
            stackS.pop();
        }

        if (t[i] == '#') {
            stackT.pop();
        }

        if (s[i] != '#') {
            stackS.push(s[i]);
        }

        if (t[i] != '#') {
            stackT.push(t[i]);
        }

    }


    return stackS.join('') == stackT.join('');
};

// s = "ab#c", t = "ad#c";
s = "a#c", t = "b";
// s = "ab##", t = "c#d#";


console.log(backspaceCompare(s, t));


//////////////////////////////////////////////////////////////////////////// easy Stack

var makeGood = function (s) {
    let stack = [''];

    for (let c of s) {
        let top = stack[stack.length - 1];

        if (top.toLowerCase() === c.toLowerCase() && top !== c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }

    return stack.join('');
};

s = "leEeetcode"

console.log(makeGood(s));


//////////////////////////////////////////////////////////////////////////// medium Hash

var groupThePeople = function (groupSizes) {
    let hash = new Map();
    let groups = [];

    for (let i = 0; i < groupSizes.length; i++) {

        if (hash.has(groupSizes[i])) {
            hash.get(groupSizes[i]).push(i);
        } else {
            hash.set(groupSizes[i], [i]);
        }

        if (hash.get(groupSizes[i]).length === groupSizes[i]) {
            groups.push(hash.get(groupSizes[i]));
            hash.set(groupSizes[i], []);
        }

    }

    return groups;
};


groupSizes = [3, 3, 3, 3, 3, 1, 3];

console.log(groupThePeople(groupSizes));


//////////////////////////////////////////////////////////////////////////// medium Hash

var findMatrix = function (nums) {
    let hash = new Map();
    let arr = [];

    for (let i = 0; i < nums.length; i++) {

        if (!hash.has(nums[i])) {

            hash.set(nums[i], 0);
            if (typeof (arr[0]) == 'object') {
                arr[0].push(nums[i])
            } else {
                arr[0] = [nums[i]];
            }

        } else {

            hash.set(nums[i], hash.get(nums[i]) + 1);

            if (typeof (arr[hash.get(nums[i])]) == 'object') {
                arr[hash.get(nums[i])].push(nums[i])
            } else {
                arr[hash.get(nums[i])] = [nums[i]];
            }

            // console.log(arr + ' ::::   ' + i);
        }
    }

    return arr;
};

// nums = [1,3,4,1,2,3,1];
nums = [1, 2, 3, 4];

console.log(findMatrix(nums));


//////////////////////////////////////////////////////////////////////////// medium Hash

/// BAD BAD BAD BAD
// var findThePrefixCommonArray = function(A, B) {
//     let hashA = new Map();
//     let hashB = new Map();
//     let prefComArr = [];
//     let commonNum = 0

//     for(let i = 0; i < A.length; i++) {
//         hashA.set(A[i], (hashA.get(A[i]) || 0) + 1);
//         hashB.set(B[i], (hashB.get(B[i]) || 0) + 1);

//         if (B[i] == A[i]) {
//             commonNum += 1;
//             prefComArr.push(commonNum);
//             continue;
//         }

//         if (hashA.has(B[i])) {
//             commonNum += hashA.get(B[i]);
//         }

//         if (hashB.has(A[i])) {
//             commonNum += hashB.get(A[i]);
//         }

//         prefComArr.push(commonNum);
//         console.log(commonNum);

//     }

//     return prefComArr;
// };


/// DEST
var findThePrefixCommonArray = function (A, B) {
    let set = new Set()
    let res = []
    let count = 0

    for (let i = 0; i < A.length; i++) {
        if (set.has(A[i])) {
            count++
        } else set.add(A[i])

        if (set.has(B[i])) {
            count++
        } else set.add(B[i])

        res.push(count)
    }
    return res
};

A = [1, 3, 2, 4], B = [3, 1, 2, 4];
// A = [2,3,1], B = [3,1,2];

console.log(findThePrefixCommonArray(A, B));


//////////////////////////////////////////////////////////////////////////// medium Hash

// 96%
var findingUsersActiveMinutes = function (logs, k) {
    let hash = new Map();
    let UAM = new Array(k).fill(0);

    for (let i = 0; i < logs.length; i++) {
        if (hash.has(logs[i][0])) {
            hash.get(logs[i][0]).push(logs[i][1]);
        } else {
            hash.set(logs[i][0], [logs[i][1]]);
        }
    }

    for (let value of hash.values()) {
        let set = new Set(value);
        UAM[set.size - 1] += 1;
    }

    return UAM;
};


// Best
var findingUsersActiveMinutes = function (logs, k) {
    let res = new Array(k).fill(0);
    let map = new Map();
    for (let log of logs) {
        if (!map.has(log[0])) {
            map.set(log[0], new Set());
        }
        map.get(log[0]).add(log[1]);
    }
    let vals = map.values();
    for (let val of vals) {
        res[val.size - 1]++;
    }
    return res;
};

logs = [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3]
], k = 5;
// logs = [[1,1],[2,2],[2,3]], k = 4;

console.log(findingUsersActiveMinutes(logs, k));


//////////////////////////////////////////////////////////////////////////// easy JS

var reduce = function (nums, fn, init) {

    if (nums.length === 0) {
        console.log(nums.length);
        return init;
    }

    let accum = init;
    let curr;

    for (let i = 0; i < nums.length; i++) {
        curr = nums[i];
        accum = fn(accum, curr);
    }

    return accum;
};

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
    return accum + curr;
};
init = 0;

// nums = [0];
// fn = function sum(accum, curr) { return 0; };
// init = 25;

console.log(reduce(nums, fn, init));


//////////////////////////////////////////////////////////////////////////// easy JS

var compose = function (functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

// const carma = compose([x => x + 1, x => x * x, x => 2 * x]);
// console.log(carma(4));

const carma = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(carma(1));


//////////////////////////////////////////////////////////////////////////// medium JS

var memoize = function (fn) {
    let hash = new Map();
    let callcount = 0;

    return function (...args) {

        if (!hash.has(`${args}`)) {

            hash.set(`${args}`, fn(...args));
            callcount++;
        }

        return hash.get(`${args}`);
    }
};

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2));

//////////////////////////////////////////////////////////////////////////// medium Two Pointers

var pivotArray = function (nums, pivot) {
    let l = nums.length;
    let output = [];

    let i = 0;
    let j = l - 1;


    let L = 0;
    let R = l - 1;

    while (i < l) {
        if (nums[i] < pivot) output[L++] = nums[i];
        if (nums[j] > pivot) output[R--] = nums[j];

        i++;
        j--;
    }


    while (L <= R) {
        output[L++] = pivot;
    }

    return output;
};

nums = [9, 12, 5, 10, 14, 3, 10], pivot = 10;

console.log(pivotArray(nums, pivot));


//////////////////////////////////////////////////////////////////////////// easy JS

const cancellable = function (fn, args, t) {
    const cancelFn = function () {
        clearTimeout(timer);
    };
    const timer = setTimeout(() => {
        fn(...args)
    }, t);
    return cancelFn;
};


// let fn = (x) => x * 5, args = [2], t = 20, cancelT = 50;
// console.log(cancellable(fn, args, t));

// const cancel = cancellable(fn, args, t);
// console.log(cancel);


// const result = [];
// const fn = (x) => x * 5;
// const args = [2], t = 20, cancelT = 50;

// const start = performance.now();

// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)});
// };

// const cancel = cancellable(log, args, t);
// const maxT = Math.max(t, cancelT);

// setTimeout(() => {
//    cancel()
// }, cancelT);

// setTimeout(() => {
//    console.log(result) // [{"time":20,"returned":10}]
// }, maxT + 15);


/////////////////////// JS

var chunk = function (arr, size) {
    let chunked = [];
    let bufferedNums = [];
    for (let i = 0, j = 0; i < arr.length; i++, j++) {
        if (j == size) {
            chunked.push(bufferedNums);
            bufferedNums = [];
            j = 0;
        }

        bufferedNums.push(arr[i]);
    }

    if (bufferedNums.length) {
        chunked.push(bufferedNums);
    }

    return chunked;
};

///
var chunk = function (arr, size) {
    let res = []
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size))
    }
    return res
};

// arr = [1,2,3,4,5], size = 1;
arr = [1, 9, 6, 3, 2], size = 3;
// arr = [8,5,3,2,6], size = 6;

console.log(chunk(arr, size));

/////////////// JS

Array.prototype.groupBy = function (fn) {
    let hash = new Map();

    for (let i = 0; i < this.length; i++) {
        if (!hash.has(fn(this[i]))) {
            hash.set(fn(this[i]), [this[i]]);
        } else {
            hash.get(fn(this[i])).push(this[i]);
        }
    }

    return Object.fromEntries(hash.entries());
};

array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];

fn = function (list) {
    return String(list[0]);
};

console.log(array.groupBy(fn));

/////////////// JS

var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// arr = [5, 4, 1, 2, 3], fn = (x) => x;
arr = [{
    "x": 1
}, {
    "x": 0
}, {
    "x": -1
}], fn = (d) => d.x;

console.log(sortBy(arr, fn));


/////////////// JS

var join = function (arr1, arr2) {
    let result = {};

    arr1.forEach(item => {
        result[item.id] = item;
    });

    arr2.forEach(item => {
        if (result[item.id]) {
            Object.keys(item).forEach(key => {
                result[item.id][key] = item[key];
            });
        } else {
            result[item.id] = item;
        }
    });

    return Object.values(result);
};

arr1 = [{
    "id": 1,
    "b": {
        "b": 94
    },
    "v": [4, 3],
    "y": 48
}];
arr2 = [{
    "id": 1,
    "b": {
        "c": 84
    },
    "v": [1, 3]
}];


console.log(join(arr1, arr2));


// BEST
var join = function (arr1, arr2) {
    const all = arr1.concat(arr2);
    const obj = {};
    all.forEach(el => {
        if (!obj[el.id]) {
            obj[el.id] = el;
            return;
        }
        Object.assign(obj[el.id], el)
    });

    return Object.values(obj);
};


//////////////// JS

var flat = function (arr, n) {
    if (n == 0) {
        return arr;
    }

    let array = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (typeof (arr[j]) == 'object') {
                array.push(...arr[j])
            } else {
                array.push(arr[j]);
            }
        }

        arr = array;
        array = [];
    }

    return arr;
};

arr = [1, 2, 3, [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15]
];
n = 6;

console.log(flat(arr, n));


//////////////// JS
var compactObject = function (obj) {
    let sortedArr = [];

    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i]) || obj[i] instanceof Object) {
                sortedArr.push(compactObject(obj[i]));
                continue;
            }

            if (obj[i]) {
                sortedArr.push(obj[i]);
            }
        }
        return sortedArr;
    } else {
        obj = Object.entries(obj);

        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i][1]) || obj[i][1] instanceof Object) {
                sortedArr.push(compactObject(obj[i]));
                continue;
            }

            if (obj[i][1]) {
                sortedArr.push(obj[i]);
            }
        }
        return Object.fromEntries(sortedArr);
    }
};


// obj = {"o":11,"a":68,"m":18,"v":true,"b":false,"h":null,"r":false,"p":93,"l":true,"k":"","n":79,"f":18,"u":null,"j":null,"e":null,"z":{"d":true,"t":null,"o":21,"w":null,"m":82,"k":35,"l":26,"r":45,"b":false,"z":0,"i":null,"c":33,"p":69,"j":27,"e":53,"q":97,"h":true,"a":true,"n":true,"f":73,"u":null},"w":12,"y":0,"q":"","t":null,"s":true,"x":false,"c":true,"i":false,"g":29};
console.log(compactObject(obj));


var compactObject = function (obj) {
    if (!obj) return false;

    if (typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
        const compact = [];
        for (const el of obj) {
            const value = compactObject(el);
            if (value) compact.push(value);
        }
        return compact;
    };

    const compact = {};
    for (const key in obj) {
        const value = compactObject(obj[key]);
        if (value) compact[key] = value;
    }
    return compact;
};



/////////////////// JS

var ArrayWrapper = function (nums) {
    this.nums = nums;
};


ArrayWrapper.prototype.valueOf = function () {
    return this.nums[0] + this.nums[1];
}


ArrayWrapper.prototype.toString = function () {
    return `[${this.nums}]`;
}

one = new ArrayWrapper([1, 2]);
console.log(one.valueOf());
console.log(one.toString());


arr = [];
console.log(arr.length);


/////////////////// JS


class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.value /= value;
        return this;
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}

num = new Calculator(5);
num.add(1).subtract(1).divide(5).multiply(5);
console.log(num.getResult());



//////////////////////////// JS

b = function cb (a, b) {
    return a;
}

console.log(b);

class EventEmitter {
    constructor () {
        this.events = new Map();
    }

    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, [cb]);
        } else {
            this.events.get(event).push(cb);
        }
        

        return {
            unsubscribe: () => {
                const index = this.events.get(event).indexOf(cb);

                if (index !== -1) {
                    this.events.get(event).splice(index, 1);
                }
            }
        };
    }

    emit(event, args = []) {
        let emittedArr = [];

        if (this.events.has(event)) {
            if (args.length > 0) {
                for (let i = 0; i < this.events.get(event).length; i++) {
                    emittedArr.push(this.events.get(event)[i](...args));
                }
                return emittedArr;
            } else {
                for (let i = 0; i < this.events.get(event).length; i++) {
                    emittedArr.push(this.events.get(event)[i]());
                }
                return emittedArr;
            }
        }
        
        return [];
    }
}

// class EventEmitter {
//     constructor() {
//       this.events = new Map();
//     }
  
//     subscribe(event, cb) {
//       if (!this.events.has(event)) {
//         this.events.set(event, []);
//       }
  
//       const listeners = this.events.get(event);
//       listeners.push(cb);
  
//       return {
//         unsubscribe: () => {
//           const index = listeners.indexOf(cb);
//           if (index !== -1) {
//             listeners.splice(index, 1);
//           }
//         }
//       };
//     }
  
//     emit(event, args = []) {
//       if (!this.events.has(event)) {
//         return [];
//       }
  
//       const listeners = this.events.get(event);
//       const results = [];
  
//       for (const listener of listeners) {
//         results.push(listener(...args));
//       }
  
//       return results;
//     }
//   }

// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", x => x + 1);
// const sub2 = emitter.subscribe("firstEvent", x => x + 2);
// sub1.unsubscribe(); // undefined
// console.log(emitter.emit("firstEvent", [5])); // [7]


// 3
// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));

// console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// sub.unsubscribe(); // undefined
// console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], there are no subscripti

// // 2
// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function cb1(...args) { return args.join(',')});
// console.log(emitter.emit('firstEvent', [1, 2, 3]));
// console.log(emitter.emit('firstEvent', [3, 4, 6]));

// //1
// console.log(emitter.emit('firstEvent'));
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// console.log(emitter.emit('firstEvent'));


/////////////////// stack 

var removeStars = function (s) {
    let result = '';
    let backspaces = 0;

    for (let i = s.length; i--;) {
        if (s[i] === '*') {
            backspaces += 1;
        } else if (backspaces > 0) {
            backspaces -= 1;
        } else {
            result = s[i] + result;
        }

        console.log(i);
    }
    return result;
};

s = 'leet**code***e';
console.log(removeStars(s));


////////////////////// stack 

var buildArray = function(target, n) {
    let operationsArray = [];

    for (let i = 1, j = 0; i <= n; i++) {
        if (i == target[j]) {
            operationsArray.push("Push");
            j++;

            if (j == target.length) {
                return operationsArray;
            }
        } else {
            operationsArray.push("Push");
            operationsArray.push("Pop");
        }
    }

    return operationsArray;
};

// target = [1,3], n = 3;
// target = [1,2,3], n = 3
target = [1,2], n = 4
console.log(buildArray(target, n));


/////////////// stack 

var validateStackSequences = function(pushed, popped) {
    let stack = [];

    for (let i = 0, j = 0; j <= pushed.length;) {

        if (popped[j] != stack[stack.length - 1]) {
            stack.push(pushed[i]);
            i++;
        } else {
            stack.pop();
            j++;
        }

        if (i == pushed.length && popped[j] != stack[stack.length - 1]) {
            return false;
        }
    }

    return true;
};

// pushed = [1,2,3,4,5], popped = [4,5,3,2,1];
// pushed = [1,2,3,4,5], popped = [4,3,5,1,2];
console.log(validateStackSequences(pushed, popped));

/////////////// stack medium

var minRemoveToMakeValid = function(s) {
    let stack = [];
    let stackOfNumbers = [];
    let correctWord = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] != '(' && s[i] != ')') {
            continue;
        }

        if (s[i] == '(') {
            stack.push('(');
            stackOfNumbers.push(i);
        } else if (s[i] == ')' && stack.length > 0) {
            stack.pop();
            stackOfNumbers.pop();
        } else {
            stackOfNumbers.push(i);
        }
    }

    for (let i = 0, j = 0; i < s.length; i++) {
        if (i == stackOfNumbers[j]) {
            j++;
            continue;
        }
        correctWord += s[i];
    }

    return correctWord;
};

// s = "lee(t((((c)o)de)";
// s = "a)b(c)d";
s = "))((";
console.log(minRemoveToMakeValid(s));


/////////////// stack medium

var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 0;
    this.stack.push(price);

    for (let i = this.stack.length - 1; i >= 0; i--) {
        if (this.stack[i] <= price) {
            count++;
        } else {
            break;
        }
    }
    
    return count;
};

stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100));  // return 1
console.log(stockSpanner.next(80));  // return 1
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(70));  // return 2
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(75));  // return 4
console.log(stockSpanner.next(85));  // return 6


/////////////// stack medium

var scoreOfParentheses = function(S) {
    let len = S.length, pwr = 0, ans = 0
    for (let i = 1; i < len; i++)
        if (S.charAt(i) === "(") pwr++
        else if (S.charAt(i-1) === "(") ans += 1 << pwr--
        else pwr--  
    return ans
};

s = "((())())"; // 6
// s = "(()(()))"; // 6
// s = "(()())"; // 4
// s = "(())"; // 2
// s = "()()"; // 2

console.log(scoreOfParentheses(s));



/////////////// stack medium
var reverseParentheses = function(s) {
    s = `(${s})`;
    let stack = [[]];
    let score = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            score++;
            stack[score] = [];
            continue;
        } else if (s[i] == ")"){
            stack[score] = stack[score].reverse();   
            score--;
            stack[score] = [...stack[score], ...stack[score + 1]];
            continue;
        }
        stack[score].push(s[i]);
    }

    return stack[0].reverse().join('');
};

// s = "a(bcdefghijkl(mno)p)q";
// s = "(abcd)";
// s = "(u(love)i)";
s = "(ed(et(oc))el)";

console.log(reverseParentheses(s));

var reverseParentheses = function(s) {
    var stack = [];
	var str = '';
	for (var i = 0; i < s.length; i++) {
		if (s[i] == '(') {
			stack.push(str);
			str = '';
		} else if (s[i] == ')') {
			str = stack.pop() + str.split('').reverse().join('');
		} else {
			str += s[i];
		}
	}
	return str;
};


/////////////// stack medium
var exclusiveTime = function(n, logs) {
    let sum = Array(n).fill(0);
    let stack = [];
    let prevTime = [];

    logs.forEach(item => {
        item = item.split(':');

        if (item[1] == 'start') {
            if (stack.length > 0) {
                prevTime.push(item[2] - 1);
            }
            stack.push(item[0]);
        } else if (item[1] == 'end') {
            stack.pop();
        }
    })

    return stack;
};

n = 2, logs = ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"];
// console.log(logs[0].split(':'));

console.log(exclusiveTime(n, logs));

arr = Array(2).fill(0);
console.log(arr);