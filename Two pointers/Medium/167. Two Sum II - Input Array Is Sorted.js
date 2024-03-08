
var twoSum = function(numbers, target) {
    let left = 0;
    let end = numbers.length - 1;

    while (left < end) {
        const sum = numbers[left] + numbers[end];

        if (sum === target) return [left + 1, end + 1];

        if (sum > target) {
            end--;
            continue
        }

        left++
    }
};