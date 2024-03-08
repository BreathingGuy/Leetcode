var nextGreatestLetter = function(letters, target) {
    let [l, r] = [0, letters.length - 1];
    let isBigger = 0;

    while (l <= r) {
        const mid = (l + r) >> 1;

        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            isBigger = letters[mid];
            r = mid - 1;
        }
    }

    return isBigger ? isBigger : letters[0];
};

// var letters = ["c","f","j"], target = "a";
// var letters = ["c","f","j"], target = "c";
var letters = ["x","x","y","y"], target = "z";

console.log(nextGreatestLetter(letters, target));