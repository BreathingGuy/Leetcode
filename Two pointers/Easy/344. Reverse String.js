var reverseString = function(s) {
    let thirdChar;

    for (let left = 0, right = s.length - 1; left <= right; left++, right--) {
        thirdChar = s[left];
        s[left] = s[right];
        s[right] = thirdChar;
    }

};