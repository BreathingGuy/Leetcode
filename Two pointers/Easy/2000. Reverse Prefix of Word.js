/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
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