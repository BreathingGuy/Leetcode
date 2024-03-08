"use strict";

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    console.log(false);
  } else {
    console.log(true);
  }
}

lovefunc(1, 4);
lovefunc(2, 2);
lovefunc(0, 1);
lovefunc(0, 0);
lovefunc(21, 728);

console.log(Math.sign(-12525220.3325));

let arrr = [1, 2, 3, 4, 5, 6, 7];


function getMathResult(arr) {
  for (let i = 0; i < arr.length; i++) {
    delete arr[(2 + 2 * i) - 1];
  }
  return arr.filter(element => element !== undefined);
}
console.log(getMathResult(arrr));

////////////////////////////////////////////////
function findAverage(array) {
  let sumNum = 0;
  for (let i = 0; i < array.length; i++) {
    sumNum += array[i];
  }
  sumNum = sumNum / (array.length);
  console.log(sumNum);
  if (array.length === 0) {
    return 0;
  }
  return sumNum;
}
findAverage([1, 5, 7]);
//Better
function findAverage2(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((prevNum, curNum) => prevNum + curNum) / arr.length;
  }
}
// let example = arrr.length === 0 ? 0 : arrr.reduce((prevNum, curNum) => prevNum + curNum) / arrr.length;
console.log(findAverage2([1, 1, 1]));

///////////////////////////////////////////
//Best
let switchFunct = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n];
console.log(switchFunct(0));
/////////////////////////////////////////////
function feast(beast, dish) {
  if (beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1)) {
    return true;
  } else {
    return false;
  }
}
/////////////////////////////////////////////

let countSheep = function (num) {
  let sheeps = '';
  for (let i = 1; i <= num; i++) {
    sheeps += `${i} sheep...`;
  }
  console.log(sheeps);
};
countSheep(5);

let a = [],
  b = [];
console.log(0 || "" || 2 || undefined || true || false);

////////////
let ex2 = 'gtu';
let expl = 'qwerty';
console.log(expl.slice(-(expl.length - ex2.length)));

function solution(str, ending) {
  let newStr = str.slice(-ending.length);
  if (newStr == ending || ending == '') {
    return true;
  } else {
    return false;
  }
}

function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution('abcde', 'cde'));

////////////////
console.log(typeof ('x') === 'string');

let variable;
var x = [1, 2, 3, 'a'];
x.every(
  function checkArr(currentValue) {
    console.log(typeof (currentValue));
    if (typeof (currentValue) === 'string') {
      return (variable = currentValue);
    }
  }
);
console.log(variable);

//////////////////////

function explode(x) {
  let iterations = 0;
  let exmpl = [];
  if (Number.isFinite(x[0]) === true && Number.isFinite(x[1]) === true) {
    iterations = x[0] + x[1];
    for (let i = 0; i < iterations; i++) {
      exmpl[i] = x;
    }
    return exmpl;
  } else if (x[0] == 0 || x[1] == 0) {
    return [];
  } else if (Number.isFinite(x[0]) === false && Number.isFinite(x[1]) === false) {
    return 'Void!';
  } else {
    x.find(
      function checkNum(currentValue) {
        if (Number.isFinite(currentValue) === true) {
          iterations = currentValue;
        }
      }
    );
    return exmpl;
  }
}
console.log(explode(['ауцауцуц', -1]));

//best
function explode(x) {
  let [a, b] = x;

  if (typeof a == "number" && typeof b == "number") return new Array(a + b).fill(x);
  else if (typeof a == "number") return new Array(a).fill(x);
  else if (typeof b == "number") return new Array(b).fill(x);

  return 'Void!';
}
console.log(explode([5, -1]));

let arr = new Array(7).fill(5);
console.log(arr);

//////
let str = 'ergregr';
console.log(str[0]);



function searchForRepeat(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return console.log('Повторение');
      }
    }
  }
  return str;
}
searchForRepeat('qwerty');
//
function isIsogram(str) {
  return new Set(str.toUpperCase().size == str.length);
}
/////////////

function summation(num) {
  let numb = 0;
  for (let i = 0; i <= num; i++) {
    numb += i;
  }
  return numb;
}
console.log(summation(8));

//////////////////////

function nbYear(p0, percent, aug, p) {
  let quantityOfYears = 0;
  while (true) {
    p0 += Number.parseInt(p0 * (percent / 100) + aug);
    quantityOfYears += 1;
    if (p0 >= p) break;
  }
  return quantityOfYears;
}
console.log(nbYear(1000, 2, 50, 1214));

//////////////

function fib(num) {
  if (typeof (num) == 'string' || num === 0 || Number.isInteger(num) === false) {
    return "";
  } else if (num === 1) {
    return "0";
  }
  let arr = [0, 1];
  let newAr = [];
  let str = '0 1';
  for (let i = 0; i < num - 2; i++) {
    arr[2] = arr[0] + arr[1];
    arr.shift();
    newAr[0] = arr[1];
    str += ` ${newAr.toString()}`;
  }
  return str;
}
console.log(fib(10));

//////////////////
function range2(start, end, step = start < end ? 1 : -1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}
console.log(range2(5, 2, -1));


//////////////
console.log(2 / 2);

function addBinary(a, b) {
  let bin = '';
  let sum = a + b;
  while (sum > 0) {
    if (sum % 2 == 0) {
      sum /= 2;
      bin += '0';
    } else if (sum % 2 == 1) {
      sum = (sum - 1) / 2;
      bin += '1';
    } else if (sum == 1) {
      bin += '1';
      break;
    }
  }
  return [...bin].reverse().join('');
}
console.log(addBinary(5, 9));
// best
function secBin(a, b) {
  return (a + b).toString(2);
}
console.log(secBin(5, 9));
////
function seriesSum(n) {
  let chisl = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / chisl;
    chisl += 3;
  }
  return sum.toFixed(2);
}
console.log(seriesSum(5));
//
function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average <= 100 && average >= 90) {
    return 'A';
  } else if (average <= 90 && average >= 80) {
    return 'B';
  } else if (average <= 80 && average >= 70) {
    return 'C';
  } else if (average <= 70 && average >= 60) {
    return 'D';
  } else if (average <= 60 && average >= 0) {
    return 'F';
  }
}
console.log(getGrade(5, 5, 5));

////////////////////////////////////////////
let Str = 'gGeorgia';

function findStr(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
      str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
      str[i] = i;
    }
  }
  str = str.join('');
  return str;
}
console.log(findStr(Str));


/////////////////////////////////////////
function getDivisorsCnt(n) {
  if (n == 1) return 1;
  for (var j = 0, i = 1; i <= n; i++) {

    if (n % i == 0) j++;
  }
  return j;
}
console.log(getDivisorsCnt(10));

///////////////////////////////////////////


function descendingOrder(n) {
  if (n < 10) {
    return n;
  }
  let m;
  let arr = Array.from(String(n));

  function secondCock(arr) {

    if (arr.length < 2) {
      return arr;
    }

    const pivot = arr[0];
    const lessArr = [];
    const greaterArr = [];

    for (let i = 1; i < arr.length; i++) {
      if (pivot <= arr[i]) {
        lessArr.push(arr[i]);
      } else {
        greaterArr.push(arr[i]);
      }
    }
    m = [...secondCock(lessArr), pivot, ...secondCock(greaterArr)].join('');
    return m;
  }
  secondCock(arr);
  return (m / 1);
}
console.log(descendingOrder(10));
/// BEST
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}
///////////////////////////////////////



///
str = 'gweg65jmwe43';

function getCount(str) {
  let count = 0;
  for (let key of str) {
    if (key == "a" || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
      count++;
    }
  }
  return count;
}
console.log(getCount(str));

///
function DNAtoRNA(dna) {
  let RNA = dna.split('');
  for (let i = 0; i < RNA.length; i++) {
    if (RNA[i] == 'T') {
      RNA[i] = "U";
    }
  }
  return RNA.join('');
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

////

function count(string) {
  if (string.length == 0) {
    return {};
  }
  let obj = {};
  let i = 0;
  for (let key of string) {
    for (let alph of string) {
      if (alph == key) {
        i++;
      }
    }
    obj[`${key}`] = i;
    i = 0;
  }
  console.log(obj);
  return obj;
}

console.log(count('erge'));
/// BEST PRACTICE
function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}


/////////////
//MY
function dirReduc(arr) {
  for (let i = 0; i < arr.length;) {
    if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH" ||
      arr[i] == "SOUTH" && arr[i + 1] == "NORTH" ||
      arr[i] == "WEST" && arr[i + 1] == "EAST" ||
      arr[i] == "EAST" && arr[i + 1] == "WEST") {
      arr.splice(i + 1, 1) && arr.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }
  return arr;
}
//BEST
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir])
      dirs.pop();
    else
      dirs.push(dir);
    return dirs;
  }, []);
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

//////////////
//MY
function high(x) {

  let count = 0;
  let theBiggestCount = 0;
  let biggestWord = '';
  x = x.split(' ');

  let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  for (let i = 0; i < x.length; i++) {

    for (let key of x[i]) {
      count += alphabet.indexOf(key) + 1;

      if (count > theBiggestCount) {
        theBiggestCount = count;
        biggestWord = x[i];
      }
    }

    count = 0;
  }

  return biggestWord;
}
console.log(high("the quick brown ouh8ygyg8on fox"));
//TOUGHEST
function high(s) {
  let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
// console.log(high("the quick brown fox"));


/////////////// 6

function expandedForm(num) {
  let count = '';
  let zeros = '1';

  for (let i = 1; i < num.toString().length; i++) {
    zeros += '0';
  }

  count = `${parseInt(num / zeros) * zeros} `;

  if (num % (parseInt(num / zeros) * zeros) == 0) {
    return count;
  }

  if (num < 10) {
    return count;
  }

  return count += `+ ${expandedForm(num - (parseInt(num / zeros) * zeros))} `;
}
console.log(expandedForm(54214));


const expandedForm = n => n.toString()
  .split("")
  .reverse()
  .map((a, i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ");


console.log(expandedForm(5485929));

/////////////// 5

let av = {
    flour: 12000,
    sugar: 12000,
    milk: 200,
  }, // 
  rc = {
    flour: 500,
    sugar: 200,
    eggs: 1
  };


function cakes(recipe, available) {
  let sameWord = 0;
  let count = 0;
  let str = '';

  for (let key in recipe) {

    for (let value in available) {

      if (key == value) {
        sameWord += 1;

        while (available[key] >= recipe[value]) {
          count++;
          available[key] -= recipe[value];
        }

        str += ` ${count}`;
        count = 0;
        break;
      }

    }

    if (sameWord > 0) {
      sameWord = 0;
    } else {
      str += ` ${count}`;
    }
  }

  return Math.min.apply(null, str.trim().split(" "));
}

console.log(cakes(rc, av));

//////////////////////////// 6 kuy
for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  mas.push(String.fromCharCode(i));
}


let decodeMorse = function (morseCode) {

  morseCode = morseCode.replace(/\s{2,}/g, "  ").trim().split(' ');
  let decodedWord = '';

  let alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'SOS', '.', "'", '(',
    ':', '+', '"', '¿', ',', '!',
    ')', ';', '-', '$', '¡', '?', '/',
    '&', '=', '_', '@'
  ];

  let morse = [
    '.-', '-...', '-.-.', '-..', '.', '..-.',
    '--.', '....', '..', '.---', '-.-', '.-..',
    '--', '-.', '---', '.--.', '--.-', '.-.',
    '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', '...---...', '.-.-.-', '.----.', '-.--.',
    '---...', '.-.-.', '.-..-.', '..-.-', '--..--', '-.-.--',
    '-.--.-', '-.-.-.	', '-....-	', '...-..-	', '--...-',
    '..--..', '-..-.', '.-...', '-...-', '..--.-', '.--.-.'
  ];

  for (let key of morseCode) {
    if (morse.includes(key)) {
      decodedWord += alphabet[morse.indexOf(key)];
    } else {
      decodedWord += ' ';
    }
  }

  return decodedWord;
};

console.log(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '));


//////////////////////////// 

function fizzbuzz(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 5 === 0 && (i + 1) % 3 === 0) {
      arr.push('FizzBuzz');
    } else if ((i + 1) % 5 === 0) {
      arr.push('Buzz');
    } else if ((i + 1) % 3 === 0) {
      arr.push('Fizz');
    } else {
      arr.push(i + 1);
    }

  }

  return arr;
}

console.log(fizzbuzz(15));

//////////////////////////// 5

function pickPeaks(arr) {
  let pos = [],
    peaks = [],
    posPeak = {
      pos: pos,
      peaks: peaks
    };

  for (let i = 1; i < arr.length; i++) {
    let count = 1;


    if (arr[i] == arr[i - 1]) {
      continue;
    }


    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      pos.push(i);
      peaks.push(arr[i]);
    }



    if (arr[i] == arr[i + count]) {
      while (arr[i] == arr[i + count]) {
        count++;
      }


      if (arr[i] > arr[i - 1] && arr[i] > arr[i + count]) {
        pos.push(i);
        peaks.push(arr[i]);
      }
    }
  }

  return posPeak;
}

console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]));

console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]));


//////////////////////////// 4
let jjjj = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget.';

function cock(text, width) {
  let arrayOfText = text.split(' ');
  let word = '';
  let gty = '';

  for (let i = 0; i < arrayOfText.length; i++) {
    while (gty.length <= 15) {

    }
  }

  return word;
}


console.log(cock(jjjj, 15));

///////////////// leetcode

let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {

  let r = strs[0][0];

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].startsWith(r)) {}
    }
  }

  return r;

};

console.log(longestCommonPrefix(strs));

///////////////// 5

let input = ['mov a 5', 'inc a', 'dec a', 'dec a', 'jnz a -1', 'inc a'];
input = ['mov a -10', 'mov b a', 'inc a', 'dec b', 'jnz a -2'];

input = ['mov j 25', 'mov h 0', 'jnz h 4', 'jnz j 2', 'inc h', 'inc h', 'inc j', 'inc h', 'dec j', 'dec h', 'inc j', 'inc j', 'inc j'];

input = ['mov v 36', 'mov d 0', 'jnz v 3', 'inc d', 'dec v', 'inc v', 'dec d', 'inc v', 'dec v', ' inc v', 'dec v', 'dec v', 'dec v'];

input = ['mov p 24', 'mov v 0', 'jnz v 5', 'jnz p 3', 'dec v', 'dec p', 'dec p', 'dec v', 'dec v', 'inc v', 'dec v'];

input = ['mov k 34', 'mov y 0', 'jnz y 3', 'jnz k 3', 'dec k', 'dec k', 'dec y', 'dec k', 'inc k', 'inc k', 'dec y'];

input = ['mov v 30', 'mov c 1', 'jnz c 3', 'jnz v 3', 'dec v', 'inc c', 'dec c', 'dec c', 'inc c', 'dec c', 'inc c'];
console.log(simple_assembler(input));


function simple_assembler(program) {
  let obj = {};

  for (let i = 0; i < program.length; i++) {

    console.log('Индекс', i);
    console.log('Объект:', obj, '\n');

    let arr = program[i].split(" ");

    if (program[i].split(" ").length == 3) {

      if (arr[0] == 'mov') {
        mov(arr[1], arr[2]);
      } else if (arr[0] == 'jnz') {
        if (obj[arr[1]] == 0) {
          continue;
        } else {
          i += Number(arr[2] - 1);
        }
      }

    } else {

      if (arr[0] == 'inc') {
        inc(arr[1]);
      } else {
        dec(arr[1]);
      }

    }


  }

  function mov(x, y) {
    if (isNaN(y) == false) {
      obj[x] = Number(y);
      return obj;
    } else {
      obj[x] = obj[y];
      return obj;
    }
  }

  function inc(x) {
    return obj[x]++;
  }

  function dec(x) {
    return obj[x]--;
  }

  return obj;
}



function persistence(num) {
  let arr = [...num.toString()];
  let count = 0;

  if (arr.length == 2 && arr[0] == 1) {
    return 1;
  } else if (arr.length < 1) {
    return 0;
  }

  while (arr.length > 1) {
    num = 1;
    arr.forEach(function sum(cur) {
      num *= Number(cur);
    });
    arr = [...num.toString()];
    count++;
  }

  return count;
}
// persistence(12)
console.log(persistence(999));


//////////////////////////// 5 kyu 

var beeramid = function (bonus, price) {
  let plusRowCans = 1;
  let cans = 1;
  let rows = 0;
  let allCans = 1;
  let maximumCans = Math.floor(bonus / price);
  for (let i = 0; allCans <= maximumCans; i++) {
    plusRowCans = plusRowCans + 2;
    cans = cans + plusRowCans;
    allCans += cans;
    rows++;
  }
  return rows;
}
console.log(beeramid(1111, 3));

//////////////////////////// 5 kyu 


function persistence(num) {
  let arr = [...num.toString()];
  let count = 0;

  if (arr.length == 2 && arr[0] == 1) {
    return 1;
  } else if (arr.length < 1) {
    return 0;
  }

  while (arr.length > 1) {
    num = 1;
    arr.forEach(function sum(cur) {
      num *= Number(cur);
    });
    arr = [...num.toString()];
    count++;
  }

  return count;
}
// persistence(12)
console.log(persistence(999));


//////////////////////////// 5 kyu 

var beeramid = function (bonus, price) {
  let plusRowCans = 1;
  let cans = 1;
  let rows = 0;
  let allCans = 1;
  let maximumCans = Math.floor(bonus / price);
  for (let i = 0; allCans <= maximumCans; i++) {
    plusRowCans = plusRowCans + 2;
    cans = cans + plusRowCans;
    allCans += cans;
    rows++;
  }
  return rows;
}
console.log(beeramid(1111, 3));



///////////////// 5 

function zeros(n) {

  let num = BigInt(1);
  let j = 0;

  for (let i = 1; i <= n; i++) {
    num *= BigInt(i);
  }

  num = [...String(num)];

  for (let i = num.length - 1; i >= 0; i--, j++) {
    if (num[i] != '0') {
      break;
    }
  }

  return j;
}
console.log(zeros(1245));

/////////////////////////////////// ЛУЧШЕЕЕ
function zeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    // console.log(n);
    count += n;
  }
  return count;
}
console.log(zeros(1245));



function zeros(n) {
  let num = 1n;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    num *= BigInt(i);
    while (num % 10n === 0n) {
      count++;
      num /= 10n;
    }
    num %= 100000n; // Хранить только последние 5 цифр числа
  }
  return count;
}
console.log(zeros(56235));


///////////////// 6

let tel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  let tel = `(${numbers.splice(0, 3).join("")}) ` + numbers.splice(0, 3).join("") + "-" + numbers.splice(0, 4).join("");
  return tel;
}

console.log(createPhoneNumber(tel));


///////////////// 6

function findOutlier(integers) {
  let odd = integers.filter(a => a % 2 !== 0);
  let even = integers.filter(a => a % 2 === 0);;

  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));


///////////////// 6

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    a = a.filter(a => a !== b[i]);
  }
  return a;
}

a = [1, 2, 2, 2, 3],
  b = [2];

console.log(arrayDiff(a, b));


///////////////// 6   

function solution(number) {
  let sum = 0;
  for (let i = 5; i < number; i += 5) {
    console.log(i);
    sum += i;

  }
  console.log('GG', sum);
  for (let i = 3; i < number; i += 3) {
    if (i % 5 == 0) {
      continue;
    }
    sum += i;
  }
  return sum
}

console.log(solution(20));


///////////////// 5

function moveZeros(arr) {
  let count = 0;

  arr = arr.filter((a) => {
    if (a === 0) {
      count++;
    }
    return a !== 0;
  });

  while (count > 0) {
    arr.push(0);
    count--;
  }

  return arr;
}

arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

console.log(moveZeros(arr));


///////////////// 6

function findUniq(arr) {
  if (arr[0] === arr[1] || arr[0] === arr[2]) {
    return arr.filter((a) => a != arr[0])[0];
  } else {
    return arr[0];
  }
}


// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   console.log(arr);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

arr = [  3,3,3,3,3,3,3,2,3,3,3,3,3,3,3];
console.log(findUniq(arr));


///////////////// 6
