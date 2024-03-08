// #1
var countBinarySubstrings = function (s) {
    let [l, r] = [0, 0];
    let res = 0;
    let toggle = 0;


    for (let i = 0; i < s.length;) {
        if (toggle == 0 || toggle % 2 == 1) {
            l = 0;
            console.log(toggle + '  left');
            while (s[i] == '0') {
                i++;
                l++;
            }
        }


        if (toggle == 0 || toggle % 2 == 0) {
            r = 0;
            console.log(toggle + '  right');
            while (s[i] == '1') {
                i++;
                r++;
            }
        }
        res += Math.min(l, r);
        toggle++;
    }

    return res;
};

// #2 
function countBinarySubstrings(s) {
    let [res, prev, cur] = [0, 0, 1]
  
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1] !== s[i]) {
        res += Math.min(prev, cur)
        prev = cur
        cur = 1
      } else {
        cur += 1
      }
    }
  
    return res + Math.min(prev, cur)
  };

const s = "00000000010011";
// const s = "10101";

console.log(countBinarySubstrings(s));