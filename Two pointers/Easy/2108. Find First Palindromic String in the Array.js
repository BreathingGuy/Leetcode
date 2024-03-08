var firstPalindrome = function(words) {
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