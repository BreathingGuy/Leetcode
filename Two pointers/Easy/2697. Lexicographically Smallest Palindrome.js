/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
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